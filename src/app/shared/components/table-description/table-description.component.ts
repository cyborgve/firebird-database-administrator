import { FlatNode } from '@core/models/flat-node';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/collections';
import { TableDescription } from '@core/models/table-description';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-table-description',
  standalone: true,
  imports: [CommonModule, CdkTableModule],
  templateUrl: './table-description.component.html',
  styleUrls: ['./table-description.component.scss'],
})
export class TableDescriptionComponent {
  @Input() node: FlatNode = {} as FlatNode;
  @Input() dataSource: TableDataSource = new TableDataSource();
  displayedColumns: string[] = [
    'name',
    'type',
    'encoding',
    'collate',
    'computed',
    'default',
    'nullable',
    'check',
    'unique',
    'primary',
    'foreigk',
  ];
}

class TableDataSource extends DataSource<TableDescription> {
  $data = new BehaviorSubject<TableDescription[]>([]);

  override connect(): Observable<readonly TableDescription[]> {
    return this.$data.asObservable();
  }
  override disconnect(): void {}
}
