import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ConnectDatabaseComponent } from './connect-database/connect-database.component';
import { CreateDatabaseComponent } from './create-database/create-database.component';
import { DeleteDatabaseComponent } from './delete-database/delete-database.component';
import { MetadataDatabaseComponent } from './metadata-database/metadata-database.component';

@Component({
  selector: 'app-database',
  standalone: true,
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss'],
  imports: [
    CdkAccordionModule,
    ConnectDatabaseComponent,
    CreateDatabaseComponent,
    DeleteDatabaseComponent,
    MetadataDatabaseComponent,
  ],
})
export class DatabaseComponent {}
