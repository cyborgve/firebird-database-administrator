import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import packageJson from '../../package.json';
import { MENU } from '@core/constants/menu-items';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, MatToolbarModule, MatIconModule, RouterModule],
})
export class AppComponent {
  title = packageJson.name.replace('-', ' ').replace('-', ' ');
  version = packageJson.version;
  menu = MENU;
  conected = false;
}
