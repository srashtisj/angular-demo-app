import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';

@NgModule({
  declarations: [UsersComponent, UserProfileComponent, UserAvatarComponent],
  imports: [CommonModule, UsersRoutingModule, FormsModule],
})
export class UsersModule {}
