import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../app/shared/shared';


declare var window:any;
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  public map: any={};

  constructor(private httpService:HttpService, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    let game=this.navParams.data;
    let tournamentData=this.httpService.getCurrentTournament();
    let location=tournamentData.locations[game.locationId];

    this.map={
      lat:location.latitude,
      lng:location.longitude,
      zoom:12,
      markerLabel: game.location

    };
  }

  goToDirection(){
    window.location=`geo:${this.map.lat},${this.map.lng};u-35`;
  }

}
