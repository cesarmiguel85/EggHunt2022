import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { jsondata, messages_en, messages_fr, variables} from '../assets/JSON_DATA';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { map, timeout, catchError, retry, delay } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as $ from 'jquery';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  verbose = false;

  nickname = "";
  email = "";
  sent = false;
  mytime=0;

  timestart:any;
  timeend:any;

  finishedArea = false;

  alldata = jsondata;
  allmessages = messages_en;
  allvariables  = variables;

  lang='en';

  myeggs = [];

  constructor(
    private router: Router, 
    public toastController: ToastController,
    public http: HttpClient
  ) { 
    
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

      this.presentToast(this.allmessages.imageviewer_addegg_ok, 1000);
      this.myeggs.push(num);
      if(this.verbose) console.log(this.myeggs);
      this.checkDone(area);
    }
    
  }

  iHaveIt(eggcode){
    return this.myeggs.indexOf(eggcode)>=0
  }

  async presentToast(message, timer?: number) {

    var mytime = 3000;

    if (typeof timer !== 'undefined') {
      mytime = timer;
    }

    const toast = await this.toastController.create({
      message: message,
      duration: mytime,
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


  requestPostJQnodered(myurl, mydata){

    console.log("JQ AJAX REQUEST ");


    return new Promise((resolve,reject) => {
      
      $.ajax({
        url: myurl, 
        type:"POST",
        cache:false,
        contentType: 'text/plain',
        processData: false,
        headers: {"token": this.allvariables.db_token},
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

  requestPostJQForm(myurl, mydata){

    console.log("JQ AJAX REQUEST ");


    return new Promise((resolve,reject) => {
      
      var data = new FormData();

      Object.keys(mydata).forEach(function(key) {
        if(mydata[key]) {
          data.append( key, mydata[key] );
          console.log('Key : ' + key + ', Value : ' + data[key])
        }
      });

      $.ajax({
        url: myurl, 
        type:"POST",
        cache:false,
        processData: false,
        contentType: false,
        timeout: 10000,
        data: data,
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
      case 'en':
        this.allmessages = messages_en;
        this.lang='en';
        break;
      case 'it':
        this.allmessages = messages_en;
        this.lang='en';
        break;
      default:
        this.allmessages = messages_fr;
        this.lang='fr';
        break;
      
    }
  }



}
