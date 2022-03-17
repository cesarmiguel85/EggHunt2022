
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-imageviewer',
  templateUrl: './imageviewer.page.html',
  styleUrls: ['./imageviewer.page.scss'],
})
export class ImageviewerPage implements OnInit {

  pictures = [];
  area: number;
  total=0;
  remaining=0;


  constructor(private route: ActivatedRoute, private router: Router, public mydata: DataService) { 

    console.log(mydata);
    
    //GET AREA FROM PARAMS ROUTER
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.area = this.router.getCurrentNavigation().extras.state.area;
        this.pictures = mydata.alldata[this.area].pictures;

        [this.remaining,this.total] = this.mydata.calcRemaining(this.area);

        this.mydata.checkDone(this.area);
      }
    });

    

  }

  ngOnInit() {

  }

  foundEgg(num){
    this.mydata.addEgg(num, this.area);
    [this.remaining,this.total] = this.mydata.calcRemaining(this.area);
  }



  ionViewDidEnter(){
  }

 

}
 