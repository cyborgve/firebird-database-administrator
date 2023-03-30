import { DatabaseRestoreComponent } from './database-restore/database-restore.component';
import { DatabaseMaintenanceComponent } from './database-maintenance/database-maintenance.component';
import { DatabaseBackupComponent } from './database-backup/database-backup.component';
import { MatTabsModule } from '@angular/material/tabs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    DatabaseBackupComponent,
    DatabaseMaintenanceComponent,
    DatabaseRestoreComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {}
