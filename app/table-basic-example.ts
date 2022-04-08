import {Component, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';
import { PeriodicElement } from './demo.interface';
import { ELEMENT_DATA } from './data';
import {CdkDragDrop, CdkDragStart, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.scss'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {

  @ViewChild('table', { static: true }) table: MatTable<PeriodicElement>;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'quantity'];
  dataSource = ELEMENT_DATA;
  dragDisabled = true;

  drop(event: CdkDragDrop<PeriodicElement[]>) {
    // Return the drag container to disabled.
    this.dragDisabled = true;

    const previousIndex = this.dataSource.findIndex((d) => d === event.item.data);

    moveItemInArray(this.dataSource, previousIndex, event.currentIndex);
    this.table.renderRows();

  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */