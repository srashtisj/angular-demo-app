import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userObj!: User;
  constructor() {
    this.userObj = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }

  ngOnInit(): void {}

  save(userData: Form) {
    console.log(userData);
  }
}
