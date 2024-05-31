import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@pages/analitics/analitics.component').then(
        c => c.AnaliticsComponent
      ),
  },
  {
    path: 'database',
    loadComponent: () =>
      import('@pages/database/database.component').then(
        c => c.DatabaseComponent
      ),
  },
  {
    path: 'tables',
    loadComponent: () =>
      import('@pages/tables/tables.component').then(c => c.TablesComponent),
  },
  {
    path: 'accessories',
    loadComponent: () =>
      import('@pages/accessories/accessories.component').then(
        c => c.AccessoriesComponent
      ),
  },
  {
    path: 'sql',
    loadComponent: () =>
      import('@pages/sql/sql.component').then(c => c.SqlComponent),
  },
  {
    path: 'data',
    loadComponent: () =>
      import('@pages/data/data.component').then(c => c.DataComponent),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('@pages/users/users.component').then(c => c.UsersComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('@pages/admin/admin.component').then(c => c.AdminComponent),
  },
];
