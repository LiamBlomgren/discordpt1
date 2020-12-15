import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  liamm:any;
  data:any;

  constructor(private menu:MenuController, private navCtrl:NavController) {


       this.liamm='Hej;'   
    
  this.data=["Liamm", "Anastasija"]

     
  }


  liam(data){

    if(data==='ett'){

    }else{

      console.log('två')
    }
  

  }



  openPolis(){
    this.navCtrl.navigateForward('polis')



}
}