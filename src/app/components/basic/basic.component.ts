import { Component, OnInit } from '@angular/core';
import { TreeTableHeaderObject, TreeTableRow, TreeTableData, TreeTableDataConfig } from 'angular-tree-table';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  tableData: TreeTableData = null;
  tableConfig: TreeTableDataConfig = {
    excelExportButton: true,
    excelExportOnlyFilteredRows: true,
    visibleColumnFiltersVisibility: true,
    columnVisibilityDropDown: true
  };
  tableHeaders: TreeTableHeaderObject[] = [];

  constructor() { }

  ngOnInit() {
    this.populateDummyData();
  }

  populateDummyData() {
    const data = [];
    for (let i = 0; i < 120; i++) {
      const row = new TreeTableRow(i + '', { sno: i+1, name: 'John '+(i+1), age: i+1, salary: Math.floor((Math.random() * 1000) + 1)/3, dates: {joined: '2020-07-08T06:02:56.649Z', created: new Date()}, address: {dno: '12-'+(i+1)}}, false, null);
      data.push(row);
    }
    this.tableData = new TreeTableData(this.tableConfig);
    this.populateHeaders();
    this.tableData.data = data;
  }

  populateHeaders() {
    this.tableHeaders.splice(0, this.tableHeaders.length);
    this.tableHeaders.push(new TreeTableHeaderObject('Sno', 'sno', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('User Details', '=CONCAT($SS:Name: |||$VS:name|||<br/>|||Age: |||age * 2|||<br/> Created on |||$VD:dates.created:DD-MM HH-mm|||<br/> Joined on |||$VD:dates.joined:DD-MM HH-mm)', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Joined', '$VD:dates.joined:MMM-YYYY', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Salary VN', '$VN:salary', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Salary VND', '$VND:salary', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Salary Currency', '$VC:salary', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Age', 'age', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('D.no', 'address.dno', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('User Details', '=CONCAT($SS:Name: |||$VS:name|||<br/>|||Age: |||age * 2|||<br/> Created on |||$VD:dates.created:DD-MM HH-mm|||<br/> Joined on |||$VD:dates.joined:DD-MM HH-mm)', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Joined', '$VD:dates.joined:MMM-YYYY', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Salary VN', '$VN:salary', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Salary VND', '$VND:salary', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Salary Currency', '$VC:salary', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Age', 'age', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('D.no', 'address.dno', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('User Details', '=CONCAT($SS:Name: |||$VS:name|||<br/>|||Age: |||age * 2|||<br/> Created on |||$VD:dates.created:DD-MM HH-mm|||<br/> Joined on |||$VD:dates.joined:DD-MM HH-mm)', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Joined', '$VD:dates.joined:MMM-YYYY', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Salary VN', '$VN:salary', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Salary VND', '$VND:salary', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Salary Currency', '$VC:salary', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Age', 'age', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('D.no', 'address.dno', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('User Details', '=CONCAT($SS:Name: |||$VS:name|||<br/>|||Age: |||age * 2|||<br/> Created on |||$VD:dates.created:DD-MM HH-mm|||<br/> Joined on |||$VD:dates.joined:DD-MM HH-mm)', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Joined', '$VD:dates.joined:MMM-YYYY', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Salary VN', '$VN:salary', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Salary VND', '$VND:salary', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Salary Currency', '$VC:salary', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Age', 'age', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('D.no', 'address.dno', null, true));
    this.tableData.headers = this.tableHeaders;
  }

}
