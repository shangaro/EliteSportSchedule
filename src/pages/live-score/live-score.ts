import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpService } from '../../app/shared/shared';

/**
 * Generated class for the LiveScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-live-score',
  templateUrl: 'live-score.html',
})
export class LiveScorePage {

  public scores:any;
  constructor(private httpService:HttpService,public loadingController:LoadingController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiveScorePage');
    this.getLiveScore();
  }
  getLiveScore(){
    let loader=this.loadingController.create({
      content:"LOADING..."
    });
    loader.present().then(()=>{
      this.httpService.getLiveScoreUpdates().then((data)=>{
        this.scores=data;
        loader.dismiss();
        console.log('**scores',this.scores);
      });
    });

  }
  IsWinner(Score:string):string{

   let x=Score.replace(' ','').split('-');
   console.log("x array ", x);
    return parseInt(x[0]) >= parseInt(x[1]) ? "primary":"ridinghood";
  }

}
