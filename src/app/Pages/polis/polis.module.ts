import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolisPageRoutingModule } from './polis-routing.module';

import { PolisPage } from './polis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolisPageRoutingModule
  ],
  declarations: [PolisPage]
})
export class PolisPageModule {}
