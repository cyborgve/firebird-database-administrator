import { AccessoryDomainsComponent } from './accessory-domains/accessory-domains.component';
import { AccessoryExceptionsComponent } from './accessory-exceptions/accessory-exceptions.component';
import { AccessoryGeneratorsComponent } from './accessory-generators/accessory-generators.component';
import { AccessoryIndexesComponent } from './accessory-indexes/accessory-indexes.component';
import { AccessoryStoreProceduresComponent } from './accessory-store-procedures/accessory-store-procedures.component';
import { AccessoryTriggersComponent } from './accessory-triggers/accessory-triggers.component';
import { AccessoryUserDefinedFunctionsComponent } from './accessory-user-defined-functions/accessory-user-defined-functions.component';
import { AccessoryViewsComponent } from './accessory-views/accessory-views.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-accessories',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    AccessoryDomainsComponent,
    AccessoryExceptionsComponent,
    AccessoryGeneratorsComponent,
    AccessoryIndexesComponent,
    AccessoryStoreProceduresComponent,
    AccessoryTriggersComponent,
    AccessoryUserDefinedFunctionsComponent,
    AccessoryViewsComponent,
  ],
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss'],
})
export class AccessoriesComponent {
  accessories: string[] = [
    'domains',
    'exceptions',
    'generators',
    'indexes',
    'store procedures',
    'triggers',
    'user defined functions',
    'views',
  ];
}
