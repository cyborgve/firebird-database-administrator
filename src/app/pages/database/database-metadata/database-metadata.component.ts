import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
} from '@angular/material/tree';
import { FlatNode } from '@core/models/flat-node';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

type FlatNodePick = Pick<FlatNode, 'name'>;
interface FlatNodeExp extends FlatNodePick {
  children?: FlatNodeExp[];
}
type FlatNodeFull = FlatNode & FlatNodeExp;
type FlatNodeFixed = Omit<FlatNodeFull, 'isExpanded'>;

@Component({
  selector: 'app-database-metadata',
  standalone: true,
  imports: [
    CommonModule,
    CdkAccordionModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './database-metadata.component.html',
  styleUrls: ['./database-metadata.component.scss'],
})
export class DatabaseMetadataComponent {
  treeData: FlatNodeExp[] = [
    { name: 'domains' },
    { name: 'tables' },
    { name: 'views' },
    { name: 'triggers' },
    { name: 'generators' },
    { name: 'exceptions' },
    { name: 'store procedures' },
    { name: 'user defined functions' },
  ];

  _trasformer = (fnode: FlatNodeExp, level: number) => {
    return <FlatNodeFixed>{
      name: fnode.name,
      expandable: (!!fnode && fnode.children?.length) || 0 > 0,
      level: level,
      children: fnode.children,
    };
  };

  treeControl = new FlatTreeControl<FlatNodeFixed>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._trasformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = this.treeData;
  }

  hasChild = (_: number, node: FlatNodeFixed) => node.expandable;
}
