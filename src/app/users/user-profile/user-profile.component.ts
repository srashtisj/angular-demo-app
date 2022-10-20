import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userObj = {
    firstName: '',
    lastName: '',
    email: '',
    imageUrl: '',
  };
  constructor() {}

  ngOnInit(): void {}

  save(user: any) {
    console.log(user);
    this.userObj.firstName = user.firstName;
    this.userObj.lastName = user.lastName;
    this.userObj.email = user.email;
  }

  imageUploaded(event: any) {
    console.log('Image uploaded');
  }
}
