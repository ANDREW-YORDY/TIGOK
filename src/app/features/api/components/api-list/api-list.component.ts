import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../core/services/api/api.service';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = [];

  constructor( private userService: UserService ) {}

  ngOnInit(): void {
    
    this.userService.getUsers().subscribe(data => {
      this.users = data
    });
  }

}
 