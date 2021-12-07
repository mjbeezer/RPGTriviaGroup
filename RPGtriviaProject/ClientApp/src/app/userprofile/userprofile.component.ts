import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Hero } from '../../../Hero';
import { HeroService } from '../../../hero.service';
import { Player } from '../../../Player';
import { PlayerService } from '../../../player.service';

@Component({
    selector: 'app-userprofile',
    templateUrl: './userprofile.component.html',
    styleUrls: ['./userprofile.component.css']
})
/** userprofile component*/
export class UserprofileComponent {

  
  deleteHero: Hero = {} as Hero;
  currentHero: Hero = {} as Hero;
  playerHeroes: Hero[] = [];
  currentPlayer: Player = {} as Player;

    /** userprofile ctor */
  constructor(private hero_Service:HeroService, private player_Service:PlayerService) {

  }

  ngOnInit(): void {

  }

  getPlayerHeroes(): any {
    this.player_Service.GetPlayerHeroes().subscribe((response: any) => {
      this.playerHeroes = response;
      console.log(response);
    })
  }

  getPlayerHeroById(hero_id: number): any {
    this.player_Service.GetCurrentHero(hero_id).subscribe((response: any) => {
      this.currentHero = response;
      console.log(response);
    })
  }

  deletePlayerHero(hero_Id:number): any {
    this.player_Service.DeletePlayerHero(hero_Id).subscribe((response: any) => {
      this.deleteHero = response;
      console.log(response);
    })
  }

  updatePlayerTitle(title_Id: number): any {
    this.player_Service.UpdatePlayerTitle(title_Id).subscribe((response: any) => {
      this.currentPlayer = response.title;
      console.log(this.currentPlayer);
    })
  }

}
