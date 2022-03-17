import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageviewerpanPageRoutingModule } from './imageviewerpan-routing.module';

import { ImageviewerpanPage } from './imageviewerpan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageviewerpanPageRoutingModule
  ],
  declarations: [ImageviewerpanPage]
})
export class ImageviewerpanPageModule {}
