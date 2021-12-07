import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../../../Hero';
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
  constructor(private hero_Service: HeroService, private player_Service: PlayerService) {

  }

  createHero(form: NgForm): void {
    let newHero: Hero = {
      id: form.form.value.id,
      name: form.form.value.Name,
      userId: form.form.value.userid,
      heroClass: form.form.value.class,
      heroClassNavigation: form.form.value.HeroClassNavigation

    }
    console.log(newHero.name);

    this.player_Service.CreatePlayerHero(newHero.name, newHero.heroClass).subscribe((response: any) => {
      console.log(response);
    });

  }

}
