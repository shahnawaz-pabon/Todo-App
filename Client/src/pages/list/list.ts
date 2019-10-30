import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  // selectedItem: any;
  // icons: string[];
  // items: Array<{title: string, note: string, icon: string}>;

  todoItems: any = [];

  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.rootNavCtrl = this.navParams.get('rootNavCtrl');
    //
    // // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];
    //
    // this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  // itemTapped(event, item) {
  //   // That's right, we're pushing to ourselves!
  //   this.navCtrl.push(ListPage, {
  //     item: item
  //   });
  // }

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

  taskDetails(task){

    console.log(task);

    this.rootNavCtrl.push('TaskDetailsPage',{task: task});
  }
}
