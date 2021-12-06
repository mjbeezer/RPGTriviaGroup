import { Component } from '@angular/core';
import { Villain } from '../../../Villain';
import { VillainService } from '../../../villain.service';

@Component({
    selector: 'app-villain',
    templateUrl: './villain.component.html',
    styleUrls: ['./villain.component.css']
})
/** Villain component*/
export class VillainComponent {
  /** Villain ctor */
  villainList: Villain[] = [];
  
    constructor(private villainservice: VillainService) {

  }

  ngOnInit(): void {
    this.villainservice.DisplayVillains().subscribe((response: any) => {
      this.villainList = response;
      console.log(response);
    })
  }
}
