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

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  spinner=true;
  countHTTP=0;

  constructor(public mydata: DataService,private router: Router, private http: HttpClient) { }

  ngOnInit() {

    
  }

  getRankingTable() {
    
    // Http Headers

    let postData = {
          "dbname": this.mydata.allvariables.dbname
    }

    console.log("Launching http request"); 
    
    /*
    this.http
      .post(this.mydata.allvariables.db_tableRanking,postData, { responseType: 'text' })
      .pipe(
        timeout(15000)
      )
      .subscribe(data => {
        console.log("DATA FROM PHP");
        console.log(data);
        
        this.spinner=false;
        document.getElementById('tablecontainer').innerHTML = data;


       }, error => {
        console.log(error);
      })
*/
      var _document  = document;
      var _this = this;

      this.mydata.requestPostJQ(this.mydata.allvariables.db_tableRanking,postData)
      .then(data => {
        console.log("DATA FROM PHP");
        console.log(data);
        
        this.spinner=false;
        _document.getElementById('tablecontainer').innerHTML = data.toString();
      })
      .catch(error => {
          _this.mydata.presentToastBottom("Ranking dit:la base est HS");
        })
      

      
  }

  ionViewWillEnter(){

    this.getRankingTable();

  }



}
