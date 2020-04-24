import { Component, OnInit } from '@angular/core';
import { TreeTableData, TreeTableHeaderObject, TreeTableRow, TtDataType } from 'angular-tree-table';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  tableData: TreeTableData = null;
  tableConfig = {};
  tableHeaders: TreeTableHeaderObject[] = [];

  constructor() { }

  ngOnInit() {
    this.populateDummyData();
  }

  populateDummyData() {
    const data = [];
    for (let i = 0; i < 120; i++) {
      const row = new TreeTableRow(i + '', { sno: i+1, name: 'John '+(i+1), age: i+1}, false, null);
      data.push(row);
    }
    this.tableData = new TreeTableData(this.tableConfig);
    this.populateHeaders();
    this.tableData.data = data;
  }

  rowSelectionChanged(selected: any[]) {
    console.log('Selection changed', selected);
  }

  populateHeaders() {
    this.tableHeaders.splice(0, this.tableHeaders.length);
    const selectAllHeader = new TreeTableHeaderObject('Select All', null, null, true);
    selectAllHeader.dataType = TtDataType.SELECT;
    this.tableHeaders.push(selectAllHeader);
    this.tableHeaders.push(new TreeTableHeaderObject('Sno', 'sno', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Name', 'name', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Age', 'age', null, true));
    this.tableData.headers = this.tableHeaders;
  }

}
