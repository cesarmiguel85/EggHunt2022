import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadKeyExpr } from '@angular/compiler';

declare var PhotoSphereViewer;

@Component({
  selector: 'app-imageviewer360',
  templateUrl: './imageviewer360.page.html',
  styleUrls: ['./imageviewer360.page.scss'],
})
export class Imageviewer360Page implements OnInit {

  alertclick=false;

  pictures = [];
  area: number;
  total=0;
  remaining=0;

  markers=[];

  constructor(private route: ActivatedRoute, private router: Router, public mydata: DataService) { 
    console.log(mydata);
    
    //GET AREA FROM PARAMS ROUTER
    
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.area = this.router.getCurrentNavigation().extras.state.area;
        console.log("AREA "+this.area);
        this.pictures = mydata.alldata[this.area].pictures;

        [this.remaining,this.total] = this.mydata.calcRemaining(this.area);

        this.mydata.checkDone(this.area);

        this.mydata.alldata[this.area].pictures[0].rectangles.forEach(rectangle => {
          var marker={
            // circle marker
            id: rectangle.code,
            polygon_px: [[(rectangle.x - rectangle.width), rectangle.y], [rectangle.x,(rectangle.y + rectangle.height)], [(rectangle.x + rectangle.width), rectangle.y], [rectangle.x,(rectangle.y - rectangle.height)]] ,
            width: rectangle.width,
            height: rectangle.height,
            x: rectangle.x,
            y: rectangle.y,
            clickable:1,
            scale:1,
            svgStyle: {
              fill: 'transparent',
              stroke: 'transparent',
              strokeWidth: '0px'
            }
          };

          var markerdone={
            // circle marker
            id: rectangle.code,
            polygon_px: [[(rectangle.x - rectangle.width), rectangle.y], [rectangle.x,(rectangle.y + rectangle.height)], [(rectangle.x + rectangle.width), rectangle.y], [rectangle.x,(rectangle.y - rectangle.height)]] ,
            width: rectangle.width,
            x: rectangle.x,
            y: rectangle.y,
            clickable:0,
            scale:1,
            tooltip: 'Déjà trouvé',
            svgStyle: {
              fill: 'rgba(200, 0, 0, 0.2)',
              stroke: 'rgba(200, 0, 50, 0.8)',
              strokeWidth: '2px'
            }
          };
    
          if (this.mydata.myeggs.indexOf(rectangle.code)>=0) {
            this.markers.push(markerdone);
          }
          else {
            this.markers.push(marker);
          }
          
    
        });
        
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

    var _this = this;

    console.log(_this.pictures[0].url);
    var PSV = PhotoSphereViewer({
      //panorama: 'https://cdn.rawgit.com/mistic100/Photo-Sphere-Viewer/master/example/Bryce-Canyon-National-Park-Mark-Doliner.jpg',
      panorama: _this.pictures[0].url,
      container: 'photosphere',
      caption: "Swipe and pinch to search. Tap to catch.",
      navbar: false,
      fisheye: true,
      markers: _this.markers,
      min_fov:1,
      max_fov:170,
      default_fov:_this.pictures[0].default_fov?_this.pictures[0].default_fov:40,
      anim_speed: '0.5rpm',
      default_lat: _this.pictures[0].default_lat?_this.pictures[0].default_lat:0,
      zoom_speed: 1
    });

    PSV.on('select-marker', function(marker) {
      if (marker.clickable==1) {
        _this.foundEgg(marker.id);
        console.log(marker);

        PSV.addMarker({
          id: 'done_' + marker.id,
          x: marker.x,
          y: marker.y,
          polygon_px: [[(marker.x - marker.width), marker.y], [marker.x,(marker.y + marker.height)], [(marker.x + marker.width), marker.y], [marker.x,(marker.y - marker.height)]] ,
          tooltip: 'Oeuf trouvé',
          scale:1,
          clickable:0,
          svgStyle: {
            fill: 'rgba(200, 0, 0, 0.2)',
            stroke: 'rgba(200, 0, 50, 0.8)',
            strokeWidth: '2px'
          }
        });
      }
    });

    if(_this.alertclick) {

      PSV.on('dblclick', function(e) {
      
        console.log(e);
        _this.mydata.presentToastBottom("Click coordinates >  X: "+e.texture_x+" | Y: "+e.texture_y)
          
      });

    }
    




  }


}
