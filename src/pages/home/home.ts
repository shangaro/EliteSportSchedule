import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  favourites=[
    {
      team:{ id:7970 , name: "MADE Elite", coach:'Giovani'},
      tournamentId:'12345678',
      tournamentName:"Cager Classic"
    },

  ];

  constructor(public navCtrl: NavController) {

  }

  goToTournaments(){
    this.navCtrl.push(TournamentsPage);
  }



}
