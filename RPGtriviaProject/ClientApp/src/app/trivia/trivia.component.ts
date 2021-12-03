import { Component } from '@angular/core';
import { Question, Result } from '../../../Question';
import { TriviaApiService } from '../../../trivia-api.service';

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

  ngOnInit(): void {
    this.displayEasyQuestions();
  }
  
  displayEasyQuestions(): void {
    this.trivia_Service.getEasyQuestions().subscribe((response: any) => {
      console.log(response);
      this.result = response.results[0];
    })
  }

}
