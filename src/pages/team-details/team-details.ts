import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController } from 'ionic-angular';
import { HttpService, cacheService } from '../../app/shared/shared';
import * as _ from 'lodash';
import { GamePage } from '../game/game';
import * as moment from 'moment';
import {Utils} from '../../app/shared/Utils';
import {TeamHomePage} from '../team-home/team-home';
import { Storage} from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-team-details',
  templateUrl: 'team-details.html',
})
export class TeamDetailsPage {

  team:any;
  games:any[];
  teamStanding:any;
  dateFilter: string;
  allGames:any[];
  // //how??
  // location:any[];
  private tournamentData:any;
  useDateFilter:boolean;
  isFollowing:boolean;

  constructor(public navCtrl: NavController, private navParams: NavParams,private httpService:HttpService,private alertCtrl:AlertController,
    private toastCtrl:ToastController,private Utils:Utils,private cache:cacheService) {
    this.team=this.navParams.data;
    this.teamStanding={};
    this.useDateFilter=false;
    this.isFollowing=false;
  }

  ionViewDidLoad() {
    this.team=this.navParams.data;
    this.tournamentData=this.httpService.getCurrentTournament();
    var games= this.tournamentData.games;
    //Note: chain is an alternative to linq expressions in nodejs
    this.games = _.chain(this.tournamentData.games)
    .filter(g => this.team.id===g.team1Id || this.team.id === g.team2Id)
    .map(g => {
        let isTeam1 = (g.team1Id === this.team.id);
        let team= isTeam1 ? g.team1 :g.team2;
        let opponentName = isTeam1 ? g.team2 : g.team1;
        let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
        return {
            gameId: g.id,
            teamName:team,
            opponent: opponentName,
            teamScore:isTeam1?g.team1Score:g.team2Score,
            opponentScore:isTeam1?g.team2Score:g.team1Score,
            time: Date.parse(g.time),
            location: g.location,
            locationId: g.locationId,
            scoreDisplay: scoreDisplay,
            homeAway: (isTeam1 ? "vs." : "at")
        };
    })
    .value();
    this.allGames=this.games;
    // second parameter is a filter criteria
    this.teamStanding=_.find(this.tournamentData.standings,{'teamId':this.team.id});
    console.log('ionViewDidLoad TeamDetailsPage');
    this.cache.isfavouriteTeam(this.team.id).then(value=>this.isFollowing=value);

  }

  getScoreDisplay(isTeam1,team1Score,team2Score) {

    // typescript already handles the condition of !=null or bool
    if(team1Score && team2Score){
        var teamScore=(isTeam1 ? team1Score : team2Score);
        var opponentScore=(isTeam1 ? team2Score : team1Score);
        var winIndicator= teamScore > opponentScore ? "W" : "L";
        return winIndicator + teamScore + "-"  + opponentScore;
    }
    else{
      return "";
    }

  }
  goToGamePage($event,game){
    this.navCtrl.parent.parent.push(GamePage,game);
    console.log("game object",game);
  }
  dateChanged()
  {
    if(this.useDateFilter){
      this.games=_.filter(this.allGames,g=>moment(g.time).isSame(this.dateFilter,'day'));

    }else{
      this.games=this.allGames;
    }

  }
  getScoreWorL(game)
  {
    return game.scoreDisplay ? game.scoreDisplay[0]:'';
  }
  getWinColor(game){
    return (game.scoreDisplay.indexOf('W:')==0) ?"badge-primary":"badge-danger";
  }

  //unfollow and follow favourite teams
  toggleFollow()
  {
    if(this.isFollowing){
      let confirm=this.alertCtrl.create({
        title:'Unfollow?',
        message:'Are you sure you want to unfollow?',
        buttons:[{
          text:'Yes',
          handler:() =>{
            this.isFollowing=false;
            //TODO: persist data;
            this.cache.unfavouriteTeam(this.team);
            this.Utils.MakeToast('You have unfollowed the team','middle',2000);

          }
        },
          {
            text:'No'
          }
        ]
      });
      confirm.present();
    }
    else{
      this.isFollowing=true;
      this.cache.favouriteTeam(this.team,this.tournamentData.tournament.id,this.tournamentData.tournament.name);
    }

  }

  refreshAll(refresher){
    this.httpService.refreshCurrentTournament().subscribe(()=>{
      refresher.complete();
      this.ionViewDidLoad();
    });
  }
}
