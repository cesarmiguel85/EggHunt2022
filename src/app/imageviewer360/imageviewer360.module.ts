import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Imageviewer360PageRoutingModule } from './imageviewer360-routing.module';

import { Imageviewer360Page } from './imageviewer360.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Imageviewer360PageRoutingModule
  ],
  declarations: [Imageviewer360Page]
})
export class Imageviewer360PageModule {}
