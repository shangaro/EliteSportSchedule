import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import{AgmCoreModule } from '@agm/core'
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
import { MapPage } from '../pages/map/map';
import { LiveScorePage } from '../pages/live-score/live-score';
import { ESportsPage } from '../pages/e-sports/e-sports';
import { VideoGamePage } from '../pages/video-game/video-game';
import { SeriesPage } from '../pages/series/series';
import { TourneyPage } from '../pages/tourney/tourney';
import { PlayersPage } from '../pages/players/players';
import { MatchesPage } from '../pages/matches/matches';
import { ScoreBoardPage } from '../pages/score-board/score-board';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TournamentsPage,
    TeamsPage,
    TeamHomePage,
    TeamDetailsPage,
    StandingsPage,
    GamePage,
    MapPage,
    LiveScorePage,
    ESportsPage,
    VideoGamePage,
    SeriesPage,
    TourneyPage,
    MatchesPage,
    PlayersPage,
    ScoreBoardPage
    





  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({apiKey:'AIzaSyBvxVP2-G5Z-yP-D-KAPIOqr8nrPDderzw'})
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
    GamePage,
    MapPage,
    LiveScorePage,
    ESportsPage,
    VideoGamePage,
    SeriesPage,
    TourneyPage,
    MatchesPage,
    PlayersPage,
    ScoreBoardPage
    
    


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
export class AppModule {
}
