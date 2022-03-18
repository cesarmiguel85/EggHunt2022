import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { 
  timeout,
  retryWhen,
  take,
  concat,
  share,
  delayWhen
} from 'rxjs/operators';

import * as papa from 'papaparse';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  spinner=true;
  countHTTP=0;

  sourceURL = "";
  dataRAW=[];
  headers=[];

  constructor(
    public mydata: DataService,
    private router: Router, 
    private http: HttpClient,
  ) { 


  }

  ngOnInit() {

    
  }

  //Comparer Function    
  GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
  }    

  getRankingTable() {
 
    return new Promise(resolve => {

      this.sourceURL = this.mydata.allvariables.db_read_source_gsheet;

      papa.parse(this.sourceURL,{
        download: true,
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          
          if(results.data.length>0) {

            this.dataRAW = results.data;
            this.dataRAW.sort(this.GetSortOrder("time"));
            console.log(this.dataRAW);

            if (this.mydata.allvariables.db_visible_headers.length>0) {
              this.headers = this.mydata.allvariables.db_visible_headers;
            }
            else {
              this.headers =Object.keys(this.dataRAW[0]);
            }

          }
          else {
            this.dataRAW = [];
          }

          resolve(this.dataRAW);
          
        }
      });

    })
  }



  ionViewDidEnter(){

    this.getRankingTable().then(data => {

      this.spinner = false;

      /*
      if(this.dataRAW.length<=0) {

      }
      else {
        
        
        for(var i=0;i<this.dataRAW.length;i++){
          this.top15.push(data[i]);
        }
        console.log("top15");
        console.log(this.top15);
        
      }
      */
    });

  }



}
