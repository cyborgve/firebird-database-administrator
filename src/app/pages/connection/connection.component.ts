import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { SERVER_PROTOCOLS } from 'src/app/core/constants/server-protocols';
import { SERVER_VERSIONS } from 'src/app/core/constants/server-versions';
import { CHARSETS } from 'src/app/core/constants/chatsets';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-connection',
  standalone: true,
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss'],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
})
export class ConnectionComponent {
  private _formBuilder = inject(FormBuilder);
  connectionForm: FormGroup;
  serverProtocols: string[] = SERVER_PROTOCOLS;
  serverVersions: string[] = SERVER_VERSIONS;
  charsets: string[] = CHARSETS;

  constructor() {
    this.connectionForm = this._formBuilder.group({
      serverProtocol: ['Local, Loopback', Validators.required],
      serverName: ['127.0.0.1', Validators.required],
      database: ['/data/firebird/inventory-system.fdb', Validators.required],
      port: ['3050', Validators.required],
      serverVersion: ['Firebird 4.0', Validators.required],
      user: ['SYSDBA', Validators.required],
      password: ['masterkey', Validators.required],
      role: ['ADMIN'],
      charset: ['ISO-8859-1'],
    });
  }
}
