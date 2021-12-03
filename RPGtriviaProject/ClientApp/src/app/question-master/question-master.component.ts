import { Component } from '@angular/core';

@Component({
    selector: 'app-question-master',
    templateUrl: './question-master.component.html',
    styleUrls: ['./question-master.component.css']
})
/** QuestionMaster component*/
export class QuestionMasterComponent {
  QuestionCount: number = 1;
    /** QuestionMaster ctor */
    constructor() {

  }
  addquestion(): void {
    this.QuestionCount++;
  }
}
