import {Injectable} from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http'
import { Observable} from 'rxjs/Observable';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import 'rxjs';


@Injectable()
export class HttpService{
    private readonly baseUrl='https://elite-schedule-app-a2423.firebaseio.com';
    tournament:any={};

    constructor(public http:HttpClient){

    }

    getTournaments(){
        return new Promise(resolve=>{
            this.http.get( this.baseUrl +'/tournaments.json').subscribe(res=>resolve(res));
            console.log("http for tournaments works :",this.http.get(this.baseUrl + '/tournaments.json'));

        });
    }

    getTournamentsData(tournamentId):Observable<any>{

        return this.http.get(this.baseUrl +'/tournaments-data/'+tournamentId +'.json').map((response) =>{
          this.tournament=response;

        });


    }
}
