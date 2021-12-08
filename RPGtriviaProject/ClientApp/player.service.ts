import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  RegisterNewPlayer(user_Name:string, avatar_Image:string, avataer_Color:string, title:number ): any {
    return this.http.get(this.baseUrl + `api/User/registerUser?UserName=${user_Name}&AvatarImage=${avatar_Image}&AvatarColor=${avataer_Color}&Title=${title}`, {});
  }

  DisplayAllPlayers(): any {
    return this.http.get(this.baseUrl + `api/User/players`);
  }

  GetPlayerById(id: number): any {
    return this.http.get(this.baseUrl + `api/User/players/${id}`);
  }

  GetPlayerHeroes(): any {
    return this.http.get(this.baseUrl + `api/User/allUserHeroes`);
  }

  GetCurrentHero(id:number): any {
    return this.http.get(this.baseUrl + `api/User/heroById/${id}`);
  }

  CreatePlayerHero(_name:string, _heroClass:number ): any {
    return this.http.post(this.baseUrl + `api/User/createUserHero?Name=${_name}&HeroClass=${_heroClass}`, {});
  }

  DeletePlayerHero(id:number): any {
    return this.http.delete(this.baseUrl + `api/User/deleteUserHero/${id}`);
  }

  UpdatePlayerTitle(id: number): any {
    return this.http.patch(this.baseUrl + `api/User/updateUserTitle`, {});
  }

}
