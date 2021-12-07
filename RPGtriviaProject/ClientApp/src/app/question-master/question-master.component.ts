import { Component } from '@angular/core';
import { Hero } from '../../../Hero';
import { PlayerService } from '../../../player.service';
import { TriviaApiService } from '../../../trivia-api.service';
import { Villain } from '../../../Villain';

@Component({
    selector: 'app-question-master',
    templateUrl: './question-master.component.html',
    styleUrls: ['./question-master.component.css']
})
/** QuestionMaster component*/
export class QuestionMasterComponent {

  QuestionCount: number = 1;
  villain: Villain = {} as Villain;
  currentHero: Hero = {} as Hero;
  battleNumber = 1;

    /** QuestionMaster ctor */
  constructor(private trivia_Service: TriviaApiService, private player_Service: PlayerService) {

  }

  ngOnInit(): void {
    this.getEasyVillain();
  }

  addquestion(): void {
    this.QuestionCount++;
  }

  getEasyVillain(): void {
    this.trivia_Service.getEasyVillain().subscribe((response: any) => {
      console.log(response);
      this.villain = response;
    })
  }

  getMediumVillain(): void {
    this.trivia_Service.getMediumVillain().subscribe((response: any) => {
      console.log(response);
      this.villain = response;
    })
  }

  getHardVillain(): void {
    this.trivia_Service.getHardVillain().subscribe((response: any) => {
      console.log(response);
      this.villain = response;
    })
  }

  getBossVillain(): void {
    this.trivia_Service.getBossVillain().subscribe((response: any) => {
      console.log(response);
      this.villain = response;
    })
  }

  loadCurrentHero(hero_id: number): void {
    this.player_Service.GetCurrentHero(hero_id).subscribe((response: any) => {
      console.log(response);
      this.currentHero = response;
    })
  }

  dealDamage(checkInput: boolean): void {
    console.log(checkInput);
    if (checkInput == true) {
      this.villain.healthPoints -= 2;
    }
    else {
      this.currentHero.heroClassNavigation.healthPoints -= 2;
    }
    this.addquestion();
    this.loadNextRound();
  }

  loadNextRound(): void {
    if (this.villain.healthPoints <= 0) {      
      if (this.battleNumber == 1) {
        this.getMediumVillain();
        this.battleNumber = 2;
      }
      else if (this.battleNumber == 2) {
        this.getHardVillain();
        this.battleNumber = 3;
      }
      else if (this.battleNumber == 3) {
        this.getBossVillain();
        this.battleNumber = 4;
      }
    }
  }
}
