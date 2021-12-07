import { Component } from '@angular/core';
import { HeroService } from '../../../hero.service';
import { Player } from '../../../Player';
import { PlayerService } from '../../../player.service';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
/** players component*/
export class PlayersComponent {

  playerList: Player[] = [];


    /** players ctor */
    constructor(private hero_Service:HeroService, private player_Service:PlayerService) {

  }

  ngOnInit(): void {
    this.player_Service.DisplayAllPlayers().subscribe((response: any) => {
      this.playerList = response;
      console.log(response);
    })
  }
}
