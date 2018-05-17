import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpService } from '../../app/shared/shared';
import { VideoGamePage } from '../video-game/video-game';
import * as _ from 'lodash';

/**
 * Generated class for the ESportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-e-sports',
  templateUrl: 'e-sports.html',
})
export class ESportsPage {

  public videogames:any;
  public gameImage:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams,private loadingController:LoadingController,
  private httpService:HttpService) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ESportsPage');
    let loader=this.loadingController.create({
      content:"Loading",
      spinner:"dots"
    });
    loader.present().then(()=>{
      this.httpService.getVideoGames().then(data=>{
        this.videogames=data;
        loader.dismiss();
        console.log("**videogame data",data);
        });
      });
     

    

  }

  goToVideoGame($event,videogame){
    this.navCtrl.push(VideoGamePage,videogame);
    
  }

}
