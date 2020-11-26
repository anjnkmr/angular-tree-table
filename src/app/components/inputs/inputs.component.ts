import { Component, OnInit } from '@angular/core';
import { TreeTableData, TreeTableHeaderObject, TreeTableRow, TtDataType } from 'angular-tree-table';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

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
      const row = new TreeTableRow(i + '', { sno: i+1, name: 'John '+(i+1), age: i+1, dob: '2020-09-23'}, false, null);
      row.options = [
        {
          displayText: 'Died',
          value: 'died'
        },
        {
          displayText: 'Alive',
          value: 'alive'
        }
      ];
      if (i % 2 !== 0) {
        row.classes.push('even');
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
    const ageHeader = new TreeTableHeaderObject('Age', 'age', null, true);
    ageHeader.dataType = TtDataType.INPUT_NUMBER;
    ageHeader.dataTypeArgs = {'step': '0.001'};
    this.tableHeaders.push(ageHeader);
    const dob = new TreeTableHeaderObject('DOB', 'dob', null, true);
    dob.dataType = TtDataType.INPUT_DATE;
    this.tableHeaders.push(dob);
    const diedHeader = new TreeTableHeaderObject('Died', 'died', null, true);
    diedHeader.dataType = TtDataType.INPUT_SELECT;
    this.tableHeaders.push(diedHeader);
    this.tableData.headers = this.tableHeaders;
  }

}
