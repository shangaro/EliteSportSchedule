import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,LoadingController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClient} from '@angular/common/http';
import { HomePage } from '../pages/home/home';
import {HttpService,cacheService} from '../app/shared/shared';
import { Utils } from './shared/Utils';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { TeamHomePage } from '../pages/team-home/team-home';
import { LiveScorePage } from '../pages/live-score/live-score';
import { ESportsPage } from '../pages/e-sports/e-sports';

@Component({
  templateUrl: 'app.html',
  // providers:[HttpClient,HttpService,Utils]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  favouriteTeams:any[];

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen
  ,private cache:cacheService,private loadingController:LoadingController,private httpService:HttpService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.refreshFavourites();
    });
  }
  goHome(){
    this.nav.push(HomePage);
  }
  goToTournament(){
    this.nav.push(TournamentsPage);
  }

  refreshFavourites(){
    this.favouriteTeams=this.cache.getAllfavourites();
  }

  goToTeam(favourite){
    let loader=this.loadingController.create({
      content:"Getting data ..",
      dismissOnPageChange:true
    });
    loader.present();
    this.httpService.getTournamentsData(favourite.tournamentId).subscribe(data=>this.nav.push(TeamHomePage,data))
  }

  //soccer live score page
  goToLiveScores(){
    this.nav.push(LiveScorePage);
  }
  goToSoccer(){

  }
  goToNHL(){

  }
  goToNFL(){

  }
  goToNBA(){

  }
  goToESports(){
    this.nav.push(ESportsPage);
  }


}
