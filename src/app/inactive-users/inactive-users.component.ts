import { Component, EventEmitter, Input, Output } from '@angular/core';
import {UsersService} from '../users.service';
import {UserStatusEnum} from '../user-status.enum';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input('id') id: number;
  @Input('user') user: {name: string, status: UserStatusEnum}

  constructor(private usersService: UsersService) {

  }

  onSetToActive(id: number)
  {
    this.usersService.onSetToActive(id);
  }
}
