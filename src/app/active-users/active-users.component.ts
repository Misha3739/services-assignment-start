import { Component, EventEmitter, Input, Output } from '@angular/core';
import {UsersService} from '../users.service';
import {UserStatusEnum} from '../user-status.enum';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input('id') id: number;
  @Input('user') user: {name: string, status: UserStatusEnum}

  constructor(private usersService: UsersService) {

  }

  onSetToInactive(id: number)
  {
    this.usersService.onSetToInactive(id);
  }
}
