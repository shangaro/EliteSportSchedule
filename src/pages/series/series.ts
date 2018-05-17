import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TourneyPage } from '../tourney/tourney';

/**
 * Generated class for the SeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {

  private league:any;
  public series:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.league=this.navParams.data;
    this.series=this.league.series;
    console.log("** series",this.series);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeriesPage');
  }
  goToTournaments($event,serie){
    this.navCtrl.push(TourneyPage,serie);
  }

}
