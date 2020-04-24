import { Component, OnInit } from '@angular/core';
import { TreeTableData, TreeTableHeaderObject, TreeTableRow } from 'angular-tree-table';

@Component({
  selector: 'app-expandable-header-less',
  templateUrl: './expandable-header-less.component.html',
  styleUrls: ['./expandable-header-less.component.scss']
})
export class ExpandableHeaderLessComponent implements OnInit {

  tableData: TreeTableData = null;
  tableConfig = {
    showTableHeaders: false, // To show/ hide headers
    showExpandArrows: true, // To show expand/ collapse button on each row wherever child available
    showExpandAllArrows: true, // To show Expand/ collapse all button
    columnVisibility: false, // To show columns visibility options on table
    columnVisibilityDropDown: false, // To show columns visibility options on table as a popover
    commonSearch: false,
    excelExportButton: false,
    showPageLengthDropdown: false
  };
  tableHeaders: TreeTableHeaderObject[] = [];

  constructor() { }

  ngOnInit() {
    this.populateDummyData();
  }

  populateDummyData() {
    const data = [];
    for (let i = 0; i < 120; i++) {
      const row = new TreeTableRow(i + '', { sno: i+1, name: 'John '+(i+1), age: i+1}, false, null);
      if (i % 10 !== 0) {
        row.expandable = true;
        const subTableData = new TreeTableData(this.tableConfig); //We can add new config object if required
        const subData = [];
        for (let j = 0; j < (10 - i % 10); j++) {
          const subRow = new TreeTableRow(j + '', { sno: j + 1, name: 'Paul ' + (j + 1), age: j + 1}, false, null);
          subData.push(subRow);
        }
        subTableData.headers = this.tableHeaders; //Using the same headers as parent table, we can use separate if required
        subTableData.data = subData;
        row.children = subTableData;
      }
      data.push(row);
    }
    this.tableData = new TreeTableData(this.tableConfig);
    this.populateHeaders();
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
