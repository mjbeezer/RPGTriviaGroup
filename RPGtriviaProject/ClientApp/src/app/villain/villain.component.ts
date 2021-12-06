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
  villain: Villain = {} as Villain;
    constructor(private villainservice: VillainService) {

  }

  ngOnInit(): void {
    this.villainservice.DisplayVillains().subscribe((response: any) => {
      this.villainList = response;
      console.log(response);
    })
  }

  GetVillainById(id: number): any {
    this.villainservice.GetVillainById(id).subscribe((response: any) => {

      this.villain = response;
      console.log(response);
    })
    
  }
}
