import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { HttpService } from '../../app/shared/shared';
import { TeamDetailsPage } from '../team-details/team-details';
import { TeamHomePage } from '../team-home/team-home';
import {chain,zipObject} from 'lodash';
import _ from 'lodash';

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
  public tournament:any;
  public teams:any;
  allTeamDivisions:any;
  queryText:string;

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
    // this.httpService.getTournamentsData(selectedTournament.id).subscribe(data=>{
    //   this.teams=data.teams;
    //   console.log('ionViewDidLoad TeamsPage',this.allTeamDivisions);
    //   this.allTeamDivisions=chain(this.teams).groupBy('division')
    //   .toPairs().map(item=>zipObject(['divisionName','divisionTeams'],item))
    //   .value();
    //   loader.dismiss();
    //   this.teams=this.allTeamDivisions;
    //   console.log('division teams', this.teams);
    // });

      this.httpService.getTeamsFromTourney(this.tournament.id).then(data=>{
        this.teams=data;
        loader.dismiss();
        console.log("teams data",data);
      });
     
    });

  }

  goToTeamHome($event,team){
    this.navCtrl.push(TeamHomePage,team);
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

  //search bar function
  updateTeams(){
    let queryTextLower=this.queryText.toLowerCase();
    let filteredTeams=[];
    _.forEach(this.allTeamDivisions,td => {
      let teams=_.filter(td.divisionTeams, t=>(<any>t).name.toLowerCase().includes(queryTextLower));
      if(teams.length){
        filteredTeams.push({divisionName:td.divisionName,divisionTeams:teams});
      }
    });
    this.teams=filteredTeams;
  }

}
