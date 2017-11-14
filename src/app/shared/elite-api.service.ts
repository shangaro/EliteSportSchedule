import {Injectable} from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http'

@Injectable()
export class HttpService{
    private readonly baseUrl='https://elite-schedule-app-a2423.firebaseio.com';

    constructor(public http:HttpClient){

    }

    getTournaments(){
        return new Promise(resolve=>{
            this.http.get( this.baseUrl +'/tournaments.json').subscribe(res=>resolve(res));
            console.log("http for tournaments works :",this.http.get(this.baseUrl + '/tournaments.json'));

        });
    }
}