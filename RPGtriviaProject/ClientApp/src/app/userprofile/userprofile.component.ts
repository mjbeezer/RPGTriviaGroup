
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor(private hero_Service: HeroService, private player_Service: PlayerService) {

  }

  ngOnInit(): void {
    this.getPlayer();
    this.getPlayerHeroes();

  }
  getPlayer(): any {
    this.player_Service.GetCurrentPlayer().subscribe((response: any) => {
      this.currentPlayer = response;
      console.log(response);
      console.log(response.avatarImageNavigation.imageName);
    })
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

  deletePlayerHero(hero_Id: number): any {
    this.player_Service.DeletePlayerHero(hero_Id).subscribe((response: any) => {
      this.deleteHero = response;
      console.log(response);
    })
  }

  updatePlayerTitle(form: NgForm): any {

    let titleId: number = form.form.value.titleId;
    console.log(titleId);

    this.player_Service.UpdatePlayerTitle(titleId).subscribe((response: any) => {
      this.currentPlayer.title = response.title;
      console.log(response.title);
    })
  }

}
