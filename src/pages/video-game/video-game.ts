import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';
import { SeriesPage } from '../series/series';

/**
 * Generated class for the VideoGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-game',
  templateUrl: 'video-game.html',
})
export class VideoGamePage {

  public videoGame:any;
  public leagues:any[];
  public imgUrl:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.videoGame=this.navParams.data;
    this.leagues=this.videoGame.leagues;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoGamePage');
   
  }
  goToSeries($event,league){
    this.navCtrl.push(SeriesPage,league);
  }


}
