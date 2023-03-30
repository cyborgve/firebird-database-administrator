import { UsersDropComponent } from './users-drop/users-drop.component';
import { UsersModifyComponent } from './users-modify/users-modify.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { MatTabsModule } from '@angular/material/tabs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    UsersCreateComponent,
    UsersModifyComponent,
    UsersDropComponent,
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {}
