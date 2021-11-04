import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LokmenComponent } from './quran/lokmen/lokmen.component';
import { NourComponent } from './quran/nour/nour.component';
import { QuranComponent } from './quran/quran.component';
import { RahmenComponent } from './quran/rahmen/rahmen.component';
import { SonnaComponent } from './sonna/sonna.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {    
    path: 'quran',
    component: QuranComponent
  },
  {
    path: 'sonna',
    component: SonnaComponent
  },
  {
    path: 'nour',
    component: NourComponent
  },
  {
    path: 'rahmen',
    component: RahmenComponent
  },
  {
    path: 'lokmen',
    component: LokmenComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
