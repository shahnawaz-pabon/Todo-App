import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

  @ViewChild('todoDes', { read: ElementRef }) todoDes:ElementRef;

  // @ViewChild('todoDes') todoDes: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  closeTask(todoTitle, todoDescription){

    console.log(todoTitle);
    console.log(todoDescription);

    var obj = {
      todoTitle: todoTitle,
      todoDescription: todoDescription
    }

    this.viewCtrl.dismiss(obj);

  }

  resize() {
      this.todoDes.nativeElement.style.height = this.todoDes.nativeElement.scrollHeight + 'px';
  }


}
