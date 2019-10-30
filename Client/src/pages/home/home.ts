import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, NavParams, IonicPage } from 'ionic-angular';

// import { TaskPage } from '../task/task';

import { SuperTabs } from 'ionic2-super-tabs';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  selectedTabIndex = 0;

  pages = [
    { pageName: 'ListPage', title: 'Task List', icon: 'flame', id: 'listTab'},
    { pageName: 'StatsPage', title: 'Statistics', icon: 'help-circle', id: 'statsTab'}
  ];

  constructor(public navCtrl: NavController, public modal: ModalController, public navParams: NavParams) {

  }

  onTabSelect(ev) {
    this.selectedTabIndex = ev.index;
  }

  deleteTask(task){
    console.log(task);
  }

}
