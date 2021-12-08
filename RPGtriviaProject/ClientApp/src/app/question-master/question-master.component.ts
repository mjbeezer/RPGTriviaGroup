import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  playerHeroes: Hero[] = [];
  battleNumber = 1;
  trogdorQuestions: number;

    /** QuestionMaster ctor */
  constructor(private trivia_Service: TriviaApiService, private player_Service: PlayerService) {

  }

  ngOnInit(): void {
    this.getEasyVillain();
    this.loadPlayerHeroes();
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

  loadPlayerHeroes(): void {
    this.player_Service.GetPlayerHeroes().subscribe((response: any) => {
      console.log(response);
      this.playerHeroes = response;
    })

  }

  loadCurrentHero(form: NgForm): void {
    let id: number = form.form.value.currentHero;
    this.player_Service.GetCurrentHero(id).subscribe((response: any) => {
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

  loadBossParameters(checkInput: boolean): void {
   
    if (this.villain.name == "Trogdor the Burninator") {
      this.currentHero.heroClassNavigation.healthPoints = 1;
      this.trogdorQuestions = 0;
      if (checkInput == true) {
        this.trogdorQuestions++;
        if (this.trogdorQuestions == 3) {
          this.villain.healthPoints = 0;
        }
      }
      else {
        this.currentHero.heroClassNavigation.healthPoints = 0;
      }

    }

    else if (this.villain.name == "Justin the Gatekeeper")
    {
      if (checkInput == true) {
        this.currentHero.heroClassNavigation.healthPoints = 0;
      }

      else if (checkInput == false) {
        this.currentHero.heroClassNavigation.healthPoints = 0;
      }

    }

   


  }
}
