import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'imageviewer',
    loadChildren: () => import('./imageviewer/imageviewer.module').then( m => m.ImageviewerPageModule)
  },
  {
    path: 'areas',
    loadChildren: () => import('./areas/areas.module').then( m => m.AreasPageModule)
  },
  {
    path: 'finish',
    loadChildren: () => import('./finish/finish.module').then( m => m.FinishPageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./ranking/ranking.module').then( m => m.RankingPageModule)
  },
  {
    path: 'imageviewerpan',
    loadChildren: () => import('./imageviewerpan/imageviewerpan.module').then( m => m.ImageviewerpanPageModule)
  },
  {
    path: 'imageviewer360',
    loadChildren: () => import('./imageviewer360/imageviewer360.module').then( m => m.Imageviewer360PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
