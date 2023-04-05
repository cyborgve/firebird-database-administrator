import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkAccordionItem, CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
  selector: 'app-database-stats',
  standalone: true,
  imports: [CommonModule, CdkAccordionModule],
  templateUrl: './database-stats.component.html',
  styleUrls: ['./database-stats.component.scss'],
})
export class DatabaseStatsComponent {}
