import { DataExportComponent } from './data-export/data-export.component';
import { DataImportComponent } from './data-import/data-import.component';
import { DataEnterComponent } from './data-enter/data-enter.component';
import { MatTabsModule } from '@angular/material/tabs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    DataEnterComponent,
    DataImportComponent,
    DataExportComponent,
  ],
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent {}
