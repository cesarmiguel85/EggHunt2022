import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-areas',
  templateUrl: './areas.page.html',
  styleUrls: ['./areas.page.scss'],
})
export class AreasPage implements OnInit {

  constructor(
    private router: Router, 
    public mydata: DataService,
  ) {

  }
  GoToArea(num) {
    let navigationExtras: NavigationExtras = {
      state: {
        area: num
      }
    };


    switch(this.mydata.alldata[num].type) { 
      case 'image360': { 
        this.router.navigate(['/imageviewer360'], navigationExtras); 
        break; 
      } 
      case 'horizontal': { 
        this.router.navigate(['/imageviewerpan'], navigationExtras);
        break; 
      } 
      default: { 
        this.router.navigate(['/imageviewer'], navigationExtras);
        break; 
      } 
    };

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log("IONVIEWWILLENTER");
    this.mydata.checkFinish();

  }

  quitGame(){
    this.router.navigate(['/home']);
    this.mydata.email="";
  }

  ionViewDidEnter() {

  }
  
}
