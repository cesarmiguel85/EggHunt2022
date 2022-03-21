import {
  Component,
  OnInit
} from '@angular/core';
import {
  DataService
} from './../data.service';
import {
  Router
} from '@angular/router';
import {
  HttpClient
} from '@angular/common/http';
import {
  timeout
} from 'rxjs/operators';


@Component({
  selector: 'app-finish',
  templateUrl: './finish.page.html',
  styleUrls: ['./finish.page.scss'],
})
export class FinishPage implements OnInit {

  mytime_min = 0;
  mytime_sec = 0;

  spinner=true;

  share=true;
  linkedinlink="";

  mycomment ="";


  constructor(
    public mydata: DataService, 
    private router: Router, 
    private http: HttpClient,
  ) {

    this.mydata.timeend = new Date();

    this.mytime_min = Math.trunc((this.mydata.timeend - this.mydata.timestart) / 1000 / 60);
    this.mytime_sec = Math.trunc((this.mydata.timeend - this.mydata.timestart) / 1000 - this.mytime_min * 60);

    if (this.mydata.allvariables.with_db) this.sendInfoToDB();

    if(isNaN(this.mytime_min) || isNaN(this.mytime_sec)) {
      //Not sharing
    }
    else {
      this.share=true;
      this.linkedinlink="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//cesarmiguel85.github.io/EggHunt2020/&title=Virtual%20Easter%20Egg%20Hunt%202020&summary=Take%20a%20short%20trip%20around%20the%20world%20with%20this%20virtual%20Easter%20egg%20hunt!%0AI%20just%20did%20it%20and%20got%20a%20score%20of%20"+this.mytime_min+"min.%20"+this.mytime_sec+"sec.";
    }

  }

  ngOnInit() {}

  exitPage() {
    window.location.replace(this.mydata.allvariables.root);

    this.router.navigate(['/home']);
  }

  sendInfoToDB() {

    this.mydata.mytime = Math.round((this.mydata.timeend - this.mydata.timestart) / 1000);

    if(
      this.mydata.nickname.length>0 &&
      this.mydata.email.length>0 &&
      this.mydata.mytime>0 &&
      !this.mydata.sent
    )
    {
      // Http Headers

      let postData = {
        "nickname": this.mydata.nickname,
        "email": this.mydata.email,
        "time": this.mydata.mytime,
      }

      console.log("Launching http request score");

      this.mydata.requestPostJQForm(this.mydata.allvariables.db_endpoint_log, postData)
        .then(data => {
          console.log(data);
          console.log("DATA PARSED");
          
          //var JSONdata = JSON.parse(data.toString());
          var JSONdata:any = data;

          console.log(JSONdata);

          if (JSONdata.ok == 1) {
            this.mydata.presentToastBottom(JSONdata.message);
          } else {
            this.mydata.presentToastBottom(JSONdata.error);
          }
          
         this.mydata.sent = true;
          this.spinner=false;
        })
        .catch(error => {
          console.log(error);
          this.mydata.presentToastBottom("On n'arrive pas à enregistrer votre score... désolé...");
          this.spinner=false;
        })
    }
    else {
      if(
        this.mydata.nickname.length<=0 &&
        this.mydata.email.length<=0 &&
        (this.mydata.mytime===0 || isNaN(this.mydata.mytime))
      ) this.mydata.presentToastBottom("Des données sont manquantes... vous n'avez pas suivi le parcours du jeu :-(");

      if(this.mydata.sent) this.mydata.presentToastBottom("Données déjà envoyées...");
    }


  }

  formatDate(mydate: Date) {

    if (mydate == undefined) {
      mydate = new Date();
    }

    let yyyy = mydate.getFullYear().toString();
    let mm = (mydate.getMonth() + 1).toString();
    let dd = mydate.getDate().toString();
    let H = mydate.getHours().toString();
    let M = mydate.getMinutes().toString();
    let S = mydate.getSeconds().toString();


    return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]) + ' ' + (H[1] ? H : "0" + H[0]) + ':' + (M[1] ? M : "0" + M[0]) + ':' + (S[1] ? S : "0" + S[0]);
  }

  GoToRanking() {
    this.router.navigate(['/ranking']);
  }

  ionViewDidEnter() {

    console.log({ 
      "nickname": this.mydata.nickname,
      "email": this.mydata.email,
      "comment": this.mycomment,
      "time": this.mydata.mytime,
      "sent": this.mydata.sent
    }
      );
  }

  shareLinkedIn(){

  }

  sendFeedback() {

    let postData = {
      "nickname": this.mydata.nickname,
      "email": this.mydata.email,
      "comment": this.mycomment
    }

    console.log("Launching hhtp request comment");


    this.mydata.requestPostJQForm(this.mydata.allvariables.db_endpoint_comment, postData)
      .then(data => {
        console.log(data);
        console.log("DATA PARSED");
        
        //var JSONdata = JSON.parse(data.toString());
        var JSONdata:any = data;
        console.log(JSONdata);

        if (JSONdata.ok == 1) {
          this.mydata.presentToastBottom(JSONdata.message);
        } else {
          this.mydata.presentToastBottom(JSONdata.error);
        }
        
        this.spinner=false;
      })
      .catch(error => {
        console.log(error);
        this.mydata.presentToastBottom("On n'arrive pas à enregistrer votre commentaire... désolé :-(");
        this.spinner=false;
      })


  }




}