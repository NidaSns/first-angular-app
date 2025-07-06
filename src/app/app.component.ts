import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})

export class AppComponent{
  users = DUMMY_USERS;
  selectedUserId?:string;
   
  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  @Input({required:true}) name!: string;
  onSelectUser(id:string){
    this.selectedUserId = id;
  }
}
