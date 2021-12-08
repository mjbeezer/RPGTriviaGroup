import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Images } from '../../../Images';
import { Player } from '../../../Player';
import { PlayerService } from '../../../player.service';

@Component({
    selector: 'app-register-new-user',
    templateUrl: './register-new-user.component.html',
    styleUrls: ['./register-new-user.component.css']
})
/** registerNewUser component*/
export class RegisterNewUserComponent {

  imageList: Images[] = [];
  newbieTitle: Title = {} as Title

    /** registerNewUser ctor */
    constructor(private player_Service:PlayerService) {

  }

  ngOnInit(): void {
    this.LoadAvatarImages();
  }

  RegisterNewPlayer(form: NgForm): void {
    console.log("hello");

    let username: string = form.form.value.username;
    let avatarImage: number = form.form.value.avatarImage;
    let avatarColor: string = form.form.value.avatarColor;

    
    console.log(form.form.value.username);
    console.log(form.form.value.avatarImage);
    console.log(form.form.value.avatarColor);
    console.log(form.form.value.title);

    //title is int 1 for Newbie
    this.player_Service.RegisterNewPlayer(username, avatarImage, avatarColor, 1).subscribe((response: any) => {
      console.log(response);
    })
  }

  LoadAvatarImages(): void {
    this.player_Service.GetAvatarImages().subscribe((response: any) => {
      this.imageList = response;
      console.log(response);
    })
  }
}
