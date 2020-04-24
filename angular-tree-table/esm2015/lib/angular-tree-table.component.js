/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, KeyValueDiffers, Output, EventEmitter } from '@angular/core';
import * as moment_ from 'moment';
import { TreeTableData } from '../classes/tree-table-data';
import { TtDataType } from '../classes/tt-data-type';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { TreeTableRowActionType } from '../classes/tree-table-row-action-type';
/** @type {?} */
const moment = moment_;
export class AngularTreeTableComponent {
    /**
     * @param {?} differs
     */
    constructor(differs) {
        this.differs = differs;
        this.tableData = new TreeTableData();
        this.filteredData = [];
        this.className = '';
        this.randomInstance = null;
        this.dropdownHideListenerAdded = false;
        this.currentPageData = new TreeTableData();
        this.json = null;
        this.extraInfoItemWidthPercent = 100;
        this.rowSelectionChanged = new EventEmitter();
        this.inputRowSelectChanged = new EventEmitter();
        this.inputRowTextChanged = new EventEmitter();
        this.json = JSON;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validateData();
        this.setPageData(this.tableData.page);
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
    /**
     * @return {?}
     */
    redefineTableDataFunctions() {
        /** @type {?} */
        const dis = this;
        this.tableData.allRowsCollapsed = (/**
         * @return {?}
         */
        () => {
            return dis.currentPageData.data.length === dis.currentPageData.data.filter((/**
             * @param {?} v
             * @return {?}
             */
            v => !v.expanded)).length;
        });
        this.tableData.allRowsExpanded = (/**
         * @return {?}
         */
        () => {
            return dis.currentPageData.data.length === dis.currentPageData.data.filter((/**
             * @param {?} v
             * @return {?}
             */
            v => v.expanded)).length;
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    dataChanged(changes) {
        this.redefineTableDataFunctions();
        this.setPageData(this.tableData.page);
    }
    /**
     * @return {?}
     */
    refreshTable() {
        this.setPageData(this.tableData.page);
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        /** @type {?} */
        let changes = this.dataDiffers.diff(this.tableData);
        if (changes) {
            this.dataChanged(changes);
        }
        changes = this.columnFiltersDiffers.diff(this.tableData.config.columnFilters);
        if (changes) {
            this.dataChanged(changes);
        }
        if (!this.dropdownHideListenerAdded) {
            $('#dropDownVisCon' + this.randomInstance).on('hide.bs.dropdown', (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                if (e.clickEvent !== undefined) {
                    if ($(e.clickEvent.target).hasClass('btnVis')) {
                        return false;
                    }
                }
                this.dropdownHideListenerAdded = true;
                return true;
            }));
        }
    }
    /**
     * @param {?} row
     * @return {?}
     */
    expandRow(row) {
        row.expanded = true;
        if (this.tableData.config.events.rowExpanded !== null) {
            this.tableData.config.events.rowExpanded(row, this.tableData);
        }
    }
    /**
     * @param {?} row
     * @return {?}
     */
    collapseRow(row) {
        row.expanded = false;
        this.tableData.isAllRowsExpanded = false;
        if (this.tableData.config.events.rowCollapsed !== null) {
            this.tableData.config.events.rowCollapsed(row, this.tableData);
        }
    }
    /**
     * @return {?}
     */
    expandAllRows() {
        this.expandAllRowsInData(this.currentPageData.data);
        this.tableData.isAllRowsExpanded = true;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    expandAllRowsInData(data) {
        for (const row of data) {
            if (row.expandable) {
                if (row.children !== null) {
                    if (row.children.data !== null) {
                        if (this.tableData.config.showExpandAllEmptyChildren) {
                            // row.expanded = true;
                            this.expandRow(row);
                            this.expandAllRowsInData(row.children.data);
                            row.children.isAllRowsExpanded = true;
                        }
                        else {
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
    /**
     * @return {?}
     */
    collapseAllRows() {
        this.collapseAllRowsInData(this.currentPageData.data);
        this.tableData.isAllRowsExpanded = false;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    collapseAllRowsInData(data) {
        for (const row of data) {
            if (row.expandable) {
                if (row.children !== null) {
                    if (row.children.data !== null) {
                        if (this.tableData.config.showExpandAllEmptyChildren) {
                            // row.expanded = false;
                            this.collapseRow(row);
                            this.collapseAllRowsInData(row.children.data);
                            row.children.isAllRowsExpanded = false;
                        }
                        else {
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
    /**
     * @param {?} row
     * @return {?}
     */
    toggleRow(row) {
        row.expanded ? this.collapseRow(row) : this.expandRow(row);
    }
    /**
     * @param {?} row
     * @param {?} action
     * @return {?}
     */
    rowAction(row, action) {
        if (action.type === TreeTableRowActionType.TOGGLE_CHILD) {
            this.toggleRow(row);
        }
        if (action.action !== undefined && action.action !== null) {
            action.action.bind(action.context, row.data, action)();
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    changePage(page) {
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
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    setPageData(pageNumber) {
        this.extraInfoItemWidthPercent = 100 / this.tableData.config.extraInfos.length;
        /** @type {?} */
        const dis = this;
        if (this.tableData.serverConfig.url !== undefined && this.tableData.serverConfig.url !== null) {
            if (pageNumber !== 1) {
                if ((pageNumber - 1) * this.tableData.pageSize > this.tableData.totalRowsCount) {
                    console.warn('Invalid Page', (pageNumber - 1) * this.tableData.pageSize, this.tableData.totalRowsCount);
                    return;
                }
            }
            this.tableData.page = pageNumber;
            this.tableData.loadData((/**
             * @param {?} rows
             * @return {?}
             */
            rows => {
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
                /** @type {?} */
                const rowsCount = dis.filteredData.length;
                // dis.tableData.pagesCount = Math.floor(rowsCount / this.tableData.pageSize);
                // if (dis.tableData.pageSize * dis.tableData.pagesCount < rowsCount) {
                //   dis.tableData.pagesCount++;
                // }
                dis.currentPageData.headers = dis.tableData.headers;
                /** @type {?} */
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
            }));
        }
        else {
            dis.tableData.totalRowsCount = dis.tableData.data.length;
            if (pageNumber !== 1) {
                if ((pageNumber - 1) * this.tableData.pageSize > this.tableData.totalRowsCount) {
                    console.warn('Invalid Page', (pageNumber - 1) * this.tableData.pageSize, this.tableData.totalRowsCount);
                    return;
                }
            }
            this.tableData.page = pageNumber;
            this.filteredData.splice(0, this.filteredData.length);
            this.filteredData = this.tableData.data.filter((/**
             * @param {?} v
             * @return {?}
             */
            (v) => {
                /** @type {?} */
                const keys = Object.keys(v.data);
                /** @type {?} */
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
                }
                else {
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
                            /** @type {?} */
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
            }));
            /** @type {?} */
            const rowsCount = dis.filteredData.length;
            dis.tableData.filteredRowsCount = rowsCount;
            // dis.tableData.pagesCount = Math.floor(rowsCount / this.tableData.pageSize);
            // if (dis.tableData.pageSize * dis.tableData.pagesCount < rowsCount) {
            //   dis.tableData.pagesCount++;
            // }
            dis.currentPageData.headers = dis.tableData.headers;
            /** @type {?} */
            const startIndex = (pageNumber - 1) * this.tableData.pageSize;
            if (this.currentPageData.data === undefined) {
                this.currentPageData.data = [];
            }
            this.currentPageData.data.splice(0, this.currentPageData.data.length);
            for (let i = startIndex; i < parseInt(startIndex + '', 10) + parseInt(this.tableData.pageSize + '', 10); i++) {
                if (this.filteredData[i] !== null && this.filteredData[i] !== undefined) {
                    this.currentPageData.data.push(this.filteredData[i]);
                }
            }
        }
    }
    /**
     * @param {?} row
     * @param {?} dataProperty
     * @return {?}
     */
    clickableClicked(row, dataProperty) {
        if (typeof row.clickables[dataProperty] === 'string') {
            if (row.clickables[dataProperty] === TreeTableRowActionType.TOGGLE_CHILD.toString()) {
                this.toggleRow(row);
                return;
            }
        }
        if (row.clickablesContext !== null) {
            row.clickables[dataProperty].bind(row.clickablesContext, row.data, dataProperty)();
        }
        else {
            row.clickables[dataProperty](row.data, dataProperty);
        }
    }
    /**
     * @return {?}
     */
    validateData() {
        console.warn('Data Schema need to be validated');
    }
    /**
     * @param {?} dataProperty
     * @return {?}
     */
    columnSearchChanged(dataProperty) {
        this.setPageData(1);
    }
    /**
     * @return {?}
     */
    pageNumbers() {
        /** @type {?} */
        const pageNumbers = [];
        /** @type {?} */
        const limit = 2;
        /** @type {?} */
        const maxLimit = 4;
        for (let p = this.tableData.page - limit; p < this.tableData.page; p++) {
            if (p > 0) {
                pageNumbers.push(p);
            }
        }
        /** @type {?} */
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
    /**
     * @return {?}
     */
    exportExcelLocal() {
        /** @type {?} */
        const dataRows = [];
        for (let d of this.tableData.data) {
            /** @type {?} */
            const obj = {};
            for (let h of this.tableData.headers) {
                obj[h.title] = d.data[h.dataProperty];
            }
            dataRows.push(obj);
        }
        /** @type {?} */
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        /** @type {?} */
        const fileExtension = '.xlsx';
        /** @type {?} */
        const ws = XLSX.utils.json_to_sheet(dataRows);
        /** @type {?} */
        const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
        /** @type {?} */
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        /** @type {?} */
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, this.tableData.config.excelExportFileName + fileExtension);
    }
    /**
     * @param {?} header
     * @return {?}
     */
    sortColumn(header) {
        /** @type {?} */
        const propertyName = header.dataProperty;
        if (this.tableData.config.sortedColumn[propertyName] === undefined) {
            this.tableData.config.sortedColumn = {};
            this.tableData.config.sortedColumn[propertyName] = 'DESC';
            this.sortDescend(header);
        }
        else if (this.tableData.config.sortedColumn[propertyName] === 'DESC') {
            this.tableData.config.sortedColumn[propertyName] = 'ASC';
            this.sortAscend(header);
        }
        else {
            delete this.tableData.config.sortedColumn[propertyName];
        }
    }
    /**
     * @param {?} header
     * @return {?}
     */
    sortAscend(header) {
        /** @type {?} */
        const propertyName = header.dataProperty;
        if (header.dataType === TtDataType.NUMBER) {
            this.tableData.data.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                if (parseFloat(a.data[propertyName]) < parseFloat(b.data[propertyName])) {
                    return -1;
                }
                else if (parseFloat(a.data[propertyName]) > parseFloat(b.data[propertyName])) {
                    return 1;
                }
                return 0;
            }));
        }
        else if (header.dataType === TtDataType.DATE) {
            this.tableData.data.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                if (moment(a.data[propertyName]).toDate().getTime() < moment(b.data[propertyName]).toDate().getTime()) {
                    return -1;
                }
                else if (moment(a.data[propertyName]).toDate().getTime() > moment(b.data[propertyName]).toDate().getTime()) {
                    return 1;
                }
                return 0;
            }));
        }
        else {
            this.tableData.data.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                if (a.data[propertyName] < b.data[propertyName]) {
                    return -1;
                }
                else if (a.data[propertyName] > b.data[propertyName]) {
                    return 1;
                }
                return 0;
            }));
        }
        this.setPageData(this.tableData.page);
    }
    /**
     * @param {?} header
     * @return {?}
     */
    sortDescend(header) {
        /** @type {?} */
        const propertyName = header.dataProperty;
        if (header.dataType === TtDataType.NUMBER) {
            this.tableData.data.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                if (parseFloat(a.data[propertyName]) < parseFloat(b.data[propertyName])) {
                    return 1;
                }
                else if (parseFloat(a.data[propertyName]) > parseFloat(b.data[propertyName])) {
                    return -1;
                }
                return 0;
            }));
        }
        else if (header.dataType === TtDataType.DATE) {
            this.tableData.data.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                if (moment(a.data[propertyName]).toDate().getTime() < moment(b.data[propertyName]).toDate().getTime()) {
                    return 1;
                }
                else if (moment(a.data[propertyName]).toDate().getTime() > moment(b.data[propertyName]).toDate().getTime()) {
                    return -1;
                }
                return 0;
            }));
        }
        else {
            this.tableData.data.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                if (a.data[propertyName] < b.data[propertyName]) {
                    return 1;
                }
                else if (a.data[propertyName] > b.data[propertyName]) {
                    return -1;
                }
                return 0;
            }));
        }
        this.setPageData(this.tableData.page);
    }
    /**
     * @return {?}
     */
    search() {
        this.setPageData(1);
    }
    /**
     * @return {?}
     */
    pageSizeChanged() {
        this.setPageData(1);
    }
    /**
     * @return {?}
     */
    excelExportClicked() {
        if (this.tableData.serverConfig !== undefined && this.tableData.serverConfig !== null && this.tableData.serverConfig.excelExportUrl !== undefined && this.tableData.serverConfig.excelExportUrl !== null) {
            this.tableData.loadExcelData();
        }
        else {
            this.exportExcelLocal();
        }
    }
    /**
     * @return {?}
     */
    getPageTo() {
        /** @type {?} */
        let to = this.tableData.pageSize * this.tableData.page;
        if (to > this.tableData.filteredRowsCount) {
            to = this.tableData.filteredRowsCount;
        }
        return to;
    }
    /**
     * @param {?} header
     * @return {?}
     */
    isAllRowsSelected(header) {
        return this.tableData.data.filter((/**
         * @param {?} v
         * @return {?}
         */
        v => v.selected)).length === this.tableData.data.length;
    }
    /**
     * @param {?} header
     * @return {?}
     */
    toggleSelectAllRows(header) {
        this.isAllRowsSelected(header) ? this.deselectAllRows(header) : this.selectAllRows(header);
    }
    /**
     * @private
     * @param {?} header
     * @return {?}
     */
    selectAllRows(header) {
        this.tableData.data = this.tableData.data.map((/**
         * @param {?} v
         * @return {?}
         */
        v => { v.selected = true; return v; }));
        this.updateHost();
    }
    /**
     * @private
     * @param {?} header
     * @return {?}
     */
    deselectAllRows(header) {
        this.tableData.data = this.tableData.data.map((/**
         * @param {?} v
         * @return {?}
         */
        v => { v.selected = false; return v; }));
        this.updateHost();
    }
    /**
     * @param {?} row
     * @return {?}
     */
    toggleSelectRow(row) {
        row.selected = !row.selected;
        this.updateHost();
    }
    /**
     * @param {?} row
     * @return {?}
     */
    getRowClass(row) {
        /** @type {?} */
        let classes = { 'expanded-row': row.expanded, 'collapsed-row': !row.expanded, 'selected': 'row.selected', 'unselected': '!row.selected' };
        for (const cls of row.classes) {
            classes[cls] = true;
        }
        return classes;
    }
    /**
     * @return {?}
     */
    getSelectedRows() {
        /** @type {?} */
        const rows = [...this.tableData.data.filter((/**
             * @param {?} v
             * @return {?}
             */
            v => {
                if (v.selected) {
                    return v.data;
                }
            }))];
        return rows.map((/**
         * @param {?} v
         * @return {?}
         */
        v => v.data));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    childRowSelectionChanged(data) {
        if (this.rowSelectionChanged !== undefined && this.rowSelectionChanged !== null) {
            this.rowSelectionChanged.emit(data);
        }
    }
    /**
     * @return {?}
     */
    updateHost() {
        if (this.rowSelectionChanged !== undefined && this.rowSelectionChanged !== null) {
            this.rowSelectionChanged.emit(this.getSelectedRows());
        }
    }
    /**
     * @param {?} event
     * @param {?} rowData
     * @param {?} headerKey
     * @param {?} value
     * @param {?} level
     * @return {?}
     */
    inputRowSelectChangedInternal(event, rowData, headerKey, value, level) {
        this.inputRowSelectChanged.emit({ event, rowData, headerKey, value, level });
    }
    /**
     * @param {?} event
     * @param {?} rowData
     * @param {?} headerKey
     * @param {?} value
     * @param {?} level
     * @return {?}
     */
    inputRowTextChangedInternal(event, rowData, headerKey, value, level) {
        this.inputRowTextChanged.emit({ event, rowData, headerKey, value, level });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    inputRowSelectChangedChild(data) {
        this.inputRowSelectChanged.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    inputRowTextChangedChild(data) {
        this.inputRowTextChanged.emit(data);
    }
}
AngularTreeTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'angular-tree-table',
                template: "<div class=\"tree-table\">\r\n  <div class=\"tree-table-loading\" [ngClass]=\"tableData.isLoading ? 'on' : 'off'\">\r\n    <div class=\"loader-msg\">\r\n      Loading...\r\n    </div>\r\n  </div>\r\n  <div class=\"action-container\">\r\n    <div class=\"search-section\" *ngIf=\"tableData.config.showPageLengthDropdown || tableData.config.commonSearch || tableData.config.excelExportButton\">\r\n      <div class=\"first-part\" *ngIf=\"tableData.config.showPageLengthDropdown\">\r\n        Show <select class=\"select-page-size form-control form-control-sm\" [(ngModel)]=\"tableData.pageSize\"\r\n          (change)=\"pageSizeChanged()\">\r\n          <option value=\"{{p}}\" *ngFor=\"let p of tableData.config.pageSizes\">{{p}}</option>\r\n        </select> Entries\r\n      </div>\r\n      <div class=\"second-part\">\r\n        <input *ngIf=\"tableData.config.commonSearch\" type=\"text\"\r\n          class=\"form-control form-control-sm text-center col-3 float-right\" [(ngModel)]=\"tableData.keyword\"\r\n          (keyup)=\"search()\" (change)=\"search()\" placeholder=\"Search\" />\r\n        <button *ngIf=\"tableData.config.excelExportButton\"\r\n          class=\"btn btn-sm btn-primary export excelExportButton float-right\" (click)=\"excelExportClicked()\">{{tableData.config.excelExportButtonText}}</button>\r\n        <div class=\"dropdown dropleft\" id=\"dropDownVisCon{{randomInstance}}\">\r\n          <button id=\"dropDownVis{{randomInstance}}\" *ngIf=\"tableData.config.columnVisibilityDropDown\"\r\n            class=\"btn btn-sm btn-secondary dropDownBtn v-elipses float-right dropdown-toggle\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">\u22EE</button>\r\n            <div class=\"dropDownBtn-data dropdown-menu\">\r\n              <button class=\"btnVis btn-sm btn\" *ngFor=\"let header of currentPageData.headers\"\r\n                [ngClass]=\"header.show ? 'active': ''\" (click)=\" header.show = !header.show;\">{{header.title}}</button>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"buttons-section\" *ngIf=\"tableData.config.columnVisibility\">\r\n      <div class=\"column-visibility\" *ngIf=\"tableData.config.columnVisibility\">\r\n        <button class=\"btnVis\" *ngFor=\"let header of currentPageData.headers\" [ngClass]=\"header.show ? 'active': ''\"\r\n          (click)=\"header.show = !header.show\">{{header.title}}</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"extraInfo-section\" *ngIf=\"tableData.config.extraInfos.length > 0\">\r\n      <div class=\"extraInfo\" [style.width]=\"extraInfoItemWidthPercent + '%'\" *ngFor=\"let exInfo of tableData.config.extraInfos\">\r\n        {{exInfo[0]}}: {{exInfo[1]}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <table [class]=\"className + ' ' + tableData.config.customClassName + ' ' + tableData.config.fullClassName\">\r\n    <thead class=\"ds2-table-element--head-row thead-sm\" *ngIf=\"tableData.config.showTableHeaders\">\r\n      <tr>\r\n        <th *ngIf=\"!tableData.config.showExpandAllArrows\" [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></th>\r\n        <th *ngIf=\"tableData.config.showExpandAllArrows\" [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\">\r\n          <button class=\"btn btn-secondary btn-sm collapsed-row-button\" (click)=\"expandAllRows()\" \r\n                      *ngIf=\"!tableData.isAllRowsExpanded\"></button>\r\n              <button class=\"btn btn-secondary btn-sm expanded-row-button\" (click)=\"collapseAllRows()\" \r\n                      *ngIf=\"tableData.isAllRowsExpanded\"></button>\r\n        </th>\r\n        <ng-container *ngFor=\"let header of currentPageData.headers\">\r\n          <th *ngIf=\"header.show && header.dataType !== 'SELECT'\" [ngClass]=\"header.style\" (click)=\"sortColumn(header)\">{{header.title}}\r\n            <i [ngClass]=\"tableData.config.sortAscClassName+' sort-right-align'\" *ngIf=\"tableData.config.sortedColumn[header.dataProperty] === 'ASC'\"></i>\r\n            <i [ngClass]=\"tableData.config.sortDescClassName+' sort-right-align'\" *ngIf=\"tableData.config.sortedColumn[header.dataProperty] === 'DESC'\"></i>\r\n            <i [ngClass]=\"tableData.config.sortNothingClassName+' sort-right-align'\" *ngIf=\"tableData.config.sortedColumn[header.dataProperty] !== 'DESC' && tableData.config.sortedColumn[header.dataProperty] !== 'ASC'\"></i>\r\n          </th>\r\n          <th *ngIf=\"header.show && header.dataType === 'SELECT'\" [ngClass]=\"header.style\" (click)=\"toggleSelectAllRows(header)\">\r\n            <input type=\"checkbox\" class=\"header-check-box select-all\" [checked]=\"isAllRowsSelected(header) ? 'checked' : ''\"/> {{header.title}}\r\n          </th>\r\n        </ng-container>\r\n      </tr>\r\n      <tr *ngIf=\"tableData.config.visibleColumnFiltersVisibility\">\r\n        <th [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></th>\r\n        <ng-container *ngFor=\"let header of currentPageData.headers\">\r\n          <th *ngIf=\"header.show\">\r\n            <input type=\"text\" class=\"form-control form-control-sm text-center\" placeholder=\"{{header.title}}\"\r\n              (change)=\"columnSearchChanged(header.dataProperty)\" (keyup)=\"columnSearchChanged(header.dataProperty)\"\r\n              [(ngModel)]=\"tableData.config.visibleColumnFilters[header.dataProperty]\"\r\n              [disabled]=\"!header.enableColumnSearch || header.dataType === 'SELECT'\" [name]=\"'filter_'+header.dataProperty\" />\r\n          </th>\r\n        </ng-container>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngIf=\"currentPageData.data.length === 0\">\r\n        <tr *ngIf=\"tableData.isLoading\">\r\n          <td [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n          <td [attr.colspan]=\"currentPageData.headers.length + 1\" style=\"text-align: center;\">\r\n            Loading...\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"!tableData.isLoading\">\r\n          <td [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n          <td [attr.colspan]=\"currentPageData.headers.length + 1\" style=\"text-align: center;\">\r\n            No records found\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n      <ng-container *ngFor=\"let row of currentPageData.data; let indi = index;\">\r\n        <ng-container *ngIf=\"row !== undefined\">\r\n          <tr [ngClass]=\"getRowClass(row)\">\r\n            <td *ngIf=\"!row.expandable\" [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n            <td *ngIf=\"row.expandable\" [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\">\r\n              <button class=\"btn btn-secondary btn-sm collapsed-row-button\" (click)=\"expandRow(row)\" \r\n                      *ngIf=\"!row.expanded\"></button>\r\n              <button class=\"btn btn-secondary btn-sm expanded-row-button\" (click)=\"collapseRow(row)\" \r\n                      *ngIf=\"row.expanded\"></button>\r\n            </td>\r\n            <ng-container *ngFor=\"let header of currentPageData.headers\">\r\n              <td *ngIf=\"header.show\" [style]=\"row.styles[header.dataProperty]\"\r\n                [ngClass]=\"row.classes[header.dataProperty]\">\r\n                <ng-container *ngIf=\"header.dataType === 'ACTIONS'\">\r\n                  <button class=\"tt-row-action  btn-xs btn btn-default\" *ngFor=\"let action of row.actions\"\r\n                    [ngClass]=\"action.classes\" (click)=\"rowAction(row, action)\" [title]=\"action.title\">\r\n                    {{action.label}}\r\n                  </button>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType === 'SELECT'\">\r\n                  <input type=\"checkbox\" class=\"header-check-box select-one\" \r\n                         [checked]=\"row.selected ? 'checked' : ''\" \r\n                         (change)=\"toggleSelectRow(row)\"/>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType === 'INPUT_TEXT'\">\r\n                  <input type=\"text\" class=\"header-input-text tt-input-tag\" [(ngModel)]=\"row.data[header.dataProperty]\" [name]=\"indi + '_' + header.dataProperty\" (change)=\"inputRowTextChangedInternal($event, row.data, header.dataProperty, row.data[header.dataProperty], tableData.config.level)\"/>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType === 'INPUT_SELECT'\">\r\n                  <select class=\"header-input-select tt-select-tag\" [(ngModel)]=\"row.data[header.dataProperty]\" [name]=\"indi + '_' + header.dataProperty\" (change)=\"inputRowSelectChangedInternal($event, row.data, header.dataProperty, row.data[header.dataProperty], tableData.config.level)\">\r\n                    <ng-container *ngIf=\"row.options !== undefined && row.options !== null\">\r\n                      <option [value]=\"opt.value\" *ngFor=\"let opt of row.options\">{{opt.displayText}}</option>\r\n                    </ng-container>\r\n                  </select>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType !== 'ACTIONS' && header.dataType !== 'SELECT'\">\r\n                  <ng-container *ngIf=\"row.clickables[header.dataProperty] !== undefined\">\r\n                    <button class=\"popup-link-button\"\r\n                      (click)=\"clickableClicked(row, header.dataProperty)\">{{row.data[header.dataProperty]}}</button>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"row.clickables[header.dataProperty] === undefined && header.dataType !== 'INPUT_TEXT' && header.dataType !== 'INPUT_SELECT'\">\r\n                    {{row.data[header.dataProperty]}}\r\n                  </ng-container>\r\n                </ng-container>\r\n              </td>\r\n            </ng-container>\r\n          </tr>\r\n          <tr *ngIf=\"row.expanded\" [ngClass]=\"row.expanded ? 'expanded-row-content' : 'collapsed-row-content'\">\r\n            <td style=\"width: 10px;\"></td>\r\n            <td [colSpan]=\"currentPageData.headers.length\">\r\n              <angular-tree-table (inputRowSelectChanged)=\"inputRowSelectChangedChild($event)\" (inputRowTextChanged)=\"inputRowTextChangedChild($event)\" (rowSelectionChanged)=\"childRowSelectionChanged($event)\" [tableData]=\"row.children\"></angular-tree-table>\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"table-bottom\">\r\n    <div class=\"page-number-status\">\r\n      Showing {{(tableData.pageSize * (tableData.page - 1)) + 1}} to {{getPageTo()}} of\r\n      <ng-container *ngIf=\"tableData.filteredRowsCount != tableData.totalRowsCount\">\r\n        {{tableData.filteredRowsCount}} rows filtered on {{tableData.totalRowsCount}}\r\n      </ng-container>\r\n      <ng-container *ngIf=\"tableData.filteredRowsCount === tableData.totalRowsCount\">\r\n        {{tableData.filteredRowsCount}}\r\n      </ng-container>\r\n      rows\r\n    </div>\r\n    <div class=\"pagination-buttons\" *ngIf=\"tableData.totalRowsCount > tableData.pageSize\">\r\n      <div [class]=\"tableData.splashMessageFlag ? 'splash-message show' : 'splash-message hide'\">\r\n        <div class=\"message-content\">{{tableData.splashMessageContent}}</div>\r\n      </div>\r\n      <div class=\"btn btnGroup btn-group\">\r\n        <button class=\"btn big\" [class]=\"tableData.page === 1 ? 'btn big btn-secondary ' : 'btn big btn-secondary '\"\r\n          (click)=\"changePage(1)\">First</button>\r\n        <button class=\"btn\" [class]=\"'btn btn-secondary'\" (click)=\"changePage(tableData.page - 1)\">&lt;</button>\r\n        <ng-container *ngFor=\"let pageNumber of pageNumbers()\">\r\n          <button class=\"btn\" [class]=\"tableData.page === pageNumber ? 'btn btn-primary ' : 'btn btn-secondary '\"\r\n            (click)=\"changePage(pageNumber)\">{{pageNumber}}</button>\r\n        </ng-container>\r\n        <button class=\"btn\" [class]=\"'btn btn-secondary'\" (click)=\"changePage(tableData.page + 1)\">&gt;</button>\r\n        <button class=\"btn big\"\r\n          [class]=\"tableData.page === tableData.totalPagesCount() ? 'btn big btn-secondary ' : 'btn big btn-secondary '\"\r\n          (click)=\"changePage(tableData.totalPagesCount())\">Last</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [":host .dropDownBtn-data{overflow:visible;padding:5px}:host .tree-table-loading{width:100%;background-color:rgba(0,0,0,.5);overflow:auto;position:absolute}:host .tree-table-loading .loader-msg{color:#fff;font-weight:700;text-align:center;width:100%;height:100px;position:absolute;top:calc(50% - 50px)}:host .tree-table-loading.on{height:100%;z-index:1000}:host .tree-table-loading.off{height:0%}:host .tree-table{margin-top:10px;margin-bottom:10px;overflow:auto;position:relative}:host .tree-table .select-page-size{display:inline-block;width:auto}:host .tree-table .extraInfo-section .extraInfo{float:left}:host .tree-table .column-visibility{text-align:center}:host .tree-table .column-visibility .btnVis,:host .tree-table .dropDownBtn-data .btnVis{border-style:none;padding:7px;border-radius:2px;margin-right:5px;margin-bottom:5px}:host .tree-table .column-visibility .btnVis.active,:host .tree-table .column-visibility .btnVis.hover,:host .tree-table .column-visibility .btnVis:active,:host .tree-table .column-visibility .btnVis:hover,:host .tree-table .dropDownBtn-data .btnVis.active,:host .tree-table .dropDownBtn-data .btnVis.hover,:host .tree-table .dropDownBtn-data .btnVis:active,:host .tree-table .dropDownBtn-data .btnVis:hover{background-color:#666;color:#fff}:host .tree-table .action-container .btn{margin-right:5px}:host .tree-table .action-container .search-section{overflow:visible;margin-top:10px;margin-bottom:5px}:host .tree-table .action-container .search-section .first-part{width:40%;text-align:left;display:inline-block}:host .tree-table .action-container .search-section .second-part{width:60%;display:inline-block}:host .tree-table .table-bottom{overflow:auto}:host .tree-table .table-bottom .page-number-status{float:left;overflow:auto;padding-top:.375rem}:host .tree-table .table-bottom .btnGroup{float:right;padding-right:0;padding-top:0;padding-bottom:0}:host .tree-table .table-bottom .pagination-buttons{overflow:auto;position:relative}:host .tree-table .table-bottom .pagination-buttons .splash-message{float:right;position:absolute;right:0;z-index:9999;background:#ececec;border-radius:3px;color:#86adef;font-weight:700;padding:5.5px 15px;transition:opacity 1s ease-in-out}:host .tree-table .table-bottom .pagination-buttons .splash-message.show{opacity:1}:host .tree-table .table-bottom .pagination-buttons .splash-message.hide{padding:0;opacity:0}:host .tree-table .table-bottom .pagination-buttons button{width:48px}:host .tree-table .table-bottom .pagination-buttons button.big{width:50px}:host .tree-table table{width:100%;text-align:center;border-collapse:collapse;margin-bottom:5px}:host .tree-table table th{cursor:pointer;-moz-user-select:none;user-select:none;-ms-user-select:none;-webkit-user-select:none;font-weight:700}:host .tree-table table .expanded-row-content{background:0 0}:host .tree-table table tr>td:first-child.not-used,:host .tree-table table tr>th:first-child.not-used{display:none}:host .tree-table table tr>td:first-child.used,:host .tree-table table tr>th:first-child.used{width:50px}:host .tree-table table tr>td:first-child.used .collapsed-row-button:after,:host .tree-table table tr>th:first-child.used .collapsed-row-button:after{content:\"\";width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #fff;display:inline-block}:host .tree-table table tr>td:first-child.used .expanded-row-button:after,:host .tree-table table tr>th:first-child.used .expanded-row-button:after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #fff;display:inline-block}:host .tree-table table tr .tt-row-action{margin-right:5px}:host .tree-table table td button.popup-link-button{border-style:none!important;background:0 0!important;color:#86adef!important}"]
            }] }
];
/** @nocollapse */
AngularTreeTableComponent.ctorParameters = () => [
    { type: KeyValueDiffers }
];
AngularTreeTableComponent.propDecorators = {
    tableData: [{ type: Input }],
    rowSelectionChanged: [{ type: Output }],
    inputRowSelectChanged: [{ type: Output }],
    inputRowTextChanged: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularTreeTableComponent.prototype.dataDiffers;
    /** @type {?} */
    AngularTreeTableComponent.prototype.tableData;
    /** @type {?} */
    AngularTreeTableComponent.prototype.filteredData;
    /** @type {?} */
    AngularTreeTableComponent.prototype.className;
    /** @type {?} */
    AngularTreeTableComponent.prototype.randomInstance;
    /** @type {?} */
    AngularTreeTableComponent.prototype.dropdownHideListenerAdded;
    /** @type {?} */
    AngularTreeTableComponent.prototype.currentPageData;
    /**
     * @type {?}
     * @private
     */
    AngularTreeTableComponent.prototype.columnFiltersDiffers;
    /** @type {?} */
    AngularTreeTableComponent.prototype.json;
    /** @type {?} */
    AngularTreeTableComponent.prototype.extraInfoItemWidthPercent;
    /** @type {?} */
    AngularTreeTableComponent.prototype.rowSelectionChanged;
    /** @type {?} */
    AngularTreeTableComponent.prototype.inputRowSelectChanged;
    /** @type {?} */
    AngularTreeTableComponent.prototype.inputRowTextChanged;
    /**
     * @type {?}
     * @private
     */
    AngularTreeTableComponent.prototype.differs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci10cmVlLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItdHJlZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXRyZWUtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUEwQixLQUFLLEVBQUUsZUFBZSxFQUN0QixNQUFNLEVBQUUsWUFBWSxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUkzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxLQUFLLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O01BSXpFLE1BQU0sR0FBRyxPQUFPO0FBT3RCLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFnQnBDLFlBQW9CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBYm5DLGNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLGlCQUFZLEdBQW1CLEVBQUUsQ0FBQztRQUNsQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsOEJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLG9CQUFlLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUV0QyxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osOEJBQXlCLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFDaEQsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQThFLENBQUM7UUFD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QUFNO2tDQUNOLE1BQU07Ozs7Ozs7SUFaUCxnREFBaUQ7O0lBQ2pELDhDQUF5Qzs7SUFDekMsaURBQWtDOztJQUNsQyw4Q0FBZTs7SUFDZixtREFBc0I7O0lBQ3RCLDhEQUFrQzs7SUFDbEMsb0RBQXNDOzs7OztJQUN0Qyx5REFBMEQ7O0lBQzFELHlDQUFZOztJQUNaLDhEQUFnQzs7SUFDaEMsd0RBQTBEOztJQUMxRCwwREFBaUk7O0lBQ2pJLHdEQUErSDs7Ozs7SUFFbkgsNENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEtleVZhbHVlRGlmZmVyLCBJbnB1dCwgS2V5VmFsdWVEaWZmZXJzLFxyXG4gICAgICAgICBLZXlWYWx1ZUNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBEb0NoZWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgVHJlZVRhYmxlRGF0YSB9IGZyb20gJy4uL2NsYXNzZXMvdHJlZS10YWJsZS1kYXRhJztcclxuaW1wb3J0IHsgVHJlZVRhYmxlUm93IH0gZnJvbSAnLi4vY2xhc3Nlcy90cmVlLXRhYmxlLXJvdyc7XHJcbmltcG9ydCB7IFRyZWVUYWJsZVJvd0FjdGlvbiB9IGZyb20gJy4uL2NsYXNzZXMvdHJlZS10YWJsZS1yb3ctYWN0aW9uJztcclxuaW1wb3J0IHsgVHJlZVRhYmxlSGVhZGVyT2JqZWN0IH0gZnJvbSAnLi4vY2xhc3Nlcy90cmVlLXRhYmxlLWhlYWRlci1vYmplY3QnO1xyXG5pbXBvcnQgeyBUdERhdGFUeXBlIH0gZnJvbSAnLi4vY2xhc3Nlcy90dC1kYXRhLXR5cGUnO1xyXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xyXG5pbXBvcnQgKiBhcyBGaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IFRyZWVUYWJsZVJvd0FjdGlvblR5cGUgfSBmcm9tICcuLi9jbGFzc2VzL3RyZWUtdGFibGUtcm93LWFjdGlvbi10eXBlJztcclxuXHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuXHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FuZ3VsYXItdHJlZS10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FuZ3VsYXItdHJlZS10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYW5ndWxhci10cmVlLXRhYmxlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJUcmVlVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2sge1xyXG5cclxuICBwcml2YXRlIGRhdGFEaWZmZXJzOiBLZXlWYWx1ZURpZmZlcjxzdHJpbmcsIGFueT47XHJcbiAgQElucHV0KCkgdGFibGVEYXRhID0gbmV3IFRyZWVUYWJsZURhdGEoKTtcclxuICBmaWx0ZXJlZERhdGE6IFRyZWVUYWJsZVJvd1tdID0gW107XHJcbiAgY2xhc3NOYW1lID0gJyc7XHJcbiAgcmFuZG9tSW5zdGFuY2UgPSBudWxsO1xyXG4gIGRyb3Bkb3duSGlkZUxpc3RlbmVyQWRkZWQgPSBmYWxzZTtcclxuICBjdXJyZW50UGFnZURhdGEgPSBuZXcgVHJlZVRhYmxlRGF0YSgpO1xyXG4gIHByaXZhdGUgY29sdW1uRmlsdGVyc0RpZmZlcnM6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PjtcclxuICBqc29uID0gbnVsbDtcclxuICBleHRyYUluZm9JdGVtV2lkdGhQZXJjZW50ID0gMTAwO1xyXG4gIEBPdXRwdXQoKSByb3dTZWxlY3Rpb25DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcclxuICBAT3V0cHV0KCkgaW5wdXRSb3dTZWxlY3RDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBhbnksIHJvd0RhdGE6IGFueSwgaGVhZGVyS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGxldmVsOiBudW1iZXIgfT4oKTtcclxuICBAT3V0cHV0KCkgaW5wdXRSb3dUZXh0Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogYW55LCByb3dEYXRhOiBhbnksIGhlYWRlcktleTogc3RyaW5nLCB2YWx1ZTogYW55LCBsZXZlbDogbnVtYmVyIH0+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzKSB7XHJcbiAgICB0aGlzLmpzb24gPSBKU09OO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnZhbGlkYXRlRGF0YSgpO1xyXG4gICAgdGhpcy5zZXRQYWdlRGF0YSh0aGlzLnRhYmxlRGF0YS5wYWdlKTtcclxuICAgIHRoaXMuY2xhc3NOYW1lID0gJ3RhYmxlLXRyZWUgbGV2ZWwnICsgdGhpcy50YWJsZURhdGEuY29uZmlnLmxldmVsO1xyXG4gICAgaWYgKHRoaXMudGFibGVEYXRhLmNvbmZpZy5sZXZlbCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0luaXRpYWxpemUgU2VhcmNoIEZ1bmN0aW9uYWxpdHknKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YURpZmZlcnMgPSB0aGlzLmRpZmZlcnMuZmluZCh0aGlzLnRhYmxlRGF0YSkuY3JlYXRlKCk7XHJcbiAgICB0aGlzLmNvbHVtbkZpbHRlcnNEaWZmZXJzID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnMpLmNyZWF0ZSgpO1xyXG4gICAgdGhpcy5yYW5kb21JbnN0YW5jZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoOTk5OSkpO1xyXG4gICAgdGhpcy5leHRyYUluZm9JdGVtV2lkdGhQZXJjZW50ID0gMTAwIC8gdGhpcy50YWJsZURhdGEuY29uZmlnLmV4dHJhSW5mb3MubGVuZ3RoO1xyXG5cclxuICAgIHRoaXMucmVkZWZpbmVUYWJsZURhdGFGdW5jdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIHJlZGVmaW5lVGFibGVEYXRhRnVuY3Rpb25zKCkge1xyXG4gICAgY29uc3QgZGlzID0gdGhpcztcclxuICAgIHRoaXMudGFibGVEYXRhLmFsbFJvd3NDb2xsYXBzZWQgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgIHJldHVybiBkaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEubGVuZ3RoID09PSBkaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEuZmlsdGVyKHYgPT4gIXYuZXhwYW5kZWQpLmxlbmd0aDtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50YWJsZURhdGEuYWxsUm93c0V4cGFuZGVkID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICByZXR1cm4gZGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLmxlbmd0aCA9PT0gZGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLmZpbHRlcih2ID0+IHYuZXhwYW5kZWQpLmxlbmd0aDtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBkYXRhQ2hhbmdlZChjaGFuZ2VzOiBLZXlWYWx1ZUNoYW5nZXM8c3RyaW5nLCBhbnk+KSB7XHJcbiAgICB0aGlzLnJlZGVmaW5lVGFibGVEYXRhRnVuY3Rpb25zKCk7XHJcbiAgICB0aGlzLnNldFBhZ2VEYXRhKHRoaXMudGFibGVEYXRhLnBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaFRhYmxlKCkge1xyXG4gICAgdGhpcy5zZXRQYWdlRGF0YSh0aGlzLnRhYmxlRGF0YS5wYWdlKTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcclxuICAgIGxldCBjaGFuZ2VzID0gdGhpcy5kYXRhRGlmZmVycy5kaWZmKHRoaXMudGFibGVEYXRhKTtcclxuICAgIGlmIChjaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMuZGF0YUNoYW5nZWQoY2hhbmdlcyk7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VzID0gdGhpcy5jb2x1bW5GaWx0ZXJzRGlmZmVycy5kaWZmKHRoaXMudGFibGVEYXRhLmNvbmZpZy5jb2x1bW5GaWx0ZXJzKTtcclxuICAgIGlmIChjaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMuZGF0YUNoYW5nZWQoY2hhbmdlcyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuZHJvcGRvd25IaWRlTGlzdGVuZXJBZGRlZCkge1xyXG4gICAgICAkKCcjZHJvcERvd25WaXNDb24nICsgdGhpcy5yYW5kb21JbnN0YW5jZSkub24oJ2hpZGUuYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLmNsaWNrRXZlbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgaWYgKCQoZS5jbGlja0V2ZW50LnRhcmdldCkuaGFzQ2xhc3MoJ2J0blZpcycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcm9wZG93bkhpZGVMaXN0ZW5lckFkZGVkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBhbmRSb3cocm93OiBUcmVlVGFibGVSb3cpIHtcclxuICAgIHJvdy5leHBhbmRlZCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy50YWJsZURhdGEuY29uZmlnLmV2ZW50cy5yb3dFeHBhbmRlZCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5jb25maWcuZXZlbnRzLnJvd0V4cGFuZGVkKHJvdywgdGhpcy50YWJsZURhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29sbGFwc2VSb3cocm93OiBUcmVlVGFibGVSb3cpIHtcclxuICAgIHJvdy5leHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy50YWJsZURhdGEuaXNBbGxSb3dzRXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLnRhYmxlRGF0YS5jb25maWcuZXZlbnRzLnJvd0NvbGxhcHNlZCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5jb25maWcuZXZlbnRzLnJvd0NvbGxhcHNlZChyb3csIHRoaXMudGFibGVEYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cGFuZEFsbFJvd3MoKSB7XHJcbiAgICB0aGlzLmV4cGFuZEFsbFJvd3NJbkRhdGEodGhpcy5jdXJyZW50UGFnZURhdGEuZGF0YSk7XHJcbiAgICB0aGlzLnRhYmxlRGF0YS5pc0FsbFJvd3NFeHBhbmRlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBleHBhbmRBbGxSb3dzSW5EYXRhKGRhdGE6IFRyZWVUYWJsZVJvd1tdKSB7XHJcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiBkYXRhKSB7XHJcbiAgICAgIGlmIChyb3cuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgIGlmIChyb3cuY2hpbGRyZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgIGlmIChyb3cuY2hpbGRyZW4uZGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YWJsZURhdGEuY29uZmlnLnNob3dFeHBhbmRBbGxFbXB0eUNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgLy8gcm93LmV4cGFuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGlzLmV4cGFuZFJvdyhyb3cpO1xyXG4gICAgICAgICAgICAgIHRoaXMuZXhwYW5kQWxsUm93c0luRGF0YShyb3cuY2hpbGRyZW4uZGF0YSk7XHJcbiAgICAgICAgICAgICAgcm93LmNoaWxkcmVuLmlzQWxsUm93c0V4cGFuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAocm93LmNoaWxkcmVuLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gcm93LmV4cGFuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kUm93KHJvdyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEFsbFJvd3NJbkRhdGEocm93LmNoaWxkcmVuLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcm93LmNoaWxkcmVuLmlzQWxsUm93c0V4cGFuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbGxhcHNlQWxsUm93cygpIHtcclxuICAgIHRoaXMuY29sbGFwc2VBbGxSb3dzSW5EYXRhKHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEpO1xyXG4gICAgdGhpcy50YWJsZURhdGEuaXNBbGxSb3dzRXhwYW5kZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbGxhcHNlQWxsUm93c0luRGF0YShkYXRhOiBUcmVlVGFibGVSb3dbXSkge1xyXG4gICAgZm9yIChjb25zdCByb3cgb2YgZGF0YSkge1xyXG4gICAgICBpZiAocm93LmV4cGFuZGFibGUpIHtcclxuICAgICAgICBpZiAocm93LmNoaWxkcmVuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBpZiAocm93LmNoaWxkcmVuLmRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFibGVEYXRhLmNvbmZpZy5zaG93RXhwYW5kQWxsRW1wdHlDaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgIC8vIHJvdy5leHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VSb3cocm93KTtcclxuICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsUm93c0luRGF0YShyb3cuY2hpbGRyZW4uZGF0YSk7XHJcbiAgICAgICAgICAgICAgcm93LmNoaWxkcmVuLmlzQWxsUm93c0V4cGFuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJvdy5jaGlsZHJlbi5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIHJvdy5leHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZVJvdyhyb3cpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbFJvd3NJbkRhdGEocm93LmNoaWxkcmVuLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcm93LmNoaWxkcmVuLmlzQWxsUm93c0V4cGFuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVSb3cocm93OiBUcmVlVGFibGVSb3cpIHtcclxuICAgIHJvdy5leHBhbmRlZCA/IHRoaXMuY29sbGFwc2VSb3cocm93KSA6IHRoaXMuZXhwYW5kUm93KHJvdyk7XHJcbiAgfVxyXG5cclxuICByb3dBY3Rpb24ocm93OiBUcmVlVGFibGVSb3csIGFjdGlvbjogVHJlZVRhYmxlUm93QWN0aW9uKSB7XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFRyZWVUYWJsZVJvd0FjdGlvblR5cGUuVE9HR0xFX0NISUxEKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlUm93KHJvdyk7XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aW9uLmFjdGlvbiAhPT0gdW5kZWZpbmVkICYmIGFjdGlvbi5hY3Rpb24gIT09IG51bGwpIHtcclxuICAgICAgYWN0aW9uLmFjdGlvbi5iaW5kKGFjdGlvbi5jb250ZXh0LCByb3cuZGF0YSwgYWN0aW9uKSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFnZShwYWdlOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLnRhYmxlRGF0YS5wYWdlID09PSBwYWdlIHx8IHBhZ2UgPCAxKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChwYWdlID4gdGhpcy50YWJsZURhdGEudG90YWxQYWdlc0NvdW50KCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgKHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEubGVuZ3RoIDwgdGhpcy50YWJsZURhdGEucGFnZVNpemUgJiYgdGhpcy50YWJsZURhdGEucGFnZSA8IHBhZ2UpIHtcclxuICAgIC8vICAgdGhpcy50YWJsZURhdGEuc3BsYXNoTWVzc2FnZSgnUmVhY2hlZCBsYXN0IHBhZ2UnKTtcclxuICAgIC8vICAgcmV0dXJuO1xyXG4gICAgLy8gfVxyXG4gICAgdGhpcy5zZXRQYWdlRGF0YShwYWdlKTtcclxuICAgIHRoaXMuY29sbGFwc2VBbGxSb3dzKCk7XHJcbiAgfVxyXG5cclxuICBzZXRQYWdlRGF0YShwYWdlTnVtYmVyOiBudW1iZXIpIHtcclxuICAgIHRoaXMuZXh0cmFJbmZvSXRlbVdpZHRoUGVyY2VudCA9IDEwMCAvIHRoaXMudGFibGVEYXRhLmNvbmZpZy5leHRyYUluZm9zLmxlbmd0aDtcclxuICAgIGNvbnN0IGRpcyA9IHRoaXM7XHJcbiAgICBpZiAodGhpcy50YWJsZURhdGEuc2VydmVyQ29uZmlnLnVybCAhPT0gdW5kZWZpbmVkICYmIHRoaXMudGFibGVEYXRhLnNlcnZlckNvbmZpZy51cmwgIT09IG51bGwpIHtcclxuICAgICAgaWYgKHBhZ2VOdW1iZXIgIT09IDEpIHtcclxuICAgICAgICBpZiAoKHBhZ2VOdW1iZXIgLSAxKSAqIHRoaXMudGFibGVEYXRhLnBhZ2VTaXplID4gdGhpcy50YWJsZURhdGEudG90YWxSb3dzQ291bnQpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBQYWdlJywgKHBhZ2VOdW1iZXIgLSAxKSAqIHRoaXMudGFibGVEYXRhLnBhZ2VTaXplLCB0aGlzLnRhYmxlRGF0YS50b3RhbFJvd3NDb3VudCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLnBhZ2UgPSBwYWdlTnVtYmVyO1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5sb2FkRGF0YShyb3dzID0+IHtcclxuICAgICAgICAvLyBpZiAocm93cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAvLyAgIGRpcy5jaGFuZ2VQYWdlKGRpcy50YWJsZURhdGEucGFnZSAtIDEpO1xyXG4gICAgICAgIC8vICAgZGlzLnRhYmxlRGF0YS5zcGxhc2hNZXNzYWdlKCdSZWFjaGVkIGxhc3QgcGFnZScpO1xyXG4gICAgICAgIC8vICAgY29uc29sZS53YXJuKCdObyBkYXRhIG9uIHRoZSBuZXh0IHBhZ2UnKTtcclxuICAgICAgICAvLyAgIC8vIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgZGlzLmZpbHRlcmVkRGF0YS5zcGxpY2UoMCwgdGhpcy5maWx0ZXJlZERhdGEubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XHJcbiAgICAgICAgICBkaXMuZmlsdGVyZWREYXRhLnB1c2gocm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgcm93c0NvdW50ID0gZGlzLmZpbHRlcmVkRGF0YS5sZW5ndGg7XHJcbiAgICAgICAgLy8gZGlzLnRhYmxlRGF0YS5wYWdlc0NvdW50ID0gTWF0aC5mbG9vcihyb3dzQ291bnQgLyB0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSk7XHJcbiAgICAgICAgLy8gaWYgKGRpcy50YWJsZURhdGEucGFnZVNpemUgKiBkaXMudGFibGVEYXRhLnBhZ2VzQ291bnQgPCByb3dzQ291bnQpIHtcclxuICAgICAgICAvLyAgIGRpcy50YWJsZURhdGEucGFnZXNDb3VudCsrO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBkaXMuY3VycmVudFBhZ2VEYXRhLmhlYWRlcnMgPSBkaXMudGFibGVEYXRhLmhlYWRlcnM7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IChwYWdlTnVtYmVyIC0gMSkgKiB0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZURhdGEuZGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEuc3BsaWNlKDAsIHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnNlSW50KHRoaXMudGFibGVEYXRhLnBhZ2VTaXplICsgJycsIDEwKTsgaSsrKSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQWRkaW5nIFZ2YWx1ZScsIHRoaXMuZmlsdGVyZWREYXRhW2ldLCBpKTtcclxuICAgICAgICAgIGlmICh0aGlzLmZpbHRlcmVkRGF0YVtpXSAhPT0gbnVsbCAmJiB0aGlzLmZpbHRlcmVkRGF0YVtpXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEucHVzaCh0aGlzLmZpbHRlcmVkRGF0YVtpXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpcy50YWJsZURhdGEudG90YWxSb3dzQ291bnQgPSBkaXMudGFibGVEYXRhLmRhdGEubGVuZ3RoO1xyXG4gICAgICBpZiAocGFnZU51bWJlciAhPT0gMSkge1xyXG4gICAgICAgIGlmICgocGFnZU51bWJlciAtIDEpICogdGhpcy50YWJsZURhdGEucGFnZVNpemUgPiB0aGlzLnRhYmxlRGF0YS50b3RhbFJvd3NDb3VudCkge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIFBhZ2UnLCAocGFnZU51bWJlciAtIDEpICogdGhpcy50YWJsZURhdGEucGFnZVNpemUsIHRoaXMudGFibGVEYXRhLnRvdGFsUm93c0NvdW50KTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50YWJsZURhdGEucGFnZSA9IHBhZ2VOdW1iZXI7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhLnNwbGljZSgwLCB0aGlzLmZpbHRlcmVkRGF0YS5sZW5ndGgpO1xyXG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IHRoaXMudGFibGVEYXRhLmRhdGEuZmlsdGVyKCh2KSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHYuZGF0YSk7XHJcbiAgICAgICAgbGV0IG1hdGNoZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy50YWJsZURhdGEua2V5d29yZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMudGFibGVEYXRhLmtleXdvcmQgIT09IG51bGwgJiYgdGhpcy50YWJsZURhdGEua2V5d29yZC50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgIGlmICh2LmRhdGFba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHYuZGF0YVtrZXldID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWF0Y2hlZCA9IHYuZGF0YVtrZXldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMudGFibGVEYXRhLmtleXdvcmQudG9Mb3dlckNhc2UoKSkgPiAtMTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZWQpIHtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtYXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1hdGNoZWQgJiYgdGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRhYmxlRGF0YS5jb25maWcuY29sdW1uRmlsdGVycyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnNba2V5XSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgdGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnNba2V5XSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkodGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnNba2V5XSkpIHtcclxuICAgICAgICAgICAgICBpZiAodi5kYXRhW2tleV0gPT09IHVuZGVmaW5lZCB8fCB2LmRhdGFba2V5XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBvck1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBvckZpbHRlciBvZiB0aGlzLnRhYmxlRGF0YS5jb25maWcuY29sdW1uRmlsdGVyc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICBvck1hdGNoID0gdi5kYXRhW2tleV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yob3JGaWx0ZXIudG9Mb3dlckNhc2UoKSkgPiAtMTtcclxuICAgICAgICAgICAgICAgIGlmIChvck1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBtYXRjaGVkID0gb3JNYXRjaDtcclxuICAgICAgICAgICAgICBpZiAoIW1hdGNoZWQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWF0Y2hlZCAmJiB0aGlzLnRhYmxlRGF0YS5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRhYmxlRGF0YS5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnMgIT09IG51bGwpIHtcclxuICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFibGVEYXRhLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1trZXldICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICB0aGlzLnRhYmxlRGF0YS5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNba2V5XSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgIHRoaXMudGFibGVEYXRhLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1trZXldLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICBpZiAodi5kYXRhW2tleV0gPT09IHVuZGVmaW5lZCB8fCB2LmRhdGFba2V5XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG1hdGNoZWQgPSB2LmRhdGFba2V5XS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnRhYmxlRGF0YS5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNba2V5XS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgICAgICAgICAgIGlmICghbWF0Y2hlZCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXRjaGVkO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3Qgcm93c0NvdW50ID0gZGlzLmZpbHRlcmVkRGF0YS5sZW5ndGg7XHJcbiAgICAgIGRpcy50YWJsZURhdGEuZmlsdGVyZWRSb3dzQ291bnQgPSByb3dzQ291bnQ7XHJcbiAgICAgIC8vIGRpcy50YWJsZURhdGEucGFnZXNDb3VudCA9IE1hdGguZmxvb3Iocm93c0NvdW50IC8gdGhpcy50YWJsZURhdGEucGFnZVNpemUpO1xyXG4gICAgICAvLyBpZiAoZGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSAqIGRpcy50YWJsZURhdGEucGFnZXNDb3VudCA8IHJvd3NDb3VudCkge1xyXG4gICAgICAvLyAgIGRpcy50YWJsZURhdGEucGFnZXNDb3VudCsrO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIGRpcy5jdXJyZW50UGFnZURhdGEuaGVhZGVycyA9IGRpcy50YWJsZURhdGEuaGVhZGVycztcclxuICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IChwYWdlTnVtYmVyIC0gMSkgKiB0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEgPSBbXTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLnNwbGljZSgwLCB0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLmxlbmd0aCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDwgcGFyc2VJbnQoc3RhcnRJbmRleCArICcnLCAxMCkgKyBwYXJzZUludCh0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSArICcnLCAxMCk7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmZpbHRlcmVkRGF0YVtpXSAhPT0gbnVsbCAmJiB0aGlzLmZpbHRlcmVkRGF0YVtpXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLnB1c2godGhpcy5maWx0ZXJlZERhdGFbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNsaWNrYWJsZUNsaWNrZWQocm93OiBUcmVlVGFibGVSb3csIGRhdGFQcm9wZXJ0eTogc3RyaW5nKSB7XHJcbiAgICBpZiAodHlwZW9mIHJvdy5jbGlja2FibGVzW2RhdGFQcm9wZXJ0eV0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGlmIChyb3cuY2xpY2thYmxlc1tkYXRhUHJvcGVydHldID09PSBUcmVlVGFibGVSb3dBY3Rpb25UeXBlLlRPR0dMRV9DSElMRC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVSb3cocm93KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChyb3cuY2xpY2thYmxlc0NvbnRleHQgIT09IG51bGwpIHtcclxuICAgICAgcm93LmNsaWNrYWJsZXNbZGF0YVByb3BlcnR5XS5iaW5kKHJvdy5jbGlja2FibGVzQ29udGV4dCwgcm93LmRhdGEsIGRhdGFQcm9wZXJ0eSkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdy5jbGlja2FibGVzW2RhdGFQcm9wZXJ0eV0ocm93LmRhdGEsIGRhdGFQcm9wZXJ0eSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZURhdGEoKSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ0RhdGEgU2NoZW1hIG5lZWQgdG8gYmUgdmFsaWRhdGVkJyk7XHJcbiAgfVxyXG5cclxuICBjb2x1bW5TZWFyY2hDaGFuZ2VkKGRhdGFQcm9wZXJ0eTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNldFBhZ2VEYXRhKDEpO1xyXG4gIH1cclxuXHJcbiAgcGFnZU51bWJlcnMoKSB7XHJcbiAgICBjb25zdCBwYWdlTnVtYmVycyA9IFtdO1xyXG4gICAgY29uc3QgbGltaXQgPSAyO1xyXG4gICAgY29uc3QgbWF4TGltaXQgPSA0O1xyXG4gICAgZm9yIChsZXQgcCA9IHRoaXMudGFibGVEYXRhLnBhZ2UgLSBsaW1pdDsgcCA8IHRoaXMudGFibGVEYXRhLnBhZ2U7IHArKykge1xyXG4gICAgICBpZiAocCA+IDApIHtcclxuICAgICAgICBwYWdlTnVtYmVycy5wdXNoKHApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB1bmZpbGxlZENvdW50ID0gbGltaXQgLSBwYWdlTnVtYmVycy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBxID0gdGhpcy50YWJsZURhdGEucGFnZTsgcSA8PSB0aGlzLnRhYmxlRGF0YS5wYWdlICsgdW5maWxsZWRDb3VudCArIGxpbWl0OyBxKyspIHtcclxuICAgICAgaWYgKHEgPD0gdGhpcy50YWJsZURhdGEudG90YWxQYWdlc0NvdW50KCkpIHtcclxuICAgICAgICBwYWdlTnVtYmVycy5wdXNoKHEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocGFnZU51bWJlcnMubGVuZ3RoIDwgbWF4TGltaXQpIHtcclxuICAgICAgZm9yIChsZXQgcCA9IHRoaXMudGFibGVEYXRhLnBhZ2UgLSBsaW1pdCAqIDI7IHAgPCB0aGlzLnRhYmxlRGF0YS5wYWdlIC0gbGltaXQ7IHArKykge1xyXG4gICAgICAgIGlmIChwID4gMCkge1xyXG4gICAgICAgICAgcGFnZU51bWJlcnMudW5zaGlmdChwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwYWdlTnVtYmVycztcclxuICB9XHJcblxyXG4gIGV4cG9ydEV4Y2VsTG9jYWwoKSB7XHJcbiAgICBjb25zdCBkYXRhUm93cyA9IFtdO1xyXG4gICAgZm9yIChsZXQgZCBvZiB0aGlzLnRhYmxlRGF0YS5kYXRhKSB7XHJcbiAgICAgIGNvbnN0IG9iaiA9IHt9O1xyXG4gICAgICBmb3IgKGxldCBoIG9mIHRoaXMudGFibGVEYXRhLmhlYWRlcnMpIHtcclxuICAgICAgICBvYmpbaC50aXRsZV0gPSBkLmRhdGFbaC5kYXRhUHJvcGVydHldO1xyXG4gICAgICB9XHJcbiAgICAgIGRhdGFSb3dzLnB1c2gob2JqKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGZpbGVUeXBlID0gJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0O2NoYXJzZXQ9VVRGLTgnO1xyXG4gICAgY29uc3QgZmlsZUV4dGVuc2lvbiA9ICcueGxzeCc7XHJcbiAgICBjb25zdCB3czogWExTWC5Xb3JrU2hlZXQgPSBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQoZGF0YVJvd3MpO1xyXG4gICAgY29uc3Qgd2I6IFhMU1guV29ya0Jvb2sgPSB7IFNoZWV0czogeyBkYXRhOiB3cyB9LCBTaGVldE5hbWVzOiBbJ2RhdGEnXSB9O1xyXG4gICAgY29uc3QgZXhjZWxCdWZmZXI6IGFueSA9IFhMU1gud3JpdGUod2IsIHsgYm9va1R5cGU6ICd4bHN4JywgdHlwZTogJ2FycmF5JyB9KTtcclxuICAgIGNvbnN0IGRhdGE6IEJsb2IgPSBuZXcgQmxvYihbZXhjZWxCdWZmZXJdLCB7IHR5cGU6IGZpbGVUeXBlIH0pO1xyXG4gICAgRmlsZVNhdmVyLnNhdmVBcyhkYXRhLCB0aGlzLnRhYmxlRGF0YS5jb25maWcuZXhjZWxFeHBvcnRGaWxlTmFtZSArIGZpbGVFeHRlbnNpb24pO1xyXG4gIH1cclxuXHJcbiAgc29ydENvbHVtbihoZWFkZXI6IFRyZWVUYWJsZUhlYWRlck9iamVjdCkge1xyXG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gaGVhZGVyLmRhdGFQcm9wZXJ0eTtcclxuICAgIGlmICh0aGlzLnRhYmxlRGF0YS5jb25maWcuc29ydGVkQ29sdW1uW3Byb3BlcnR5TmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5jb25maWcuc29ydGVkQ29sdW1uID0ge307XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLmNvbmZpZy5zb3J0ZWRDb2x1bW5bcHJvcGVydHlOYW1lXSA9ICdERVNDJztcclxuICAgICAgdGhpcy5zb3J0RGVzY2VuZChoZWFkZXIpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRhYmxlRGF0YS5jb25maWcuc29ydGVkQ29sdW1uW3Byb3BlcnR5TmFtZV0gPT09ICdERVNDJykge1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5jb25maWcuc29ydGVkQ29sdW1uW3Byb3BlcnR5TmFtZV0gPSAnQVNDJztcclxuICAgICAgdGhpcy5zb3J0QXNjZW5kKGhlYWRlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGUgdGhpcy50YWJsZURhdGEuY29uZmlnLnNvcnRlZENvbHVtbltwcm9wZXJ0eU5hbWVdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc29ydEFzY2VuZChoZWFkZXI6IFRyZWVUYWJsZUhlYWRlck9iamVjdCkge1xyXG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gaGVhZGVyLmRhdGFQcm9wZXJ0eTtcclxuICAgIGlmIChoZWFkZXIuZGF0YVR5cGUgPT09IFR0RGF0YVR5cGUuTlVNQkVSKSB7XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLmRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KGEuZGF0YVtwcm9wZXJ0eU5hbWVdKSA8IHBhcnNlRmxvYXQoYi5kYXRhW3Byb3BlcnR5TmFtZV0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJzZUZsb2F0KGEuZGF0YVtwcm9wZXJ0eU5hbWVdKSA+IHBhcnNlRmxvYXQoYi5kYXRhW3Byb3BlcnR5TmFtZV0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChoZWFkZXIuZGF0YVR5cGUgPT09IFR0RGF0YVR5cGUuREFURSkge1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5kYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAobW9tZW50KGEuZGF0YVtwcm9wZXJ0eU5hbWVdKS50b0RhdGUoKS5nZXRUaW1lKCkgPCBtb21lbnQoYi5kYXRhW3Byb3BlcnR5TmFtZV0pLnRvRGF0ZSgpLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9tZW50KGEuZGF0YVtwcm9wZXJ0eU5hbWVdKS50b0RhdGUoKS5nZXRUaW1lKCkgPiBtb21lbnQoYi5kYXRhW3Byb3BlcnR5TmFtZV0pLnRvRGF0ZSgpLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLmRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChhLmRhdGFbcHJvcGVydHlOYW1lXSA8IGIuZGF0YVtwcm9wZXJ0eU5hbWVdKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhLmRhdGFbcHJvcGVydHlOYW1lXSA+IGIuZGF0YVtwcm9wZXJ0eU5hbWVdKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRQYWdlRGF0YSh0aGlzLnRhYmxlRGF0YS5wYWdlKTtcclxuICB9XHJcblxyXG4gIHNvcnREZXNjZW5kKGhlYWRlcjogVHJlZVRhYmxlSGVhZGVyT2JqZWN0KSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBoZWFkZXIuZGF0YVByb3BlcnR5O1xyXG4gICAgaWYgKGhlYWRlci5kYXRhVHlwZSA9PT0gVHREYXRhVHlwZS5OVU1CRVIpIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEuZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhcnNlRmxvYXQoYS5kYXRhW3Byb3BlcnR5TmFtZV0pIDwgcGFyc2VGbG9hdChiLmRhdGFbcHJvcGVydHlOYW1lXSkpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyc2VGbG9hdChhLmRhdGFbcHJvcGVydHlOYW1lXSkgPiBwYXJzZUZsb2F0KGIuZGF0YVtwcm9wZXJ0eU5hbWVdKSkge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGhlYWRlci5kYXRhVHlwZSA9PT0gVHREYXRhVHlwZS5EQVRFKSB7XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLmRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5kYXRhW3Byb3BlcnR5TmFtZV0pLnRvRGF0ZSgpLmdldFRpbWUoKSA8IG1vbWVudChiLmRhdGFbcHJvcGVydHlOYW1lXSkudG9EYXRlKCkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vbWVudChhLmRhdGFbcHJvcGVydHlOYW1lXSkudG9EYXRlKCkuZ2V0VGltZSgpID4gbW9tZW50KGIuZGF0YVtwcm9wZXJ0eU5hbWVdKS50b0RhdGUoKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEuZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKGEuZGF0YVtwcm9wZXJ0eU5hbWVdIDwgYi5kYXRhW3Byb3BlcnR5TmFtZV0pIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYS5kYXRhW3Byb3BlcnR5TmFtZV0gPiBiLmRhdGFbcHJvcGVydHlOYW1lXSkge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFBhZ2VEYXRhKHRoaXMudGFibGVEYXRhLnBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoKCkge1xyXG4gICAgdGhpcy5zZXRQYWdlRGF0YSgxKTtcclxuICB9XHJcblxyXG4gIHBhZ2VTaXplQ2hhbmdlZCgpIHtcclxuICAgIHRoaXMuc2V0UGFnZURhdGEoMSk7XHJcbiAgfVxyXG5cclxuICBleGNlbEV4cG9ydENsaWNrZWQoKSB7XHJcbiAgICBpZiAodGhpcy50YWJsZURhdGEuc2VydmVyQ29uZmlnICE9PSB1bmRlZmluZWQgJiYgdGhpcy50YWJsZURhdGEuc2VydmVyQ29uZmlnICE9PSBudWxsICYmIHRoaXMudGFibGVEYXRhLnNlcnZlckNvbmZpZy5leGNlbEV4cG9ydFVybCAhPT0gdW5kZWZpbmVkICYmIHRoaXMudGFibGVEYXRhLnNlcnZlckNvbmZpZy5leGNlbEV4cG9ydFVybCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5sb2FkRXhjZWxEYXRhKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmV4cG9ydEV4Y2VsTG9jYWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFBhZ2VUbygpIHtcclxuICAgIGxldCB0byA9IHRoaXMudGFibGVEYXRhLnBhZ2VTaXplICogdGhpcy50YWJsZURhdGEucGFnZTtcclxuICAgIGlmICh0byA+IHRoaXMudGFibGVEYXRhLmZpbHRlcmVkUm93c0NvdW50KSB7XHJcbiAgICAgIHRvID0gdGhpcy50YWJsZURhdGEuZmlsdGVyZWRSb3dzQ291bnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG87XHJcbiAgfVxyXG5cclxuICBpc0FsbFJvd3NTZWxlY3RlZChoZWFkZXI6IFRyZWVUYWJsZUhlYWRlck9iamVjdCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudGFibGVEYXRhLmRhdGEuZmlsdGVyKHYgPT4gdi5zZWxlY3RlZCkubGVuZ3RoID09PSB0aGlzLnRhYmxlRGF0YS5kYXRhLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNlbGVjdEFsbFJvd3MoaGVhZGVyOiBUcmVlVGFibGVIZWFkZXJPYmplY3QpIHtcclxuICAgIHRoaXMuaXNBbGxSb3dzU2VsZWN0ZWQoaGVhZGVyKSA/IHRoaXMuZGVzZWxlY3RBbGxSb3dzKGhlYWRlcikgOiB0aGlzLnNlbGVjdEFsbFJvd3MoaGVhZGVyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VsZWN0QWxsUm93cyhoZWFkZXI6IFRyZWVUYWJsZUhlYWRlck9iamVjdCkge1xyXG4gICAgdGhpcy50YWJsZURhdGEuZGF0YSA9IHRoaXMudGFibGVEYXRhLmRhdGEubWFwKHYgPT4geyB2LnNlbGVjdGVkID0gdHJ1ZTsgcmV0dXJuIHY7IH0pO1xyXG4gICAgdGhpcy51cGRhdGVIb3N0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlc2VsZWN0QWxsUm93cyhoZWFkZXI6IFRyZWVUYWJsZUhlYWRlck9iamVjdCkge1xyXG4gICAgdGhpcy50YWJsZURhdGEuZGF0YSA9IHRoaXMudGFibGVEYXRhLmRhdGEubWFwKHYgPT4geyB2LnNlbGVjdGVkID0gZmFsc2U7IHJldHVybiB2OyB9KTtcclxuICAgIHRoaXMudXBkYXRlSG9zdCgpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2VsZWN0Um93KHJvdzogVHJlZVRhYmxlUm93KSB7XHJcbiAgICByb3cuc2VsZWN0ZWQgPSAhcm93LnNlbGVjdGVkO1xyXG4gICAgdGhpcy51cGRhdGVIb3N0KCk7XHJcbiAgfVxyXG5cclxuICBnZXRSb3dDbGFzcyhyb3c6IFRyZWVUYWJsZVJvdykge1xyXG4gICAgbGV0IGNsYXNzZXMgPSB7ICdleHBhbmRlZC1yb3cnOiByb3cuZXhwYW5kZWQsICdjb2xsYXBzZWQtcm93JzogIXJvdy5leHBhbmRlZCwgJ3NlbGVjdGVkJzogJ3Jvdy5zZWxlY3RlZCcsICd1bnNlbGVjdGVkJzogJyFyb3cuc2VsZWN0ZWQnIH07XHJcbiAgICBmb3IgKGNvbnN0IGNscyBvZiByb3cuY2xhc3Nlcykge1xyXG4gICAgICBjbGFzc2VzW2Nsc10gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZFJvd3MoKSB7XHJcbiAgICBjb25zdCByb3dzID0gWy4uLnRoaXMudGFibGVEYXRhLmRhdGEuZmlsdGVyKHYgPT4ge1xyXG4gICAgICBpZiAodi5zZWxlY3RlZCkge1xyXG4gICAgICAgIHJldHVybiB2LmRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0pXTtcclxuICAgIHJldHVybiByb3dzLm1hcCh2ID0+IHYuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjaGlsZFJvd1NlbGVjdGlvbkNoYW5nZWQoZGF0YTogVHJlZVRhYmxlUm93W10pIHtcclxuICAgIGlmICh0aGlzLnJvd1NlbGVjdGlvbkNoYW5nZWQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnJvd1NlbGVjdGlvbkNoYW5nZWQgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5yb3dTZWxlY3Rpb25DaGFuZ2VkLmVtaXQoZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVIb3N0KCkge1xyXG4gICAgaWYgKHRoaXMucm93U2VsZWN0aW9uQ2hhbmdlZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMucm93U2VsZWN0aW9uQ2hhbmdlZCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJvd1NlbGVjdGlvbkNoYW5nZWQuZW1pdCh0aGlzLmdldFNlbGVjdGVkUm93cygpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0Um93U2VsZWN0Q2hhbmdlZEludGVybmFsKGV2ZW50OiBhbnksIHJvd0RhdGE6IGFueSwgaGVhZGVyS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGxldmVsOiBudW1iZXIpIHtcclxuICAgIHRoaXMuaW5wdXRSb3dTZWxlY3RDaGFuZ2VkLmVtaXQoeyBldmVudCwgcm93RGF0YSwgaGVhZGVyS2V5LCB2YWx1ZSwgbGV2ZWwgfSk7XHJcbiAgfVxyXG5cclxuICBpbnB1dFJvd1RleHRDaGFuZ2VkSW50ZXJuYWwoZXZlbnQ6IGFueSwgcm93RGF0YTogYW55LCBoZWFkZXJLZXk6IHN0cmluZywgdmFsdWU6IGFueSwgbGV2ZWw6IG51bWJlcikge1xyXG4gICAgdGhpcy5pbnB1dFJvd1RleHRDaGFuZ2VkLmVtaXQoeyBldmVudCwgcm93RGF0YSwgaGVhZGVyS2V5LCB2YWx1ZSwgbGV2ZWwgfSk7XHJcbiAgfVxyXG5cclxuICBpbnB1dFJvd1NlbGVjdENoYW5nZWRDaGlsZChkYXRhOiB7IGV2ZW50OiBhbnksIHJvd0RhdGE6IGFueSwgaGVhZGVyS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGxldmVsOiBudW1iZXIgfSkge1xyXG4gICAgdGhpcy5pbnB1dFJvd1NlbGVjdENoYW5nZWQuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG4gIGlucHV0Um93VGV4dENoYW5nZWRDaGlsZChkYXRhOiB7IGV2ZW50OiBhbnksIHJvd0RhdGE6IGFueSwgaGVhZGVyS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGxldmVsOiBudW1iZXIgfSkge1xyXG4gICAgdGhpcy5pbnB1dFJvd1RleHRDaGFuZ2VkLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=