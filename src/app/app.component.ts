import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {UserStatusEnum} from './user-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users : {name: string, status: UserStatusEnum}[] = [];

  constructor(private usersService: UsersService) {

  }

  ngOnInit()
  {
    this.users = this.usersService.users;
  }
}
