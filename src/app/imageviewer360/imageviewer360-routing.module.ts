import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Imageviewer360Page } from './imageviewer360.page';

const routes: Routes = [
  {
    path: '',
    component: Imageviewer360Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Imageviewer360PageRoutingModule {}
