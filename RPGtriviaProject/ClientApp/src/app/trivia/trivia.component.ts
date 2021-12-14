import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../../Hero';
import { PlayerService } from '../../../player.service';
import { Question, Result } from '../../../Question';
import { TriviaApiService } from '../../../trivia-api.service';
import { Villain } from '../../../Villain';
import { VillainComponent } from '../villain/villain.component';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
/** Trivia component*/
export class TriviaComponent {
  /** Trivia ctor */
  constructor(private trivia_Service: TriviaApiService) {

  }


  result: Result = {} as Result;
  villain: Villain = {} as Villain;
  currentHero: Hero = {} as Hero;
  input: string = "";
  shuffledAnswers: string[] = [];

  @Input() checkDifficulty: number;
  @Output() checkInput = new EventEmitter<boolean>();

  ngOnInit(): void {
    if (this.checkDifficulty == 1) {
      this.displayEasyQuestions();
    }
    else if (this.checkDifficulty == 2) {
      this.displayMediumQuestions();
    }
    else if (this.checkDifficulty == 3) {
      this.displayHardQuestions();
    }

    else if (this.checkDifficulty == 4) {
      this.displayMediumQuestions();
    }
  }

  displayEasyQuestions(): void {
    this.trivia_Service.getEasyQuestions().subscribe((response: any) => {
      console.log(response);
      let currentQuestion: Result = response.results[0];
      this.shuffledAnswers = [currentQuestion.incorrect_answers[0], currentQuestion.incorrect_answers[1], currentQuestion.incorrect_answers[2], currentQuestion.correct_answer];
      this.shuffledAnswers = this.shuffleArray(this.shuffledAnswers);
      this.result = response.results[0];
     
    })
  }

  displayMediumQuestions(): void {
    this.trivia_Service.getMediumQuestions().subscribe((response: any) => {
      console.log(response);
      this.result = response.results[0];
      let currentQuestion: Result = response.results[0];
      this.shuffledAnswers = [currentQuestion.incorrect_answers[0], currentQuestion.incorrect_answers[1], currentQuestion.incorrect_answers[2], currentQuestion.correct_answer];
      
    })
  }

  displayHardQuestions(): void {
    this.trivia_Service.getHardQuestions().subscribe((response: any) => {
      console.log(response);
      this.result = response.results[0];
      let currentQuestion: Result = response.results[0];
      this.shuffledAnswers = [currentQuestion.incorrect_answers[0], currentQuestion.incorrect_answers[1], currentQuestion.incorrect_answers[2], currentQuestion.correct_answer];
      
    })
  }

  inputCheck(): void {
    console.log(this.input);
    if (this.input == this.result.correct_answer) {
      this.checkInput.emit(true);
    }
    else {
      this.checkInput.emit(false);
    }
  }

  shuffleArray(allAnswers: string[]): string[] {
    let currentIndex = allAnswers.length, randomIndex;


    while (currentIndex != 0) {


      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;


      [allAnswers[currentIndex], allAnswers[randomIndex]] = [
        allAnswers[randomIndex], allAnswers[currentIndex]];
    }

    return allAnswers;
  }



}


