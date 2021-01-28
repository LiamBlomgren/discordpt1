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
    path: 'pages-mars',
    loadChildren: () => import('./pages-mars/pages-mars.module').then( m => m.PagesMarsPageModule)
  },
  {
    path: 'mars',
    loadChildren: () => import('./pages/mars/mars.module').then( m => m.MarsPageModule)
  },
  {
    path: 'uranus',
    loadChildren: () => import('./pages/uranus/uranus.module').then( m => m.UranusPageModule)
  },
  {
    path: 'tellus',
    loadChildren: () => import('./pages/tellus/tellus.module').then( m => m.TellusPageModule)
  },
  {
    path: 'neptunus',
    loadChildren: () => import('./pages/neptunus/neptunus.module').then( m => m.NeptunusPageModule)
  },
  {
    path: 'jupiter',
    loadChildren: () => import('./pages/jupiter/jupiter.module').then( m => m.JupiterPageModule)
  },
  {
    path: 'merkurius',
    loadChildren: () => import('./pages/merkurius/merkurius.module').then( m => m.MerkuriusPageModule)
  },
  {
    path: 'pluto',
    loadChildren: () => import('./pages/pluto/pluto.module').then( m => m.PlutoPageModule)
  },
  {
    path: 'venus',
    loadChildren: () => import('./pages/venus/venus.module').then( m => m.VenusPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
