import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';
import { HttpService } from '../../app/shared/shared';


/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {
 
  tournaments:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpService:HttpService,private loadingController:LoadingController) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad TournamentsPage');
    let loader=this.loadingController.create({
      content:"LOADING..."
    });
    loader.present().then(()=>{
      this.httpService.getTournaments().then((data)=>{
        this.tournaments=data;
        loader.dismiss();
      });
    });
    
    

  }
  ionViewWillEnter(){
    console.log('##lifecycle ## ionViewWillEnter TournamentsPage');
  }
  ionViewWillLeave(){
    console.log('## lifecycle ## ionViewWillLeave TournamentsPage');
  }
  ionViewDidEnter(){
    console.log('## lifecycle ## ionViewDidEnter TournamentsPage');
  }
  ionViewDidUnload(){
    console.log('## lifecycle ## ionViewDidUnload TournamentsPage');
  }

  goToTeamsPage($event,tournament){
    this.navCtrl.push(TeamsPage,tournament)
  }

}
