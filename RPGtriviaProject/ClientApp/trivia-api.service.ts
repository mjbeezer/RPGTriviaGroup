import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TriviaApiService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

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

  getEasyVillain(): any {
    return this.http.get(this.baseUrl + `api/Trivia/easyVillain`);
  }

  getMediumVillain(): any {
    return this.http.get(this.baseUrl + `api/Trivia/mediumVillain`);
  }

  getHardVillain(): any {
    return this.http.get(this.baseUrl + `api/Trivia/hardVillain`);
  }

  getBossVillain(): any {
    return this.http.get(this.baseUrl + `api/Trivia/bossVillain`);
  }

}
