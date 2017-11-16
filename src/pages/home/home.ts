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
      team:{ id:6182 , name: 'Manchester United', coach:'Giovani'},
      tournamentId:'12345678',
      tournamentName:'Barclays Premier League'
    },
    {
      team:{ id:6184 , name: 'Liver Pool', coach:'Gerrard'},
      tournamentId:'123456789',
      tournamentName:'English Premiere League'
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  goToTournaments(){
    this.navCtrl.push(TournamentsPage);
  }

}
