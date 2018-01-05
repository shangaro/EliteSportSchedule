import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import { Component } from '@angular/core/src/metadata/directives';

@Component({
  providers:[Storage]
})

@Injectable()
export class cacheService
{
  private storage:Storage



  constructor(storage:Storage){
    this.storage=storage;
  }




  favouriteTeam(team,tournamentId,tournamentName){
    let item={team:team,tournamentId:tournamentId,tournamentName:tournamentName};
    this.storage.set(team.id,JSON.stringify(item));
  }

  unfavouriteTeam(team){
    this.storage.remove(team.id);
  }

  isfavouriteTeam(teamId){
    return this.storage.get(teamId).then(value=> value ? true : false );
  }

}
