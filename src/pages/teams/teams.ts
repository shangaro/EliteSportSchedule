import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';
import { HttpService } from '../../app/shared/shared';

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
  // teams=[
  //   {id:1, name:"Manchester United"},
  //   {id:2, name:"LiverPool"},
  //   {id:3, name:"Chelsea"},
  //   {id:4, name:"Everton"}
  // ];
  teams:any;

  constructor(public navCtrl: NavController, private navParams: NavParams,private httpService:HttpService,private loadingCtrl:LoadingController) {
    this.teams=[];
    this.tournament=this.navParams.data;
    console.log('**nav params for teams Page',this.navParams.data);

  }

  ionViewDidLoad() {
    let selectedTournament=this.navParams.data;
    let loader=this.loadingCtrl.create({
      content:"Getting Teams..",
      spinner:"dots"
    });
    loader.present().then(()=>{
       //subscribing the observable
    this.httpService.getTournamentsData(selectedTournament.id).subscribe(data=>{
      this.teams=data.teams;
      console.log('ionViewDidLoad TeamsPage',data.teams);
      loader.dismiss();
    });
    });
   

  }

  goToTeamHome($event,team){
    this.navCtrl.push(TeamHomePage,team);
  }
  goHome(){
    this.navCtrl.popToRoot();
  }

}
