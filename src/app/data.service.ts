import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { jsondata, messages_en, messages_fr, variables} from '../assets/JSON_DATA';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { map, timeout, catchError, retry, delay } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as $ from 'jquery';

import { GoogleAnalyticsService } from './google-analytics.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  verbose = false;

  email = "";

  timestart:any;
  timeend:any;

  finishedArea = false;

  alldata = jsondata;
  allmessages = messages_en;
  allvariables  = variables;

  lang='en';

  myeggs = [];

  constructor(private router: Router, public toastController: ToastController,public http: HttpClient, private googleAnalyticsService: GoogleAnalyticsService) { 
    
  }

  calcRemaining(areanum){
    
    var areacodes = [];

    this.alldata[areanum].pictures.forEach(picture => {
      picture.rectangles.forEach(rectangle => {
        if(rectangle.code!==undefined) {
          areacodes.push(rectangle.code);
        }
      })
    });

    /*var areacodes = this.alldata[areanum].pictures.map(data => {
      if (data.egg) {
        return data.rectangles.code;
      }
    });*/

    if(this.verbose) console.log("eggs in area: "+areanum);
    if(this.verbose) console.log(areacodes);

    //match counter
    var counter = 0;

    //console.log("my eggs: ");
    //console.log(this.myeggs);

    var remaining = areacodes.filter(item => this.myeggs.indexOf(item) < 0);
    //console.log("remaining: ");
    //console.log(remaining);
    
    return [remaining.length,areacodes.length];
  }
  checkDone(areanum){
    var rem=0;
    var tot=0;
    [rem,tot]=this.calcRemaining(areanum);

    if (rem==0) {
      this.finishedArea=true;
      this.presentToast(this.allmessages.areas_checkdone);

      this.googleAnalyticsService.trackEventHandler('finished', this.alldata[areanum].area, 'VR_zone');

      setTimeout(()=>{
        this.router.navigate(['/areas']);
      },2000);
      
    }
  }

  checkFinish(){
    var finished = true;
    var rem=0;
    var tot=0;

    for(var i=0; i<this.alldata.length; i++){

      [rem,tot]=this.calcRemaining(i);
      if(rem>0) {
        finished=false;
      }

    }

    if (finished) {
      this.router.navigate(['/finish']);
    }
  }


  addEgg(num, area){

    if(this.myeggs.indexOf(num) >= 0){
      //this.presentToast(this.allmessages.imageviewer_addegg_nok);
    }
    else {

      this.presentToast(this.allmessages.imageviewer_addegg_ok);
      this.myeggs.push(num);
      if(this.verbose) console.log(this.myeggs);
      this.checkDone(area);
    }
    
  }

  iHaveIt(eggcode){
    return this.myeggs.indexOf(eggcode)>=0
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
      position: 'middle',
    });
    toast.present();
  }

  async presentToastBottom(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 10000,
      position: 'bottom',
    });
    toast.present();
  }


  requestPostHHTTP(url, data){

    console.log("HTTP REQUEST");

    var head = new HttpHeaders();
    head.append('Content-Type', 'text/plain');
    head.append('Accept', '*/*');
    head.append('Connection','keep-alive');
    head.append('Access-Control-Allow-Headers', 'X-Requested-With')  


    return new Promise((resolve,reject) => {
      this.http
        .post(url,data, { headers: head, responseType: 'text' }
        )
        .subscribe(data => {
          console.log("DATA FROM REQUEST");
          console.log(data);
          resolve(data);

        }, error => {
          console.log(error);

            this.presentToastBottom("Désolé la base de données est HS...");
            reject(error);
          
        })
        
    });

    
  }


  requestPostJQ(myurl, mydata){

    console.log("JQ AJAX REQUEST ");


    return new Promise((resolve,reject) => {
      
      $.ajax({
        url: myurl, 
        type:"POST",
        cache:false,
        timeout: 10000,
        dataType: "text",
        data: JSON.stringify(mydata),
        success: function(result){
          resolve(result);
        },
        error: function(err){
          console.log(err);
          reject(err);
        }
    });

    });

    
  }


  switchLang(lang){
    switch(lang) {
      case 'fr':
        this.allmessages = messages_fr;
        this.lang='fr';
        break;
      default:
        this.allmessages = messages_en;
        this.lang='en';
        break;
      
    }
  }


}
