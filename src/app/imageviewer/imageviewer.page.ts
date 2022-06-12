
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
  imagezoom=1;
  imgwidth=0;
  imgheight=0;


  constructor(private route: ActivatedRoute, private router: Router, public mydata: DataService) { 

    console.log(mydata);
    
    //GET AREA FROM PARAMS ROUTER
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.area = this.router.getCurrentNavigation().extras.state.area;
        this.pictures = mydata.alldata[this.area].pictures;
        console.log(this.pictures)

        //[this.remaining,this.total] = this.mydata.calcRemaining(this.area);

        //this.mydata.checkDone(this.area);

        const img = new Image();
        var _this=this;
        img.onload = function() {
          //alert(img.width + 'x' + img.height);
          _this.imgwidth=img.width;
          _this.imgheight=img.height;
        }
        //console.log(this.pictures[0])
        img.src = this.pictures[0].url;


      }
    });

    



    

    
  }

  ngOnInit() {
  }

  ionViewDidEnter(){

    const container = document.getElementById('items-container');
    console.log(container)
                
    let startY;
    let startX;
    let scrollLeft;
    let scrollTop;
    let isDown;

    container.addEventListener('mousedown',e => mouseIsDown(e));  
    container.addEventListener('mouseup',e => mouseUp(e))
    container.addEventListener('mouseleave',e=>mouseLeave(e));
    container.addEventListener('mousemove',e=>mouseMove(e));

    function mouseIsDown(e){
      isDown = true;
      startY = e.pageY - container.offsetTop;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      scrollTop = container.scrollTop; 
    }
    function mouseUp(e){
      isDown = false;
    }
    function mouseLeave(e){
      isDown = false;
    }
    function mouseMove(e){
      if(isDown){
        e.preventDefault();
        //Move vertcally
        const y = e.pageY - container.offsetTop;
        const walkY = y - startY;
        container.scrollTop = scrollTop - walkY;

        //Move Horizontally
        const x = e.pageX - container.offsetLeft;
        const walkX = x - startX;
        container.scrollLeft = scrollLeft - walkX;

      }
    }

  }

  foundEgg(num){
    this.mydata.addEgg(num, this.area);
    [this.remaining,this.total] = this.mydata.calcRemaining(this.area);
  }



  setZoom(myzoom) {
    this.imagezoom = myzoom;
  }

 
   dbclicked(evt){
     console.log(evt);
    var e = evt.target;
    var dim = e.getBoundingClientRect();
    console.log(dim);
    var x = evt.clientX - dim.left;
    var y = evt.clientY - dim.top;
    //alert("x: "+x+" y:"+y);
    alert("x: "+Math.round(x/dim.width*this.imgwidth)+" y:"+Math.round(y/dim.height*this.imgheight));
}  

}
 