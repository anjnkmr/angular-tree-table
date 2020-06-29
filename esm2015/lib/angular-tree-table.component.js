/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, KeyValueDiffers, Output, EventEmitter, HostBinding } from '@angular/core';
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
        this.componentClass = '';
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
        this.componentClass = 'slevel-' + this.tableData.config.level + ' expandable-arrow-position-' + this.tableData.config.expandableArrowPlacement + ' expandable-type-' + this.tableData.config.expandableType;
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
        this.evaluateExpressionsInTableData();
        this.setPageData(this.tableData.page);
    }
    /**
     * @return {?}
     */
    evaluateExpressionsInTableData() {
        for (let i = 0; i < this.tableData.data.length; i++) {
            /** @type {?} */
            const rowData = this.tableData.data[i];
            this.tableData.headers.forEach((/**
             * @param {?} header
             * @return {?}
             */
            header => {
                rowData.data[header.dataProperty] = this.evaluateConcat(header.dataProperty, rowData.data);
            }));
        }
    }
    /**
     * @param {?} expression
     * @param {?} data
     * @return {?}
     */
    executeExpression(expression, data) {
        /** @type {?} */
        let result = undefined;
        if (expression.indexOf(' - ') > -1) {
            /** @type {?} */
            const expressionParts = expression.split(' - ');
            for (let [index, expressionPart] of expressionParts.entries()) {
                expressionParts[index] = this.executeExpression(expressionPart, data);
            }
            expressionParts.forEach((/**
             * @param {?} v
             * @return {?}
             */
            v => {
                if (result === undefined) {
                    result = v;
                }
                else {
                    result = result - parseFloat(v);
                }
            }));
            return result;
        }
        else if (expression.indexOf(' + ') > -1) {
            /** @type {?} */
            const expressionParts = expression.split(' + ');
            for (let [index, expressionPart] of expressionParts.entries()) {
                expressionParts[index] = this.executeExpression(expressionPart, data);
            }
            expressionParts.forEach((/**
             * @param {?} v
             * @return {?}
             */
            v => {
                if (result === undefined) {
                    result = v;
                }
                else {
                    result = result + parseFloat(v);
                }
            }));
            return result;
        }
        else if (expression.indexOf(' * ') > -1) {
            /** @type {?} */
            const expressionParts = expression.split(' * ');
            for (let [index, expressionPart] of expressionParts.entries()) {
                expressionParts[index] = this.executeExpression(expressionPart, data);
            }
            expressionParts.forEach((/**
             * @param {?} v
             * @return {?}
             */
            v => {
                if (result === undefined) {
                    result = v;
                }
                else {
                    result = result * parseFloat(v);
                }
            }));
            return result;
        }
        else if (expression.indexOf(' / ') > -1) {
            /** @type {?} */
            const expressionParts = expression.split(' / ');
            for (let [index, expressionPart] of expressionParts.entries()) {
                expressionParts[index] = this.executeExpression(expressionPart, data);
            }
            expressionParts.forEach((/**
             * @param {?} v
             * @return {?}
             */
            v => {
                if (result === undefined) {
                    result = v;
                }
                else {
                    result = result / parseFloat(v);
                }
            }));
            return result;
        }
        else {
            return this.getValueWithPathFromObject(expression, data);
        }
    }
    /**
     * @param {?} expression
     * @param {?} data
     * @return {?}
     */
    evaluateConcat(expression, data) {
        if (data === undefined) {
            return undefined;
        }
        if (data[expression] !== undefined && data[expression] !== null) {
            return data[expression];
        }
        if (expression.startsWith('=CONCAT(') && expression.endsWith(')')) {
            expression = expression.replace('=CONCAT(', '');
            expression = expression.substring(0, expression.length - 1);
            /** @type {?} */
            const expressionParts = expression.split('|||');
            /** @type {?} */
            let result = '';
            expressionParts.forEach((/**
             * @param {?} v
             * @return {?}
             */
            v => {
                result += '' + this.executeExpression(v, data);
            }));
            return result;
        }
        else {
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
     * @param {?} path
     * @param {?} data
     * @return {?}
     */
    getValueWithPathFromObject(path, data) {
        /** @type {?} */
        const pathParts = path.split('.');
        /** @type {?} */
        let result = data;
        for (let part of pathParts) {
            if (part.endsWith(']')) {
                /** @type {?} */
                const subParts = part.split('[');
                /** @type {?} */
                const arrayProperty = subParts[0];
                if (result[arrayProperty] === undefined || result[arrayProperty] === null || !Array.isArray(result[arrayProperty])) {
                    return '';
                }
                /** @type {?} */
                const arrayIndex = parseInt(subParts[1].replace(']', ''));
                if (isNaN(arrayIndex)) {
                    return '#ERR: NaN';
                }
                result = result[arrayProperty][arrayIndex];
            }
            else {
                if (result === undefined) {
                    return '';
                }
                if (part === ' ') {
                    return ' ';
                }
                if (result[part] === undefined) {
                    return part;
                }
                result = result[part];
            }
        }
        return result;
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
        row.children.config.level = this.tableData.config.level + 1;
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
                // Need to do calculations
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
                    // Inserting into current page
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
        /** @type {?} */
        let dataRowsSource = this.tableData.data;
        if (this.tableData.config.excelExportOnlyFilteredRows) {
            dataRowsSource = this.filteredData;
        }
        for (let d of dataRowsSource) {
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
                template: "<div class=\"tree-table\" *ngIf=\"tableData.config.expandableType.toString() === 'DIFFERENT_HEADERS'\">\r\n  <div class=\"tree-table-loading\" [ngClass]=\"tableData.isLoading ? 'on' : 'off'\">\r\n    <div class=\"loader-msg\">\r\n      Loading...\r\n    </div>\r\n  </div>\r\n  <div class=\"action-container\">\r\n    <div class=\"search-section\"\r\n      *ngIf=\"tableData.config.showPageLengthDropdown || tableData.config.commonSearch || tableData.config.excelExportButton\">\r\n      <div class=\"first-part\" *ngIf=\"tableData.config.showPageLengthDropdown\">\r\n        Show <select class=\"select-page-size form-control form-control-sm\" [(ngModel)]=\"tableData.pageSize\"\r\n          (change)=\"pageSizeChanged()\">\r\n          <option value=\"{{p}}\" *ngFor=\"let p of tableData.config.pageSizes\">{{p}}</option>\r\n        </select> Entries\r\n      </div>\r\n      <div class=\"second-part\">\r\n        <input *ngIf=\"tableData.config.commonSearch\" type=\"text\"\r\n          class=\"form-control form-control-sm text-center col-3 float-right\" [(ngModel)]=\"tableData.keyword\"\r\n          (keyup)=\"search()\" (change)=\"search()\" placeholder=\"Search\" />\r\n        <button *ngIf=\"tableData.config.excelExportButton\"\r\n          class=\"btn btn-sm btn-primary export excelExportButton float-right\"\r\n          (click)=\"excelExportClicked()\">{{tableData.config.excelExportButtonText}}</button>\r\n        <div class=\"dropdown dropleft\" id=\"dropDownVisCon{{randomInstance}}\">\r\n          <button id=\"dropDownVis{{randomInstance}}\" *ngIf=\"tableData.config.columnVisibilityDropDown\"\r\n            class=\"btn btn-sm btn-secondary dropDownBtn v-elipses float-right dropdown-toggle\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">\u22EE</button>\r\n          <div class=\"dropDownBtn-data dropdown-menu\">\r\n\r\n            <ng-container *ngFor=\"let header of currentPageData.headers\">\r\n              <button class=\"btnVis btn-sm btn\" *ngIf=\"header.canChangeVisbilityOnRuntime\"\r\n                [ngClass]=\"header.show ? 'active': ''\" (click)=\" header.show = !header.show;\">{{header.title}}</button>\r\n            </ng-container>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"buttons-section\" *ngIf=\"tableData.config.columnVisibility\">\r\n      <div class=\"column-visibility\" *ngIf=\"tableData.config.columnVisibility\">\r\n        <ng-container *ngFor=\"let header of currentPageData.headers\">\r\n          <button class=\"btnVis\" *ngIf=\"header.canChangeVisbilityOnRuntime\" [ngClass]=\"header.show ? 'active': ''\"\r\n            (click)=\"header.show = !header.show\">{{header.title}}</button>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n    <div class=\"extraInfo-section\" *ngIf=\"tableData.config.extraInfos.length > 0\">\r\n      <div class=\"extraInfo\" [style.width]=\"extraInfoItemWidthPercent + '%'\"\r\n        *ngFor=\"let exInfo of tableData.config.extraInfos\">\r\n        {{exInfo[0]}}: {{exInfo[1]}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <table [class]=\"className + ' ' + tableData.config.customClassName + ' ' + tableData.config.fullClassName\">\r\n    <thead class=\"ds2-table-element--head-row thead-sm\" *ngIf=\"tableData.config.showTableHeaders\">\r\n      <tr>\r\n        <th\r\n          *ngIf=\"!tableData.config.showExpandAllArrows && tableData.config.expandableArrowPlacement.toString() === 'SEPERATE_COLUMN'\"\r\n          [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></th>\r\n        <th\r\n          *ngIf=\"tableData.config.showExpandAllArrows && tableData.config.expandableArrowPlacement.toString() === 'SEPERATE_COLUMN'\"\r\n          [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\">\r\n          <button class=\"btn btn-secondary btn-sm collapsed-row-button\" (click)=\"expandAllRows()\"\r\n            *ngIf=\"!tableData.isAllRowsExpanded\"></button>\r\n          <button class=\"btn btn-secondary btn-sm expanded-row-button\" (click)=\"collapseAllRows()\"\r\n            *ngIf=\"tableData.isAllRowsExpanded\"></button>\r\n        </th>\r\n        <ng-container *ngFor=\"let header of currentPageData.headers; let indx = index;\">\r\n          <th *ngIf=\"header.show && header.dataType !== 'SELECT'\" [ngClass]=\"header.style\" (click)=\"sortColumn(header)\">\r\n            <ng-container *ngIf=\"tableData.config.showExpandAllArrows && tableData.config.expandableArrowPlacement.toString() === 'FIRST_COLUMN'\">\r\n              <span class=\"collapsed-row-button\"\r\n                *ngIf=\"indx === 0 && !tableData.isAllRowsExpanded\"\r\n                (click)=\"expandAllRows()\"></span>\r\n              <span class=\"expanded-row-button\"\r\n                *ngIf=\"indx === 0 && tableData.isAllRowsExpanded\"\r\n                (click)=\"collapseAllRows()\"></span>\r\n            </ng-container>\r\n            {{header.title}}\r\n            <i [ngClass]=\"tableData.config.sortAscClassName+' sort-right-align'\"\r\n              *ngIf=\"tableData.config.sortedColumn[header.dataProperty] === 'ASC'\"></i>\r\n            <i [ngClass]=\"tableData.config.sortDescClassName+' sort-right-align'\"\r\n              *ngIf=\"tableData.config.sortedColumn[header.dataProperty] === 'DESC'\"></i>\r\n            <i [ngClass]=\"tableData.config.sortNothingClassName+' sort-right-align'\"\r\n              *ngIf=\"tableData.config.sortedColumn[header.dataProperty] !== 'DESC' && tableData.config.sortedColumn[header.dataProperty] !== 'ASC'\"></i>\r\n          </th>\r\n          <th *ngIf=\"header.show && header.dataType === 'SELECT'\" [ngClass]=\"header.style\"\r\n            (click)=\"toggleSelectAllRows(header)\">\r\n            <input type=\"checkbox\" class=\"header-check-box select-all\"\r\n              [checked]=\"isAllRowsSelected(header) ? 'checked' : ''\" /> {{header.title}}\r\n          </th>\r\n        </ng-container>\r\n      </tr>\r\n      <tr *ngIf=\"tableData.config.visibleColumnFiltersVisibility\">\r\n        <th [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></th>\r\n        <ng-container *ngFor=\"let header of currentPageData.headers\">\r\n          <th *ngIf=\"header.show\">\r\n            <input type=\"text\" class=\"form-control form-control-sm text-center\" placeholder=\"{{header.title}}\"\r\n              (change)=\"columnSearchChanged(header.dataProperty)\" (keyup)=\"columnSearchChanged(header.dataProperty)\"\r\n              [(ngModel)]=\"tableData.config.visibleColumnFilters[header.dataProperty]\"\r\n              [disabled]=\"!header.enableColumnSearch || header.dataType === 'SELECT'\"\r\n              [name]=\"'filter_'+header.dataProperty\" />\r\n          </th>\r\n        </ng-container>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngIf=\"currentPageData.data.length === 0\">\r\n        <tr *ngIf=\"tableData.isLoading\">\r\n          <td [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n          <td [attr.colspan]=\"currentPageData.headers.length + 1\" style=\"text-align: center;\">\r\n            Loading...\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"!tableData.isLoading\">\r\n          <td [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n          <td [attr.colspan]=\"currentPageData.headers.length + 1\" style=\"text-align: center;\">\r\n            No records found\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n      <ng-container *ngFor=\"let row of currentPageData.data; let indi = index;\">\r\n        <ng-container *ngIf=\"row !== undefined\">\r\n          <tr [ngClass]=\"getRowClass(row)\">\r\n            <td *ngIf=\"!row.expandable && tableData.config.expandableArrowPlacement.toString() === 'SEPERATE_COLUMN'\"\r\n              [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n            <td *ngIf=\"row.expandable && tableData.config.expandableArrowPlacement.toString() === 'SEPERATE_COLUMN'\"\r\n              [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\">\r\n              <button class=\"btn btn-secondary btn-sm collapsed-row-button\" (click)=\"expandRow(row)\"\r\n                *ngIf=\"!row.expanded\"></button>\r\n              <button class=\"btn btn-secondary btn-sm expanded-row-button\" (click)=\"collapseRow(row)\"\r\n                *ngIf=\"row.expanded\"></button>\r\n            </td>\r\n            <ng-container *ngFor=\"let header of currentPageData.headers; let indx = index;\">\r\n              <td *ngIf=\"header.show\" [style]=\"row.styles[header.dataProperty]\"\r\n                [ngClass]=\"row.classes[header.dataProperty]\">\r\n                <ng-container *ngIf=\"row.expandable\">\r\n                  <span class=\"collapsed-row-button\"\r\n                    *ngIf=\"indx === 0 && !row.expanded && tableData.config.expandableArrowPlacement.toString() === 'FIRST_COLUMN'\"\r\n                    (click)=\"expandRow(row)\"></span>\r\n                  <span class=\"expanded-row-button\"\r\n                    *ngIf=\"indx === 0 && row.expanded && tableData.config.expandableArrowPlacement.toString() === 'FIRST_COLUMN'\"\r\n                    (click)=\"collapseRow(row)\"></span>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType === 'ACTIONS'\">\r\n                  <button class=\"tt-row-action  btn-xs btn btn-default\" *ngFor=\"let action of row.actions\"\r\n                    [ngClass]=\"action.classes\" (click)=\"rowAction(row, action)\" [title]=\"action.title\">\r\n                    {{action.label}}\r\n                  </button>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType === 'SELECT'\">\r\n                  <input type=\"checkbox\" class=\"header-check-box select-one\" [checked]=\"row.selected ? 'checked' : ''\"\r\n                    (change)=\"toggleSelectRow(row)\" />\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType === 'INPUT_TEXT'\">\r\n                  <input type=\"text\" class=\"header-input-text tt-input-tag\" [(ngModel)]=\"row.data[header.dataProperty]\"\r\n                    [name]=\"indi + '_' + header.dataProperty\"\r\n                    (change)=\"inputRowTextChangedInternal($event, row.data, header.dataProperty, row.data[header.dataProperty], tableData.config.level)\" />\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType === 'INPUT_SELECT'\">\r\n                  <select class=\"header-input-select tt-select-tag\" [(ngModel)]=\"row.data[header.dataProperty]\"\r\n                    [name]=\"indi + '_' + header.dataProperty\"\r\n                    (change)=\"inputRowSelectChangedInternal($event, row.data, header.dataProperty, row.data[header.dataProperty], tableData.config.level)\">\r\n                    <ng-container *ngIf=\"row.options !== undefined && row.options !== null\">\r\n                      <option [value]=\"opt.value\" *ngFor=\"let opt of row.options\">{{opt.displayText}}</option>\r\n                    </ng-container>\r\n                  </select>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType !== 'ACTIONS' && header.dataType !== 'SELECT'\">\r\n                  <ng-container *ngIf=\"row.clickables[header.dataProperty] !== undefined\">\r\n                    <button class=\"popup-link-button\" (click)=\"clickableClicked(row, header.dataProperty)\"\r\n                      [innerHTML]=\"row.data[header.dataProperty]\">\r\n                    </button>\r\n                  </ng-container>\r\n                  <ng-container\r\n                    *ngIf=\"row.clickables[header.dataProperty] === undefined && header.dataType !== 'INPUT_TEXT' && header.dataType !== 'INPUT_SELECT'\">\r\n                    <span class=\"inner-content-table-cell\" [innerHTML]=\"row.data[header.dataProperty]\"></span>\r\n                  </ng-container>\r\n                </ng-container>\r\n              </td>\r\n            </ng-container>\r\n          </tr>\r\n          <tr *ngIf=\"row.expanded && row.children.config.expandableType.toString() === 'DIFFERENT_HEADERS'\"\r\n            [ngClass]=\"row.expanded ? 'expanded-row-content' : 'collapsed-row-content'\">\r\n            <td style=\"width: 10px;\"></td>\r\n            <td [colSpan]=\"currentPageData.headers.length\">\r\n              <angular-tree-table (inputRowSelectChanged)=\"inputRowSelectChangedChild($event)\"\r\n                (inputRowTextChanged)=\"inputRowTextChangedChild($event)\"\r\n                (rowSelectionChanged)=\"childRowSelectionChanged($event)\" [tableData]=\"row.children\">\r\n              </angular-tree-table>\r\n            </td>\r\n          </tr>\r\n          <ng-container *ngIf=\"row.expanded && row.children.config.expandableType.toString() === 'SAME_HEADERS'\">\r\n            <angular-tree-table (inputRowSelectChanged)=\"inputRowSelectChangedChild($event)\"\r\n              (inputRowTextChanged)=\"inputRowTextChangedChild($event)\"\r\n              (rowSelectionChanged)=\"childRowSelectionChanged($event)\" [tableData]=\"row.children\">\r\n            </angular-tree-table>\r\n          </ng-container>\r\n        </ng-container>\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"table-bottom\">\r\n    <div class=\"page-number-status\">\r\n      Showing {{(tableData.pageSize * (tableData.page - 1)) + 1}} to {{getPageTo()}} of\r\n      <ng-container *ngIf=\"tableData.filteredRowsCount != tableData.totalRowsCount\">\r\n        {{tableData.filteredRowsCount}} rows filtered on {{tableData.totalRowsCount}}\r\n      </ng-container>\r\n      <ng-container *ngIf=\"tableData.filteredRowsCount === tableData.totalRowsCount\">\r\n        {{tableData.filteredRowsCount}}\r\n      </ng-container>\r\n      rows\r\n    </div>\r\n    <div class=\"pagination-buttons\" *ngIf=\"tableData.totalRowsCount > tableData.pageSize\">\r\n      <div [class]=\"tableData.splashMessageFlag ? 'splash-message show' : 'splash-message hide'\">\r\n        <div class=\"message-content\">{{tableData.splashMessageContent}}</div>\r\n      </div>\r\n      <div class=\"btn btnGroup btn-group\">\r\n        <button class=\"btn big\" [class]=\"tableData.page === 1 ? 'btn big btn-secondary ' : 'btn big btn-secondary '\"\r\n          (click)=\"changePage(1)\">First</button>\r\n        <button class=\"btn\" [class]=\"'btn btn-secondary'\" (click)=\"changePage(tableData.page - 1)\">&lt;</button>\r\n        <ng-container *ngFor=\"let pageNumber of pageNumbers()\">\r\n          <button class=\"btn\" [class]=\"tableData.page === pageNumber ? 'btn btn-primary ' : 'btn btn-secondary '\"\r\n            (click)=\"changePage(pageNumber)\">{{pageNumber}}</button>\r\n        </ng-container>\r\n        <button class=\"btn\" [class]=\"'btn btn-secondary'\" (click)=\"changePage(tableData.page + 1)\">&gt;</button>\r\n        <button class=\"btn big\"\r\n          [class]=\"tableData.page === tableData.totalPagesCount() ? 'btn big btn-secondary ' : 'btn big btn-secondary '\"\r\n          (click)=\"changePage(tableData.totalPagesCount())\">Last</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-container *ngIf=\"tableData.config.expandableType.toString() === 'SAME_HEADERS'\">\r\n  <ng-container *ngIf=\"currentPageData.data.length === 0\">\r\n    <tr *ngIf=\"tableData.isLoading\">\r\n      <td [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n      <td [attr.colspan]=\"currentPageData.headers.length + 1\" style=\"text-align: center;\">\r\n        Loading...\r\n      </td>\r\n    </tr>\r\n    <tr *ngIf=\"!tableData.isLoading\">\r\n      <td [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n      <td [attr.colspan]=\"currentPageData.headers.length + 1\" style=\"text-align: center;\">\r\n        No records found\r\n      </td>\r\n    </tr>\r\n  </ng-container>\r\n  <ng-container *ngFor=\"let row of currentPageData.data; let indi = index;\">\r\n    <ng-container *ngIf=\"row !== undefined\">\r\n      <tr [ngClass]=\"getRowClass(row)\">\r\n        <td *ngIf=\"!row.expandable && tableData.config.expandableArrowPlacement.toString() === 'SEPERATE_COLUMN'\"\r\n          [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n        <td *ngIf=\"row.expandable && tableData.config.expandableArrowPlacement.toString() === 'SEPERATE_COLUMN'\"\r\n          [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\">\r\n          <button class=\"btn btn-secondary btn-sm collapsed-row-button\" (click)=\"expandRow(row)\"\r\n            *ngIf=\"!row.expanded\"></button>\r\n          <button class=\"btn btn-secondary btn-sm expanded-row-button\" (click)=\"collapseRow(row)\"\r\n            *ngIf=\"row.expanded\"></button>\r\n        </td>\r\n        <ng-container *ngFor=\"let header of currentPageData.headers; let indx=index;\">\r\n          <td *ngIf=\"header.show\" [style]=\"row.styles[header.dataProperty]\"\r\n            [ngClass]=\"row.classes[header.dataProperty]\">\r\n            <ng-container *ngIf=\"row.expandable\">\r\n              <span class=\"collapsed-row-button\"\r\n                *ngIf=\"indx === 0 && !row.expanded && tableData.config.expandableArrowPlacement.toString() === 'FIRST_COLUMN'\"\r\n                (click)=\"expandRow(row)\"></span>\r\n              <span class=\"expanded-row-button\"\r\n                *ngIf=\"indx === 0 && row.expanded && tableData.config.expandableArrowPlacement.toString() === 'FIRST_COLUMN'\"\r\n                (click)=\"collapseRow(row)\"></span>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"header.dataType === 'ACTIONS'\">\r\n              <button class=\"tt-row-action  btn-xs btn btn-default\" *ngFor=\"let action of row.actions\"\r\n                [ngClass]=\"action.classes\" (click)=\"rowAction(row, action)\" [title]=\"action.title\">\r\n                {{action.label}}\r\n              </button>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"header.dataType === 'SELECT'\">\r\n              <input type=\"checkbox\" class=\"header-check-box select-one\" [checked]=\"row.selected ? 'checked' : ''\"\r\n                (change)=\"toggleSelectRow(row)\" />\r\n            </ng-container>\r\n            <ng-container *ngIf=\"header.dataType === 'INPUT_TEXT'\">\r\n              <input type=\"text\" class=\"header-input-text tt-input-tag\" [(ngModel)]=\"row.data[header.dataProperty]\"\r\n                [name]=\"indi + '_' + header.dataProperty\"\r\n                (change)=\"inputRowTextChangedInternal($event, row.data, header.dataProperty, row.data[header.dataProperty], tableData.config.level)\" />\r\n            </ng-container>\r\n            <ng-container *ngIf=\"header.dataType === 'INPUT_SELECT'\">\r\n              <select class=\"header-input-select tt-select-tag\" [(ngModel)]=\"row.data[header.dataProperty]\"\r\n                [name]=\"indi + '_' + header.dataProperty\"\r\n                (change)=\"inputRowSelectChangedInternal($event, row.data, header.dataProperty, row.data[header.dataProperty], tableData.config.level)\">\r\n                <ng-container *ngIf=\"row.options !== undefined && row.options !== null\">\r\n                  <option [value]=\"opt.value\" *ngFor=\"let opt of row.options\">{{opt.displayText}}</option>\r\n                </ng-container>\r\n              </select>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"header.dataType !== 'ACTIONS' && header.dataType !== 'SELECT'\">\r\n              <ng-container *ngIf=\"row.clickables[header.dataProperty] !== undefined\">\r\n                <button class=\"popup-link-button\" (click)=\"clickableClicked(row, header.dataProperty)\"\r\n                  [innerHTML]=\"row.data[header.dataProperty]\">\r\n                </button>\r\n              </ng-container>\r\n              <ng-container\r\n                *ngIf=\"row.clickables[header.dataProperty] === undefined && header.dataType !== 'INPUT_TEXT' && header.dataType !== 'INPUT_SELECT'\">\r\n                <span class=\"inner-content-table-cell\" [innerHTML]=\"row.data[header.dataProperty]\"></span>\r\n              </ng-container>\r\n            </ng-container>\r\n          </td>\r\n        </ng-container>\r\n      </tr>\r\n      <tr *ngIf=\"row.expanded && row.children.config.expandableType.toString() === 'DIFFERENT_HEADERS'\"\r\n        [ngClass]=\"row.expanded ? 'expanded-row-content' : 'collapsed-row-content'\">\r\n        <td style=\"width: 10px;\"></td>\r\n        <td [colSpan]=\"currentPageData.headers.length\">\r\n          <angular-tree-table (inputRowSelectChanged)=\"inputRowSelectChangedChild($event)\"\r\n            (inputRowTextChanged)=\"inputRowTextChangedChild($event)\"\r\n            (rowSelectionChanged)=\"childRowSelectionChanged($event)\" [tableData]=\"row.children\">\r\n          </angular-tree-table>\r\n        </td>\r\n      </tr>\r\n      <ng-container *ngIf=\"row.expanded && row.children.config.expandableType.toString() === 'SAME_HEADERS'\">\r\n        <angular-tree-table (inputRowSelectChanged)=\"inputRowSelectChangedChild($event)\"\r\n          (inputRowTextChanged)=\"inputRowTextChangedChild($event)\"\r\n          (rowSelectionChanged)=\"childRowSelectionChanged($event)\" [tableData]=\"row.children\">\r\n        </angular-tree-table>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-container>",
                styles: [":host{display:contents}:host .dropDownBtn-data{overflow:visible;padding:5px}:host.expandable-arrow-position-FIRST_COLUMN td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:30px;padding-right:10px}:host.expandable-arrow-position-FIRST_COLUMN tr.expanded-row{box-sizing:border-box;border:2px solid #00000080;border-bottom:0;font-weight:700;background-color:#0000000d}:host.expandable-arrow-position-FIRST_COLUMN tr.expanded-row+angular-tree-table>tr{border:2px solid #00000080;border-top:0;border-bottom:0}:host.expandable-arrow-position-FIRST_COLUMN tr.expanded-row+angular-tree-table>tr:last-child{border:2px solid #00000080;border-top:0}:host.expandable-arrow-position-FIRST_COLUMN.slevel-1 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-1 tr span.expanded-row-button{position:absolute;left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-1 tr td:first-child{padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-1 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-2 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-2 tr span.expanded-row-button{position:absolute;left:40px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-2 tr td:first-child{padding-left:40px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-2 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-3 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-3 tr span.expanded-row-button{position:absolute;left:60px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-3 tr td:first-child{padding-left:60px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-3 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-4 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-4 tr span.expanded-row-button{position:absolute;left:80px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-4 tr td:first-child{padding-left:80px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-4 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-5 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-5 tr span.expanded-row-button{position:absolute;left:100px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-5 tr td:first-child{padding-left:100px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-5 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-6 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-6 tr span.expanded-row-button{position:absolute;left:120px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-6 tr td:first-child{padding-left:120px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-6 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-7 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-7 tr span.expanded-row-button{position:absolute;left:140px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-7 tr td:first-child{padding-left:140px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-7 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-8 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-8 tr span.expanded-row-button{position:absolute;left:160px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-8 tr td:first-child{padding-left:160px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-8 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-9 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-9 tr span.expanded-row-button{position:absolute;left:180px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-9 tr td:first-child{padding-left:180px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-9 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-10 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-10 tr span.expanded-row-button{position:absolute;left:200px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-10 tr td:first-child{padding-left:200px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-10 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-11 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-11 tr span.expanded-row-button{position:absolute;left:220px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-11 tr td:first-child{padding-left:220px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-11 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-12 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-12 tr span.expanded-row-button{position:absolute;left:240px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-12 tr td:first-child{padding-left:240px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-12 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-13 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-13 tr span.expanded-row-button{position:absolute;left:260px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-13 tr td:first-child{padding-left:260px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-13 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-14 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-14 tr span.expanded-row-button{position:absolute;left:280px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-14 tr td:first-child{padding-left:280px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-14 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-15 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-15 tr span.expanded-row-button{position:absolute;left:300px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-15 tr td:first-child{padding-left:300px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-15 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-16 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-16 tr span.expanded-row-button{position:absolute;left:320px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-16 tr td:first-child{padding-left:320px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-16 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-17 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-17 tr span.expanded-row-button{position:absolute;left:340px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-17 tr td:first-child{padding-left:340px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-17 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-18 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-18 tr span.expanded-row-button{position:absolute;left:360px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-18 tr td:first-child{padding-left:360px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-18 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-19 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-19 tr span.expanded-row-button{position:absolute;left:380px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-19 tr td:first-child{padding-left:380px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-19 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-20 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-20 tr span.expanded-row-button{position:absolute;left:400px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-20 tr td:first-child{padding-left:400px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-20 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-21 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-21 tr span.expanded-row-button{position:absolute;left:420px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-21 tr td:first-child{padding-left:420px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-21 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-22 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-22 tr span.expanded-row-button{position:absolute;left:440px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-22 tr td:first-child{padding-left:440px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-22 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-23 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-23 tr span.expanded-row-button{position:absolute;left:460px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-23 tr td:first-child{padding-left:460px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-23 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-24 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-24 tr span.expanded-row-button{position:absolute;left:480px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-24 tr td:first-child{padding-left:480px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-24 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-25 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-25 tr span.expanded-row-button{position:absolute;left:500px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-25 tr td:first-child{padding-left:500px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-25 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-26 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-26 tr span.expanded-row-button{position:absolute;left:520px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-26 tr td:first-child{padding-left:520px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-26 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-27 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-27 tr span.expanded-row-button{position:absolute;left:540px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-27 tr td:first-child{padding-left:540px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-27 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-28 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-28 tr span.expanded-row-button{position:absolute;left:560px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-28 tr td:first-child{padding-left:560px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-28 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-29 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-29 tr span.expanded-row-button{position:absolute;left:580px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-29 tr td:first-child{padding-left:580px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-29 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-30 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-30 tr span.expanded-row-button{position:absolute;left:600px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-30 tr td:first-child{padding-left:600px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-30 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-31 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-31 tr span.expanded-row-button{position:absolute;left:620px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-31 tr td:first-child{padding-left:620px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-31 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-32 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-32 tr span.expanded-row-button{position:absolute;left:640px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-32 tr td:first-child{padding-left:640px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-32 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-33 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-33 tr span.expanded-row-button{position:absolute;left:660px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-33 tr td:first-child{padding-left:660px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-33 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-34 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-34 tr span.expanded-row-button{position:absolute;left:680px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-34 tr td:first-child{padding-left:680px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-34 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-35 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-35 tr span.expanded-row-button{position:absolute;left:700px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-35 tr td:first-child{padding-left:700px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-35 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-36 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-36 tr span.expanded-row-button{position:absolute;left:720px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-36 tr td:first-child{padding-left:720px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-36 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-37 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-37 tr span.expanded-row-button{position:absolute;left:740px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-37 tr td:first-child{padding-left:740px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-37 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-38 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-38 tr span.expanded-row-button{position:absolute;left:760px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-38 tr td:first-child{padding-left:760px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-38 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-39 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-39 tr span.expanded-row-button{position:absolute;left:780px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-39 tr td:first-child{padding-left:780px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-39 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-40 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-40 tr span.expanded-row-button{position:absolute;left:800px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-40 tr td:first-child{padding-left:800px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-40 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-41 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-41 tr span.expanded-row-button{position:absolute;left:820px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-41 tr td:first-child{padding-left:820px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-41 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-42 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-42 tr span.expanded-row-button{position:absolute;left:840px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-42 tr td:first-child{padding-left:840px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-42 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-43 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-43 tr span.expanded-row-button{position:absolute;left:860px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-43 tr td:first-child{padding-left:860px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-43 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-44 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-44 tr span.expanded-row-button{position:absolute;left:880px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-44 tr td:first-child{padding-left:880px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-44 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-45 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-45 tr span.expanded-row-button{position:absolute;left:900px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-45 tr td:first-child{padding-left:900px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-45 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-46 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-46 tr span.expanded-row-button{position:absolute;left:920px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-46 tr td:first-child{padding-left:920px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-46 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-47 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-47 tr span.expanded-row-button{position:absolute;left:940px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-47 tr td:first-child{padding-left:940px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-47 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-48 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-48 tr span.expanded-row-button{position:absolute;left:960px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-48 tr td:first-child{padding-left:960px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-48 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-49 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-49 tr span.expanded-row-button{position:absolute;left:980px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-49 tr td:first-child{padding-left:980px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-49 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-50 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-50 tr span.expanded-row-button{position:absolute;left:1000px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-50 tr td:first-child{padding-left:1000px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-50 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-51 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-51 tr span.expanded-row-button{position:absolute;left:1020px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-51 tr td:first-child{padding-left:1020px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-51 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-52 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-52 tr span.expanded-row-button{position:absolute;left:1040px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-52 tr td:first-child{padding-left:1040px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-52 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-53 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-53 tr span.expanded-row-button{position:absolute;left:1060px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-53 tr td:first-child{padding-left:1060px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-53 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-54 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-54 tr span.expanded-row-button{position:absolute;left:1080px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-54 tr td:first-child{padding-left:1080px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-54 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-55 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-55 tr span.expanded-row-button{position:absolute;left:1100px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-55 tr td:first-child{padding-left:1100px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-55 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-56 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-56 tr span.expanded-row-button{position:absolute;left:1120px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-56 tr td:first-child{padding-left:1120px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-56 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-57 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-57 tr span.expanded-row-button{position:absolute;left:1140px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-57 tr td:first-child{padding-left:1140px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-57 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-58 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-58 tr span.expanded-row-button{position:absolute;left:1160px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-58 tr td:first-child{padding-left:1160px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-58 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-59 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-59 tr span.expanded-row-button{position:absolute;left:1180px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-59 tr td:first-child{padding-left:1180px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-59 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-60 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-60 tr span.expanded-row-button{position:absolute;left:1200px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-60 tr td:first-child{padding-left:1200px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-60 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-61 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-61 tr span.expanded-row-button{position:absolute;left:1220px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-61 tr td:first-child{padding-left:1220px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-61 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-62 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-62 tr span.expanded-row-button{position:absolute;left:1240px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-62 tr td:first-child{padding-left:1240px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-62 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-63 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-63 tr span.expanded-row-button{position:absolute;left:1260px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-63 tr td:first-child{padding-left:1260px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-63 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-64 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-64 tr span.expanded-row-button{position:absolute;left:1280px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-64 tr td:first-child{padding-left:1280px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-64 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-65 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-65 tr span.expanded-row-button{position:absolute;left:1300px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-65 tr td:first-child{padding-left:1300px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-65 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-66 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-66 tr span.expanded-row-button{position:absolute;left:1320px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-66 tr td:first-child{padding-left:1320px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-66 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-67 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-67 tr span.expanded-row-button{position:absolute;left:1340px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-67 tr td:first-child{padding-left:1340px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-67 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-68 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-68 tr span.expanded-row-button{position:absolute;left:1360px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-68 tr td:first-child{padding-left:1360px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-68 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-69 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-69 tr span.expanded-row-button{position:absolute;left:1380px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-69 tr td:first-child{padding-left:1380px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-69 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-70 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-70 tr span.expanded-row-button{position:absolute;left:1400px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-70 tr td:first-child{padding-left:1400px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-70 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-71 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-71 tr span.expanded-row-button{position:absolute;left:1420px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-71 tr td:first-child{padding-left:1420px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-71 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-72 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-72 tr span.expanded-row-button{position:absolute;left:1440px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-72 tr td:first-child{padding-left:1440px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-72 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-73 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-73 tr span.expanded-row-button{position:absolute;left:1460px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-73 tr td:first-child{padding-left:1460px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-73 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-74 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-74 tr span.expanded-row-button{position:absolute;left:1480px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-74 tr td:first-child{padding-left:1480px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-74 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-75 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-75 tr span.expanded-row-button{position:absolute;left:1500px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-75 tr td:first-child{padding-left:1500px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-75 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-76 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-76 tr span.expanded-row-button{position:absolute;left:1520px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-76 tr td:first-child{padding-left:1520px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-76 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-77 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-77 tr span.expanded-row-button{position:absolute;left:1540px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-77 tr td:first-child{padding-left:1540px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-77 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-78 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-78 tr span.expanded-row-button{position:absolute;left:1560px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-78 tr td:first-child{padding-left:1560px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-78 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-79 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-79 tr span.expanded-row-button{position:absolute;left:1580px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-79 tr td:first-child{padding-left:1580px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-79 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-80 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-80 tr span.expanded-row-button{position:absolute;left:1600px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-80 tr td:first-child{padding-left:1600px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-80 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-81 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-81 tr span.expanded-row-button{position:absolute;left:1620px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-81 tr td:first-child{padding-left:1620px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-81 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-82 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-82 tr span.expanded-row-button{position:absolute;left:1640px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-82 tr td:first-child{padding-left:1640px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-82 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-83 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-83 tr span.expanded-row-button{position:absolute;left:1660px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-83 tr td:first-child{padding-left:1660px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-83 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-84 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-84 tr span.expanded-row-button{position:absolute;left:1680px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-84 tr td:first-child{padding-left:1680px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-84 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-85 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-85 tr span.expanded-row-button{position:absolute;left:1700px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-85 tr td:first-child{padding-left:1700px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-85 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-86 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-86 tr span.expanded-row-button{position:absolute;left:1720px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-86 tr td:first-child{padding-left:1720px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-86 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-87 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-87 tr span.expanded-row-button{position:absolute;left:1740px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-87 tr td:first-child{padding-left:1740px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-87 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-88 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-88 tr span.expanded-row-button{position:absolute;left:1760px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-88 tr td:first-child{padding-left:1760px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-88 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-89 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-89 tr span.expanded-row-button{position:absolute;left:1780px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-89 tr td:first-child{padding-left:1780px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-89 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-90 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-90 tr span.expanded-row-button{position:absolute;left:1800px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-90 tr td:first-child{padding-left:1800px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-90 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-91 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-91 tr span.expanded-row-button{position:absolute;left:1820px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-91 tr td:first-child{padding-left:1820px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-91 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-92 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-92 tr span.expanded-row-button{position:absolute;left:1840px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-92 tr td:first-child{padding-left:1840px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-92 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-93 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-93 tr span.expanded-row-button{position:absolute;left:1860px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-93 tr td:first-child{padding-left:1860px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-93 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-94 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-94 tr span.expanded-row-button{position:absolute;left:1880px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-94 tr td:first-child{padding-left:1880px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-94 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-95 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-95 tr span.expanded-row-button{position:absolute;left:1900px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-95 tr td:first-child{padding-left:1900px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-95 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-96 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-96 tr span.expanded-row-button{position:absolute;left:1920px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-96 tr td:first-child{padding-left:1920px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-96 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-97 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-97 tr span.expanded-row-button{position:absolute;left:1940px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-97 tr td:first-child{padding-left:1940px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-97 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-98 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-98 tr span.expanded-row-button{position:absolute;left:1960px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-98 tr td:first-child{padding-left:1960px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-98 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-99 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-99 tr span.expanded-row-button{position:absolute;left:1980px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-99 tr td:first-child{padding-left:1980px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-99 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-100 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-100 tr span.expanded-row-button{position:absolute;left:2000px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-100 tr td:first-child{padding-left:2000px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-100 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host .tree-table-loading{width:100%;background-color:rgba(0,0,0,.5);overflow:auto;position:absolute}:host .tree-table-loading .loader-msg{color:#fff;font-weight:700;text-align:center;width:100%;height:100px;position:absolute;top:calc(50% - 50px)}:host .tree-table-loading.on{height:100%;z-index:1000}:host .tree-table-loading.off{height:0%}:host .table-sm td,:host .table-sm th{padding:.1rem}:host .tree-table{margin-top:10px;margin-bottom:10px;overflow:auto;position:relative}:host .tree-table .select-page-size{display:inline-block;width:auto}:host .tree-table .extraInfo-section .extraInfo{float:left}:host .tree-table .column-visibility{text-align:center}:host .tree-table .column-visibility .btnVis,:host .tree-table .dropDownBtn-data .btnVis{border-style:none;padding:7px;border-radius:2px;margin-right:5px;margin-bottom:5px}:host .tree-table .column-visibility .btnVis.active,:host .tree-table .column-visibility .btnVis.hover,:host .tree-table .column-visibility .btnVis:active,:host .tree-table .column-visibility .btnVis:hover,:host .tree-table .dropDownBtn-data .btnVis.active,:host .tree-table .dropDownBtn-data .btnVis.hover,:host .tree-table .dropDownBtn-data .btnVis:active,:host .tree-table .dropDownBtn-data .btnVis:hover{background-color:#666;color:#fff}:host .tree-table .action-container .btn{margin-right:5px}:host .tree-table .action-container .search-section{overflow:visible;margin-top:10px;margin-bottom:5px}:host .tree-table .action-container .search-section .first-part{width:40%;text-align:left;display:inline-block}:host .tree-table .action-container .search-section .second-part{width:60%;display:inline-block}:host .tree-table .table-bottom{overflow:auto}:host .tree-table .table-bottom .page-number-status{float:left;overflow:auto;padding-top:.375rem}:host .tree-table .table-bottom .btnGroup{float:right;padding-right:0;padding-top:0;padding-bottom:0}:host .tree-table .table-bottom .pagination-buttons{overflow:auto;position:relative}:host .tree-table .table-bottom .pagination-buttons .splash-message{float:right;position:absolute;right:0;z-index:9999;background:#ececec;border-radius:3px;color:#86adef;font-weight:700;padding:5.5px 15px;transition:opacity 1s ease-in-out}:host .tree-table .table-bottom .pagination-buttons .splash-message.show{opacity:1}:host .tree-table .table-bottom .pagination-buttons .splash-message.hide{padding:0;opacity:0}:host .tree-table .table-bottom .pagination-buttons button{width:48px}:host .tree-table .table-bottom .pagination-buttons button.big{width:50px}:host .tree-table table{width:100%;text-align:center;border-collapse:collapse;margin-bottom:5px}:host .tree-table table th{cursor:pointer;-moz-user-select:none;user-select:none;-ms-user-select:none;-webkit-user-select:none;font-weight:700}:host .tree-table table .expanded-row-content{background:0 0}:host .tree-table table tr span.collapsed-row-button,:host .tree-table table tr span.expanded-row-button{position:absolute;left:10px;display:inline-block;width:20px;height:20px;cursor:pointer}:host .tree-table table tr span.collapsed-row-button:after{content:\"\";width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #707070;display:inline-block}:host .tree-table table tr span.expanded-row-button:after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #707070;display:inline-block}:host .tree-table table tr>td:first-child.not-used,:host .tree-table table tr>th:first-child.not-used{display:none}:host .tree-table table tr>td:first-child.used,:host .tree-table table tr>th:first-child.used{width:50px}:host .tree-table table tr>td:first-child.used .collapsed-row-button:after,:host .tree-table table tr>th:first-child.used .collapsed-row-button:after{content:\"\";width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #fff;display:inline-block}:host .tree-table table tr>td:first-child.used .expanded-row-button:after,:host .tree-table table tr>th:first-child.used .expanded-row-button:after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #fff;display:inline-block}:host .tree-table table tr .tt-row-action{margin-right:5px}:host .tree-table table td button.popup-link-button{border-style:none!important;background:0 0!important;color:#86adef!important}"]
            }] }
];
/** @nocollapse */
AngularTreeTableComponent.ctorParameters = () => [
    { type: KeyValueDiffers }
];
AngularTreeTableComponent.propDecorators = {
    componentClass: [{ type: HostBinding, args: ['class',] }],
    tableData: [{ type: Input }],
    rowSelectionChanged: [{ type: Output }],
    inputRowSelectChanged: [{ type: Output }],
    inputRowTextChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    AngularTreeTableComponent.prototype.componentClass;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci10cmVlLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItdHJlZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXRyZWUtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUEwQixLQUFLLEVBQUUsZUFBZSxFQUN4QyxNQUFNLEVBQUUsWUFBWSxFQUFXLFdBQVcsRUFDNUQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFDbEMsT0FBTyxFQUFFLGFBQWEsRUFBZ0IsTUFBTSw0QkFBNEIsQ0FBQztBQUd6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxLQUFLLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O01BSXpFLE1BQU0sR0FBRyxPQUFPO0FBT3RCLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFpQnBDLFlBQW9CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBZnRCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRWpDLGNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLGlCQUFZLEdBQW1CLEVBQUUsQ0FBQztRQUNsQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsOEJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLG9CQUFlLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUV0QyxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osOEJBQXlCLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFD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QUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFockJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qiwrb3FCQUFrRDs7YUFFbkQ7Ozs7WUFwQjJDLGVBQWU7Ozs2QkF1QnhELFdBQVcsU0FBQyxPQUFPO3dCQUVuQixLQUFLO2tDQVNMLE1BQU07b0NBQ04sTUFBTTtrQ0FDTixNQUFNOzs7O0lBYlAsbURBQTBDOzs7OztJQUMxQyxnREFBaUQ7O0lBQ2pELDhDQUF5Qzs7SUFDekMsaURBQWtDOztJQUNsQyw4Q0FBZTs7SUFDZixtREFBc0I7O0lBQ3RCLDhEQUFrQzs7SUFDbEMsb0RBQXNDOzs7OztJQUN0Qyx5REFBMEQ7O0lBQzFELHlDQUFZOztJQUNaLDhEQUFnQzs7SUFDaEMsd0RBQTBEOztJQUMxRCwwREFBaUk7O0lBQ2pJLHdEQUErSDs7Ozs7SUFFbkgsNENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIE9uSW5pdCwgS2V5VmFsdWVEaWZmZXIsIElucHV0LCBLZXlWYWx1ZURpZmZlcnMsXHJcbiAgS2V5VmFsdWVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRG9DaGVjaywgSG9zdEJpbmRpbmdcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBUcmVlVGFibGVEYXRhLCBUcmVlVGFibGVSb3cgfSBmcm9tICcuLi9jbGFzc2VzL3RyZWUtdGFibGUtZGF0YSc7XHJcbmltcG9ydCB7IFRyZWVUYWJsZVJvd0FjdGlvbiB9IGZyb20gJy4uL2NsYXNzZXMvdHJlZS10YWJsZS1yb3ctYWN0aW9uJztcclxuaW1wb3J0IHsgVHJlZVRhYmxlSGVhZGVyT2JqZWN0IH0gZnJvbSAnLi4vY2xhc3Nlcy90cmVlLXRhYmxlLWhlYWRlci1vYmplY3QnO1xyXG5pbXBvcnQgeyBUdERhdGFUeXBlIH0gZnJvbSAnLi4vY2xhc3Nlcy90dC1kYXRhLXR5cGUnO1xyXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xyXG5pbXBvcnQgKiBhcyBGaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IFRyZWVUYWJsZVJvd0FjdGlvblR5cGUgfSBmcm9tICcuLi9jbGFzc2VzL3RyZWUtdGFibGUtcm93LWFjdGlvbi10eXBlJztcclxuXHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuXHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FuZ3VsYXItdHJlZS10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FuZ3VsYXItdHJlZS10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYW5ndWxhci10cmVlLXRhYmxlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJUcmVlVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2sge1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgY29tcG9uZW50Q2xhc3MgPSAnJztcclxuICBwcml2YXRlIGRhdGFEaWZmZXJzOiBLZXlWYWx1ZURpZmZlcjxzdHJpbmcsIGFueT47XHJcbiAgQElucHV0KCkgdGFibGVEYXRhID0gbmV3IFRyZWVUYWJsZURhdGEoKTtcclxuICBmaWx0ZXJlZERhdGE6IFRyZWVUYWJsZVJvd1tdID0gW107XHJcbiAgY2xhc3NOYW1lID0gJyc7XHJcbiAgcmFuZG9tSW5zdGFuY2UgPSBudWxsO1xyXG4gIGRyb3Bkb3duSGlkZUxpc3RlbmVyQWRkZWQgPSBmYWxzZTtcclxuICBjdXJyZW50UGFnZURhdGEgPSBuZXcgVHJlZVRhYmxlRGF0YSgpO1xyXG4gIHByaXZhdGUgY29sdW1uRmlsdGVyc0RpZmZlcnM6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PjtcclxuICBqc29uID0gbnVsbDtcclxuICBleHRyYUluZm9JdGVtV2lkdGhQZXJjZW50ID0gMTAwO1xyXG4gIEBPdXRwdXQoKSByb3dTZWxlY3Rpb25DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcclxuICBAT3V0cHV0KCkgaW5wdXRSb3dTZWxlY3RDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBhbnksIHJvd0RhdGE6IGFueSwgaGVhZGVyS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGxldmVsOiBudW1iZXIgfT4oKTtcclxuICBAT3V0cHV0KCkgaW5wdXRSb3dUZXh0Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogYW55LCByb3dEYXRhOiBhbnksIGhlYWRlcktleTogc3RyaW5nLCB2YWx1ZTogYW55LCBsZXZlbDogbnVtYmVyIH0+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzKSB7XHJcbiAgICB0aGlzLmpzb24gPSBKU09OO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnZhbGlkYXRlRGF0YSgpO1xyXG4gICAgdGhpcy5zZXRQYWdlRGF0YSh0aGlzLnRhYmxlRGF0YS5wYWdlKTtcclxuICAgIHRoaXMuY29tcG9uZW50Q2xhc3MgPSAnc2xldmVsLScrdGhpcy50YWJsZURhdGEuY29uZmlnLmxldmVsICsgJyBleHBhbmRhYmxlLWFycm93LXBvc2l0aW9uLScgKyB0aGlzLnRhYmxlRGF0YS5jb25maWcuZXhwYW5kYWJsZUFycm93UGxhY2VtZW50ICsgJyBleHBhbmRhYmxlLXR5cGUtJyArIHRoaXMudGFibGVEYXRhLmNvbmZpZy5leHBhbmRhYmxlVHlwZTtcclxuICAgIHRoaXMuY2xhc3NOYW1lID0gJ3RhYmxlLXRyZWUgbGV2ZWwnICsgdGhpcy50YWJsZURhdGEuY29uZmlnLmxldmVsO1xyXG4gICAgaWYgKHRoaXMudGFibGVEYXRhLmNvbmZpZy5sZXZlbCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0luaXRpYWxpemUgU2VhcmNoIEZ1bmN0aW9uYWxpdHknKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YURpZmZlcnMgPSB0aGlzLmRpZmZlcnMuZmluZCh0aGlzLnRhYmxlRGF0YSkuY3JlYXRlKCk7XHJcbiAgICB0aGlzLmNvbHVtbkZpbHRlcnNEaWZmZXJzID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnMpLmNyZWF0ZSgpO1xyXG4gICAgdGhpcy5yYW5kb21JbnN0YW5jZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoOTk5OSkpO1xyXG4gICAgdGhpcy5leHRyYUluZm9JdGVtV2lkdGhQZXJjZW50ID0gMTAwIC8gdGhpcy50YWJsZURhdGEuY29uZmlnLmV4dHJhSW5mb3MubGVuZ3RoO1xyXG5cclxuICAgIHRoaXMucmVkZWZpbmVUYWJsZURhdGFGdW5jdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIHJlZGVmaW5lVGFibGVEYXRhRnVuY3Rpb25zKCkge1xyXG4gICAgY29uc3QgZGlzID0gdGhpcztcclxuICAgIHRoaXMudGFibGVEYXRhLmFsbFJvd3NDb2xsYXBzZWQgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgIHJldHVybiBkaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEubGVuZ3RoID09PSBkaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEuZmlsdGVyKHYgPT4gIXYuZXhwYW5kZWQpLmxlbmd0aDtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50YWJsZURhdGEuYWxsUm93c0V4cGFuZGVkID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICByZXR1cm4gZGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLmxlbmd0aCA9PT0gZGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLmZpbHRlcih2ID0+IHYuZXhwYW5kZWQpLmxlbmd0aDtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBkYXRhQ2hhbmdlZChjaGFuZ2VzOiBLZXlWYWx1ZUNoYW5nZXM8c3RyaW5nLCBhbnk+KSB7XHJcbiAgICB0aGlzLnJlZGVmaW5lVGFibGVEYXRhRnVuY3Rpb25zKCk7XHJcbiAgICB0aGlzLmV2YWx1YXRlRXhwcmVzc2lvbnNJblRhYmxlRGF0YSgpO1xyXG4gICAgdGhpcy5zZXRQYWdlRGF0YSh0aGlzLnRhYmxlRGF0YS5wYWdlKTtcclxuICB9XHJcblxyXG4gIGV2YWx1YXRlRXhwcmVzc2lvbnNJblRhYmxlRGF0YSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJsZURhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCByb3dEYXRhID0gdGhpcy50YWJsZURhdGEuZGF0YVtpXTtcclxuICAgICAgdGhpcy50YWJsZURhdGEuaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XHJcbiAgICAgICAgcm93RGF0YS5kYXRhW2hlYWRlci5kYXRhUHJvcGVydHldID0gdGhpcy5ldmFsdWF0ZUNvbmNhdChoZWFkZXIuZGF0YVByb3BlcnR5LCByb3dEYXRhLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVFeHByZXNzaW9uKGV4cHJlc3Npb246IHN0cmluZywgZGF0YTogYW55KTogYW55IHtcclxuICAgIGxldCByZXN1bHQgPSB1bmRlZmluZWQ7XHJcbiAgICBpZiAoZXhwcmVzc2lvbi5pbmRleE9mKCcgLSAnKSA+IC0xKSB7XHJcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25QYXJ0cyA9IGV4cHJlc3Npb24uc3BsaXQoJyAtICcpO1xyXG4gICAgICBmb3IgKGxldCBbaW5kZXgsIGV4cHJlc3Npb25QYXJ0XSBvZiBleHByZXNzaW9uUGFydHMuZW50cmllcygpKSB7XHJcbiAgICAgICAgZXhwcmVzc2lvblBhcnRzW2luZGV4XSA9IHRoaXMuZXhlY3V0ZUV4cHJlc3Npb24oZXhwcmVzc2lvblBhcnQsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGV4cHJlc3Npb25QYXJ0cy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmVzdWx0ID0gdjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IC0gcGFyc2VGbG9hdCh2KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBlbHNlIGlmIChleHByZXNzaW9uLmluZGV4T2YoJyArICcpID4gLTEpIHtcclxuICAgICAgY29uc3QgZXhwcmVzc2lvblBhcnRzID0gZXhwcmVzc2lvbi5zcGxpdCgnICsgJyk7XHJcbiAgICAgIGZvciAobGV0IFtpbmRleCwgZXhwcmVzc2lvblBhcnRdIG9mIGV4cHJlc3Npb25QYXJ0cy5lbnRyaWVzKCkpIHtcclxuICAgICAgICBleHByZXNzaW9uUGFydHNbaW5kZXhdID0gdGhpcy5leGVjdXRlRXhwcmVzc2lvbihleHByZXNzaW9uUGFydCwgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgZXhwcmVzc2lvblBhcnRzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXN1bHQgPSB2O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwYXJzZUZsb2F0KHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGVsc2UgaWYgKGV4cHJlc3Npb24uaW5kZXhPZignICogJykgPiAtMSkge1xyXG4gICAgICBjb25zdCBleHByZXNzaW9uUGFydHMgPSBleHByZXNzaW9uLnNwbGl0KCcgKiAnKTtcclxuICAgICAgZm9yIChsZXQgW2luZGV4LCBleHByZXNzaW9uUGFydF0gb2YgZXhwcmVzc2lvblBhcnRzLmVudHJpZXMoKSkge1xyXG4gICAgICAgIGV4cHJlc3Npb25QYXJ0c1tpbmRleF0gPSB0aGlzLmV4ZWN1dGVFeHByZXNzaW9uKGV4cHJlc3Npb25QYXJ0LCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBleHByZXNzaW9uUGFydHMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJlc3VsdCA9IHY7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAqIHBhcnNlRmxvYXQodik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvbi5pbmRleE9mKCcgLyAnKSA+IC0xKSB7XHJcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25QYXJ0cyA9IGV4cHJlc3Npb24uc3BsaXQoJyAvICcpO1xyXG4gICAgICBmb3IgKGxldCBbaW5kZXgsIGV4cHJlc3Npb25QYXJ0XSBvZiBleHByZXNzaW9uUGFydHMuZW50cmllcygpKSB7XHJcbiAgICAgICAgZXhwcmVzc2lvblBhcnRzW2luZGV4XSA9IHRoaXMuZXhlY3V0ZUV4cHJlc3Npb24oZXhwcmVzc2lvblBhcnQsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGV4cHJlc3Npb25QYXJ0cy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmVzdWx0ID0gdjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IC8gcGFyc2VGbG9hdCh2KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVXaXRoUGF0aEZyb21PYmplY3QoZXhwcmVzc2lvbiwgZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBldmFsdWF0ZUNvbmNhdChleHByZXNzaW9uOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGFbZXhwcmVzc2lvbl0gIT09IHVuZGVmaW5lZCAmJiBkYXRhW2V4cHJlc3Npb25dICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBkYXRhW2V4cHJlc3Npb25dO1xyXG4gICAgfVxyXG4gICAgaWYgKGV4cHJlc3Npb24uc3RhcnRzV2l0aCgnPUNPTkNBVCgnKSAmJiBleHByZXNzaW9uLmVuZHNXaXRoKCcpJykpIHtcclxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbi5yZXBsYWNlKCc9Q09OQ0FUKCcsICcnKTtcclxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbi5zdWJzdHJpbmcoMCwgZXhwcmVzc2lvbi5sZW5ndGggLSAxKTtcclxuICAgICAgICBjb25zdCBleHByZXNzaW9uUGFydHMgPSBleHByZXNzaW9uLnNwbGl0KCd8fHwnKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgZXhwcmVzc2lvblBhcnRzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSAnJyArIHRoaXMuZXhlY3V0ZUV4cHJlc3Npb24odiwgZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgLyoqXHJcbiAgICoge1xyXG4gICAqICAgIFwiUE9fTlVNQkVSXCI6IFwiMTIzNDU2XCIsXHJcbiAgICogICAgXCJQT19UQVhcIjogW3tcclxuICAgKiAgICAgICAgXCJTR1NUXCI6IDE1XHJcbiAgICogICAgfV1cclxuICAgKiB9XHJcbiAgICogXHJcbiAgICogUE9fVEFYLlNHU1RcclxuICAgKiBQT19UQVhbMF0uU0dTVFxyXG4gICAqIFBPX1RBWFswXS5TR1NUICsgUE9fVEFYWzBdLkNHU1RcclxuICAgKiA9Q09OQ0FUKCdTR1NUOiAnfHx8UE9fVEFYWzBdLlNHU1QgKyBQT19UQVhbMF0uQ0dTVHx8fCdcXHJcXG4nKVxyXG4gICAqL1xyXG4gIGdldFZhbHVlV2l0aFBhdGhGcm9tT2JqZWN0KHBhdGg6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBwYXRoUGFydHMgPSBwYXRoLnNwbGl0KCcuJyk7XHJcbiAgICBsZXQgcmVzdWx0ID0gZGF0YTtcclxuICAgIGZvciAobGV0IHBhcnQgb2YgcGF0aFBhcnRzKSB7XHJcbiAgICAgIGlmIChwYXJ0LmVuZHNXaXRoKCddJykpIHtcclxuICAgICAgICBjb25zdCBzdWJQYXJ0cyA9IHBhcnQuc3BsaXQoJ1snKTtcclxuICAgICAgICBjb25zdCBhcnJheVByb3BlcnR5ID0gc3ViUGFydHNbMF07XHJcbiAgICAgICAgaWYgKHJlc3VsdFthcnJheVByb3BlcnR5XSA9PT0gdW5kZWZpbmVkIHx8IHJlc3VsdFthcnJheVByb3BlcnR5XSA9PT0gbnVsbCB8fCAhQXJyYXkuaXNBcnJheShyZXN1bHRbYXJyYXlQcm9wZXJ0eV0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFycmF5SW5kZXggPSBwYXJzZUludChzdWJQYXJ0c1sxXS5yZXBsYWNlKCddJywgJycpKTtcclxuICAgICAgICBpZiAoaXNOYU4oYXJyYXlJbmRleCkpIHtcclxuICAgICAgICAgIHJldHVybiAnI0VSUjogTmFOJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0W2FycmF5UHJvcGVydHldW2FycmF5SW5kZXhdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFydCA9PT0gJyAnKSB7XHJcbiAgICAgICAgICByZXR1cm4gJyAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzdWx0W3BhcnRdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybiBwYXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQgPSByZXN1bHRbcGFydF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoVGFibGUoKSB7XHJcbiAgICB0aGlzLnNldFBhZ2VEYXRhKHRoaXMudGFibGVEYXRhLnBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xyXG4gICAgbGV0IGNoYW5nZXMgPSB0aGlzLmRhdGFEaWZmZXJzLmRpZmYodGhpcy50YWJsZURhdGEpO1xyXG4gICAgaWYgKGNoYW5nZXMpIHtcclxuICAgICAgdGhpcy5kYXRhQ2hhbmdlZChjaGFuZ2VzKTtcclxuICAgIH1cclxuICAgIGNoYW5nZXMgPSB0aGlzLmNvbHVtbkZpbHRlcnNEaWZmZXJzLmRpZmYodGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnMpO1xyXG4gICAgaWYgKGNoYW5nZXMpIHtcclxuICAgICAgdGhpcy5kYXRhQ2hhbmdlZChjaGFuZ2VzKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5kcm9wZG93bkhpZGVMaXN0ZW5lckFkZGVkKSB7XHJcbiAgICAgICQoJyNkcm9wRG93blZpc0NvbicgKyB0aGlzLnJhbmRvbUluc3RhbmNlKS5vbignaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUuY2xpY2tFdmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBpZiAoJChlLmNsaWNrRXZlbnQudGFyZ2V0KS5oYXNDbGFzcygnYnRuVmlzJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyb3Bkb3duSGlkZUxpc3RlbmVyQWRkZWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cGFuZFJvdyhyb3c6IFRyZWVUYWJsZVJvdykge1xyXG4gICAgcm93LmV4cGFuZGVkID0gdHJ1ZTtcclxuICAgIHJvdy5jaGlsZHJlbi5jb25maWcubGV2ZWwgPSB0aGlzLnRhYmxlRGF0YS5jb25maWcubGV2ZWwgKyAxO1xyXG4gICAgaWYgKHRoaXMudGFibGVEYXRhLmNvbmZpZy5ldmVudHMucm93RXhwYW5kZWQgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEuY29uZmlnLmV2ZW50cy5yb3dFeHBhbmRlZChyb3csIHRoaXMudGFibGVEYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbGxhcHNlUm93KHJvdzogVHJlZVRhYmxlUm93KSB7XHJcbiAgICByb3cuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMudGFibGVEYXRhLmlzQWxsUm93c0V4cGFuZGVkID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy50YWJsZURhdGEuY29uZmlnLmV2ZW50cy5yb3dDb2xsYXBzZWQgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEuY29uZmlnLmV2ZW50cy5yb3dDb2xsYXBzZWQocm93LCB0aGlzLnRhYmxlRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBhbmRBbGxSb3dzKCkge1xyXG4gICAgdGhpcy5leHBhbmRBbGxSb3dzSW5EYXRhKHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEpO1xyXG4gICAgdGhpcy50YWJsZURhdGEuaXNBbGxSb3dzRXhwYW5kZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZXhwYW5kQWxsUm93c0luRGF0YShkYXRhOiBUcmVlVGFibGVSb3dbXSkge1xyXG4gICAgZm9yIChjb25zdCByb3cgb2YgZGF0YSkge1xyXG4gICAgICBpZiAocm93LmV4cGFuZGFibGUpIHtcclxuICAgICAgICBpZiAocm93LmNoaWxkcmVuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBpZiAocm93LmNoaWxkcmVuLmRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFibGVEYXRhLmNvbmZpZy5zaG93RXhwYW5kQWxsRW1wdHlDaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgIC8vIHJvdy5leHBhbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5leHBhbmRSb3cocm93KTtcclxuICAgICAgICAgICAgICB0aGlzLmV4cGFuZEFsbFJvd3NJbkRhdGEocm93LmNoaWxkcmVuLmRhdGEpO1xyXG4gICAgICAgICAgICAgIHJvdy5jaGlsZHJlbi5pc0FsbFJvd3NFeHBhbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJvdy5jaGlsZHJlbi5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIHJvdy5leHBhbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZFJvdyhyb3cpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRBbGxSb3dzSW5EYXRhKHJvdy5jaGlsZHJlbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHJvdy5jaGlsZHJlbi5pc0FsbFJvd3NFeHBhbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb2xsYXBzZUFsbFJvd3MoKSB7XHJcbiAgICB0aGlzLmNvbGxhcHNlQWxsUm93c0luRGF0YSh0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhKTtcclxuICAgIHRoaXMudGFibGVEYXRhLmlzQWxsUm93c0V4cGFuZGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb2xsYXBzZUFsbFJvd3NJbkRhdGEoZGF0YTogVHJlZVRhYmxlUm93W10pIHtcclxuICAgIGZvciAoY29uc3Qgcm93IG9mIGRhdGEpIHtcclxuICAgICAgaWYgKHJvdy5leHBhbmRhYmxlKSB7XHJcbiAgICAgICAgaWYgKHJvdy5jaGlsZHJlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgaWYgKHJvdy5jaGlsZHJlbi5kYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlRGF0YS5jb25maWcuc2hvd0V4cGFuZEFsbEVtcHR5Q2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAvLyByb3cuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlUm93KHJvdyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbFJvd3NJbkRhdGEocm93LmNoaWxkcmVuLmRhdGEpO1xyXG4gICAgICAgICAgICAgIHJvdy5jaGlsZHJlbi5pc0FsbFJvd3NFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChyb3cuY2hpbGRyZW4uZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByb3cuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VSb3cocm93KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VBbGxSb3dzSW5EYXRhKHJvdy5jaGlsZHJlbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHJvdy5jaGlsZHJlbi5pc0FsbFJvd3NFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUm93KHJvdzogVHJlZVRhYmxlUm93KSB7XHJcbiAgICByb3cuZXhwYW5kZWQgPyB0aGlzLmNvbGxhcHNlUm93KHJvdykgOiB0aGlzLmV4cGFuZFJvdyhyb3cpO1xyXG4gIH1cclxuXHJcbiAgcm93QWN0aW9uKHJvdzogVHJlZVRhYmxlUm93LCBhY3Rpb246IFRyZWVUYWJsZVJvd0FjdGlvbikge1xyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBUcmVlVGFibGVSb3dBY3Rpb25UeXBlLlRPR0dMRV9DSElMRCkge1xyXG4gICAgICB0aGlzLnRvZ2dsZVJvdyhyb3cpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbi5hY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBhY3Rpb24uYWN0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgIGFjdGlvbi5hY3Rpb24uYmluZChhY3Rpb24uY29udGV4dCwgcm93LmRhdGEsIGFjdGlvbikoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZVBhZ2UocGFnZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy50YWJsZURhdGEucGFnZSA9PT0gcGFnZSB8fCBwYWdlIDwgMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAocGFnZSA+IHRoaXMudGFibGVEYXRhLnRvdGFsUGFnZXNDb3VudCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIGlmICh0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLmxlbmd0aCA8IHRoaXMudGFibGVEYXRhLnBhZ2VTaXplICYmIHRoaXMudGFibGVEYXRhLnBhZ2UgPCBwYWdlKSB7XHJcbiAgICAvLyAgIHRoaXMudGFibGVEYXRhLnNwbGFzaE1lc3NhZ2UoJ1JlYWNoZWQgbGFzdCBwYWdlJyk7XHJcbiAgICAvLyAgIHJldHVybjtcclxuICAgIC8vIH1cclxuICAgIHRoaXMuc2V0UGFnZURhdGEocGFnZSk7XHJcbiAgICB0aGlzLmNvbGxhcHNlQWxsUm93cygpO1xyXG4gIH1cclxuXHJcbiAgc2V0UGFnZURhdGEocGFnZU51bWJlcjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmV4dHJhSW5mb0l0ZW1XaWR0aFBlcmNlbnQgPSAxMDAgLyB0aGlzLnRhYmxlRGF0YS5jb25maWcuZXh0cmFJbmZvcy5sZW5ndGg7XHJcbiAgICBjb25zdCBkaXMgPSB0aGlzO1xyXG4gICAgaWYgKHRoaXMudGFibGVEYXRhLnNlcnZlckNvbmZpZy51cmwgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRhYmxlRGF0YS5zZXJ2ZXJDb25maWcudXJsICE9PSBudWxsKSB7XHJcbiAgICAgIGlmIChwYWdlTnVtYmVyICE9PSAxKSB7XHJcbiAgICAgICAgaWYgKChwYWdlTnVtYmVyIC0gMSkgKiB0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSA+IHRoaXMudGFibGVEYXRhLnRvdGFsUm93c0NvdW50KSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgUGFnZScsIChwYWdlTnVtYmVyIC0gMSkgKiB0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSwgdGhpcy50YWJsZURhdGEudG90YWxSb3dzQ291bnQpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5wYWdlID0gcGFnZU51bWJlcjtcclxuICAgICAgdGhpcy50YWJsZURhdGEubG9hZERhdGEocm93cyA9PiB7XHJcbiAgICAgICAgLy8gaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gICBkaXMuY2hhbmdlUGFnZShkaXMudGFibGVEYXRhLnBhZ2UgLSAxKTtcclxuICAgICAgICAvLyAgIGRpcy50YWJsZURhdGEuc3BsYXNoTWVzc2FnZSgnUmVhY2hlZCBsYXN0IHBhZ2UnKTtcclxuICAgICAgICAvLyAgIGNvbnNvbGUud2FybignTm8gZGF0YSBvbiB0aGUgbmV4dCBwYWdlJyk7XHJcbiAgICAgICAgLy8gICAvLyByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGRpcy5maWx0ZXJlZERhdGEuc3BsaWNlKDAsIHRoaXMuZmlsdGVyZWREYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xyXG4gICAgICAgICAgZGlzLmZpbHRlcmVkRGF0YS5wdXNoKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJvd3NDb3VudCA9IGRpcy5maWx0ZXJlZERhdGEubGVuZ3RoO1xyXG4gICAgICAgIC8vIGRpcy50YWJsZURhdGEucGFnZXNDb3VudCA9IE1hdGguZmxvb3Iocm93c0NvdW50IC8gdGhpcy50YWJsZURhdGEucGFnZVNpemUpO1xyXG4gICAgICAgIC8vIGlmIChkaXMudGFibGVEYXRhLnBhZ2VTaXplICogZGlzLnRhYmxlRGF0YS5wYWdlc0NvdW50IDwgcm93c0NvdW50KSB7XHJcbiAgICAgICAgLy8gICBkaXMudGFibGVEYXRhLnBhZ2VzQ291bnQrKztcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgZGlzLmN1cnJlbnRQYWdlRGF0YS5oZWFkZXJzID0gZGlzLnRhYmxlRGF0YS5oZWFkZXJzO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAocGFnZU51bWJlciAtIDEpICogdGhpcy50YWJsZURhdGEucGFnZVNpemU7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50UGFnZURhdGEuZGF0YSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLnNwbGljZSgwLCB0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJzZUludCh0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSArICcnLCAxMCk7IGkrKykge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ0FkZGluZyBWdmFsdWUnLCB0aGlzLmZpbHRlcmVkRGF0YVtpXSwgaSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5maWx0ZXJlZERhdGFbaV0gIT09IG51bGwgJiYgdGhpcy5maWx0ZXJlZERhdGFbaV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLnB1c2godGhpcy5maWx0ZXJlZERhdGFbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXMudGFibGVEYXRhLnRvdGFsUm93c0NvdW50ID0gZGlzLnRhYmxlRGF0YS5kYXRhLmxlbmd0aDtcclxuICAgICAgaWYgKHBhZ2VOdW1iZXIgIT09IDEpIHtcclxuICAgICAgICBpZiAoKHBhZ2VOdW1iZXIgLSAxKSAqIHRoaXMudGFibGVEYXRhLnBhZ2VTaXplID4gdGhpcy50YWJsZURhdGEudG90YWxSb3dzQ291bnQpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBQYWdlJywgKHBhZ2VOdW1iZXIgLSAxKSAqIHRoaXMudGFibGVEYXRhLnBhZ2VTaXplLCB0aGlzLnRhYmxlRGF0YS50b3RhbFJvd3NDb3VudCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLnBhZ2UgPSBwYWdlTnVtYmVyO1xyXG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YS5zcGxpY2UoMCwgdGhpcy5maWx0ZXJlZERhdGEubGVuZ3RoKTtcclxuICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSB0aGlzLnRhYmxlRGF0YS5kYXRhLmZpbHRlcigodikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2LmRhdGEpO1xyXG4gICAgICAgIC8vIE5lZWQgdG8gZG8gY2FsY3VsYXRpb25zXHJcbiAgICAgICAgbGV0IG1hdGNoZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy50YWJsZURhdGEua2V5d29yZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMudGFibGVEYXRhLmtleXdvcmQgIT09IG51bGwgJiYgdGhpcy50YWJsZURhdGEua2V5d29yZC50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgIGlmICh2LmRhdGFba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHYuZGF0YVtrZXldID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWF0Y2hlZCA9IHYuZGF0YVtrZXldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMudGFibGVEYXRhLmtleXdvcmQudG9Mb3dlckNhc2UoKSkgPiAtMTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZWQpIHtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtYXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1hdGNoZWQgJiYgdGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRhYmxlRGF0YS5jb25maWcuY29sdW1uRmlsdGVycyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnNba2V5XSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgdGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnNba2V5XSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkodGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnNba2V5XSkpIHtcclxuICAgICAgICAgICAgICBpZiAodi5kYXRhW2tleV0gPT09IHVuZGVmaW5lZCB8fCB2LmRhdGFba2V5XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBvck1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBvckZpbHRlciBvZiB0aGlzLnRhYmxlRGF0YS5jb25maWcuY29sdW1uRmlsdGVyc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICBvck1hdGNoID0gdi5kYXRhW2tleV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yob3JGaWx0ZXIudG9Mb3dlckNhc2UoKSkgPiAtMTtcclxuICAgICAgICAgICAgICAgIGlmIChvck1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBtYXRjaGVkID0gb3JNYXRjaDtcclxuICAgICAgICAgICAgICBpZiAoIW1hdGNoZWQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWF0Y2hlZCAmJiB0aGlzLnRhYmxlRGF0YS5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRhYmxlRGF0YS5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnMgIT09IG51bGwpIHtcclxuICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFibGVEYXRhLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1trZXldICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICB0aGlzLnRhYmxlRGF0YS5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNba2V5XSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgIHRoaXMudGFibGVEYXRhLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1trZXldLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICBpZiAodi5kYXRhW2tleV0gPT09IHVuZGVmaW5lZCB8fCB2LmRhdGFba2V5XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG1hdGNoZWQgPSB2LmRhdGFba2V5XS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnRhYmxlRGF0YS5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNba2V5XS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgICAgICAgICAgIGlmICghbWF0Y2hlZCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXRjaGVkO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3Qgcm93c0NvdW50ID0gZGlzLmZpbHRlcmVkRGF0YS5sZW5ndGg7XHJcbiAgICAgIGRpcy50YWJsZURhdGEuZmlsdGVyZWRSb3dzQ291bnQgPSByb3dzQ291bnQ7XHJcbiAgICAgIC8vIGRpcy50YWJsZURhdGEucGFnZXNDb3VudCA9IE1hdGguZmxvb3Iocm93c0NvdW50IC8gdGhpcy50YWJsZURhdGEucGFnZVNpemUpO1xyXG4gICAgICAvLyBpZiAoZGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSAqIGRpcy50YWJsZURhdGEucGFnZXNDb3VudCA8IHJvd3NDb3VudCkge1xyXG4gICAgICAvLyAgIGRpcy50YWJsZURhdGEucGFnZXNDb3VudCsrO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIGRpcy5jdXJyZW50UGFnZURhdGEuaGVhZGVycyA9IGRpcy50YWJsZURhdGEuaGVhZGVycztcclxuICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IChwYWdlTnVtYmVyIC0gMSkgKiB0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEgPSBbXTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLnNwbGljZSgwLCB0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLmxlbmd0aCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDwgcGFyc2VJbnQoc3RhcnRJbmRleCArICcnLCAxMCkgKyBwYXJzZUludCh0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSArICcnLCAxMCk7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmZpbHRlcmVkRGF0YVtpXSAhPT0gbnVsbCAmJiB0aGlzLmZpbHRlcmVkRGF0YVtpXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAvLyBJbnNlcnRpbmcgaW50byBjdXJyZW50IHBhZ2VcclxuICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEucHVzaCh0aGlzLmZpbHRlcmVkRGF0YVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGlja2FibGVDbGlja2VkKHJvdzogVHJlZVRhYmxlUm93LCBkYXRhUHJvcGVydHk6IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGVvZiByb3cuY2xpY2thYmxlc1tkYXRhUHJvcGVydHldID09PSAnc3RyaW5nJykge1xyXG4gICAgICBpZiAocm93LmNsaWNrYWJsZXNbZGF0YVByb3BlcnR5XSA9PT0gVHJlZVRhYmxlUm93QWN0aW9uVHlwZS5UT0dHTEVfQ0hJTEQudG9TdHJpbmcoKSkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlUm93KHJvdyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocm93LmNsaWNrYWJsZXNDb250ZXh0ICE9PSBudWxsKSB7XHJcbiAgICAgIHJvdy5jbGlja2FibGVzW2RhdGFQcm9wZXJ0eV0uYmluZChyb3cuY2xpY2thYmxlc0NvbnRleHQsIHJvdy5kYXRhLCBkYXRhUHJvcGVydHkpKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3cuY2xpY2thYmxlc1tkYXRhUHJvcGVydHldKHJvdy5kYXRhLCBkYXRhUHJvcGVydHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVEYXRhKCkge1xyXG4gICAgY29uc29sZS53YXJuKCdEYXRhIFNjaGVtYSBuZWVkIHRvIGJlIHZhbGlkYXRlZCcpO1xyXG4gIH1cclxuXHJcbiAgY29sdW1uU2VhcmNoQ2hhbmdlZChkYXRhUHJvcGVydHk6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXRQYWdlRGF0YSgxKTtcclxuICB9XHJcblxyXG4gIHBhZ2VOdW1iZXJzKCkge1xyXG4gICAgY29uc3QgcGFnZU51bWJlcnMgPSBbXTtcclxuICAgIGNvbnN0IGxpbWl0ID0gMjtcclxuICAgIGNvbnN0IG1heExpbWl0ID0gNDtcclxuICAgIGZvciAobGV0IHAgPSB0aGlzLnRhYmxlRGF0YS5wYWdlIC0gbGltaXQ7IHAgPCB0aGlzLnRhYmxlRGF0YS5wYWdlOyBwKyspIHtcclxuICAgICAgaWYgKHAgPiAwKSB7XHJcbiAgICAgICAgcGFnZU51bWJlcnMucHVzaChwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdW5maWxsZWRDb3VudCA9IGxpbWl0IC0gcGFnZU51bWJlcnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgcSA9IHRoaXMudGFibGVEYXRhLnBhZ2U7IHEgPD0gdGhpcy50YWJsZURhdGEucGFnZSArIHVuZmlsbGVkQ291bnQgKyBsaW1pdDsgcSsrKSB7XHJcbiAgICAgIGlmIChxIDw9IHRoaXMudGFibGVEYXRhLnRvdGFsUGFnZXNDb3VudCgpKSB7XHJcbiAgICAgICAgcGFnZU51bWJlcnMucHVzaChxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHBhZ2VOdW1iZXJzLmxlbmd0aCA8IG1heExpbWl0KSB7XHJcbiAgICAgIGZvciAobGV0IHAgPSB0aGlzLnRhYmxlRGF0YS5wYWdlIC0gbGltaXQgKiAyOyBwIDwgdGhpcy50YWJsZURhdGEucGFnZSAtIGxpbWl0OyBwKyspIHtcclxuICAgICAgICBpZiAocCA+IDApIHtcclxuICAgICAgICAgIHBhZ2VOdW1iZXJzLnVuc2hpZnQocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFnZU51bWJlcnM7XHJcbiAgfVxyXG5cclxuICBleHBvcnRFeGNlbExvY2FsKCkge1xyXG4gICAgY29uc3QgZGF0YVJvd3MgPSBbXTtcclxuICAgIGxldCBkYXRhUm93c1NvdXJjZSA9IHRoaXMudGFibGVEYXRhLmRhdGE7XHJcbiAgICBpZiAodGhpcy50YWJsZURhdGEuY29uZmlnLmV4Y2VsRXhwb3J0T25seUZpbHRlcmVkUm93cykge1xyXG4gICAgICBkYXRhUm93c1NvdXJjZSA9IHRoaXMuZmlsdGVyZWREYXRhO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgZCBvZiBkYXRhUm93c1NvdXJjZSkge1xyXG4gICAgICBjb25zdCBvYmogPSB7fTtcclxuICAgICAgZm9yIChsZXQgaCBvZiB0aGlzLnRhYmxlRGF0YS5oZWFkZXJzKSB7XHJcbiAgICAgICAgb2JqW2gudGl0bGVdID0gZC5kYXRhW2guZGF0YVByb3BlcnR5XTtcclxuICAgICAgfVxyXG4gICAgICBkYXRhUm93cy5wdXNoKG9iaik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmaWxlVHlwZSA9ICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldDtjaGFyc2V0PVVURi04JztcclxuICAgIGNvbnN0IGZpbGVFeHRlbnNpb24gPSAnLnhsc3gnO1xyXG4gICAgY29uc3Qgd3M6IFhMU1guV29ya1NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KGRhdGFSb3dzKTtcclxuICAgIGNvbnN0IHdiOiBYTFNYLldvcmtCb29rID0geyBTaGVldHM6IHsgZGF0YTogd3MgfSwgU2hlZXROYW1lczogWydkYXRhJ10gfTtcclxuICAgIGNvbnN0IGV4Y2VsQnVmZmVyOiBhbnkgPSBYTFNYLndyaXRlKHdiLCB7IGJvb2tUeXBlOiAneGxzeCcsIHR5cGU6ICdhcnJheScgfSk7XHJcbiAgICBjb25zdCBkYXRhOiBCbG9iID0gbmV3IEJsb2IoW2V4Y2VsQnVmZmVyXSwgeyB0eXBlOiBmaWxlVHlwZSB9KTtcclxuICAgIEZpbGVTYXZlci5zYXZlQXMoZGF0YSwgdGhpcy50YWJsZURhdGEuY29uZmlnLmV4Y2VsRXhwb3J0RmlsZU5hbWUgKyBmaWxlRXh0ZW5zaW9uKTtcclxuICB9XHJcblxyXG4gIHNvcnRDb2x1bW4oaGVhZGVyOiBUcmVlVGFibGVIZWFkZXJPYmplY3QpIHtcclxuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGhlYWRlci5kYXRhUHJvcGVydHk7XHJcbiAgICBpZiAodGhpcy50YWJsZURhdGEuY29uZmlnLnNvcnRlZENvbHVtbltwcm9wZXJ0eU5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEuY29uZmlnLnNvcnRlZENvbHVtbiA9IHt9O1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5jb25maWcuc29ydGVkQ29sdW1uW3Byb3BlcnR5TmFtZV0gPSAnREVTQyc7XHJcbiAgICAgIHRoaXMuc29ydERlc2NlbmQoaGVhZGVyKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50YWJsZURhdGEuY29uZmlnLnNvcnRlZENvbHVtbltwcm9wZXJ0eU5hbWVdID09PSAnREVTQycpIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEuY29uZmlnLnNvcnRlZENvbHVtbltwcm9wZXJ0eU5hbWVdID0gJ0FTQyc7XHJcbiAgICAgIHRoaXMuc29ydEFzY2VuZChoZWFkZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVsZXRlIHRoaXMudGFibGVEYXRhLmNvbmZpZy5zb3J0ZWRDb2x1bW5bcHJvcGVydHlOYW1lXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNvcnRBc2NlbmQoaGVhZGVyOiBUcmVlVGFibGVIZWFkZXJPYmplY3QpIHtcclxuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGhlYWRlci5kYXRhUHJvcGVydHk7XHJcbiAgICBpZiAoaGVhZGVyLmRhdGFUeXBlID09PSBUdERhdGFUeXBlLk5VTUJFUikge1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5kYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAocGFyc2VGbG9hdChhLmRhdGFbcHJvcGVydHlOYW1lXSkgPCBwYXJzZUZsb2F0KGIuZGF0YVtwcm9wZXJ0eU5hbWVdKSkge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyc2VGbG9hdChhLmRhdGFbcHJvcGVydHlOYW1lXSkgPiBwYXJzZUZsb2F0KGIuZGF0YVtwcm9wZXJ0eU5hbWVdKSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoaGVhZGVyLmRhdGFUeXBlID09PSBUdERhdGFUeXBlLkRBVEUpIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEuZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmRhdGFbcHJvcGVydHlOYW1lXSkudG9EYXRlKCkuZ2V0VGltZSgpIDwgbW9tZW50KGIuZGF0YVtwcm9wZXJ0eU5hbWVdKS50b0RhdGUoKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vbWVudChhLmRhdGFbcHJvcGVydHlOYW1lXSkudG9EYXRlKCkuZ2V0VGltZSgpID4gbW9tZW50KGIuZGF0YVtwcm9wZXJ0eU5hbWVdKS50b0RhdGUoKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5kYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAoYS5kYXRhW3Byb3BlcnR5TmFtZV0gPCBiLmRhdGFbcHJvcGVydHlOYW1lXSkge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYS5kYXRhW3Byb3BlcnR5TmFtZV0gPiBiLmRhdGFbcHJvcGVydHlOYW1lXSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0UGFnZURhdGEodGhpcy50YWJsZURhdGEucGFnZSk7XHJcbiAgfVxyXG5cclxuICBzb3J0RGVzY2VuZChoZWFkZXI6IFRyZWVUYWJsZUhlYWRlck9iamVjdCkge1xyXG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gaGVhZGVyLmRhdGFQcm9wZXJ0eTtcclxuICAgIGlmIChoZWFkZXIuZGF0YVR5cGUgPT09IFR0RGF0YVR5cGUuTlVNQkVSKSB7XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLmRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KGEuZGF0YVtwcm9wZXJ0eU5hbWVdKSA8IHBhcnNlRmxvYXQoYi5kYXRhW3Byb3BlcnR5TmFtZV0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcnNlRmxvYXQoYS5kYXRhW3Byb3BlcnR5TmFtZV0pID4gcGFyc2VGbG9hdChiLmRhdGFbcHJvcGVydHlOYW1lXSkpIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChoZWFkZXIuZGF0YVR5cGUgPT09IFR0RGF0YVR5cGUuREFURSkge1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5kYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAobW9tZW50KGEuZGF0YVtwcm9wZXJ0eU5hbWVdKS50b0RhdGUoKS5nZXRUaW1lKCkgPCBtb21lbnQoYi5kYXRhW3Byb3BlcnR5TmFtZV0pLnRvRGF0ZSgpLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb21lbnQoYS5kYXRhW3Byb3BlcnR5TmFtZV0pLnRvRGF0ZSgpLmdldFRpbWUoKSA+IG1vbWVudChiLmRhdGFbcHJvcGVydHlOYW1lXSkudG9EYXRlKCkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLmRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChhLmRhdGFbcHJvcGVydHlOYW1lXSA8IGIuZGF0YVtwcm9wZXJ0eU5hbWVdKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGEuZGF0YVtwcm9wZXJ0eU5hbWVdID4gYi5kYXRhW3Byb3BlcnR5TmFtZV0pIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRQYWdlRGF0YSh0aGlzLnRhYmxlRGF0YS5wYWdlKTtcclxuICB9XHJcblxyXG4gIHNlYXJjaCgpIHtcclxuICAgIHRoaXMuc2V0UGFnZURhdGEoMSk7XHJcbiAgfVxyXG5cclxuICBwYWdlU2l6ZUNoYW5nZWQoKSB7XHJcbiAgICB0aGlzLnNldFBhZ2VEYXRhKDEpO1xyXG4gIH1cclxuXHJcbiAgZXhjZWxFeHBvcnRDbGlja2VkKCkge1xyXG4gICAgaWYgKHRoaXMudGFibGVEYXRhLnNlcnZlckNvbmZpZyAhPT0gdW5kZWZpbmVkICYmIHRoaXMudGFibGVEYXRhLnNlcnZlckNvbmZpZyAhPT0gbnVsbCAmJiB0aGlzLnRhYmxlRGF0YS5zZXJ2ZXJDb25maWcuZXhjZWxFeHBvcnRVcmwgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRhYmxlRGF0YS5zZXJ2ZXJDb25maWcuZXhjZWxFeHBvcnRVcmwgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEubG9hZEV4Y2VsRGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5leHBvcnRFeGNlbExvY2FsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQYWdlVG8oKSB7XHJcbiAgICBsZXQgdG8gPSB0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSAqIHRoaXMudGFibGVEYXRhLnBhZ2U7XHJcbiAgICBpZiAodG8gPiB0aGlzLnRhYmxlRGF0YS5maWx0ZXJlZFJvd3NDb3VudCkge1xyXG4gICAgICB0byA9IHRoaXMudGFibGVEYXRhLmZpbHRlcmVkUm93c0NvdW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvO1xyXG4gIH1cclxuXHJcbiAgaXNBbGxSb3dzU2VsZWN0ZWQoaGVhZGVyOiBUcmVlVGFibGVIZWFkZXJPYmplY3QpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnRhYmxlRGF0YS5kYXRhLmZpbHRlcih2ID0+IHYuc2VsZWN0ZWQpLmxlbmd0aCA9PT0gdGhpcy50YWJsZURhdGEuZGF0YS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTZWxlY3RBbGxSb3dzKGhlYWRlcjogVHJlZVRhYmxlSGVhZGVyT2JqZWN0KSB7XHJcbiAgICB0aGlzLmlzQWxsUm93c1NlbGVjdGVkKGhlYWRlcikgPyB0aGlzLmRlc2VsZWN0QWxsUm93cyhoZWFkZXIpIDogdGhpcy5zZWxlY3RBbGxSb3dzKGhlYWRlcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbGVjdEFsbFJvd3MoaGVhZGVyOiBUcmVlVGFibGVIZWFkZXJPYmplY3QpIHtcclxuICAgIHRoaXMudGFibGVEYXRhLmRhdGEgPSB0aGlzLnRhYmxlRGF0YS5kYXRhLm1hcCh2ID0+IHsgdi5zZWxlY3RlZCA9IHRydWU7IHJldHVybiB2OyB9KTtcclxuICAgIHRoaXMudXBkYXRlSG9zdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXNlbGVjdEFsbFJvd3MoaGVhZGVyOiBUcmVlVGFibGVIZWFkZXJPYmplY3QpIHtcclxuICAgIHRoaXMudGFibGVEYXRhLmRhdGEgPSB0aGlzLnRhYmxlRGF0YS5kYXRhLm1hcCh2ID0+IHsgdi5zZWxlY3RlZCA9IGZhbHNlOyByZXR1cm4gdjsgfSk7XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3QoKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNlbGVjdFJvdyhyb3c6IFRyZWVUYWJsZVJvdykge1xyXG4gICAgcm93LnNlbGVjdGVkID0gIXJvdy5zZWxlY3RlZDtcclxuICAgIHRoaXMudXBkYXRlSG9zdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Um93Q2xhc3Mocm93OiBUcmVlVGFibGVSb3cpIHtcclxuICAgIGxldCBjbGFzc2VzID0geyAnZXhwYW5kZWQtcm93Jzogcm93LmV4cGFuZGVkLCAnY29sbGFwc2VkLXJvdyc6ICFyb3cuZXhwYW5kZWQsICdzZWxlY3RlZCc6ICdyb3cuc2VsZWN0ZWQnLCAndW5zZWxlY3RlZCc6ICchcm93LnNlbGVjdGVkJyB9O1xyXG4gICAgZm9yIChjb25zdCBjbHMgb2Ygcm93LmNsYXNzZXMpIHtcclxuICAgICAgY2xhc3Nlc1tjbHNdID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRSb3dzKCkge1xyXG4gICAgY29uc3Qgcm93cyA9IFsuLi50aGlzLnRhYmxlRGF0YS5kYXRhLmZpbHRlcih2ID0+IHtcclxuICAgICAgaWYgKHYuc2VsZWN0ZWQpIHtcclxuICAgICAgICByZXR1cm4gdi5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KV07XHJcbiAgICByZXR1cm4gcm93cy5tYXAodiA9PiB2LmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgY2hpbGRSb3dTZWxlY3Rpb25DaGFuZ2VkKGRhdGE6IFRyZWVUYWJsZVJvd1tdKSB7XHJcbiAgICBpZiAodGhpcy5yb3dTZWxlY3Rpb25DaGFuZ2VkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yb3dTZWxlY3Rpb25DaGFuZ2VkICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMucm93U2VsZWN0aW9uQ2hhbmdlZC5lbWl0KGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlSG9zdCgpIHtcclxuICAgIGlmICh0aGlzLnJvd1NlbGVjdGlvbkNoYW5nZWQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnJvd1NlbGVjdGlvbkNoYW5nZWQgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5yb3dTZWxlY3Rpb25DaGFuZ2VkLmVtaXQodGhpcy5nZXRTZWxlY3RlZFJvd3MoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dFJvd1NlbGVjdENoYW5nZWRJbnRlcm5hbChldmVudDogYW55LCByb3dEYXRhOiBhbnksIGhlYWRlcktleTogc3RyaW5nLCB2YWx1ZTogYW55LCBsZXZlbDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmlucHV0Um93U2VsZWN0Q2hhbmdlZC5lbWl0KHsgZXZlbnQsIHJvd0RhdGEsIGhlYWRlcktleSwgdmFsdWUsIGxldmVsIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRSb3dUZXh0Q2hhbmdlZEludGVybmFsKGV2ZW50OiBhbnksIHJvd0RhdGE6IGFueSwgaGVhZGVyS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGxldmVsOiBudW1iZXIpIHtcclxuICAgIHRoaXMuaW5wdXRSb3dUZXh0Q2hhbmdlZC5lbWl0KHsgZXZlbnQsIHJvd0RhdGEsIGhlYWRlcktleSwgdmFsdWUsIGxldmVsIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRSb3dTZWxlY3RDaGFuZ2VkQ2hpbGQoZGF0YTogeyBldmVudDogYW55LCByb3dEYXRhOiBhbnksIGhlYWRlcktleTogc3RyaW5nLCB2YWx1ZTogYW55LCBsZXZlbDogbnVtYmVyIH0pIHtcclxuICAgIHRoaXMuaW5wdXRSb3dTZWxlY3RDaGFuZ2VkLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBpbnB1dFJvd1RleHRDaGFuZ2VkQ2hpbGQoZGF0YTogeyBldmVudDogYW55LCByb3dEYXRhOiBhbnksIGhlYWRlcktleTogc3RyaW5nLCB2YWx1ZTogYW55LCBsZXZlbDogbnVtYmVyIH0pIHtcclxuICAgIHRoaXMuaW5wdXRSb3dUZXh0Q2hhbmdlZC5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19