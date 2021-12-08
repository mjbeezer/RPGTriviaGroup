import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Player } from '../../../Player';
import { PlayerService } from '../../../player.service';

@Component({
    selector: 'app-register-new-user',
    templateUrl: './register-new-user.component.html',
    styleUrls: ['./register-new-user.component.css']
})
/** registerNewUser component*/
export class RegisterNewUserComponent {
    /** registerNewUser ctor */
    constructor(private player_Service:PlayerService) {

  }

  RegisterNewPlayer(form: NgForm): void {
    let newPlayer: Player = {
      id: null,
      userId: null,
      userName: form.form.value.username,
      avatarImage: form.form.value.avatarImage,
      avatarColor: form.form.value.avatarColor,
      gamesWon: null,
      title: form.form.value.title

    }
    console.log(newPlayer.userName);

    this.player_Service.RegisterNewPlayer(newPlayer.userName, newPlayer.avatarImage.imageName, newPlayer.avatarColor, newPlayer.title.id).subscribe((response: any) => {
      console.log(response);
    })
  }
}
