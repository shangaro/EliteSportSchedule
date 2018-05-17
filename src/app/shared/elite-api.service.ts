import {Injectable} from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http'
import { Observable} from 'rxjs/Observable';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import 'rxjs';
import { APIkey } from './shared';


@Injectable()
export class HttpService{
    private readonly baseUrl='https://elite-schedule-app-a2423.firebaseio.com';
    private readonly soccerBaseUrl='https://soccerdata-7d566.firebaseio.com';
    private readonly eSportsBaseUrl='https://api.pandascore.co';
    tournament:any={};

    private tournamentData:any={};
    constructor(public http:HttpClient){

    }

    getTournaments(){
        return new Promise(resolve=>{
            this.http.get( this.baseUrl +'/tournaments.json').subscribe(res=>resolve(res));
            console.log("http for tournaments works :",this.http.get(this.baseUrl + '/tournaments.json'));

        });
    }

    getTournamentsData(tournamentId:string,forceRefresh:boolean=false):Observable<any>
    {
        if(!forceRefresh && this.tournamentData[tournamentId]){
          this.tournament=this.tournamentData[tournamentId];
          console.log("No need to make HTTP call, just return the data");
          return Observable.of(this.tournament);
        }
        // don't have data yet
        console.log("**about to make HTTP call, just return the data");
        let x= this.http.get(this.baseUrl +'/tournaments-data/'+tournamentId +'.json').map((response) =>{
           this.tournamentData[tournamentId]=response;
           this.tournament=this.tournamentData[tournamentId];
           return this.tournament;
        });
        console.log((typeof(x)));
        return x;



    }
    getCurrentTournament(){
        return this.tournament;
    }

    refreshCurrentTournament(){
      return this.getTournamentsData(this.tournament.tournament.id,true);
    }

    getLiveScoreUpdates(){
     console.log("**about to make HTTP call, just return the data");
     return new Promise(resolve=>{
      this.http.get( this.soccerBaseUrl +'/data/match/data/match.json').subscribe(res=>resolve(res));
      });
    }
  // esports
    getVideoGames(){
        console.log("getting video games by http call");
        return new Promise(resolve =>{
            this.http.get(this.eSportsBaseUrl +'/videogames'+'?token='+APIkey.eSportsApiKey).subscribe(res=>resolve(res));
        });
    }
    // esports
    getTournamentsFromSerie(serieId:number):Promise<any>{
        return new Promise(resolve =>{
            this.http.get(this.eSportsBaseUrl+'/series/'+'/'+serieId+'/'+'tournaments'+'?token='+APIkey.eSportsApiKey).subscribe(res=>resolve(res));

        });
    }
    // esports
    getMatchesFromTourney(tourneyId:number):Promise<any>{
        return new Promise(resolve =>{
            this.http.get(this.eSportsBaseUrl + '/tournaments'+'/'+tourneyId +'/'+'/matches' +'?token='+APIkey.eSportsApiKey)
                .subscribe(res =>resolve(res));
                
        });
    }

    //esports
    getTeamsFromTourney(tourneyId:number):Promise<any>{
        return new Promise(resolve =>{
            this.http.get(this.eSportsBaseUrl + '/tournaments'+'/'+tourneyId +'/'+'/teams' +'?token='+APIkey.eSportsApiKey)
                .subscribe(res =>resolve(res));
                
        });
    }
}
