import { Component } from '@angular/core';
import { Hero } from '../../../Hero';
import { HeroService } from '../../../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
/** Heroes component*/
export class HeroesComponent {
  /** Heroes ctor */
  heroList: Hero[] = [];
  hero: Hero = {} as Hero;
    constructor(private heroservice: HeroService) {

  }

  ngOnInit():void{
    this.heroservice.DisplayHeroes().subscribe((response: any) => {
      this.heroList = response;
      console.log(response);
    })
  }

  GetHeroById(id: number): any {
    this.heroservice.GetHeroById(id).subscribe((response: any) => {

      this.hero = response;
      console.log(response);
    })

  }
}
