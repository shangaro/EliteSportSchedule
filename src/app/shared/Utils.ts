import {ToastController} from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class Utils{

 constructor(private toastCtrl:ToastController){

 }

 MakeToast(message:string,position:string,duration:number){
   let toast=this.toastCtrl.create({
    message: message,
    duration:duration,
    position:position
   });
   toast.present();
 }

}
