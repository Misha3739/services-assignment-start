/**
 * Created by M.Udot on 02.08.2017.
 */

import {EventEmitter, Injectable} from '@angular/core';
import {UserStatusEnum} from './user-status.enum';


export class UsersService
{
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  users = [{
    name: 'Max',
    status: UserStatusEnum.Active
  },
    {
      name: 'Anna',
      status: UserStatusEnum.Active
    },
    {
      name: 'Chris',
      status: UserStatusEnum.Inactive
    },
    {
      name: 'Manu',
      status: UserStatusEnum.Inactive
    }];

  onSetToActive(id: number) {
    this.users[id].status = UserStatusEnum.Active;
  }

  onSetToInactive(id: number) {
    this.users[id].status = UserStatusEnum.Inactive;
  }
}
