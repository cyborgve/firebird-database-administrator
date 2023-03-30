import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sql',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule],
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.scss'],
})
export class SqlComponent {}
