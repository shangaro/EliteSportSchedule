import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../app/shared/shared';


/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  public team:any;
  public opponent:any;
  public game:any;

  constructor(public navCtrl:NavController,public httpService:HttpService, public navParams: NavParams) {
    this.game=this.navParams.data;

    console.log("**game object", this.game);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }
  teamTapped(teamId):any{

  }
  IsWinner(teamScore,opponentScore):string{
    return teamScore > opponentScore ? "primary" : "danger"

  }
  goHome(){
    this.navCtrl.popToRoot();
  }


}
