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
      Id: form.form.value.id,
      Name: form.form.value.Name,
      UserId: form.form.value.userid,
      HeroClass: form.form.value.class,
      HeroClassNavigation: form.form.value.HeroClassNavigation

    }
    console.log(newHero.Name);

    this.player_Service.CreatePlayerHero(newHero.Name, newHero.HeroClass).subscribe((response: any) => {
      console.log(response);
    });

  }

}
