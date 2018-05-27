import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RootNode } from 'ionic-angular/components/split-pane/split-pane';
import { HomePage } from '../home/home';
import { PlayersPage } from '../players/players';
import { ScoreBoardPage } from '../score-board/score-board';



@IonicPage()
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
  game:any;
  playersTab:any;
  scoreBoardTab:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.playersTab=PlayersPage;
    this.scoreBoardTab=ScoreBoardPage;
    this.game=this.navParams.data;
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


