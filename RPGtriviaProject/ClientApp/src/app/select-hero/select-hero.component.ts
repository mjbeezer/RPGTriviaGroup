import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Hero } from '../../../Hero';
import { PlayerService } from '../../../player.service';

@Component({
  selector: 'app-select-hero',
  templateUrl: './select-hero.component.html',
  styleUrls: ['./select-hero.component.css']
})
/** selectHero component*/
export class SelectHeroComponent {

  playerHeroes: Hero[] = [];
  chosenHero: boolean = false;
  currentHero: Hero = {} as Hero;

  /** selectHero ctor */
  constructor(private player_Service: PlayerService, private route: Router,private actRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loadPlayerHeroes();
  }

  loadPlayerHeroes(): void {
    this.player_Service.GetPlayerHeroes().subscribe((response: any) => {
      console.log(response);
      this.playerHeroes = response;
    })

  }

  loadCurrentHero(form: NgForm): void {
    this.chosenHero = true;
    let id: number = form.form.value.currentHero;
    this.route.navigate(["questions", id]);
  }
}


