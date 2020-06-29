import { Component, OnInit } from '@angular/core';
import { TreeTableData, TreeTableHeaderObject, TreeTableRow } from 'angular-tree-table';
import { ExpandableType, TreeTableDataConfig, ExpandableArrowPlacement } from 'projects/angular-tree-table/src/public-api';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss']
})
export class ExpandableComponent implements OnInit {

  tableData: TreeTableData = null;
  tableConfig: TreeTableDataConfig = {
    showExpandArrows: true, // To show expand/ collapse button on each row wherever child available
    showExpandAllArrows: true, // To show Expand/ collapse all button
    columnVisibility: true, // To show columns visibility options on table
    columnVisibilityDropDown: true, // To show columns visibility options on table as a popover
    expandableType: ExpandableType.DIFFERENT_HEADERS,
    expandableArrowPlacement: ExpandableArrowPlacement.FIRST_COLUMN
  };
  tableHeaders: TreeTableHeaderObject[] = [];

  constructor() { }

  ngOnInit() {
    this.populateDummyData();
  }

  populateDummyData() {
    const data = [];
    this.tableData = new TreeTableData(this.tableConfig);
    this.populateHeaders();
    for (let i = 0; i < 120; i++) {
      const row = new TreeTableRow(i + '', { sno: i+1, name: 'John '+(i+1), age: i+1}, false, null);
      if (i % 10 !== 0) {
        row.expandable = true;
        const subConfig = JSON.parse(JSON.stringify(this.tableConfig));
        subConfig.expandableType = ExpandableType.SAME_HEADERS;
        const subTableData = new TreeTableData(subConfig); //We can add new config object if required
        const subData = [];
        for (let j = 0; j < (10 - i % 10); j++) {
          const subRow = new TreeTableRow(j + '', { sno: j + 1, name: 'Paul ' + (j + 1), age: j + 1}, false, null);
          if (j % 10 !== 0) {
            subRow.expandable = true;
            const subSubConfig = JSON.parse(JSON.stringify(subConfig));
            const subSubTableData = new TreeTableData(subSubConfig);
            const subSubData = [];
            for (let k = 0; k < (10 - j % 10); k++) {
              const subSubRow = new TreeTableRow(k + '', { sno: k + 1, name: 'John Paul ' + (k + 1), age: k + 1}, false, null);
              subSubData.push(subSubRow);
            }
            subSubTableData.headers = this.tableHeaders;
            subSubTableData.data = subSubData;
            subRow.children = subSubTableData;
          }
          subData.push(subRow);
        }
        subTableData.headers = this.tableHeaders; //Using the same headers as parent table, we can use separate if required
        subTableData.data = subData;
        row.children = subTableData;
      }
      data.push(row);
    }
    this.tableData.data = data;
  }

  populateHeaders() {
    this.tableHeaders.splice(0, this.tableHeaders.length);
    this.tableHeaders.push(new TreeTableHeaderObject('Sno', 'sno', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Name', 'name', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Age', 'age', null, true));
    this.tableData.headers = this.tableHeaders;
  }
}
