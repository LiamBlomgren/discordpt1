import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagesSida3PageRoutingModule } from './pages-sida3-routing.module';

import { PagesSida3Page } from './pages-sida3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesSida3PageRoutingModule
  ],
  declarations: [PagesSida3Page]
})
export class PagesSida3PageModule {}
