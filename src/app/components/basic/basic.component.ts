import { Component, OnInit } from '@angular/core';
import { TreeTableHeaderObject, TreeTableRow, TreeTableData } from 'angular-tree-table';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  tableData: TreeTableData = null;
  tableConfig = {
    excelExportButton: true,
    excelExportOnlyFilteredRows: true
  };
  tableHeaders: TreeTableHeaderObject[] = [];

  constructor() { }

  ngOnInit() {
    this.populateDummyData();
  }

  populateDummyData() {
    const data = [];
    for (let i = 0; i < 120; i++) {
      const row = new TreeTableRow(i + '', { sno: i+1, name: 'John '+(i+1), age: i+1, joined: new Date(), address: {dno: '12-'+(i+1)}}, false, null);
      data.push(row);
    }
    this.tableData = new TreeTableData(this.tableConfig);
    this.populateHeaders();
    this.tableData.data = data;
  }

  populateHeaders() {
    this.tableHeaders.splice(0, this.tableHeaders.length);
    this.tableHeaders.push(new TreeTableHeaderObject('Sno', 'sno', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('User Details', '=CONCAT($SS:Name: |||$VS:name|||<br/>|||Age: |||age * 2|||<br/> Joined on |||$VD:joined)', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Joined', '$VD:joined:MMM-YYYY', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Age', 'age', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('D.no', 'address.dno', null, true));
    this.tableData.headers = this.tableHeaders;
  }

}
