import { TableDescriptionComponent } from '@shared/components/table-description/table-description.component';
import { FlatNode } from '@core/models/flat-node';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTreeModule } from '@angular/cdk/tree';
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';

const tables: FlatNode[] = [
  {
    level: 0,
    isExpanded: false,
    expandable: true,
    name: 'Test',
  },
];

@Component({
  selector: 'app-tables-view',
  standalone: true,
  imports: [
    CommonModule,
    CdkTreeModule,
    MatIconModule,
    TableDescriptionComponent,
  ],
  templateUrl: './tables-view.component.html',
  styleUrls: ['./tables-view.component.scss'],
})
export class TablesViewComponent implements OnInit {
  treeData: FlatNode[] = [];
  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );
  dataSource: ArrayDataSource<FlatNode>;
  hasChild = (_: number, node: FlatNode) => node.expandable;

  ngOnInit(): void {
    this.dataSource = new ArrayDataSource(tables);
  }

  getParent(node: FlatNode): FlatNode | undefined {
    let index = this.treeData.indexOf(node);
    for (let i = index - 1; i >= 0; i--) {
      if (this.treeData[index].level === node.level - 1)
        return this.treeData[i];
    }
    return undefined;
  }

  shouldRender(node: FlatNode): boolean {
    let parent = this.getParent(node);
    while (parent) {
      if (!parent.isExpanded) return false;
      parent = this.getParent(parent);
    }
    return false;
  }
}
