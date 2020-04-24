/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, KeyValueDiffers, Output, EventEmitter } from '@angular/core';
import * as moment_ from 'moment';
import { TreeTableData } from '../classes/tree-table-data';
import { TtDataType } from '../classes/tt-data-type';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { TreeTableRowActionType } from '../classes/tree-table-row-action-type';
/** @type {?} */
var moment = moment_;
var AngularTreeTableComponent = /** @class */ (function () {
    function AngularTreeTableComponent(differs) {
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
    AngularTreeTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    AngularTreeTableComponent.prototype.redefineTableDataFunctions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dis = this;
        this.tableData.allRowsCollapsed = (/**
         * @return {?}
         */
        function () {
            return dis.currentPageData.data.length === dis.currentPageData.data.filter((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return !v.expanded; })).length;
        });
        this.tableData.allRowsExpanded = (/**
         * @return {?}
         */
        function () {
            return dis.currentPageData.data.length === dis.currentPageData.data.filter((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return v.expanded; })).length;
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AngularTreeTableComponent.prototype.dataChanged = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.redefineTableDataFunctions();
        this.setPageData(this.tableData.page);
    };
    /**
     * @return {?}
     */
    AngularTreeTableComponent.prototype.refreshTable = /**
     * @return {?}
     */
    function () {
        this.setPageData(this.tableData.page);
    };
    /**
     * @return {?}
     */
    AngularTreeTableComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var changes = this.dataDiffers.diff(this.tableData);
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
    };
    /**
     * @param {?} row
     * @return {?}
     */
    AngularTreeTableComponent.prototype.expandRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        row.expanded = true;
        if (this.tableData.config.events.rowExpanded !== null) {
            this.tableData.config.events.rowExpanded(row, this.tableData);
        }
    };
    /**
     * @param {?} row
     * @return {?}
     */
    AngularTreeTableComponent.prototype.collapseRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        row.expanded = false;
        this.tableData.isAllRowsExpanded = false;
        if (this.tableData.config.events.rowCollapsed !== null) {
            this.tableData.config.events.rowCollapsed(row, this.tableData);
        }
    };
    /**
     * @return {?}
     */
    AngularTreeTableComponent.prototype.expandAllRows = /**
     * @return {?}
     */
    function () {
        this.expandAllRowsInData(this.currentPageData.data);
        this.tableData.isAllRowsExpanded = true;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AngularTreeTableComponent.prototype.expandAllRowsInData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var e_1, _a;
        try {
            for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                var row = data_1_1.value;
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @return {?}
     */
    AngularTreeTableComponent.prototype.collapseAllRows = /**
     * @return {?}
     */
    function () {
        this.collapseAllRowsInData(this.currentPageData.data);
        this.tableData.isAllRowsExpanded = false;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AngularTreeTableComponent.prototype.collapseAllRowsInData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var e_2, _a;
        try {
            for (var data_2 = tslib_1.__values(data), data_2_1 = data_2.next(); !data_2_1.done; data_2_1 = data_2.next()) {
                var row = data_2_1.value;
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
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (data_2_1 && !data_2_1.done && (_a = data_2.return)) _a.call(data_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @param {?} row
     * @return {?}
     */
    AngularTreeTableComponent.prototype.toggleRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        row.expanded ? this.collapseRow(row) : this.expandRow(row);
    };
    /**
     * @param {?} row
     * @param {?} action
     * @return {?}
     */
    AngularTreeTableComponent.prototype.rowAction = /**
     * @param {?} row
     * @param {?} action
     * @return {?}
     */
    function (row, action) {
        if (action.type === TreeTableRowActionType.TOGGLE_CHILD) {
            this.toggleRow(row);
        }
        if (action.action !== undefined && action.action !== null) {
            action.action.bind(action.context, row.data, action)();
        }
    };
    /**
     * @param {?} page
     * @return {?}
     */
    AngularTreeTableComponent.prototype.changePage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
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
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    AngularTreeTableComponent.prototype.setPageData = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        var _this = this;
        this.extraInfoItemWidthPercent = 100 / this.tableData.config.extraInfos.length;
        /** @type {?} */
        var dis = this;
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
            function (rows) {
                var e_3, _a;
                // if (rows.length === 0) {
                //   dis.changePage(dis.tableData.page - 1);
                //   dis.tableData.splashMessage('Reached last page');
                //   console.warn('No data on the next page');
                //   // return;
                // }
                dis.filteredData.splice(0, _this.filteredData.length);
                try {
                    for (var rows_1 = tslib_1.__values(rows), rows_1_1 = rows_1.next(); !rows_1_1.done; rows_1_1 = rows_1.next()) {
                        var row = rows_1_1.value;
                        dis.filteredData.push(row);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (rows_1_1 && !rows_1_1.done && (_a = rows_1.return)) _a.call(rows_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                /** @type {?} */
                var rowsCount = dis.filteredData.length;
                // dis.tableData.pagesCount = Math.floor(rowsCount / this.tableData.pageSize);
                // if (dis.tableData.pageSize * dis.tableData.pagesCount < rowsCount) {
                //   dis.tableData.pagesCount++;
                // }
                dis.currentPageData.headers = dis.tableData.headers;
                /** @type {?} */
                var startIndex = (pageNumber - 1) * _this.tableData.pageSize;
                if (_this.currentPageData.data === undefined) {
                    _this.currentPageData.data = [];
                }
                _this.currentPageData.data.splice(0, _this.currentPageData.data.length);
                for (var i = 0; i < parseInt(_this.tableData.pageSize + '', 10); i++) {
                    // console.log('Adding Vvalue', this.filteredData[i], i);
                    if (_this.filteredData[i] !== null && _this.filteredData[i] !== undefined) {
                        _this.currentPageData.data.push(_this.filteredData[i]);
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
            function (v) {
                var e_4, _a, e_5, _b, e_6, _c, e_7, _d;
                /** @type {?} */
                var keys = Object.keys(v.data);
                /** @type {?} */
                var matched = false;
                if (_this.tableData.keyword !== undefined && _this.tableData.keyword !== null && _this.tableData.keyword.trim() !== '') {
                    try {
                        for (var keys_1 = tslib_1.__values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                            var key = keys_1_1.value;
                            if (v.data[key] === undefined || v.data[key] === null) {
                                continue;
                            }
                            matched = v.data[key].toString().toLowerCase().indexOf(_this.tableData.keyword.toLowerCase()) > -1;
                            if (matched) {
                                break;
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
                else {
                    matched = true;
                }
                if (matched && _this.tableData.config.columnFilters !== undefined && _this.tableData.config.columnFilters !== null) {
                    try {
                        for (var keys_2 = tslib_1.__values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                            var key = keys_2_1.value;
                            if (_this.tableData.config.columnFilters[key] !== undefined &&
                                _this.tableData.config.columnFilters[key] !== null &&
                                Array.isArray(_this.tableData.config.columnFilters[key])) {
                                if (v.data[key] === undefined || v.data[key] === null) {
                                    matched = false;
                                    break;
                                }
                                /** @type {?} */
                                var orMatch = false;
                                try {
                                    for (var _e = (e_6 = void 0, tslib_1.__values(_this.tableData.config.columnFilters[key])), _f = _e.next(); !_f.done; _f = _e.next()) {
                                        var orFilter = _f.value;
                                        orMatch = v.data[key].toString().toLowerCase().indexOf(orFilter.toLowerCase()) > -1;
                                        if (orMatch) {
                                            break;
                                        }
                                    }
                                }
                                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                                finally {
                                    try {
                                        if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
                                    }
                                    finally { if (e_6) throw e_6.error; }
                                }
                                matched = orMatch;
                                if (!matched) {
                                    break;
                                }
                            }
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (keys_2_1 && !keys_2_1.done && (_b = keys_2.return)) _b.call(keys_2);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
                if (matched && _this.tableData.config.visibleColumnFilters !== undefined && _this.tableData.config.visibleColumnFilters !== null) {
                    try {
                        for (var keys_3 = tslib_1.__values(keys), keys_3_1 = keys_3.next(); !keys_3_1.done; keys_3_1 = keys_3.next()) {
                            var key = keys_3_1.value;
                            if (_this.tableData.config.visibleColumnFilters[key] !== undefined &&
                                _this.tableData.config.visibleColumnFilters[key] !== null &&
                                _this.tableData.config.visibleColumnFilters[key].trim() !== '') {
                                if (v.data[key] === undefined || v.data[key] === null) {
                                    matched = false;
                                    break;
                                }
                                matched = v.data[key].toString().toLowerCase().indexOf(_this.tableData.config.visibleColumnFilters[key].toLowerCase()) > -1;
                                if (!matched) {
                                    break;
                                }
                            }
                        }
                    }
                    catch (e_7_1) { e_7 = { error: e_7_1 }; }
                    finally {
                        try {
                            if (keys_3_1 && !keys_3_1.done && (_d = keys_3.return)) _d.call(keys_3);
                        }
                        finally { if (e_7) throw e_7.error; }
                    }
                }
                return matched;
            }));
            /** @type {?} */
            var rowsCount = dis.filteredData.length;
            dis.tableData.filteredRowsCount = rowsCount;
            // dis.tableData.pagesCount = Math.floor(rowsCount / this.tableData.pageSize);
            // if (dis.tableData.pageSize * dis.tableData.pagesCount < rowsCount) {
            //   dis.tableData.pagesCount++;
            // }
            dis.currentPageData.headers = dis.tableData.headers;
            /** @type {?} */
            var startIndex = (pageNumber - 1) * this.tableData.pageSize;
            if (this.currentPageData.data === undefined) {
                this.currentPageData.data = [];
            }
            this.currentPageData.data.splice(0, this.currentPageData.data.length);
            for (var i = startIndex; i < parseInt(startIndex + '', 10) + parseInt(this.tableData.pageSize + '', 10); i++) {
                if (this.filteredData[i] !== null && this.filteredData[i] !== undefined) {
                    this.currentPageData.data.push(this.filteredData[i]);
                }
            }
        }
    };
    /**
     * @param {?} row
     * @param {?} dataProperty
     * @return {?}
     */
    AngularTreeTableComponent.prototype.clickableClicked = /**
     * @param {?} row
     * @param {?} dataProperty
     * @return {?}
     */
    function (row, dataProperty) {
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
    };
    /**
     * @return {?}
     */
    AngularTreeTableComponent.prototype.validateData = /**
     * @return {?}
     */
    function () {
        console.warn('Data Schema need to be validated');
    };
    /**
     * @param {?} dataProperty
     * @return {?}
     */
    AngularTreeTableComponent.prototype.columnSearchChanged = /**
     * @param {?} dataProperty
     * @return {?}
     */
    function (dataProperty) {
        this.setPageData(1);
    };
    /**
     * @return {?}
     */
    AngularTreeTableComponent.prototype.pageNumbers = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pageNumbers = [];
        /** @type {?} */
        var limit = 2;
        /** @type {?} */
        var maxLimit = 4;
        for (var p = this.tableData.page - limit; p < this.tableData.page; p++) {
            if (p > 0) {
                pageNumbers.push(p);
            }
        }
        /** @type {?} */
        var unfilledCount = limit - pageNumbers.length;
        for (var q = this.tableData.page; q <= this.tableData.page + unfilledCount + limit; q++) {
            if (q <= this.tableData.totalPagesCount()) {
                pageNumbers.push(q);
            }
        }
        if (pageNumbers.length < maxLimit) {
            for (var p = this.tableData.page - limit * 2; p < this.tableData.page - limit; p++) {
                if (p > 0) {
                    pageNumbers.unshift(p);
                }
            }
        }
        return pageNumbers;
    };
    /**
     * @return {?}
     */
    AngularTreeTableComponent.prototype.exportExcelLocal = /**
     * @return {?}
     */
    function () {
        var e_8, _a, e_9, _b;
        /** @type {?} */
        var dataRows = [];
        try {
            for (var _c = tslib_1.__values(this.tableData.data), _d = _c.next(); !_d.done; _d = _c.next()) {
                var d = _d.value;
                /** @type {?} */
                var obj = {};
                try {
                    for (var _e = (e_9 = void 0, tslib_1.__values(this.tableData.headers)), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var h = _f.value;
                        obj[h.title] = d.data[h.dataProperty];
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
                dataRows.push(obj);
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_8) throw e_8.error; }
        }
        /** @type {?} */
        var fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        /** @type {?} */
        var fileExtension = '.xlsx';
        /** @type {?} */
        var ws = XLSX.utils.json_to_sheet(dataRows);
        /** @type {?} */
        var wb = { Sheets: { data: ws }, SheetNames: ['data'] };
        /** @type {?} */
        var excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        /** @type {?} */
        var data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, this.tableData.config.excelExportFileName + fileExtension);
    };
    /**
     * @param {?} header
     * @return {?}
     */
    AngularTreeTableComponent.prototype.sortColumn = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        /** @type {?} */
        var propertyName = header.dataProperty;
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
    };
    /**
     * @param {?} header
     * @return {?}
     */
    AngularTreeTableComponent.prototype.sortAscend = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        /** @type {?} */
        var propertyName = header.dataProperty;
        if (header.dataType === TtDataType.NUMBER) {
            this.tableData.data.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
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
            function (a, b) {
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
            function (a, b) {
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
    };
    /**
     * @param {?} header
     * @return {?}
     */
    AngularTreeTableComponent.prototype.sortDescend = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        /** @type {?} */
        var propertyName = header.dataProperty;
        if (header.dataType === TtDataType.NUMBER) {
            this.tableData.data.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
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
            function (a, b) {
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
            function (a, b) {
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
    };
    /**
     * @return {?}
     */
    AngularTreeTableComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        this.setPageData(1);
    };
    /**
     * @return {?}
     */
    AngularTreeTableComponent.prototype.pageSizeChanged = /**
     * @return {?}
     */
    function () {
        this.setPageData(1);
    };
    /**
     * @return {?}
     */
    AngularTreeTableComponent.prototype.excelExportClicked = /**
     * @return {?}
     */
    function () {
        if (this.tableData.serverConfig !== undefined && this.tableData.serverConfig !== null && this.tableData.serverConfig.excelExportUrl !== undefined && this.tableData.serverConfig.excelExportUrl !== null) {
            this.tableData.loadExcelData();
        }
        else {
            this.exportExcelLocal();
        }
    };
    /**
     * @return {?}
     */
    AngularTreeTableComponent.prototype.getPageTo = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var to = this.tableData.pageSize * this.tableData.page;
        if (to > this.tableData.filteredRowsCount) {
            to = this.tableData.filteredRowsCount;
        }
        return to;
    };
    /**
     * @param {?} header
     * @return {?}
     */
    AngularTreeTableComponent.prototype.isAllRowsSelected = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        return this.tableData.data.filter((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.selected; })).length === this.tableData.data.length;
    };
    /**
     * @param {?} header
     * @return {?}
     */
    AngularTreeTableComponent.prototype.toggleSelectAllRows = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        this.isAllRowsSelected(header) ? this.deselectAllRows(header) : this.selectAllRows(header);
    };
    /**
     * @private
     * @param {?} header
     * @return {?}
     */
    AngularTreeTableComponent.prototype.selectAllRows = /**
     * @private
     * @param {?} header
     * @return {?}
     */
    function (header) {
        this.tableData.data = this.tableData.data.map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { v.selected = true; return v; }));
        this.updateHost();
    };
    /**
     * @private
     * @param {?} header
     * @return {?}
     */
    AngularTreeTableComponent.prototype.deselectAllRows = /**
     * @private
     * @param {?} header
     * @return {?}
     */
    function (header) {
        this.tableData.data = this.tableData.data.map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { v.selected = false; return v; }));
        this.updateHost();
    };
    /**
     * @param {?} row
     * @return {?}
     */
    AngularTreeTableComponent.prototype.toggleSelectRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        row.selected = !row.selected;
        this.updateHost();
    };
    /**
     * @param {?} row
     * @return {?}
     */
    AngularTreeTableComponent.prototype.getRowClass = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var e_10, _a;
        /** @type {?} */
        var classes = { 'expanded-row': row.expanded, 'collapsed-row': !row.expanded, 'selected': 'row.selected', 'unselected': '!row.selected' };
        try {
            for (var _b = tslib_1.__values(row.classes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var cls = _c.value;
                classes[cls] = true;
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return classes;
    };
    /**
     * @return {?}
     */
    AngularTreeTableComponent.prototype.getSelectedRows = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rows = tslib_1.__spread(this.tableData.data.filter((/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v.selected) {
                return v.data;
            }
        })));
        return rows.map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.data; }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AngularTreeTableComponent.prototype.childRowSelectionChanged = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (this.rowSelectionChanged !== undefined && this.rowSelectionChanged !== null) {
            this.rowSelectionChanged.emit(data);
        }
    };
    /**
     * @return {?}
     */
    AngularTreeTableComponent.prototype.updateHost = /**
     * @return {?}
     */
    function () {
        if (this.rowSelectionChanged !== undefined && this.rowSelectionChanged !== null) {
            this.rowSelectionChanged.emit(this.getSelectedRows());
        }
    };
    /**
     * @param {?} event
     * @param {?} rowData
     * @param {?} headerKey
     * @param {?} value
     * @param {?} level
     * @return {?}
     */
    AngularTreeTableComponent.prototype.inputRowSelectChangedInternal = /**
     * @param {?} event
     * @param {?} rowData
     * @param {?} headerKey
     * @param {?} value
     * @param {?} level
     * @return {?}
     */
    function (event, rowData, headerKey, value, level) {
        this.inputRowSelectChanged.emit({ event: event, rowData: rowData, headerKey: headerKey, value: value, level: level });
    };
    /**
     * @param {?} event
     * @param {?} rowData
     * @param {?} headerKey
     * @param {?} value
     * @param {?} level
     * @return {?}
     */
    AngularTreeTableComponent.prototype.inputRowTextChangedInternal = /**
     * @param {?} event
     * @param {?} rowData
     * @param {?} headerKey
     * @param {?} value
     * @param {?} level
     * @return {?}
     */
    function (event, rowData, headerKey, value, level) {
        this.inputRowTextChanged.emit({ event: event, rowData: rowData, headerKey: headerKey, value: value, level: level });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AngularTreeTableComponent.prototype.inputRowSelectChangedChild = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.inputRowSelectChanged.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AngularTreeTableComponent.prototype.inputRowTextChangedChild = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.inputRowTextChanged.emit(data);
    };
    AngularTreeTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'angular-tree-table',
                    template: "<div class=\"tree-table\">\r\n  <div class=\"tree-table-loading\" [ngClass]=\"tableData.isLoading ? 'on' : 'off'\">\r\n    <div class=\"loader-msg\">\r\n      Loading...\r\n    </div>\r\n  </div>\r\n  <div class=\"action-container\">\r\n    <div class=\"search-section\" *ngIf=\"tableData.config.showPageLengthDropdown || tableData.config.commonSearch || tableData.config.excelExportButton\">\r\n      <div class=\"first-part\" *ngIf=\"tableData.config.showPageLengthDropdown\">\r\n        Show <select class=\"select-page-size form-control form-control-sm\" [(ngModel)]=\"tableData.pageSize\"\r\n          (change)=\"pageSizeChanged()\">\r\n          <option value=\"{{p}}\" *ngFor=\"let p of tableData.config.pageSizes\">{{p}}</option>\r\n        </select> Entries\r\n      </div>\r\n      <div class=\"second-part\">\r\n        <input *ngIf=\"tableData.config.commonSearch\" type=\"text\"\r\n          class=\"form-control form-control-sm text-center col-3 float-right\" [(ngModel)]=\"tableData.keyword\"\r\n          (keyup)=\"search()\" (change)=\"search()\" placeholder=\"Search\" />\r\n        <button *ngIf=\"tableData.config.excelExportButton\"\r\n          class=\"btn btn-sm btn-primary export excelExportButton float-right\" (click)=\"excelExportClicked()\">{{tableData.config.excelExportButtonText}}</button>\r\n        <div class=\"dropdown dropleft\" id=\"dropDownVisCon{{randomInstance}}\">\r\n          <button id=\"dropDownVis{{randomInstance}}\" *ngIf=\"tableData.config.columnVisibilityDropDown\"\r\n            class=\"btn btn-sm btn-secondary dropDownBtn v-elipses float-right dropdown-toggle\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">\u22EE</button>\r\n            <div class=\"dropDownBtn-data dropdown-menu\">\r\n              <button class=\"btnVis btn-sm btn\" *ngFor=\"let header of currentPageData.headers\"\r\n                [ngClass]=\"header.show ? 'active': ''\" (click)=\" header.show = !header.show;\">{{header.title}}</button>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"buttons-section\" *ngIf=\"tableData.config.columnVisibility\">\r\n      <div class=\"column-visibility\" *ngIf=\"tableData.config.columnVisibility\">\r\n        <button class=\"btnVis\" *ngFor=\"let header of currentPageData.headers\" [ngClass]=\"header.show ? 'active': ''\"\r\n          (click)=\"header.show = !header.show\">{{header.title}}</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"extraInfo-section\" *ngIf=\"tableData.config.extraInfos.length > 0\">\r\n      <div class=\"extraInfo\" [style.width]=\"extraInfoItemWidthPercent + '%'\" *ngFor=\"let exInfo of tableData.config.extraInfos\">\r\n        {{exInfo[0]}}: {{exInfo[1]}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <table [class]=\"className + ' ' + tableData.config.customClassName + ' ' + tableData.config.fullClassName\">\r\n    <thead class=\"ds2-table-element--head-row thead-sm\" *ngIf=\"tableData.config.showTableHeaders\">\r\n      <tr>\r\n        <th *ngIf=\"!tableData.config.showExpandAllArrows\" [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></th>\r\n        <th *ngIf=\"tableData.config.showExpandAllArrows\" [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\">\r\n          <button class=\"btn btn-secondary btn-sm collapsed-row-button\" (click)=\"expandAllRows()\" \r\n                      *ngIf=\"!tableData.isAllRowsExpanded\"></button>\r\n              <button class=\"btn btn-secondary btn-sm expanded-row-button\" (click)=\"collapseAllRows()\" \r\n                      *ngIf=\"tableData.isAllRowsExpanded\"></button>\r\n        </th>\r\n        <ng-container *ngFor=\"let header of currentPageData.headers\">\r\n          <th *ngIf=\"header.show && header.dataType !== 'SELECT'\" [ngClass]=\"header.style\" (click)=\"sortColumn(header)\">{{header.title}}\r\n            <i [ngClass]=\"tableData.config.sortAscClassName+' sort-right-align'\" *ngIf=\"tableData.config.sortedColumn[header.dataProperty] === 'ASC'\"></i>\r\n            <i [ngClass]=\"tableData.config.sortDescClassName+' sort-right-align'\" *ngIf=\"tableData.config.sortedColumn[header.dataProperty] === 'DESC'\"></i>\r\n            <i [ngClass]=\"tableData.config.sortNothingClassName+' sort-right-align'\" *ngIf=\"tableData.config.sortedColumn[header.dataProperty] !== 'DESC' && tableData.config.sortedColumn[header.dataProperty] !== 'ASC'\"></i>\r\n          </th>\r\n          <th *ngIf=\"header.show && header.dataType === 'SELECT'\" [ngClass]=\"header.style\" (click)=\"toggleSelectAllRows(header)\">\r\n            <input type=\"checkbox\" class=\"header-check-box select-all\" [checked]=\"isAllRowsSelected(header) ? 'checked' : ''\"/> {{header.title}}\r\n          </th>\r\n        </ng-container>\r\n      </tr>\r\n      <tr *ngIf=\"tableData.config.visibleColumnFiltersVisibility\">\r\n        <th [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></th>\r\n        <ng-container *ngFor=\"let header of currentPageData.headers\">\r\n          <th *ngIf=\"header.show\">\r\n            <input type=\"text\" class=\"form-control form-control-sm text-center\" placeholder=\"{{header.title}}\"\r\n              (change)=\"columnSearchChanged(header.dataProperty)\" (keyup)=\"columnSearchChanged(header.dataProperty)\"\r\n              [(ngModel)]=\"tableData.config.visibleColumnFilters[header.dataProperty]\"\r\n              [disabled]=\"!header.enableColumnSearch || header.dataType === 'SELECT'\" [name]=\"'filter_'+header.dataProperty\" />\r\n          </th>\r\n        </ng-container>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngIf=\"currentPageData.data.length === 0\">\r\n        <tr *ngIf=\"tableData.isLoading\">\r\n          <td [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n          <td [attr.colspan]=\"currentPageData.headers.length + 1\" style=\"text-align: center;\">\r\n            Loading...\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"!tableData.isLoading\">\r\n          <td [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n          <td [attr.colspan]=\"currentPageData.headers.length + 1\" style=\"text-align: center;\">\r\n            No records found\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n      <ng-container *ngFor=\"let row of currentPageData.data; let indi = index;\">\r\n        <ng-container *ngIf=\"row !== undefined\">\r\n          <tr [ngClass]=\"getRowClass(row)\">\r\n            <td *ngIf=\"!row.expandable\" [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n            <td *ngIf=\"row.expandable\" [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\">\r\n              <button class=\"btn btn-secondary btn-sm collapsed-row-button\" (click)=\"expandRow(row)\" \r\n                      *ngIf=\"!row.expanded\"></button>\r\n              <button class=\"btn btn-secondary btn-sm expanded-row-button\" (click)=\"collapseRow(row)\" \r\n                      *ngIf=\"row.expanded\"></button>\r\n            </td>\r\n            <ng-container *ngFor=\"let header of currentPageData.headers\">\r\n              <td *ngIf=\"header.show\" [style]=\"row.styles[header.dataProperty]\"\r\n                [ngClass]=\"row.classes[header.dataProperty]\">\r\n                <ng-container *ngIf=\"header.dataType === 'ACTIONS'\">\r\n                  <button class=\"tt-row-action  btn-xs btn btn-default\" *ngFor=\"let action of row.actions\"\r\n                    [ngClass]=\"action.classes\" (click)=\"rowAction(row, action)\" [title]=\"action.title\">\r\n                    {{action.label}}\r\n                  </button>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType === 'SELECT'\">\r\n                  <input type=\"checkbox\" class=\"header-check-box select-one\" \r\n                         [checked]=\"row.selected ? 'checked' : ''\" \r\n                         (change)=\"toggleSelectRow(row)\"/>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType === 'INPUT_TEXT'\">\r\n                  <input type=\"text\" class=\"header-input-text tt-input-tag\" [(ngModel)]=\"row.data[header.dataProperty]\" [name]=\"indi + '_' + header.dataProperty\" (change)=\"inputRowTextChangedInternal($event, row.data, header.dataProperty, row.data[header.dataProperty], tableData.config.level)\"/>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType === 'INPUT_SELECT'\">\r\n                  <select class=\"header-input-select tt-select-tag\" [(ngModel)]=\"row.data[header.dataProperty]\" [name]=\"indi + '_' + header.dataProperty\" (change)=\"inputRowSelectChangedInternal($event, row.data, header.dataProperty, row.data[header.dataProperty], tableData.config.level)\">\r\n                    <ng-container *ngIf=\"row.options !== undefined && row.options !== null\">\r\n                      <option [value]=\"opt.value\" *ngFor=\"let opt of row.options\">{{opt.displayText}}</option>\r\n                    </ng-container>\r\n                  </select>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType !== 'ACTIONS' && header.dataType !== 'SELECT'\">\r\n                  <ng-container *ngIf=\"row.clickables[header.dataProperty] !== undefined\">\r\n                    <button class=\"popup-link-button\"\r\n                      (click)=\"clickableClicked(row, header.dataProperty)\">{{row.data[header.dataProperty]}}</button>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"row.clickables[header.dataProperty] === undefined && header.dataType !== 'INPUT_TEXT' && header.dataType !== 'INPUT_SELECT'\">\r\n                    {{row.data[header.dataProperty]}}\r\n                  </ng-container>\r\n                </ng-container>\r\n              </td>\r\n            </ng-container>\r\n          </tr>\r\n          <tr *ngIf=\"row.expanded\" [ngClass]=\"row.expanded ? 'expanded-row-content' : 'collapsed-row-content'\">\r\n            <td style=\"width: 10px;\"></td>\r\n            <td [colSpan]=\"currentPageData.headers.length\">\r\n              <angular-tree-table (inputRowSelectChanged)=\"inputRowSelectChangedChild($event)\" (inputRowTextChanged)=\"inputRowTextChangedChild($event)\" (rowSelectionChanged)=\"childRowSelectionChanged($event)\" [tableData]=\"row.children\"></angular-tree-table>\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"table-bottom\">\r\n    <div class=\"page-number-status\">\r\n      Showing {{(tableData.pageSize * (tableData.page - 1)) + 1}} to {{getPageTo()}} of\r\n      <ng-container *ngIf=\"tableData.filteredRowsCount != tableData.totalRowsCount\">\r\n        {{tableData.filteredRowsCount}} rows filtered on {{tableData.totalRowsCount}}\r\n      </ng-container>\r\n      <ng-container *ngIf=\"tableData.filteredRowsCount === tableData.totalRowsCount\">\r\n        {{tableData.filteredRowsCount}}\r\n      </ng-container>\r\n      rows\r\n    </div>\r\n    <div class=\"pagination-buttons\" *ngIf=\"tableData.totalRowsCount > tableData.pageSize\">\r\n      <div [class]=\"tableData.splashMessageFlag ? 'splash-message show' : 'splash-message hide'\">\r\n        <div class=\"message-content\">{{tableData.splashMessageContent}}</div>\r\n      </div>\r\n      <div class=\"btn btnGroup btn-group\">\r\n        <button class=\"btn big\" [class]=\"tableData.page === 1 ? 'btn big btn-secondary ' : 'btn big btn-secondary '\"\r\n          (click)=\"changePage(1)\">First</button>\r\n        <button class=\"btn\" [class]=\"'btn btn-secondary'\" (click)=\"changePage(tableData.page - 1)\">&lt;</button>\r\n        <ng-container *ngFor=\"let pageNumber of pageNumbers()\">\r\n          <button class=\"btn\" [class]=\"tableData.page === pageNumber ? 'btn btn-primary ' : 'btn btn-secondary '\"\r\n            (click)=\"changePage(pageNumber)\">{{pageNumber}}</button>\r\n        </ng-container>\r\n        <button class=\"btn\" [class]=\"'btn btn-secondary'\" (click)=\"changePage(tableData.page + 1)\">&gt;</button>\r\n        <button class=\"btn big\"\r\n          [class]=\"tableData.page === tableData.totalPagesCount() ? 'btn big btn-secondary ' : 'btn big btn-secondary '\"\r\n          (click)=\"changePage(tableData.totalPagesCount())\">Last</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [":host .dropDownBtn-data{overflow:visible;padding:5px}:host .tree-table-loading{width:100%;background-color:rgba(0,0,0,.5);overflow:auto;position:absolute}:host .tree-table-loading .loader-msg{color:#fff;font-weight:700;text-align:center;width:100%;height:100px;position:absolute;top:calc(50% - 50px)}:host .tree-table-loading.on{height:100%;z-index:1000}:host .tree-table-loading.off{height:0%}:host .tree-table{margin-top:10px;margin-bottom:10px;overflow:auto;position:relative}:host .tree-table .select-page-size{display:inline-block;width:auto}:host .tree-table .extraInfo-section .extraInfo{float:left}:host .tree-table .column-visibility{text-align:center}:host .tree-table .column-visibility .btnVis,:host .tree-table .dropDownBtn-data .btnVis{border-style:none;padding:7px;border-radius:2px;margin-right:5px;margin-bottom:5px}:host .tree-table .column-visibility .btnVis.active,:host .tree-table .column-visibility .btnVis.hover,:host .tree-table .column-visibility .btnVis:active,:host .tree-table .column-visibility .btnVis:hover,:host .tree-table .dropDownBtn-data .btnVis.active,:host .tree-table .dropDownBtn-data .btnVis.hover,:host .tree-table .dropDownBtn-data .btnVis:active,:host .tree-table .dropDownBtn-data .btnVis:hover{background-color:#666;color:#fff}:host .tree-table .action-container .btn{margin-right:5px}:host .tree-table .action-container .search-section{overflow:visible;margin-top:10px;margin-bottom:5px}:host .tree-table .action-container .search-section .first-part{width:40%;text-align:left;display:inline-block}:host .tree-table .action-container .search-section .second-part{width:60%;display:inline-block}:host .tree-table .table-bottom{overflow:auto}:host .tree-table .table-bottom .page-number-status{float:left;overflow:auto;padding-top:.375rem}:host .tree-table .table-bottom .btnGroup{float:right;padding-right:0;padding-top:0;padding-bottom:0}:host .tree-table .table-bottom .pagination-buttons{overflow:auto;position:relative}:host .tree-table .table-bottom .pagination-buttons .splash-message{float:right;position:absolute;right:0;z-index:9999;background:#ececec;border-radius:3px;color:#86adef;font-weight:700;padding:5.5px 15px;transition:opacity 1s ease-in-out}:host .tree-table .table-bottom .pagination-buttons .splash-message.show{opacity:1}:host .tree-table .table-bottom .pagination-buttons .splash-message.hide{padding:0;opacity:0}:host .tree-table .table-bottom .pagination-buttons button{width:48px}:host .tree-table .table-bottom .pagination-buttons button.big{width:50px}:host .tree-table table{width:100%;text-align:center;border-collapse:collapse;margin-bottom:5px}:host .tree-table table th{cursor:pointer;-moz-user-select:none;user-select:none;-ms-user-select:none;-webkit-user-select:none;font-weight:700}:host .tree-table table .expanded-row-content{background:0 0}:host .tree-table table tr>td:first-child.not-used,:host .tree-table table tr>th:first-child.not-used{display:none}:host .tree-table table tr>td:first-child.used,:host .tree-table table tr>th:first-child.used{width:50px}:host .tree-table table tr>td:first-child.used .collapsed-row-button:after,:host .tree-table table tr>th:first-child.used .collapsed-row-button:after{content:\"\";width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #fff;display:inline-block}:host .tree-table table tr>td:first-child.used .expanded-row-button:after,:host .tree-table table tr>th:first-child.used .expanded-row-button:after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #fff;display:inline-block}:host .tree-table table tr .tt-row-action{margin-right:5px}:host .tree-table table td button.popup-link-button{border-style:none!important;background:0 0!important;color:#86adef!important}"]
                }] }
    ];
    /** @nocollapse */
    AngularTreeTableComponent.ctorParameters = function () { return [
        { type: KeyValueDiffers }
    ]; };
    AngularTreeTableComponent.propDecorators = {
        tableData: [{ type: Input }],
        rowSelectionChanged: [{ type: Output }],
        inputRowSelectChanged: [{ type: Output }],
        inputRowTextChanged: [{ type: Output }]
    };
    return AngularTreeTableComponent;
}());
export { AngularTreeTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci10cmVlLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItdHJlZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXRyZWUtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBMEIsS0FBSyxFQUFFLGVBQWUsRUFDdEIsTUFBTSxFQUFFLFlBQVksRUFBVyxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sS0FBSyxTQUFTLE1BQU0sWUFBWSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOztJQUl6RSxNQUFNLEdBQUcsT0FBTztBQUV0QjtJQXFCRSxtQ0FBb0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFibkMsY0FBUyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDekMsaUJBQVksR0FBbUIsRUFBRSxDQUFDO1FBQ2xDLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0Qiw4QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFDbEMsb0JBQWUsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBRXRDLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWiw4QkFBeUIsR0FBRyxHQUFHLENBQUM7UUFDdEIsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUNoRCwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBOEUsQ0FBQztRQUN2SCx3QkFBbUIsR0FBRyxJQUFJ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SUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRTtvQkFDdkUsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDWDtxQkFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRTtvQkFDOUUsT0FBTyxDQUFDLENBQUM7aUJBQ1Y7Z0JBQ0QsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDLEVBQUMsQ0FBQztTQUNKO2FBQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSTs7Ozs7WUFBQyxVQUFDLENBQUMsRUFBRSxDQUFDO2dCQUM1QixJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRTtvQkFDckcsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDWDtxQkFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRTtvQkFDNUcsT0FBTyxDQUFDLENBQUM7aUJBQ1Y7Z0JBQ0QsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDLEVBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElB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OztJQUN6QyxpREFBa0M7O0lBQ2xDLDhDQUFlOztJQUNmLG1EQUFzQjs7SUFDdEIsOERBQWtDOztJQUNsQyxvREFBc0M7Ozs7O0lBQ3RDLHlEQUEwRDs7SUFDMUQseUNBQVk7O0lBQ1osOERBQWdDOztJQUNoQyx3REFBMEQ7O0lBQzFELDBEQUFpSTs7SUFDakksd0RBQStIOzs7OztJQUVuSCw0Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgS2V5VmFsdWVEaWZmZXIsIElucHV0LCBLZXlWYWx1ZURpZmZlcnMsXHJcbiAgICAgICAgIEtleVZhbHVlQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBUcmVlVGFibGVEYXRhIH0gZnJvbSAnLi4vY2xhc3Nlcy90cmVlLXRhYmxlLWRhdGEnO1xyXG5pbXBvcnQgeyBUcmVlVGFibGVSb3cgfSBmcm9tICcuLi9jbGFzc2VzL3RyZWUtdGFibGUtcm93JztcclxuaW1wb3J0IHsgVHJlZVRhYmxlUm93QWN0aW9uIH0gZnJvbSAnLi4vY2xhc3Nlcy90cmVlLXRhYmxlLXJvdy1hY3Rpb24nO1xyXG5pbXBvcnQgeyBUcmVlVGFibGVIZWFkZXJPYmplY3QgfSBmcm9tICcuLi9jbGFzc2VzL3RyZWUtdGFibGUtaGVhZGVyLW9iamVjdCc7XHJcbmltcG9ydCB7IFR0RGF0YVR5cGUgfSBmcm9tICcuLi9jbGFzc2VzL3R0LWRhdGEtdHlwZSc7XHJcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XHJcbmltcG9ydCAqIGFzIEZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0IHsgVHJlZVRhYmxlUm93QWN0aW9uVHlwZSB9IGZyb20gJy4uL2NsYXNzZXMvdHJlZS10YWJsZS1yb3ctYWN0aW9uLXR5cGUnO1xyXG5cclxuZGVjbGFyZSB2YXIgJDogYW55O1xyXG5cclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW5ndWxhci10cmVlLXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYW5ndWxhci10cmVlLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbmd1bGFyLXRyZWUtdGFibGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhclRyZWVUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjayB7XHJcblxyXG4gIHByaXZhdGUgZGF0YURpZmZlcnM6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PjtcclxuICBASW5wdXQoKSB0YWJsZURhdGEgPSBuZXcgVHJlZVRhYmxlRGF0YSgpO1xyXG4gIGZpbHRlcmVkRGF0YTogVHJlZVRhYmxlUm93W10gPSBbXTtcclxuICBjbGFzc05hbWUgPSAnJztcclxuICByYW5kb21JbnN0YW5jZSA9IG51bGw7XHJcbiAgZHJvcGRvd25IaWRlTGlzdGVuZXJBZGRlZCA9IGZhbHNlO1xyXG4gIGN1cnJlbnRQYWdlRGF0YSA9IG5ldyBUcmVlVGFibGVEYXRhKCk7XHJcbiAgcHJpdmF0ZSBjb2x1bW5GaWx0ZXJzRGlmZmVyczogS2V5VmFsdWVEaWZmZXI8c3RyaW5nLCBhbnk+O1xyXG4gIGpzb24gPSBudWxsO1xyXG4gIGV4dHJhSW5mb0l0ZW1XaWR0aFBlcmNlbnQgPSAxMDA7XHJcbiAgQE91dHB1dCgpIHJvd1NlbGVjdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xyXG4gIEBPdXRwdXQoKSBpbnB1dFJvd1NlbGVjdENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IGFueSwgcm93RGF0YTogYW55LCBoZWFkZXJLZXk6IHN0cmluZywgdmFsdWU6IGFueSwgbGV2ZWw6IG51bWJlciB9PigpO1xyXG4gIEBPdXRwdXQoKSBpbnB1dFJvd1RleHRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBhbnksIHJvd0RhdGE6IGFueSwgaGVhZGVyS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGxldmVsOiBudW1iZXIgfT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMpIHtcclxuICAgIHRoaXMuanNvbiA9IEpTT047XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudmFsaWRhdGVEYXRhKCk7XHJcbiAgICB0aGlzLnNldFBhZ2VEYXRhKHRoaXMudGFibGVEYXRhLnBhZ2UpO1xyXG4gICAgdGhpcy5jbGFzc05hbWUgPSAndGFibGUtdHJlZSBsZXZlbCcgKyB0aGlzLnRhYmxlRGF0YS5jb25maWcubGV2ZWw7XHJcbiAgICBpZiAodGhpcy50YWJsZURhdGEuY29uZmlnLmxldmVsID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignSW5pdGlhbGl6ZSBTZWFyY2ggRnVuY3Rpb25hbGl0eScpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kYXRhRGlmZmVycyA9IHRoaXMuZGlmZmVycy5maW5kKHRoaXMudGFibGVEYXRhKS5jcmVhdGUoKTtcclxuICAgIHRoaXMuY29sdW1uRmlsdGVyc0RpZmZlcnMgPSB0aGlzLmRpZmZlcnMuZmluZCh0aGlzLnRhYmxlRGF0YS5jb25maWcuY29sdW1uRmlsdGVycykuY3JlYXRlKCk7XHJcbiAgICB0aGlzLnJhbmRvbUluc3RhbmNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcig5OTk5KSk7XHJcbiAgICB0aGlzLmV4dHJhSW5mb0l0ZW1XaWR0aFBlcmNlbnQgPSAxMDAgLyB0aGlzLnRhYmxlRGF0YS5jb25maWcuZXh0cmFJbmZvcy5sZW5ndGg7XHJcblxyXG4gICAgdGhpcy5yZWRlZmluZVRhYmxlRGF0YUZ1bmN0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgcmVkZWZpbmVUYWJsZURhdGFGdW5jdGlvbnMoKSB7XHJcbiAgICBjb25zdCBkaXMgPSB0aGlzO1xyXG4gICAgdGhpcy50YWJsZURhdGEuYWxsUm93c0NvbGxhcHNlZCA9ICgpOiBib29sZWFuID0+IHtcclxuICAgICAgcmV0dXJuIGRpcy5jdXJyZW50UGFnZURhdGEuZGF0YS5sZW5ndGggPT09IGRpcy5jdXJyZW50UGFnZURhdGEuZGF0YS5maWx0ZXIodiA9PiAhdi5leHBhbmRlZCkubGVuZ3RoO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRhYmxlRGF0YS5hbGxSb3dzRXhwYW5kZWQgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgIHJldHVybiBkaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEubGVuZ3RoID09PSBkaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEuZmlsdGVyKHYgPT4gdi5leHBhbmRlZCkubGVuZ3RoO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGRhdGFDaGFuZ2VkKGNoYW5nZXM6IEtleVZhbHVlQ2hhbmdlczxzdHJpbmcsIGFueT4pIHtcclxuICAgIHRoaXMucmVkZWZpbmVUYWJsZURhdGFGdW5jdGlvbnMoKTtcclxuICAgIHRoaXMuc2V0UGFnZURhdGEodGhpcy50YWJsZURhdGEucGFnZSk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoVGFibGUoKSB7XHJcbiAgICB0aGlzLnNldFBhZ2VEYXRhKHRoaXMudGFibGVEYXRhLnBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xyXG4gICAgbGV0IGNoYW5nZXMgPSB0aGlzLmRhdGFEaWZmZXJzLmRpZmYodGhpcy50YWJsZURhdGEpO1xyXG4gICAgaWYgKGNoYW5nZXMpIHtcclxuICAgICAgdGhpcy5kYXRhQ2hhbmdlZChjaGFuZ2VzKTtcclxuICAgIH1cclxuICAgIGNoYW5nZXMgPSB0aGlzLmNvbHVtbkZpbHRlcnNEaWZmZXJzLmRpZmYodGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnMpO1xyXG4gICAgaWYgKGNoYW5nZXMpIHtcclxuICAgICAgdGhpcy5kYXRhQ2hhbmdlZChjaGFuZ2VzKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5kcm9wZG93bkhpZGVMaXN0ZW5lckFkZGVkKSB7XHJcbiAgICAgICQoJyNkcm9wRG93blZpc0NvbicgKyB0aGlzLnJhbmRvbUluc3RhbmNlKS5vbignaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUuY2xpY2tFdmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBpZiAoJChlLmNsaWNrRXZlbnQudGFyZ2V0KS5oYXNDbGFzcygnYnRuVmlzJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyb3Bkb3duSGlkZUxpc3RlbmVyQWRkZWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cGFuZFJvdyhyb3c6IFRyZWVUYWJsZVJvdykge1xyXG4gICAgcm93LmV4cGFuZGVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLnRhYmxlRGF0YS5jb25maWcuZXZlbnRzLnJvd0V4cGFuZGVkICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLmNvbmZpZy5ldmVudHMucm93RXhwYW5kZWQocm93LCB0aGlzLnRhYmxlRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb2xsYXBzZVJvdyhyb3c6IFRyZWVUYWJsZVJvdykge1xyXG4gICAgcm93LmV4cGFuZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnRhYmxlRGF0YS5pc0FsbFJvd3NFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMudGFibGVEYXRhLmNvbmZpZy5ldmVudHMucm93Q29sbGFwc2VkICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLmNvbmZpZy5ldmVudHMucm93Q29sbGFwc2VkKHJvdywgdGhpcy50YWJsZURhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwYW5kQWxsUm93cygpIHtcclxuICAgIHRoaXMuZXhwYW5kQWxsUm93c0luRGF0YSh0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhKTtcclxuICAgIHRoaXMudGFibGVEYXRhLmlzQWxsUm93c0V4cGFuZGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGV4cGFuZEFsbFJvd3NJbkRhdGEoZGF0YTogVHJlZVRhYmxlUm93W10pIHtcclxuICAgIGZvciAoY29uc3Qgcm93IG9mIGRhdGEpIHtcclxuICAgICAgaWYgKHJvdy5leHBhbmRhYmxlKSB7XHJcbiAgICAgICAgaWYgKHJvdy5jaGlsZHJlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgaWYgKHJvdy5jaGlsZHJlbi5kYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlRGF0YS5jb25maWcuc2hvd0V4cGFuZEFsbEVtcHR5Q2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAvLyByb3cuZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoaXMuZXhwYW5kUm93KHJvdyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5leHBhbmRBbGxSb3dzSW5EYXRhKHJvdy5jaGlsZHJlbi5kYXRhKTtcclxuICAgICAgICAgICAgICByb3cuY2hpbGRyZW4uaXNBbGxSb3dzRXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChyb3cuY2hpbGRyZW4uZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByb3cuZXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRSb3cocm93KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kQWxsUm93c0luRGF0YShyb3cuY2hpbGRyZW4uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICByb3cuY2hpbGRyZW4uaXNBbGxSb3dzRXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29sbGFwc2VBbGxSb3dzKCkge1xyXG4gICAgdGhpcy5jb2xsYXBzZUFsbFJvd3NJbkRhdGEodGhpcy5jdXJyZW50UGFnZURhdGEuZGF0YSk7XHJcbiAgICB0aGlzLnRhYmxlRGF0YS5pc0FsbFJvd3NFeHBhbmRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29sbGFwc2VBbGxSb3dzSW5EYXRhKGRhdGE6IFRyZWVUYWJsZVJvd1tdKSB7XHJcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiBkYXRhKSB7XHJcbiAgICAgIGlmIChyb3cuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgIGlmIChyb3cuY2hpbGRyZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgIGlmIChyb3cuY2hpbGRyZW4uZGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YWJsZURhdGEuY29uZmlnLnNob3dFeHBhbmRBbGxFbXB0eUNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgLy8gcm93LmV4cGFuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZVJvdyhyb3cpO1xyXG4gICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VBbGxSb3dzSW5EYXRhKHJvdy5jaGlsZHJlbi5kYXRhKTtcclxuICAgICAgICAgICAgICByb3cuY2hpbGRyZW4uaXNBbGxSb3dzRXhwYW5kZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAocm93LmNoaWxkcmVuLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gcm93LmV4cGFuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlUm93KHJvdyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsUm93c0luRGF0YShyb3cuY2hpbGRyZW4uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICByb3cuY2hpbGRyZW4uaXNBbGxSb3dzRXhwYW5kZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVJvdyhyb3c6IFRyZWVUYWJsZVJvdykge1xyXG4gICAgcm93LmV4cGFuZGVkID8gdGhpcy5jb2xsYXBzZVJvdyhyb3cpIDogdGhpcy5leHBhbmRSb3cocm93KTtcclxuICB9XHJcblxyXG4gIHJvd0FjdGlvbihyb3c6IFRyZWVUYWJsZVJvdywgYWN0aW9uOiBUcmVlVGFibGVSb3dBY3Rpb24pIHtcclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gVHJlZVRhYmxlUm93QWN0aW9uVHlwZS5UT0dHTEVfQ0hJTEQpIHtcclxuICAgICAgdGhpcy50b2dnbGVSb3cocm93KTtcclxuICAgIH1cclxuICAgIGlmIChhY3Rpb24uYWN0aW9uICE9PSB1bmRlZmluZWQgJiYgYWN0aW9uLmFjdGlvbiAhPT0gbnVsbCkge1xyXG4gICAgICBhY3Rpb24uYWN0aW9uLmJpbmQoYWN0aW9uLmNvbnRleHQsIHJvdy5kYXRhLCBhY3Rpb24pKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYWdlKHBhZ2U6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMudGFibGVEYXRhLnBhZ2UgPT09IHBhZ2UgfHwgcGFnZSA8IDEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhZ2UgPiB0aGlzLnRhYmxlRGF0YS50b3RhbFBhZ2VzQ291bnQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBpZiAodGhpcy5jdXJyZW50UGFnZURhdGEuZGF0YS5sZW5ndGggPCB0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSAmJiB0aGlzLnRhYmxlRGF0YS5wYWdlIDwgcGFnZSkge1xyXG4gICAgLy8gICB0aGlzLnRhYmxlRGF0YS5zcGxhc2hNZXNzYWdlKCdSZWFjaGVkIGxhc3QgcGFnZScpO1xyXG4gICAgLy8gICByZXR1cm47XHJcbiAgICAvLyB9XHJcbiAgICB0aGlzLnNldFBhZ2VEYXRhKHBhZ2UpO1xyXG4gICAgdGhpcy5jb2xsYXBzZUFsbFJvd3MoKTtcclxuICB9XHJcblxyXG4gIHNldFBhZ2VEYXRhKHBhZ2VOdW1iZXI6IG51bWJlcikge1xyXG4gICAgdGhpcy5leHRyYUluZm9JdGVtV2lkdGhQZXJjZW50ID0gMTAwIC8gdGhpcy50YWJsZURhdGEuY29uZmlnLmV4dHJhSW5mb3MubGVuZ3RoO1xyXG4gICAgY29uc3QgZGlzID0gdGhpcztcclxuICAgIGlmICh0aGlzLnRhYmxlRGF0YS5zZXJ2ZXJDb25maWcudXJsICE9PSB1bmRlZmluZWQgJiYgdGhpcy50YWJsZURhdGEuc2VydmVyQ29uZmlnLnVybCAhPT0gbnVsbCkge1xyXG4gICAgICBpZiAocGFnZU51bWJlciAhPT0gMSkge1xyXG4gICAgICAgIGlmICgocGFnZU51bWJlciAtIDEpICogdGhpcy50YWJsZURhdGEucGFnZVNpemUgPiB0aGlzLnRhYmxlRGF0YS50b3RhbFJvd3NDb3VudCkge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIFBhZ2UnLCAocGFnZU51bWJlciAtIDEpICogdGhpcy50YWJsZURhdGEucGFnZVNpemUsIHRoaXMudGFibGVEYXRhLnRvdGFsUm93c0NvdW50KTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50YWJsZURhdGEucGFnZSA9IHBhZ2VOdW1iZXI7XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLmxvYWREYXRhKHJvd3MgPT4ge1xyXG4gICAgICAgIC8vIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIC8vICAgZGlzLmNoYW5nZVBhZ2UoZGlzLnRhYmxlRGF0YS5wYWdlIC0gMSk7XHJcbiAgICAgICAgLy8gICBkaXMudGFibGVEYXRhLnNwbGFzaE1lc3NhZ2UoJ1JlYWNoZWQgbGFzdCBwYWdlJyk7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLndhcm4oJ05vIGRhdGEgb24gdGhlIG5leHQgcGFnZScpO1xyXG4gICAgICAgIC8vICAgLy8gcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBkaXMuZmlsdGVyZWREYXRhLnNwbGljZSgwLCB0aGlzLmZpbHRlcmVkRGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcclxuICAgICAgICAgIGRpcy5maWx0ZXJlZERhdGEucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByb3dzQ291bnQgPSBkaXMuZmlsdGVyZWREYXRhLmxlbmd0aDtcclxuICAgICAgICAvLyBkaXMudGFibGVEYXRhLnBhZ2VzQ291bnQgPSBNYXRoLmZsb29yKHJvd3NDb3VudCAvIHRoaXMudGFibGVEYXRhLnBhZ2VTaXplKTtcclxuICAgICAgICAvLyBpZiAoZGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSAqIGRpcy50YWJsZURhdGEucGFnZXNDb3VudCA8IHJvd3NDb3VudCkge1xyXG4gICAgICAgIC8vICAgZGlzLnRhYmxlRGF0YS5wYWdlc0NvdW50Kys7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGRpcy5jdXJyZW50UGFnZURhdGEuaGVhZGVycyA9IGRpcy50YWJsZURhdGEuaGVhZGVycztcclxuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gKHBhZ2VOdW1iZXIgLSAxKSAqIHRoaXMudGFibGVEYXRhLnBhZ2VTaXplO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZURhdGEuZGF0YS5zcGxpY2UoMCwgdGhpcy5jdXJyZW50UGFnZURhdGEuZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyc2VJbnQodGhpcy50YWJsZURhdGEucGFnZVNpemUgKyAnJywgMTApOyBpKyspIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdBZGRpbmcgVnZhbHVlJywgdGhpcy5maWx0ZXJlZERhdGFbaV0sIGkpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuZmlsdGVyZWREYXRhW2ldICE9PSBudWxsICYmIHRoaXMuZmlsdGVyZWREYXRhW2ldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZURhdGEuZGF0YS5wdXNoKHRoaXMuZmlsdGVyZWREYXRhW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzLnRhYmxlRGF0YS50b3RhbFJvd3NDb3VudCA9IGRpcy50YWJsZURhdGEuZGF0YS5sZW5ndGg7XHJcbiAgICAgIGlmIChwYWdlTnVtYmVyICE9PSAxKSB7XHJcbiAgICAgICAgaWYgKChwYWdlTnVtYmVyIC0gMSkgKiB0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSA+IHRoaXMudGFibGVEYXRhLnRvdGFsUm93c0NvdW50KSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgUGFnZScsIChwYWdlTnVtYmVyIC0gMSkgKiB0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSwgdGhpcy50YWJsZURhdGEudG90YWxSb3dzQ291bnQpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5wYWdlID0gcGFnZU51bWJlcjtcclxuICAgICAgdGhpcy5maWx0ZXJlZERhdGEuc3BsaWNlKDAsIHRoaXMuZmlsdGVyZWREYXRhLmxlbmd0aCk7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gdGhpcy50YWJsZURhdGEuZGF0YS5maWx0ZXIoKHYpID0+IHtcclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModi5kYXRhKTtcclxuICAgICAgICBsZXQgbWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnRhYmxlRGF0YS5rZXl3b3JkICE9PSB1bmRlZmluZWQgJiYgdGhpcy50YWJsZURhdGEua2V5d29yZCAhPT0gbnVsbCAmJiB0aGlzLnRhYmxlRGF0YS5rZXl3b3JkLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuICAgICAgICAgICAgaWYgKHYuZGF0YVtrZXldID09PSB1bmRlZmluZWQgfHwgdi5kYXRhW2tleV0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXRjaGVkID0gdi5kYXRhW2tleV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy50YWJsZURhdGEua2V5d29yZC50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hlZCkge1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG1hdGNoZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWF0Y2hlZCAmJiB0aGlzLnRhYmxlRGF0YS5jb25maWcuY29sdW1uRmlsdGVycyAhPT0gdW5kZWZpbmVkICYmIHRoaXMudGFibGVEYXRhLmNvbmZpZy5jb2x1bW5GaWx0ZXJzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlRGF0YS5jb25maWcuY29sdW1uRmlsdGVyc1trZXldICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICB0aGlzLnRhYmxlRGF0YS5jb25maWcuY29sdW1uRmlsdGVyc1trZXldICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLnRhYmxlRGF0YS5jb25maWcuY29sdW1uRmlsdGVyc1trZXldKSkge1xyXG4gICAgICAgICAgICAgIGlmICh2LmRhdGFba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHYuZGF0YVtrZXldID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGV0IG9yTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9yRmlsdGVyIG9mIHRoaXMudGFibGVEYXRhLmNvbmZpZy5jb2x1bW5GaWx0ZXJzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIG9yTWF0Y2ggPSB2LmRhdGFba2V5XS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihvckZpbHRlci50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9yTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG1hdGNoZWQgPSBvck1hdGNoO1xyXG4gICAgICAgICAgICAgIGlmICghbWF0Y2hlZCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXRjaGVkICYmIHRoaXMudGFibGVEYXRhLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVycyAhPT0gdW5kZWZpbmVkICYmIHRoaXMudGFibGVEYXRhLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVycyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YWJsZURhdGEuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV0gIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgIHRoaXMudGFibGVEYXRhLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1trZXldICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgdGhpcy50YWJsZURhdGEuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV0udHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgICAgICAgIGlmICh2LmRhdGFba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHYuZGF0YVtrZXldID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbWF0Y2hlZCA9IHYuZGF0YVtrZXldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMudGFibGVEYXRhLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1trZXldLnRvTG93ZXJDYXNlKCkpID4gLTE7XHJcbiAgICAgICAgICAgICAgaWYgKCFtYXRjaGVkKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByb3dzQ291bnQgPSBkaXMuZmlsdGVyZWREYXRhLmxlbmd0aDtcclxuICAgICAgZGlzLnRhYmxlRGF0YS5maWx0ZXJlZFJvd3NDb3VudCA9IHJvd3NDb3VudDtcclxuICAgICAgLy8gZGlzLnRhYmxlRGF0YS5wYWdlc0NvdW50ID0gTWF0aC5mbG9vcihyb3dzQ291bnQgLyB0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSk7XHJcbiAgICAgIC8vIGlmIChkaXMudGFibGVEYXRhLnBhZ2VTaXplICogZGlzLnRhYmxlRGF0YS5wYWdlc0NvdW50IDwgcm93c0NvdW50KSB7XHJcbiAgICAgIC8vICAgZGlzLnRhYmxlRGF0YS5wYWdlc0NvdW50Kys7XHJcbiAgICAgIC8vIH1cclxuICAgICAgZGlzLmN1cnJlbnRQYWdlRGF0YS5oZWFkZXJzID0gZGlzLnRhYmxlRGF0YS5oZWFkZXJzO1xyXG4gICAgICBjb25zdCBzdGFydEluZGV4ID0gKHBhZ2VOdW1iZXIgLSAxKSAqIHRoaXMudGFibGVEYXRhLnBhZ2VTaXplO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZURhdGEuZGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZURhdGEuZGF0YSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEuc3BsaWNlKDAsIHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEubGVuZ3RoKTtcclxuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCBwYXJzZUludChzdGFydEluZGV4ICsgJycsIDEwKSArIHBhcnNlSW50KHRoaXMudGFibGVEYXRhLnBhZ2VTaXplICsgJycsIDEwKTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyZWREYXRhW2ldICE9PSBudWxsICYmIHRoaXMuZmlsdGVyZWREYXRhW2ldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEucHVzaCh0aGlzLmZpbHRlcmVkRGF0YVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY2xpY2thYmxlQ2xpY2tlZChyb3c6IFRyZWVUYWJsZVJvdywgZGF0YVByb3BlcnR5OiBzdHJpbmcpIHtcclxuICAgIGlmICh0eXBlb2Ygcm93LmNsaWNrYWJsZXNbZGF0YVByb3BlcnR5XSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgaWYgKHJvdy5jbGlja2FibGVzW2RhdGFQcm9wZXJ0eV0gPT09IFRyZWVUYWJsZVJvd0FjdGlvblR5cGUuVE9HR0xFX0NISUxELnRvU3RyaW5nKCkpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVJvdyhyb3cpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHJvdy5jbGlja2FibGVzQ29udGV4dCAhPT0gbnVsbCkge1xyXG4gICAgICByb3cuY2xpY2thYmxlc1tkYXRhUHJvcGVydHldLmJpbmQocm93LmNsaWNrYWJsZXNDb250ZXh0LCByb3cuZGF0YSwgZGF0YVByb3BlcnR5KSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm93LmNsaWNrYWJsZXNbZGF0YVByb3BlcnR5XShyb3cuZGF0YSwgZGF0YVByb3BlcnR5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhbGlkYXRlRGF0YSgpIHtcclxuICAgIGNvbnNvbGUud2FybignRGF0YSBTY2hlbWEgbmVlZCB0byBiZSB2YWxpZGF0ZWQnKTtcclxuICB9XHJcblxyXG4gIGNvbHVtblNlYXJjaENoYW5nZWQoZGF0YVByb3BlcnR5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2V0UGFnZURhdGEoMSk7XHJcbiAgfVxyXG5cclxuICBwYWdlTnVtYmVycygpIHtcclxuICAgIGNvbnN0IHBhZ2VOdW1iZXJzID0gW107XHJcbiAgICBjb25zdCBsaW1pdCA9IDI7XHJcbiAgICBjb25zdCBtYXhMaW1pdCA9IDQ7XHJcbiAgICBmb3IgKGxldCBwID0gdGhpcy50YWJsZURhdGEucGFnZSAtIGxpbWl0OyBwIDwgdGhpcy50YWJsZURhdGEucGFnZTsgcCsrKSB7XHJcbiAgICAgIGlmIChwID4gMCkge1xyXG4gICAgICAgIHBhZ2VOdW1iZXJzLnB1c2gocCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHVuZmlsbGVkQ291bnQgPSBsaW1pdCAtIHBhZ2VOdW1iZXJzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IHEgPSB0aGlzLnRhYmxlRGF0YS5wYWdlOyBxIDw9IHRoaXMudGFibGVEYXRhLnBhZ2UgKyB1bmZpbGxlZENvdW50ICsgbGltaXQ7IHErKykge1xyXG4gICAgICBpZiAocSA8PSB0aGlzLnRhYmxlRGF0YS50b3RhbFBhZ2VzQ291bnQoKSkge1xyXG4gICAgICAgIHBhZ2VOdW1iZXJzLnB1c2gocSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwYWdlTnVtYmVycy5sZW5ndGggPCBtYXhMaW1pdCkge1xyXG4gICAgICBmb3IgKGxldCBwID0gdGhpcy50YWJsZURhdGEucGFnZSAtIGxpbWl0ICogMjsgcCA8IHRoaXMudGFibGVEYXRhLnBhZ2UgLSBsaW1pdDsgcCsrKSB7XHJcbiAgICAgICAgaWYgKHAgPiAwKSB7XHJcbiAgICAgICAgICBwYWdlTnVtYmVycy51bnNoaWZ0KHApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhZ2VOdW1iZXJzO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0RXhjZWxMb2NhbCgpIHtcclxuICAgIGNvbnN0IGRhdGFSb3dzID0gW107XHJcbiAgICBmb3IgKGxldCBkIG9mIHRoaXMudGFibGVEYXRhLmRhdGEpIHtcclxuICAgICAgY29uc3Qgb2JqID0ge307XHJcbiAgICAgIGZvciAobGV0IGggb2YgdGhpcy50YWJsZURhdGEuaGVhZGVycykge1xyXG4gICAgICAgIG9ialtoLnRpdGxlXSA9IGQuZGF0YVtoLmRhdGFQcm9wZXJ0eV07XHJcbiAgICAgIH1cclxuICAgICAgZGF0YVJvd3MucHVzaChvYmopO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZmlsZVR5cGUgPSAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQ7Y2hhcnNldD1VVEYtOCc7XHJcbiAgICBjb25zdCBmaWxlRXh0ZW5zaW9uID0gJy54bHN4JztcclxuICAgIGNvbnN0IHdzOiBYTFNYLldvcmtTaGVldCA9IFhMU1gudXRpbHMuanNvbl90b19zaGVldChkYXRhUm93cyk7XHJcbiAgICBjb25zdCB3YjogWExTWC5Xb3JrQm9vayA9IHsgU2hlZXRzOiB7IGRhdGE6IHdzIH0sIFNoZWV0TmFtZXM6IFsnZGF0YSddIH07XHJcbiAgICBjb25zdCBleGNlbEJ1ZmZlcjogYW55ID0gWExTWC53cml0ZSh3YiwgeyBib29rVHlwZTogJ3hsc3gnLCB0eXBlOiAnYXJyYXknIH0pO1xyXG4gICAgY29uc3QgZGF0YTogQmxvYiA9IG5ldyBCbG9iKFtleGNlbEJ1ZmZlcl0sIHsgdHlwZTogZmlsZVR5cGUgfSk7XHJcbiAgICBGaWxlU2F2ZXIuc2F2ZUFzKGRhdGEsIHRoaXMudGFibGVEYXRhLmNvbmZpZy5leGNlbEV4cG9ydEZpbGVOYW1lICsgZmlsZUV4dGVuc2lvbik7XHJcbiAgfVxyXG5cclxuICBzb3J0Q29sdW1uKGhlYWRlcjogVHJlZVRhYmxlSGVhZGVyT2JqZWN0KSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBoZWFkZXIuZGF0YVByb3BlcnR5O1xyXG4gICAgaWYgKHRoaXMudGFibGVEYXRhLmNvbmZpZy5zb3J0ZWRDb2x1bW5bcHJvcGVydHlOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLmNvbmZpZy5zb3J0ZWRDb2x1bW4gPSB7fTtcclxuICAgICAgdGhpcy50YWJsZURhdGEuY29uZmlnLnNvcnRlZENvbHVtbltwcm9wZXJ0eU5hbWVdID0gJ0RFU0MnO1xyXG4gICAgICB0aGlzLnNvcnREZXNjZW5kKGhlYWRlcik7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudGFibGVEYXRhLmNvbmZpZy5zb3J0ZWRDb2x1bW5bcHJvcGVydHlOYW1lXSA9PT0gJ0RFU0MnKSB7XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLmNvbmZpZy5zb3J0ZWRDb2x1bW5bcHJvcGVydHlOYW1lXSA9ICdBU0MnO1xyXG4gICAgICB0aGlzLnNvcnRBc2NlbmQoaGVhZGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLnRhYmxlRGF0YS5jb25maWcuc29ydGVkQ29sdW1uW3Byb3BlcnR5TmFtZV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzb3J0QXNjZW5kKGhlYWRlcjogVHJlZVRhYmxlSGVhZGVyT2JqZWN0KSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBoZWFkZXIuZGF0YVByb3BlcnR5O1xyXG4gICAgaWYgKGhlYWRlci5kYXRhVHlwZSA9PT0gVHREYXRhVHlwZS5OVU1CRVIpIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEuZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhcnNlRmxvYXQoYS5kYXRhW3Byb3BlcnR5TmFtZV0pIDwgcGFyc2VGbG9hdChiLmRhdGFbcHJvcGVydHlOYW1lXSkpIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcnNlRmxvYXQoYS5kYXRhW3Byb3BlcnR5TmFtZV0pID4gcGFyc2VGbG9hdChiLmRhdGFbcHJvcGVydHlOYW1lXSkpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGhlYWRlci5kYXRhVHlwZSA9PT0gVHREYXRhVHlwZS5EQVRFKSB7XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLmRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChtb21lbnQoYS5kYXRhW3Byb3BlcnR5TmFtZV0pLnRvRGF0ZSgpLmdldFRpbWUoKSA8IG1vbWVudChiLmRhdGFbcHJvcGVydHlOYW1lXSkudG9EYXRlKCkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb21lbnQoYS5kYXRhW3Byb3BlcnR5TmFtZV0pLnRvRGF0ZSgpLmdldFRpbWUoKSA+IG1vbWVudChiLmRhdGFbcHJvcGVydHlOYW1lXSkudG9EYXRlKCkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEuZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKGEuZGF0YVtwcm9wZXJ0eU5hbWVdIDwgYi5kYXRhW3Byb3BlcnR5TmFtZV0pIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGEuZGF0YVtwcm9wZXJ0eU5hbWVdID4gYi5kYXRhW3Byb3BlcnR5TmFtZV0pIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFBhZ2VEYXRhKHRoaXMudGFibGVEYXRhLnBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgc29ydERlc2NlbmQoaGVhZGVyOiBUcmVlVGFibGVIZWFkZXJPYmplY3QpIHtcclxuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGhlYWRlci5kYXRhUHJvcGVydHk7XHJcbiAgICBpZiAoaGVhZGVyLmRhdGFUeXBlID09PSBUdERhdGFUeXBlLk5VTUJFUikge1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5kYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAocGFyc2VGbG9hdChhLmRhdGFbcHJvcGVydHlOYW1lXSkgPCBwYXJzZUZsb2F0KGIuZGF0YVtwcm9wZXJ0eU5hbWVdKSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJzZUZsb2F0KGEuZGF0YVtwcm9wZXJ0eU5hbWVdKSA+IHBhcnNlRmxvYXQoYi5kYXRhW3Byb3BlcnR5TmFtZV0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoaGVhZGVyLmRhdGFUeXBlID09PSBUdERhdGFUeXBlLkRBVEUpIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEuZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmRhdGFbcHJvcGVydHlOYW1lXSkudG9EYXRlKCkuZ2V0VGltZSgpIDwgbW9tZW50KGIuZGF0YVtwcm9wZXJ0eU5hbWVdKS50b0RhdGUoKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9tZW50KGEuZGF0YVtwcm9wZXJ0eU5hbWVdKS50b0RhdGUoKS5nZXRUaW1lKCkgPiBtb21lbnQoYi5kYXRhW3Byb3BlcnR5TmFtZV0pLnRvRGF0ZSgpLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5kYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAoYS5kYXRhW3Byb3BlcnR5TmFtZV0gPCBiLmRhdGFbcHJvcGVydHlOYW1lXSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhLmRhdGFbcHJvcGVydHlOYW1lXSA+IGIuZGF0YVtwcm9wZXJ0eU5hbWVdKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0UGFnZURhdGEodGhpcy50YWJsZURhdGEucGFnZSk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2goKSB7XHJcbiAgICB0aGlzLnNldFBhZ2VEYXRhKDEpO1xyXG4gIH1cclxuXHJcbiAgcGFnZVNpemVDaGFuZ2VkKCkge1xyXG4gICAgdGhpcy5zZXRQYWdlRGF0YSgxKTtcclxuICB9XHJcblxyXG4gIGV4Y2VsRXhwb3J0Q2xpY2tlZCgpIHtcclxuICAgIGlmICh0aGlzLnRhYmxlRGF0YS5zZXJ2ZXJDb25maWcgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRhYmxlRGF0YS5zZXJ2ZXJDb25maWcgIT09IG51bGwgJiYgdGhpcy50YWJsZURhdGEuc2VydmVyQ29uZmlnLmV4Y2VsRXhwb3J0VXJsICE9PSB1bmRlZmluZWQgJiYgdGhpcy50YWJsZURhdGEuc2VydmVyQ29uZmlnLmV4Y2VsRXhwb3J0VXJsICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLmxvYWRFeGNlbERhdGEoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZXhwb3J0RXhjZWxMb2NhbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZVRvKCkge1xyXG4gICAgbGV0IHRvID0gdGhpcy50YWJsZURhdGEucGFnZVNpemUgKiB0aGlzLnRhYmxlRGF0YS5wYWdlO1xyXG4gICAgaWYgKHRvID4gdGhpcy50YWJsZURhdGEuZmlsdGVyZWRSb3dzQ291bnQpIHtcclxuICAgICAgdG8gPSB0aGlzLnRhYmxlRGF0YS5maWx0ZXJlZFJvd3NDb3VudDtcclxuICAgIH1cclxuICAgIHJldHVybiB0bztcclxuICB9XHJcblxyXG4gIGlzQWxsUm93c1NlbGVjdGVkKGhlYWRlcjogVHJlZVRhYmxlSGVhZGVyT2JqZWN0KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJsZURhdGEuZGF0YS5maWx0ZXIodiA9PiB2LnNlbGVjdGVkKS5sZW5ndGggPT09IHRoaXMudGFibGVEYXRhLmRhdGEubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2VsZWN0QWxsUm93cyhoZWFkZXI6IFRyZWVUYWJsZUhlYWRlck9iamVjdCkge1xyXG4gICAgdGhpcy5pc0FsbFJvd3NTZWxlY3RlZChoZWFkZXIpID8gdGhpcy5kZXNlbGVjdEFsbFJvd3MoaGVhZGVyKSA6IHRoaXMuc2VsZWN0QWxsUm93cyhoZWFkZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RBbGxSb3dzKGhlYWRlcjogVHJlZVRhYmxlSGVhZGVyT2JqZWN0KSB7XHJcbiAgICB0aGlzLnRhYmxlRGF0YS5kYXRhID0gdGhpcy50YWJsZURhdGEuZGF0YS5tYXAodiA9PiB7IHYuc2VsZWN0ZWQgPSB0cnVlOyByZXR1cm4gdjsgfSk7XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3QoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzZWxlY3RBbGxSb3dzKGhlYWRlcjogVHJlZVRhYmxlSGVhZGVyT2JqZWN0KSB7XHJcbiAgICB0aGlzLnRhYmxlRGF0YS5kYXRhID0gdGhpcy50YWJsZURhdGEuZGF0YS5tYXAodiA9PiB7IHYuc2VsZWN0ZWQgPSBmYWxzZTsgcmV0dXJuIHY7IH0pO1xyXG4gICAgdGhpcy51cGRhdGVIb3N0KCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTZWxlY3RSb3cocm93OiBUcmVlVGFibGVSb3cpIHtcclxuICAgIHJvdy5zZWxlY3RlZCA9ICFyb3cuc2VsZWN0ZWQ7XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3QoKTtcclxuICB9XHJcblxyXG4gIGdldFJvd0NsYXNzKHJvdzogVHJlZVRhYmxlUm93KSB7XHJcbiAgICBsZXQgY2xhc3NlcyA9IHsgJ2V4cGFuZGVkLXJvdyc6IHJvdy5leHBhbmRlZCwgJ2NvbGxhcHNlZC1yb3cnOiAhcm93LmV4cGFuZGVkLCAnc2VsZWN0ZWQnOiAncm93LnNlbGVjdGVkJywgJ3Vuc2VsZWN0ZWQnOiAnIXJvdy5zZWxlY3RlZCcgfTtcclxuICAgIGZvciAoY29uc3QgY2xzIG9mIHJvdy5jbGFzc2VzKSB7XHJcbiAgICAgIGNsYXNzZXNbY2xzXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkUm93cygpIHtcclxuICAgIGNvbnN0IHJvd3MgPSBbLi4udGhpcy50YWJsZURhdGEuZGF0YS5maWx0ZXIodiA9PiB7XHJcbiAgICAgIGlmICh2LnNlbGVjdGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHYuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSldO1xyXG4gICAgcmV0dXJuIHJvd3MubWFwKHYgPT4gdi5kYXRhKTtcclxuICB9XHJcblxyXG4gIGNoaWxkUm93U2VsZWN0aW9uQ2hhbmdlZChkYXRhOiBUcmVlVGFibGVSb3dbXSkge1xyXG4gICAgaWYgKHRoaXMucm93U2VsZWN0aW9uQ2hhbmdlZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMucm93U2VsZWN0aW9uQ2hhbmdlZCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJvd1NlbGVjdGlvbkNoYW5nZWQuZW1pdChkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUhvc3QoKSB7XHJcbiAgICBpZiAodGhpcy5yb3dTZWxlY3Rpb25DaGFuZ2VkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yb3dTZWxlY3Rpb25DaGFuZ2VkICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMucm93U2VsZWN0aW9uQ2hhbmdlZC5lbWl0KHRoaXMuZ2V0U2VsZWN0ZWRSb3dzKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXRSb3dTZWxlY3RDaGFuZ2VkSW50ZXJuYWwoZXZlbnQ6IGFueSwgcm93RGF0YTogYW55LCBoZWFkZXJLZXk6IHN0cmluZywgdmFsdWU6IGFueSwgbGV2ZWw6IG51bWJlcikge1xyXG4gICAgdGhpcy5pbnB1dFJvd1NlbGVjdENoYW5nZWQuZW1pdCh7IGV2ZW50LCByb3dEYXRhLCBoZWFkZXJLZXksIHZhbHVlLCBsZXZlbCB9KTtcclxuICB9XHJcblxyXG4gIGlucHV0Um93VGV4dENoYW5nZWRJbnRlcm5hbChldmVudDogYW55LCByb3dEYXRhOiBhbnksIGhlYWRlcktleTogc3RyaW5nLCB2YWx1ZTogYW55LCBsZXZlbDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmlucHV0Um93VGV4dENoYW5nZWQuZW1pdCh7IGV2ZW50LCByb3dEYXRhLCBoZWFkZXJLZXksIHZhbHVlLCBsZXZlbCB9KTtcclxuICB9XHJcblxyXG4gIGlucHV0Um93U2VsZWN0Q2hhbmdlZENoaWxkKGRhdGE6IHsgZXZlbnQ6IGFueSwgcm93RGF0YTogYW55LCBoZWFkZXJLZXk6IHN0cmluZywgdmFsdWU6IGFueSwgbGV2ZWw6IG51bWJlciB9KSB7XHJcbiAgICB0aGlzLmlucHV0Um93U2VsZWN0Q2hhbmdlZC5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRSb3dUZXh0Q2hhbmdlZENoaWxkKGRhdGE6IHsgZXZlbnQ6IGFueSwgcm93RGF0YTogYW55LCBoZWFkZXJLZXk6IHN0cmluZywgdmFsdWU6IGFueSwgbGV2ZWw6IG51bWJlciB9KSB7XHJcbiAgICB0aGlzLmlucHV0Um93VGV4dENoYW5nZWQuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==