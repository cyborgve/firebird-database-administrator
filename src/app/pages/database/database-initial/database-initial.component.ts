import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SERVER_PROTOCOLS } from '@core/constants/server-protocols';
import { SERVER_VERSIONS } from '@core/constants/server-versions';
import { CHARSETS } from '@core/constants/charsets';

@Component({
  selector: 'app-database-initial',
  standalone: true,
  templateUrl: './database-initial.component.html',
  styleUrls: ['./database-initial.component.scss'],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    CdkAccordionModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
  ],
})
export class DatabaseInitialComponent {
  private _formBuilder = inject(FormBuilder);
  databaseForm: FormGroup;
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
      encoding: [this.charsets.find(c => c.includes('UTF-8'))],
      version: [
        this.versions.find(v => v.includes('4.0')),
        Validators.required,
      ],
      lowercase_keys: [false], // set to true to lowercase keys
      pageSize: [4096], // default when creating database\
      retryConnectionInterval: [1000], // reconnect interval in case of connection drop
      blobAsText: [false], // set to true to get blob as text, only affects blob subtype 1
    });
  }

  connect() {}

  disconnect() {}
}
