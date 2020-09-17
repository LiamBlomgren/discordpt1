import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolisPage } from './polis.page';

const routes: Routes = [
  {
    path: '',
    component: PolisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolisPageRoutingModule {}
