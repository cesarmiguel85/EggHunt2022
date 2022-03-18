import { Component } from '@angular/core';
import { DataService } from './../data.service';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient, HttpParams} from '@angular/common/http';
import { timeout } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  accept=false;
  email = "";
  nickname="";
  spinner=false;
  lang='fr';


  constructor(
    private router: Router, 
    public mydata: DataService, 
    private http: HttpClient,
    private route: ActivatedRoute,
  ) 
  
  {

      this.route.queryParams.subscribe(params => {
        if (params) {
          this.mydata.switchLang(params.lang);
        }
      });

      

    
  }
  GoToAreaPage() {

    this.spinner=true;

    console.log("Launching http request"); 
          
    this.mydata.email=this.email;
    this.mydata.nickname=this.nickname;
    this.mydata.timestart = new Date();

    this.spinner=false;
    this.router.navigate(['/areas']);
    
  }

  GoToRanking() {
    this.router.navigate(['/ranking']);
  }

  switchLang(lang){
    this.mydata.switchLang(lang);
  }

  ionViewDidEnter() {

  }
  
  ngOnInit() {
   
  }

  blockStart() {

    const regExp = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;

    if (this.nickname.length>1 && regExp.test(this.email)) {
      if(this.email.indexOf(this.mydata.allvariables.valid_domain)>=0){
        return false
      }
    }
    return true;
  }

}
