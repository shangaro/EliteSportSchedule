import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  tournament:any;
  teams=[
    {id:1, name:"Manchester United"},
    {id:2, name:"LiverPool"},
    {id:3, name:"Chelsea"},
    {id:4, name:"Everton"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tournament=this.navParams.data;
    console.log('**nav params for teams Page',this.navParams.data);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  goToTeamHome($event,team){
    this.navCtrl.push(TeamHomePage,team);
  }

}
