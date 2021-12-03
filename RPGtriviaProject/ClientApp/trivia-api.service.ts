import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TriviaApiService {
    constructor(private http: HttpClient) {

    }

  getEasyQuestions(): any {
    return this.http.get('https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple');
  }

  getMediumQuestions(): any {
    return this.http.get('https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple');
  }

  getHardQuestions(): any {
    return this.http.get('https://opentdb.com/api.php?amount=1&difficulty=hard&type=multiple');
  }

}
