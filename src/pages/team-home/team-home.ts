import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RootNode } from 'ionic-angular/components/split-pane/split-pane';
import { HomePage } from '../home/home';
import { PlayersPage } from '../players/players';

/**
 * Generated class for the TeamHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
  team:any;
  esportsTeamDetailsTab:any;
  playersTab:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.playersTab=PlayersPage;
    this.team=this.navParams.data;
    console.log('**nav Params for TeamHomePage', this.navParams);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }
  goHome(){
    this.navCtrl.popToRoot();
  }
 ionViewDidUnLoad(){
   console.log('## lifecycle ## ionViewDidUnload');
 }
}


