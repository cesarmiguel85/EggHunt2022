import { Component } from '@angular/core';
import { DataService } from './../data.service';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient, HttpParams} from '@angular/common/http';
import { timeout } from 'rxjs/operators';

import { GoogleAnalyticsService } from './../google-analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  accept=false;
  email = "";
  spinner=false;
  lang='en';


  constructor(private router: Router, public mydata: DataService, private http: HttpClient,private googleAnalyticsService: GoogleAnalyticsService) {

    
  }
  GoToAreaPage() {

    this.spinner=true;

    let postData = {
      "dbname": this.mydata.allvariables.dbname,
      "email": this.email
    }

    console.log("Launching http request"); 

    /*
    this.http
      .post(this.mydata.allvariables.db_emailCheck,postData, { responseType: 'text' })
      .pipe(timeout(15000))
      .subscribe(data => {
        console.log("DATA FROM PHP");
        console.log(data);
        var JSONdata = JSON.parse(data.toString());


        if (parseInt(JSONdata.ok)==1) {
          this.spinner=false;
          
          this.mydata.email=this.email;
          
          this.mydata.timestart = new Date();
          
          this.router.navigate(['/areas']);
        }
        else {
          this.mydata.presentToastBottom(JSONdata.error);
          this.spinner=false;

        }


      }, error => {
        console.log(error);
        this.mydata.presentToastBottom("Une erreur est survenu essayant de contacter la base de données... Votre score risque de ne pas être enregistré!");
        
        this.spinner=false;
          
        this.mydata.email=this.email;
        
        this.mydata.timestart = new Date();
        this.router.navigate(['/areas']);

      })
    */

   if (this.mydata.allvariables.with_db) {
    this.mydata.requestPostJQ(this.mydata.allvariables.db_emailCheck,postData)
    .then(data => {
      var JSONdata = JSON.parse(data.toString());


      if (parseInt(JSONdata.ok)==1) {
        this.spinner=false;
        
        this.mydata.email=this.email;
        
        this.mydata.timestart = new Date();
        
        this.router.navigate(['/areas']);
      }
      else {
        this.mydata.presentToastBottom(JSONdata.error);
        this.spinner=false;

      }

    })
    .catch(error => {
        console.log(error);
          this.mydata.presentToastBottom("Une erreur est survenu essayant de contacter la base de données... Votre score risque de ne pas être enregistré!");
          
          this.spinner=false;
            
          this.mydata.email=this.email;
          
          this.mydata.timestart = new Date();
          this.router.navigate(['/areas']);
      })

    }
    else {
      this.spinner=false;
            
      this.mydata.email=this.email;
      
      this.mydata.timestart = new Date();
      this.router.navigate(['/areas']);
    }
  }

  GoToRanking() {
    this.router.navigate(['/ranking']);
  }

  switchLang(lang){
    this.mydata.switchLang(lang);
  }

  ionViewDidEnter() {
    this.googleAnalyticsService.trackPagesHandler('home');

  }
  
 

}
