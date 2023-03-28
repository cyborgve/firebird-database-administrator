import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/connection/connection.component').then(
        c => c.ConnectionComponent
      ),
    title: 'Firebird Database Administrator - Connection',
  },
];
