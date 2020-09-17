import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu:MenuController, private navCtrl:NavController) {

    
    
const data=["liam","hej"]




    

    console.log (data)
    console.log(data[1])
     
  }



  openPolis(){
    this.navCtrl.navigateForward('polis')



}
}