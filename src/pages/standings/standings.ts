import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../app/shared/shared';
import _ from 'lodash';

/**
 * Generated class for the StandingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {

  public allStandings:any[];
  public standings:any[];
  public team:any={};
  public divisionFilter="all";
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpService:HttpService) {
  }

  ionViewDidLoad() {
    this.team=this.navParams.data;
    console.log('**nav Params for StandingPage', this.navParams);
    let tournamentData=this.httpService.getCurrentTournament();
    this.standings=tournamentData.standings;
    this.allStandings=tournamentData.standings;
    // this.allStandings=_.chain(this.standings).groupBy('division').toPairs()
    //   .map(item=>_.zipObject(['divisionName','divisionStandings'],item))
    //   .value();
      console.log('standings', this.standings);
      console.log('division Standings', this.allStandings);
    this.filterDivision();

  }

  getHeader(record,recordIndex,records){
    if(recordIndex%10 === 0 || record.division!==records[recordIndex-1].division){
      return record.division;
    }
    return null;
  }

  filterDivision(){
    console.log("value of divisionfilter",this.divisionFilter.toString());
    if(this.divisionFilter ==="all"){
      this.standings=this.allStandings;
    }
    else{
      this.standings=_.filter(this.allStandings, s=>s.division===this.team.division);

    }
    console.log("**filtered division", this.standings);

  }

}
