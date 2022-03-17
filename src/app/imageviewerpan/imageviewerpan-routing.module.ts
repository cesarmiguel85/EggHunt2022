import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageviewerpanPage } from './imageviewerpan.page';

const routes: Routes = [
  {
    path: '',
    component: ImageviewerpanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageviewerpanPageRoutingModule {}
