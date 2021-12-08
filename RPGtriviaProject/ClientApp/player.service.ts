import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  RegisterNewPlayer(user_Name:string, avatar_Image:number, avatar_Color:string, title:number ): any {
    return this.http.get(this.baseUrl + `api/User/registerUser?user_Name=${user_Name}&avatar_Image=${avatar_Image}&avatar_Color=${avatar_Color}&Title=${title}`);
  }

  GetAvatarImages(): any {
    return this.http.get(this.baseUrl + `api/User/getImages`);
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
    return this.http.post(this.baseUrl + `api/User/createUserHero?name=${_name}&heroClass=${_heroClass}`, {});
  }

  DeletePlayerHero(id:number): any {
    return this.http.delete(this.baseUrl + `api/User/deleteUserHero/${id}`);
  }

  UpdatePlayerTitle(id: number): any {
    return this.http.patch(this.baseUrl + `api/User/updateUserTitle`, {});
  }

}
