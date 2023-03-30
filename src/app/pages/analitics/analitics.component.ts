import { StaticsServerComponent } from './statics-server/statics-server.component';
import { StaticsDatabaseComponent } from './statics-database/statics-database.component';
import { MatTabsModule } from '@angular/material/tabs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analitics',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    StaticsDatabaseComponent,
    StaticsServerComponent,
  ],
  templateUrl: './analitics.component.html',
  styleUrls: ['./analitics.component.scss'],
})
export class AnaliticsComponent {}
