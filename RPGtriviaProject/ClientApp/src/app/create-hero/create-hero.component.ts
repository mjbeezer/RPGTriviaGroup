import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Hero, HeroInfo } from '../../../Hero';
import { HeroService } from '../../../hero.service';
import { PlayerService } from '../../../player.service';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
/** createHero component*/
export class CreateHeroComponent {

  /** createHero ctor */
  constructor(private hero_Service: HeroService, private player_Service: PlayerService, private route: Router) {

  }

  createHero(form: NgForm): void {

    let name:string = form.form.value.name;
    let heroClass:number = form.form.value.class;

    console.log(name);

    this.player_Service.CreatePlayerHero(name, heroClass).subscribe((response: any) => {
      console.log(response);
      this.route.navigate(["profile"]);
    });
    
  }

}
