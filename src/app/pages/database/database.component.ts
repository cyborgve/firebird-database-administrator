import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DatabaseConnectComponent } from './database-connect/database-connect.component';
import { DatabaseCreateComponent } from './database-create/database-create.component';
import { DatabaseDropComponent } from './database-drop/database-drop.component';
import { DatabaseMetadataComponent } from './database-metadata/database-metadata.component';

@Component({
  selector: 'app-database',
  standalone: true,
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss'],
  imports: [
    CdkAccordionModule,
    DatabaseConnectComponent,
    DatabaseCreateComponent,
    DatabaseDropComponent,
    DatabaseMetadataComponent,
  ],
})
export class DatabaseComponent {}
