import {
  Component, OnInit, KeyValueDiffer, Input, KeyValueDiffers,
  KeyValueChanges, Output, EventEmitter, DoCheck, HostBinding
} from '@angular/core';
import * as moment_ from 'moment';
import { TreeTableData, TreeTableRow } from '../classes/tree-table-data';
import { TreeTableRowAction } from '../classes/tree-table-row-action';
import { TreeTableHeaderObject } from '../classes/tree-table-header-object';
import { TtDataType } from '../classes/tt-data-type';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { TreeTableRowActionType } from '../classes/tree-table-row-action-type';

declare var $: any;

const moment = moment_;

@Component({
  selector: 'angular-tree-table',
  templateUrl: './angular-tree-table.component.html',
  styleUrls: ['./angular-tree-table.component.scss']
})
export class AngularTreeTableComponent implements OnInit, DoCheck {

  @HostBinding('class') componentClass = '';
  private dataDiffers: KeyValueDiffer<string, any>;
  @Input() tableData = new TreeTableData();
  filteredData: TreeTableRow[] = [];
  className = '';
  randomInstance = null;
  dropdownHideListenerAdded = false;
  currentPageData = new TreeTableData();
  private columnFiltersDiffers: KeyValueDiffer<string, any>;
  json = null;
  extraInfoItemWidthPercent = 100;
  @Output() rowSelectionChanged = new EventEmitter<any[]>();
  @Output() inputRowSelectChanged = new EventEmitter<{ event: any, rowData: any, headerKey: string, value: any, level: number }>();
  @Output() inputRowTextChanged = new EventEmitter<{ event: any, rowData: any, headerKey: string, value: any, level: number }>();

  constructor(private differs: KeyValueDiffers) {
    this.json = JSON;
  }

  ngOnInit() {
    this.validateData();
    this.setPageData(this.tableData.page);
    this.componentClass = 'slevel-'+this.tableData.config.level + ' expandable-arrow-position-' + this.tableData.config.expandableArrowPlacement + ' expandable-type-' + this.tableData.config.expandableType;
    this.className = 'table-tree level' + this.tableData.config.level;
    if (this.tableData.config.level === 0) {
      console.warn('Initialize Search Functionality');
    }
    this.dataDiffers = this.differs.find(this.tableData).create();
    this.columnFiltersDiffers = this.differs.find(this.tableData.config.columnFilters).create();
    this.randomInstance = Math.floor(Math.random() * Math.floor(9999));
    this.extraInfoItemWidthPercent = 100 / this.tableData.config.extraInfos.length;

    this.redefineTableDataFunctions();
  }

  redefineTableDataFunctions() {
    const dis = this;
    this.tableData.allRowsCollapsed = (): boolean => {
      return dis.currentPageData.data.length === dis.currentPageData.data.filter(v => !v.expanded).length;
    };

    this.tableData.allRowsExpanded = (): boolean => {
      return dis.currentPageData.data.length === dis.currentPageData.data.filter(v => v.expanded).length;
    };
  }

  dataChanged(changes: KeyValueChanges<string, any>) {
    this.redefineTableDataFunctions();
    this.evaluateExpressionsInTableData();
    this.setPageData(this.tableData.page);
  }

  evaluateExpressionsInTableData() {
    for (let i = 0; i < this.tableData.data.length; i++) {
      const rowData = this.tableData.data[i];
      this.tableData.headers.forEach(header => {
        rowData.data[header.dataProperty] = this.evaluateConcat(header.dataProperty, rowData.data);
      });
    }
  }

  executeExpression(expression: string, data: any): any {
    let result = undefined;
    if (expression.indexOf(' - ') > -1) {
      const expressionParts = expression.split(' - ');
      for (let [index, expressionPart] of expressionParts.entries()) {
        expressionParts[index] = this.executeExpression(expressionPart, data);
      }
      expressionParts.forEach(v => {
        if (result === undefined) {
          result = v;
        } else {
          result = result - parseFloat(v);
        }
      });
      return result;
    } else if (expression.indexOf(' + ') > -1) {
      const expressionParts = expression.split(' + ');
      for (let [index, expressionPart] of expressionParts.entries()) {
        expressionParts[index] = this.executeExpression(expressionPart, data);
      }
      expressionParts.forEach(v => {
        if (result === undefined) {
          result = v;
        } else {
          result = result + parseFloat(v);
        }
      });
      return result;
    } else if (expression.indexOf(' * ') > -1) {
      const expressionParts = expression.split(' * ');
      for (let [index, expressionPart] of expressionParts.entries()) {
        expressionParts[index] = this.executeExpression(expressionPart, data);
      }
      expressionParts.forEach(v => {
        if (result === undefined) {
          result = v;
        } else {
          result = result * parseFloat(v);
        }
      });
      return result;
    } else if (expression.indexOf(' / ') > -1) {
      const expressionParts = expression.split(' / ');
      for (let [index, expressionPart] of expressionParts.entries()) {
        expressionParts[index] = this.executeExpression(expressionPart, data);
      }
      expressionParts.forEach(v => {
        if (result === undefined) {
          result = v;
        } else {
          result = result / parseFloat(v);
        }
      });
      return result;
    } else {
      return this.getValueWithPathFromObject(expression, data);
    }
  }

  evaluateConcat(expression: string, data: any) {
    if (data === undefined) {
      return undefined;
    }
    if (data[expression] !== undefined && data[expression] !== null) {
      return data[expression];
    }
    if (expression.startsWith('=CONCAT(') && expression.endsWith(')')) {
        expression = expression.replace('=CONCAT(', '');
        expression = expression.substring(0, expression.length - 1);
        const expressionParts = expression.split('|||');
        let result = '';
        expressionParts.forEach(v => {
            result += '' + this.executeExpression(v, data);
        });
        return result;
    } else {
        return this.executeExpression(expression, data);
    }
}

  /**
   * {
   *    "PO_NUMBER": "123456",
   *    "PO_TAX": [{
   *        "SGST": 15
   *    }]
   * }
   * 
   * PO_TAX.SGST
   * PO_TAX[0].SGST
   * PO_TAX[0].SGST + PO_TAX[0].CGST
   * =CONCAT('SGST: '|||PO_TAX[0].SGST + PO_TAX[0].CGST|||'\r\n')
   */
  getValueWithPathFromObject(path: string, data: any) {
    const pathParts = path.split('.');
    let result = data;
    for (let part of pathParts) {
      // $VA: Old Version support - which will automatically detect the data type
      if (!part.startsWith('$SS:') && !part.startsWith('$VS:') && !part.startsWith('$VD:')) {
        part = '$VA:' + part;
      }
      if (part.startsWith('$SS:')) {
        return part.replace('$SS:', '');
      }
      let partParts = part.split(':');
      let partVariableType = partParts[0];
      let partVariable = partParts[1];
      if (partVariableType === '$VA') {
        partVariable = part.replace('$VA:', '');
      }
      
      if (partVariable.endsWith(']')) {
        const subParts = partVariable.split('[');
        const arrayProperty = subParts[0];
        if (result[arrayProperty] === undefined || result[arrayProperty] === null || !Array.isArray(result[arrayProperty])) {
          return '';
        }
        const arrayIndex = parseInt(subParts[1].replace(']', ''));
        if (isNaN(arrayIndex)) {
          return '#ERR: NaN';
        }
        result = result[arrayProperty][arrayIndex];
      } else {
        if (result === undefined) {
          return '';
        }
        if (partVariable === ' ') {
          return ' ';
        }
        if (result[partVariable] === undefined) {
          if (partVariableType === '$VA') {
            return partVariable;
          } else {
            return '';
          }
        }
        if (partVariableType === '$VD') {
          const rawDate = result[partVariable];
          let dateFormat = partParts[2];
          if (dateFormat === undefined || dateFormat === null || dateFormat === '') {
            dateFormat = 'DD-MMM-YYYY';
          }
          result = moment(rawDate).format(dateFormat);
        } else {
          result = result[partVariable];
        }
      }
    }
    return result;
  }

  refreshTable() {
    this.setPageData(this.tableData.page);
  }

  ngDoCheck(): void {
    let changes = this.dataDiffers.diff(this.tableData);
    if (changes) {
      this.dataChanged(changes);
    }
    changes = this.columnFiltersDiffers.diff(this.tableData.config.columnFilters);
    if (changes) {
      this.dataChanged(changes);
    }
    if (!this.dropdownHideListenerAdded) {
      $('#dropDownVisCon' + this.randomInstance).on('hide.bs.dropdown', function (e) {
        if (e.clickEvent !== undefined) {
          if ($(e.clickEvent.target).hasClass('btnVis')) {
            return false;
          }
        }
        this.dropdownHideListenerAdded = true;
        return true;
      });
    }
  }

  expandRow(row: TreeTableRow) {
    row.expanded = true;
    row.children.config.level = this.tableData.config.level + 1;
    if (this.tableData.config.events.rowExpanded !== null) {
      this.tableData.config.events.rowExpanded(row, this.tableData);
    }
  }

  collapseRow(row: TreeTableRow) {
    row.expanded = false;
    this.tableData.isAllRowsExpanded = false;
    if (this.tableData.config.events.rowCollapsed !== null) {
      this.tableData.config.events.rowCollapsed(row, this.tableData);
    }
  }

  expandAllRows() {
    this.expandAllRowsInData(this.currentPageData.data);
    this.tableData.isAllRowsExpanded = true;
  }

  expandAllRowsInData(data: TreeTableRow[]) {
    for (const row of data) {
      if (row.expandable) {
        if (row.children !== null) {
          if (row.children.data !== null) {
            if (this.tableData.config.showExpandAllEmptyChildren) {
              // row.expanded = true;
              this.expandRow(row);
              this.expandAllRowsInData(row.children.data);
              row.children.isAllRowsExpanded = true;
            } else {
              if (row.children.data.length > 0) {
                // row.expanded = true;
                this.expandRow(row);
                this.expandAllRowsInData(row.children.data);
                row.children.isAllRowsExpanded = true;
              }
            }
          }
        }
      }
    }
  }

  collapseAllRows() {
    this.collapseAllRowsInData(this.currentPageData.data);
    this.tableData.isAllRowsExpanded = false;
  }

  collapseAllRowsInData(data: TreeTableRow[]) {
    for (const row of data) {
      if (row.expandable) {
        if (row.children !== null) {
          if (row.children.data !== null) {
            if (this.tableData.config.showExpandAllEmptyChildren) {
              // row.expanded = false;
              this.collapseRow(row);
              this.collapseAllRowsInData(row.children.data);
              row.children.isAllRowsExpanded = false;
            } else {
              if (row.children.data.length > 0) {
                // row.expanded = false;
                this.collapseRow(row);
                this.collapseAllRowsInData(row.children.data);
                row.children.isAllRowsExpanded = false;
              }
            }
          }
        }
      }
    }
  }

  toggleRow(row: TreeTableRow) {
    row.expanded ? this.collapseRow(row) : this.expandRow(row);
  }

  rowAction(row: TreeTableRow, action: TreeTableRowAction) {
    if (action.type === TreeTableRowActionType.TOGGLE_CHILD) {
      this.toggleRow(row);
    }
    if (action.action !== undefined && action.action !== null) {
      action.action.bind(action.context, row.data, action)();
    }
  }

  changePage(page: number) {
    if (this.tableData.page === page || page < 1) {
      return;
    }
    if (page > this.tableData.totalPagesCount()) {
      return;
    }
    // if (this.currentPageData.data.length < this.tableData.pageSize && this.tableData.page < page) {
    //   this.tableData.splashMessage('Reached last page');
    //   return;
    // }
    this.setPageData(page);
    this.collapseAllRows();
  }

  setPageData(pageNumber: number) {
    this.extraInfoItemWidthPercent = 100 / this.tableData.config.extraInfos.length;
    const dis = this;
    if (this.tableData.serverConfig.url !== undefined && this.tableData.serverConfig.url !== null) {
      if (pageNumber !== 1) {
        if ((pageNumber - 1) * this.tableData.pageSize > this.tableData.totalRowsCount) {
          console.warn('Invalid Page', (pageNumber - 1) * this.tableData.pageSize, this.tableData.totalRowsCount);
          return;
        }
      }
      this.tableData.page = pageNumber;
      this.tableData.loadData(rows => {
        // if (rows.length === 0) {
        //   dis.changePage(dis.tableData.page - 1);
        //   dis.tableData.splashMessage('Reached last page');
        //   console.warn('No data on the next page');
        //   // return;
        // }
        dis.filteredData.splice(0, this.filteredData.length);
        for (const row of rows) {
          dis.filteredData.push(row);
        }
        const rowsCount = dis.filteredData.length;
        // dis.tableData.pagesCount = Math.floor(rowsCount / this.tableData.pageSize);
        // if (dis.tableData.pageSize * dis.tableData.pagesCount < rowsCount) {
        //   dis.tableData.pagesCount++;
        // }
        dis.currentPageData.headers = dis.tableData.headers;
        const startIndex = (pageNumber - 1) * this.tableData.pageSize;
        if (this.currentPageData.data === undefined) {
          this.currentPageData.data = [];
        }
        this.currentPageData.data.splice(0, this.currentPageData.data.length);
        for (let i = 0; i < parseInt(this.tableData.pageSize + '', 10); i++) {
          // console.log('Adding Vvalue', this.filteredData[i], i);
          if (this.filteredData[i] !== null && this.filteredData[i] !== undefined) {
            this.currentPageData.data.push(this.filteredData[i]);
          }
        }
      });
    } else {
      dis.tableData.totalRowsCount = dis.tableData.data.length;
      if (pageNumber !== 1) {
        if ((pageNumber - 1) * this.tableData.pageSize > this.tableData.totalRowsCount) {
          console.warn('Invalid Page', (pageNumber - 1) * this.tableData.pageSize, this.tableData.totalRowsCount);
          return;
        }
      }
      this.tableData.page = pageNumber;
      this.filteredData.splice(0, this.filteredData.length);
      this.filteredData = this.tableData.data.filter((v) => {
        const keys = Object.keys(v.data);
        // Need to do calculations
        let matched = false;
        if (this.tableData.keyword !== undefined && this.tableData.keyword !== null && this.tableData.keyword.trim() !== '') {
          for (const key of keys) {
            if (v.data[key] === undefined || v.data[key] === null) {
              continue;
            }
            matched = v.data[key].toString().toLowerCase().indexOf(this.tableData.keyword.toLowerCase()) > -1;
            if (matched) {
              break;
            }
          }
        } else {
          matched = true;
        }
        if (matched && this.tableData.config.columnFilters !== undefined && this.tableData.config.columnFilters !== null) {
          for (const key of keys) {
            if (this.tableData.config.columnFilters[key] !== undefined &&
              this.tableData.config.columnFilters[key] !== null &&
              Array.isArray(this.tableData.config.columnFilters[key])) {
              if (v.data[key] === undefined || v.data[key] === null) {
                matched = false;
                break;
              }
              let orMatch = false;
              for (const orFilter of this.tableData.config.columnFilters[key]) {
                orMatch = v.data[key].toString().toLowerCase().indexOf(orFilter.toLowerCase()) > -1;
                if (orMatch) {
                  break;
                }
              }
              matched = orMatch;
              if (!matched) {
                break;
              }
            }
          }
        }
        if (matched && this.tableData.config.visibleColumnFilters !== undefined && this.tableData.config.visibleColumnFilters !== null) {
          for (const key of keys) {
            if (this.tableData.config.visibleColumnFilters[key] !== undefined &&
              this.tableData.config.visibleColumnFilters[key] !== null &&
              this.tableData.config.visibleColumnFilters[key].trim() !== '') {
              if (v.data[key] === undefined || v.data[key] === null) {
                matched = false;
                break;
              }
              matched = v.data[key].toString().toLowerCase().indexOf(this.tableData.config.visibleColumnFilters[key].toLowerCase()) > -1;
              if (!matched) {
                break;
              }
            }
          }
        }
        return matched;
      });
      const rowsCount = dis.filteredData.length;
      dis.tableData.filteredRowsCount = rowsCount;
      // dis.tableData.pagesCount = Math.floor(rowsCount / this.tableData.pageSize);
      // if (dis.tableData.pageSize * dis.tableData.pagesCount < rowsCount) {
      //   dis.tableData.pagesCount++;
      // }
      dis.currentPageData.headers = dis.tableData.headers;
      const startIndex = (pageNumber - 1) * this.tableData.pageSize;
      if (this.currentPageData.data === undefined) {
        this.currentPageData.data = [];
      }
      this.currentPageData.data.splice(0, this.currentPageData.data.length);
      for (let i = startIndex; i < parseInt(startIndex + '', 10) + parseInt(this.tableData.pageSize + '', 10); i++) {
        if (this.filteredData[i] !== null && this.filteredData[i] !== undefined) {
          // Inserting into current page
          this.currentPageData.data.push(this.filteredData[i]);
        }
      }
      for (let rw of this.currentPageData.data) {
        if (rw.defaultExpand) {
          this.expandRow(rw);
        }
      }
    }
  }

  clickableClicked(row: TreeTableRow, dataProperty: string) {
    if (typeof row.clickables[dataProperty] === 'string') {
      if (row.clickables[dataProperty] === TreeTableRowActionType.TOGGLE_CHILD.toString()) {
        this.toggleRow(row);
        return;
      }
    }
    if (row.clickablesContext !== null) {
      row.clickables[dataProperty].bind(row.clickablesContext, row.data, dataProperty)();
    } else {
      row.clickables[dataProperty](row.data, dataProperty);
    }
  }

  validateData() {
    console.warn('Data Schema need to be validated');
  }

  columnSearchChanged(dataProperty: string) {
    this.setPageData(1);
  }

  pageNumbers() {
    const pageNumbers = [];
    const limit = 2;
    const maxLimit = 4;
    for (let p = this.tableData.page - limit; p < this.tableData.page; p++) {
      if (p > 0) {
        pageNumbers.push(p);
      }
    }
    const unfilledCount = limit - pageNumbers.length;
    for (let q = this.tableData.page; q <= this.tableData.page + unfilledCount + limit; q++) {
      if (q <= this.tableData.totalPagesCount()) {
        pageNumbers.push(q);
      }
    }
    if (pageNumbers.length < maxLimit) {
      for (let p = this.tableData.page - limit * 2; p < this.tableData.page - limit; p++) {
        if (p > 0) {
          pageNumbers.unshift(p);
        }
      }
    }
    return pageNumbers;
  }

  exportExcelLocal() {
    const dataRows = [];
    let dataRowsSource = this.tableData.data;
    if (this.tableData.config.excelExportOnlyFilteredRows) {
      dataRowsSource = this.filteredData;
    }
    for (let d of dataRowsSource) {
      const obj = {};
      for (let h of this.tableData.headers) {
        obj[h.title] = d.data[h.dataProperty];
      }
      dataRows.push(obj);
    }
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataRows);
    const wb: XLSX.WorkBook = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, this.tableData.config.excelExportFileName + fileExtension);
  }

  sortColumn(header: TreeTableHeaderObject) {
    const propertyName = header.dataProperty;
    if (this.tableData.config.sortedColumn[propertyName] === undefined) {
      this.tableData.config.sortedColumn = {};
      this.tableData.config.sortedColumn[propertyName] = 'DESC';
      this.sortDescend(header);
    } else if (this.tableData.config.sortedColumn[propertyName] === 'DESC') {
      this.tableData.config.sortedColumn[propertyName] = 'ASC';
      this.sortAscend(header);
    } else {
      delete this.tableData.config.sortedColumn[propertyName];
    }
  }

  sortAscend(header: TreeTableHeaderObject) {
    const propertyName = header.dataProperty;
    if (header.dataType === TtDataType.NUMBER) {
      this.tableData.data.sort((a, b) => {
        if (parseFloat(a.data[propertyName]) < parseFloat(b.data[propertyName])) {
          return -1;
        } else if (parseFloat(a.data[propertyName]) > parseFloat(b.data[propertyName])) {
          return 1;
        }
        return 0;
      });
    } else if (header.dataType === TtDataType.DATE) {
      this.tableData.data.sort((a, b) => {
        if (moment(a.data[propertyName]).toDate().getTime() < moment(b.data[propertyName]).toDate().getTime()) {
          return -1;
        } else if (moment(a.data[propertyName]).toDate().getTime() > moment(b.data[propertyName]).toDate().getTime()) {
          return 1;
        }
        return 0;
      });
    } else {
      this.tableData.data.sort((a, b) => {
        if (a.data[propertyName] < b.data[propertyName]) {
          return -1;
        } else if (a.data[propertyName] > b.data[propertyName]) {
          return 1;
        }
        return 0;
      });
    }
    this.setPageData(this.tableData.page);
  }

  sortDescend(header: TreeTableHeaderObject) {
    const propertyName = header.dataProperty;
    if (header.dataType === TtDataType.NUMBER) {
      this.tableData.data.sort((a, b) => {
        if (parseFloat(a.data[propertyName]) < parseFloat(b.data[propertyName])) {
          return 1;
        } else if (parseFloat(a.data[propertyName]) > parseFloat(b.data[propertyName])) {
          return -1;
        }
        return 0;
      });
    } else if (header.dataType === TtDataType.DATE) {
      this.tableData.data.sort((a, b) => {
        if (moment(a.data[propertyName]).toDate().getTime() < moment(b.data[propertyName]).toDate().getTime()) {
          return 1;
        } else if (moment(a.data[propertyName]).toDate().getTime() > moment(b.data[propertyName]).toDate().getTime()) {
          return -1;
        }
        return 0;
      });
    } else {
      this.tableData.data.sort((a, b) => {
        if (a.data[propertyName] < b.data[propertyName]) {
          return 1;
        } else if (a.data[propertyName] > b.data[propertyName]) {
          return -1;
        }
        return 0;
      });
    }
    this.setPageData(this.tableData.page);
  }

  search() {
    this.setPageData(1);
  }

  pageSizeChanged() {
    this.setPageData(1);
  }

  excelExportClicked() {
    if (this.tableData.serverConfig !== undefined && this.tableData.serverConfig !== null && this.tableData.serverConfig.excelExportUrl !== undefined && this.tableData.serverConfig.excelExportUrl !== null) {
      this.tableData.loadExcelData();
    } else {
      this.exportExcelLocal();
    }
  }

  getPageTo() {
    let to = this.tableData.pageSize * this.tableData.page;
    if (to > this.tableData.filteredRowsCount) {
      to = this.tableData.filteredRowsCount;
    }
    return to;
  }

  isAllRowsSelected(header: TreeTableHeaderObject): boolean {
    return this.tableData.data.filter(v => v.selected).length === this.tableData.data.length;
  }

  toggleSelectAllRows(header: TreeTableHeaderObject) {
    this.isAllRowsSelected(header) ? this.deselectAllRows(header) : this.selectAllRows(header);
  }

  private selectAllRows(header: TreeTableHeaderObject) {
    this.tableData.data = this.tableData.data.map(v => { v.selected = true; return v; });
    this.updateHost();
  }

  private deselectAllRows(header: TreeTableHeaderObject) {
    this.tableData.data = this.tableData.data.map(v => { v.selected = false; return v; });
    this.updateHost();
  }

  toggleSelectRow(row: TreeTableRow) {
    row.selected = !row.selected;
    this.updateHost();
  }

  getRowClass(row: TreeTableRow) {
    let classes = { 'expanded-row': row.expanded, 'collapsed-row': !row.expanded, 'selected': 'row.selected', 'unselected': '!row.selected' };
    for (const cls of row.classes) {
      classes[cls] = true;
    }
    return classes;
  }

  getSelectedRows() {
    const rows = [...this.tableData.data.filter(v => {
      if (v.selected) {
        return v.data;
      }
    })];
    return rows.map(v => v.data);
  }

  childRowSelectionChanged(data: TreeTableRow[]) {
    if (this.rowSelectionChanged !== undefined && this.rowSelectionChanged !== null) {
      this.rowSelectionChanged.emit(data);
    }
  }

  updateHost() {
    if (this.rowSelectionChanged !== undefined && this.rowSelectionChanged !== null) {
      this.rowSelectionChanged.emit(this.getSelectedRows());
    }
  }

  inputRowSelectChangedInternal(event: any, rowData: any, headerKey: string, value: any, level: number) {
    this.inputRowSelectChanged.emit({ event, rowData, headerKey, value, level });
  }

  inputRowTextChangedInternal(event: any, rowData: any, headerKey: string, value: any, level: number) {
    this.inputRowTextChanged.emit({ event, rowData, headerKey, value, level });
  }

  inputRowSelectChangedChild(data: { event: any, rowData: any, headerKey: string, value: any, level: number }) {
    this.inputRowSelectChanged.emit(data);
  }

  inputRowTextChangedChild(data: { event: any, rowData: any, headerKey: string, value: any, level: number }) {
    this.inputRowTextChanged.emit(data);
  }

}
