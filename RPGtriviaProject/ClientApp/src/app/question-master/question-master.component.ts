import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../../Hero';
import { Player } from '../../../Player';
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
  damageRoll: number;
  damageTaken: number = 0;
  whoDamage: string = "";
  StartingHealth: number = 0;
  trogdorQuestions: number;
  usedAbility: boolean = false;
  chosenHero: boolean = false;
  iAmAlive: boolean = true;
  currentPlayer: Player = {} as Player;
  bossFight: boolean = false;
  beatGame: boolean = false;

  /** QuestionMaster ctor */
  constructor(private trivia_Service: TriviaApiService, private player_Service: PlayerService, private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getEasyVillain();
    //this.loadPlayerHeroes();
    this.loadSelectedHero();
  }

  addquestion(): void {
    this.QuestionCount++;
  }

  getEasyVillain(): void {
    this.trivia_Service.getEasyVillain().subscribe((response: any) => {
      console.log(response);
      this.villain = response;
      this.StartingHealth = this.villain.healthPoints;
    })
  }

  getMediumVillain(): void {
    this.trivia_Service.getMediumVillain().subscribe((response: any) => {
      console.log(response);
      this.villain = response;
      this.StartingHealth = this.villain.healthPoints;
    })
  }

  getHardVillain(): void {
    this.trivia_Service.getHardVillain().subscribe((response: any) => {
      console.log(response);
      this.villain = response;
      this.StartingHealth = this.villain.healthPoints;
    })
  }

  getBossVillain(): void {
    this.trivia_Service.getBossVillain().subscribe((response: any) => {
      console.log(response);
      this.villain = response;
      this.StartingHealth = this.villain.healthPoints;
    })
  }

  loadPlayerHeroes(): void {
    this.player_Service.GetPlayerHeroes().subscribe((response: any) => {
      console.log(response);
      this.playerHeroes = response;
    })

  }

  loadSelectedHero(): void {
    this.chosenHero = true;
    let id: string = this.route.snapshot.paramMap.get("id");
    this.player_Service.GetCurrentHero(parseInt(id)).subscribe((response: any) => {
      console.log(response);
      this.currentHero = response;
    })
  }

  dealDamage(checkInput: boolean): void {
    console.log(checkInput);
    if (this.battleNumber == 4) {
      this.loadBossParameters(checkInput);
    }
    else {
      if (checkInput == true) {
        this.damageRoll = Math.floor(Math.random() * 3) + 1;
        if (this.currentHero.heroClass == 7 && this.damageRoll == 3) {
          this.damageTaken = this.damageRoll + 2;
          this.villain.healthPoints -= this.damageTaken;

        }
        else {

          this.damageTaken = this.damageRoll;
          this.villain.healthPoints -= this.damageTaken;
          this.whoDamage = this.villain.name;

        }
      }
      else {
        this.currentHero.heroClassNavigation.healthPoints -= 2;
        this.whoDamage = this.currentHero.name;
        this.damageTaken = 2;
      }
    }
      this.addquestion();
      this.villainHealthCheck();
      this.heroHealthCheck();
    
  }

  villainHealthCheck(): void {
    if (this.villain.healthPoints <= 0) {
      if (this.battleNumber == 1) {
        this.getMediumVillain();
        this.battleNumber = 2;
        this.usedAbility = false;
      }
      else if (this.battleNumber == 2) {
        this.getHardVillain();
        this.battleNumber = 3;
        this.usedAbility = false;
      }
      else if (this.battleNumber == 3) {
        this.getBossVillain();
        this.battleNumber = 4;
        if (this.villain.name == "Trogdor the Burninator") {
          this.currentHero.heroClassNavigation.healthPoints = 1;
        }
        
      }
      else if (this.battleNumber == 4) {
        this.iAmAlive = false;
        this.beatGame = true;
        this.player_Service.UpdateGamesWon().subscribe((response: any) => {
          console.log(response)
        });
        console.log("game won");
      }
    }
  }

  heroHealthCheck(): void {
    console.log(this.currentHero.heroClassNavigation.healthPoints + "healthcheck");
    if (this.currentHero.heroClassNavigation.healthPoints <= 0) {
      this.iAmAlive = false;
    }
  }

  loadBossParameters(checkInput: boolean): void {

    console.log(this.villain.name);
    console.log(this.villain.name == "Trogdor the Burninator");
    if (this.villain.name == "Trogdor the Burninator") {
      if (this.bossFight != true) {
        this.currentHero.heroClassNavigation.healthPoints = 1;
        this.trogdorQuestions = 0;
        this.bossFight = true;
      }

      if (checkInput == true) {
        this.trogdorQuestions++;
        if (this.trogdorQuestions == 3) {
          this.villain.healthPoints = 0;          
          this.bossFight = false;
        }
      }
      else {
        this.currentHero.heroClassNavigation.healthPoints = 0;
        this.bossFight = false;
      }

    }

    else if (this.villain.name == "Justin the Gatekeeper") {
      this.currentHero.heroClassNavigation.healthPoints = 1
      if (checkInput == true) {
        this.currentHero.heroClassNavigation.healthPoints = 0;
      }

      else if (checkInput == false) {
        this.currentHero.heroClassNavigation.healthPoints = 0;
      }

    }


  }

  wizardAbility(): void {

    this.usedAbility = true;
    this.addquestion();
    //if (this.villain.type == "Easy") {

    //  this.trivia_Service.getEasyQuestions().subscribe((response: any) => {
    //    console.log(response);
    //  })
    //    }

    //else if (this.villain.type == "Medium") {
    //  this.trivia_Service.getMediumQuestions().subscribe((response: any) => {
    //    console.log(response);

    //  })
    //      }

    //else if (this.villain.type == "Hard") {

    //  this.trivia_Service.getHardQuestions().subscribe((response: any) => {
    //    console.log(response);

    //  })

    //}


  }

}


