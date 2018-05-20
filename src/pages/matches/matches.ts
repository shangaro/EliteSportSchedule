import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpService } from '../../app/shared/shared';
import _ from 'lodash';

/**
 * Generated class for the MatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matches',
  templateUrl: 'matches.html',
})
export class MatchesPage {
  public tournament:any;
  public matches:any[];
  public games:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private loadingController:LoadingController,
  private httpService:HttpService) {
    this.tournament=this.navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchesPage');
    let loader=this.loadingController.create({
      content:'Getting Matches ...',
      spinner:'dots'
    });
    loader.present().then(()=>{
      this.httpService.getMatchesFromTourney(this.tournament.id).then(data=>{
        this.matches=data;
        console.log('***matches',data);
        this.games=_.chain(this.matches).map(m=>{
          let opponentName=m.opponents[1].opponent.name===undefined ? 'GG':m.opponents[1].opponent.name;
          return{
            teamName:m.opponents[0].opponent.name,
            teamImageUrl:m.opponents[0].opponent.image_url,
            teamScore:m.results[0].score,
            opponentName:opponentName,
            opponentImageUrl:m.opponents[1].opponent.image_url,
            opponentScore:m.results[1].score,
            time:Date.parse(m.begin_at)

          }
        }).value();
        console.log('*** games data :',this.games);      
        loader.dismiss();
      }).catch(error => error)
      
    });
  }



  

}
