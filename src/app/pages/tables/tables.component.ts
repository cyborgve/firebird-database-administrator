import { TablesEditComponent } from './tables-edit/tables-edit.component';
import { TablesDropComponent } from './tables-drop/tables-drop.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TablesViewComponent } from './tables-view/tables-view.component';
import { TablesCreateComponent } from './tables-create/tables-create.component';

@Component({
  selector: 'app-tables',
  standalone: true,
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    TablesViewComponent,
    TablesCreateComponent,
    TablesDropComponent,
    TablesEditComponent,
  ],
})
export class TablesComponent {
  operations: string[] = ['view', 'create', 'drop', 'edit'];
  tablesOption = new FormControl('view');
}
