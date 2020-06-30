import { Component, OnInit } from '@angular/core';
import { TreeTableData, TreeTableHeaderObject, TreeTableRow, ExpandableType, TreeTableDataConfig, ExpandableArrowPlacement } from 'angular-tree-table';
import { HttpClient } from '@angular/common/http';

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
    columnVisibility: false, // To show columns visibility options on table
    columnVisibilityDropDown: true, // To show columns visibility options on table as a popover
    expandableType: ExpandableType.DIFFERENT_HEADERS,
    expandableArrowPlacement: ExpandableArrowPlacement.FIRST_COLUMN
  };
  tableHeaders: TreeTableHeaderObject[] = [];
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Kumuliert', 'Gesamt'];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let data = [];
    this.tableData = new TreeTableData(this.tableConfig);
    this.populateHeaders();
    this.http.get('http://168.62.213.4:80/message/pdsdata/versand_monitor').subscribe(resp => {
      console.log('resp', resp);
      for (let level1Key in resp['messageResult']) {
        let rowData = resp['messageResult'][level1Key];
        if (rowData['null'] === undefined) {
          if (Object.keys(rowData).length > 0) {
            rowData['null'] = rowData[Object.keys(rowData)[0]];
          }
        }
        let row = new TreeTableRow(level1Key, { name: level1Key, data: this.addMissedMonths(rowData['null']['null']['null']) }, true, undefined);
        row.defaultExpand = true;

        const subConfig = JSON.parse(JSON.stringify(this.tableConfig));
        subConfig.expandableType = ExpandableType.SAME_HEADERS;
        const subTableData = new TreeTableData(subConfig);
        const subData = [];
        for (let level2Key in rowData) {
          if (level2Key === 'null') {
            continue;
          }
          let subRowData = rowData[level2Key];
          let subRow = new TreeTableRow(level2Key, { name: level2Key, data: this.addMissedMonths(subRowData['null']['null']) }, true, undefined);
          
          const subSubConfig = JSON.parse(JSON.stringify(subConfig));
          subSubConfig.expandableType = ExpandableType.SAME_HEADERS;
          const subSubTableData = new TreeTableData(subSubConfig);
          const subSubData = [];
          for (let level3Key in subRowData) {
            if (level3Key === 'null') {
              continue;
            }
            let subSubRowData = subRowData[level3Key];
            let subSubRow = new TreeTableRow(level3Key, { name: level3Key, data: this.addMissedMonths(subSubRowData['null']) }, true, undefined);

            const subSubSubConfig = JSON.parse(JSON.stringify(subSubConfig));
            subSubSubConfig.expandableType = ExpandableType.SAME_HEADERS;
            const subSubSubTableData = new TreeTableData(subSubSubConfig);
            const subSubSubData = [];
            for (let accountName in subSubRowData) {
              if (accountName === 'null') {
                continue;
              }
              let subSubSubRowData = subSubRowData[accountName];
              let subSubSubRow = new TreeTableRow(accountName, { name: accountName, data: this.addMissedMonths(subSubSubRowData) }, false, undefined);
              subSubSubData.push(subSubSubRow);
            }

            subSubSubTableData.headers = this.tableHeaders;
            subSubSubTableData.data = subSubSubData;
            subSubRow.children = subSubSubTableData;
            subSubData.push(subSubRow);
          }

          subSubTableData.headers = this.tableHeaders;
          subSubTableData.data = subSubData;
          if (subSubTableData.data.length > 0) {
            subRow.defaultExpand = true;
          }
          subRow.children = subSubTableData;
          subData.push(subRow);

        }
        subTableData.headers = this.tableHeaders;
        subTableData.data = subData;
        row.children = subTableData;

        data.push(row);
        data = data.sort((v1: TreeTableRow, v2: TreeTableRow) => {
          try {
            if (v1.id.split('-').length > 1 && v2.id.split('-').length > 1) {
              let y1 = v1.id.split('-')[1];
              let y2 = v2.id.split('-')[1];
              return parseInt(y2) - parseInt(y1);

            }
            return 0;
          } catch (e) {
            return 0;
          }
        })
      }
      this.tableData.data = data;
    });
  }

  addMissedMonths(data: any) {
    for (let month of this.months) {
      if (data[month] === undefined) {
        data[month] = 0;
      }
    }
    return data;
  }

  populateHeaders() {
    this.tableHeaders.splice(0, this.tableHeaders.length);
    this.tableHeaders.push(new TreeTableHeaderObject('Name', 'name', null, true));
    for (let month of this.months) {
      this.tableHeaders.push(new TreeTableHeaderObject(month, 'data.' + month, null, true));
    }
    this.tableData.headers = this.tableHeaders;
  }
}
