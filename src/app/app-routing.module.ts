import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'polis',
    loadChildren: () => import('./Pages/polis/polis.module').then( m => m.PolisPageModule)
  },
  {
    path: 'pages-sida3',
    loadChildren: () => import('./pages-sida3/pages-sida3.module').then( m => m.PagesSida3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
