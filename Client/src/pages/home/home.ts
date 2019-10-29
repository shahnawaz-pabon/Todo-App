import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, NavParams, Slides } from 'ionic-angular';

// import { TaskPage } from '../task/task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slider') slider: Slides;
  @ViewChild("segments") segments;
  page: any;

  todoItems: any = [];

  public category: string = 'tasks';
  public categories: Array<string> = ['tasks', 'stats', 'trash']

  constructor(public navCtrl: NavController, public modal: ModalController, public navParams: NavParams) {

    // this.slides.freeMode = true;

  }

  // Initialize slider
  ionViewDidEnter(){
    this.slideChanged();
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

  // On segment click
  selectedTab(index) {
    this.slider.slideTo(index);
    console.log("selectedTab",index)
  }

  // On slide changed
  slideChanged() {
    let currentIndex = this.slider.getActiveIndex();
    let slides_count = this.segments.nativeElement.childElementCount;

    this.page = currentIndex.toString();
    if(this.page >= slides_count)
      this.page = (slides_count-1).toString();

    console.log("slides_count",slides_count)
    console.log("this.page",this.page)
  }

  taskDetails(task){

    console.log(task);

    this.navCtrl.push('TaskDetailsPage',{task: task});
  }

}
