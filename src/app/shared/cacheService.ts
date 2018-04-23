import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable()
export class cacheService
{
  private storage:Storage



  constructor(storage:Storage){
    this.storage=storage;
  }




  favouriteTeam(team,tournamentId,tournamentName){
    let item={team:team,tournamentId:tournamentId,tournamentName:tournamentName};
    this.storage.set(team.id.toString(),JSON.stringify(item));
    console.log("storage is here",this.storage);
  }

  unfavouriteTeam(team){
    this.storage.remove(team.id.toString());
  }

  isfavouriteTeam(teamId:string): Promise<boolean>{
    return this.storage.get(teamId).then(value=> value ? true : false );
  }

  getAllfavourites(){
    let items=[];
    this.storage.forEach(value =>items.push(value)).then(()=>items);
    return items;
  }

}
