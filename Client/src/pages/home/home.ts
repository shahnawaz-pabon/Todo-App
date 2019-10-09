import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { TaskPage } from '../task/task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modal: ModalController) {

  }

  openTaskModal(){

    const myModal = this.modal.create('TaskPage');

    myModal.present();
    
  }

}
