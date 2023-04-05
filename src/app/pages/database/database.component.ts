import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DatabaseInitialComponent } from './database-initial/database-initial.component';
import { DatabaseMetadataComponent } from './database-metadata/database-metadata.component';
import { DatabaseStatsComponent } from './database-stats/database-stats.component';

@Component({
  selector: 'app-database',
  standalone: true,
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss'],
  imports: [
    CdkAccordionModule,
    DatabaseInitialComponent,
    DatabaseMetadataComponent,
    DatabaseStatsComponent,
  ],
})
export class DatabaseComponent {}
