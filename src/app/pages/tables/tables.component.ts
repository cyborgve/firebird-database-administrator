import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tables',
  standalone: true,
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  imports: [CommonModule, MatButtonToggleModule],
})
export class TablesComponent {
  operations: string[] = ['view', 'create', 'drop', 'edit'];
}
