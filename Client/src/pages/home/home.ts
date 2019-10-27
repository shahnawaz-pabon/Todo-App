import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

// import { TaskPage } from '../task/task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todoItems: any = [];

  constructor(public navCtrl: NavController, public modal: ModalController, public navParams: NavParams) {

  }

  openTaskModal(){

    const myModal = this.modal.create('TaskPage', {}, {
      cssClass: 'myModal-class'
    });

    myModal.present();

    myModal.onDidDismiss(data => {
       console.log(data);
       this.todoItems.push(data);
    });

  }

  todoToggle(todoItem){
    console.log(todoItem);
  }

}
