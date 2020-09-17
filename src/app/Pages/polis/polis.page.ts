

import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-polis',
  templateUrl: './polis.page.html',
  styleUrls: ['./polis.page.scss'],
})
export class PolisPage implements OnInit {

  constructor(private menu:MenuController, private navCtrl:NavController) {

   }

  ngOnInit() {
  }


  openPolis(){
    this.navCtrl.navigateForward('polis')


  }

  


}
