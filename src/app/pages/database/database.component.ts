import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SERVER_PROTOCOLS } from '@core/constants/server-protocols';
import { SERVER_VERSIONS } from '@core/constants/server-versions';
import { CHARSETS } from '@core/constants/chatsets';

@Component({
  selector: 'app-database',
  standalone: true,
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CdkAccordionModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class DatabaseComponent {
  private _formBuilder = inject(FormBuilder);
  databaseForm: FormGroup;
  items = ['Connect', 'Create', 'Delete', 'System Tables', 'Metadata'];
  protocols = SERVER_PROTOCOLS;
  versions = SERVER_VERSIONS;
  charsets = CHARSETS.map(c => c.split(' ')[0]).sort();

  constructor() {
    this.databaseForm = this._formBuilder.group({
      protocol: ['Local, Loopback', Validators.required],
      host: ['127.0.0.1', Validators.required],
      port: [3050, Validators.required],
      database: ['/firebird/data/inventory-system.fdb', Validators.required],
      user: ['SYSDBA', Validators.required],
      password: ['masterkey', Validators.required],
      role: ['ADMIN'],
      charset: [this.charsets.find(c => c.includes('UTF-8'))],
      version: [
        this.versions.find(v => v.includes('4.0')),
        Validators.required,
      ],
    });
  }
}
