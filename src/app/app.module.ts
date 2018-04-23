import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { TeamsPage } from '../pages/teams/teams';
import { TeamHomePage } from '../pages/team-home/team-home';
import { TeamDetailsPage } from '../pages/team-details/team-details';
import { StandingsPage } from '../pages/standings/standings';
import {HttpClientModule} from '@angular/common/http';
import { HttpService, cacheService } from './shared/shared';
import { Utils } from './shared/Utils';
import { Storage } from '@ionic/storage/dist/storage';
import { IonicStorageModule } from '@ionic/storage';
import { GamePage } from '../pages/game/game';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TournamentsPage,
    TeamsPage,
    TeamHomePage,
    TeamDetailsPage,
    StandingsPage,
    GamePage





  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TournamentsPage,
    TeamsPage,
    TeamHomePage,
    TeamDetailsPage,
    StandingsPage,
    GamePage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpService,
    Utils,
    cacheService





  ]
})
export class AppModule {}
