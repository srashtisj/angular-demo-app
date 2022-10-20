import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
  // inputs: ['imageUrl'],
  // outputs: ['uploaded']
})
export class UserAvatarComponent implements OnInit {
  @Input() imageUrl!: string;
  @Output() uploaded = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  uploadImage(value: any) {
    this.uploaded.emit(value);
  }
}
