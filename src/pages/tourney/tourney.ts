import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpService } from '../../app/shared/shared';
import { TeamsPage } from '../teams/teams';
import { MatchesPage } from '../matches/matches';

/**
 * Generated class for the TourneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tourney',
  templateUrl: 'tourney.html',
})
export class TourneyPage {
  
  public serie:any;
  public tournaments:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private httpService:HttpService,
  private loadingController:LoadingController) {
    this.serie=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourneyPage');
    let loader=this.loadingController.create({
      content:"Loading...",
      spinner:"dots"
    });
    loader.present().then(()=>{
      this.httpService.getTournamentsFromSerie(this.serie.id).then(data=>{
        this.tournaments=data;
        loader.dismiss();
        console.log("**tournaments data",data);
        });
        
      });
    
  }

  goToMatches($event,tournament){
    this.navCtrl.push(MatchesPage,tournament);
  }

}
