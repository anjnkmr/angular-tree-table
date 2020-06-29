/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, KeyValueDiffers, Output, EventEmitter, HostBinding } from '@angular/core';
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
    AngularTreeTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
        this.evaluateExpressionsInTableData();
        this.setPageData(this.tableData.page);
    };
    /**
     * @return {?}
     */
    AngularTreeTableComponent.prototype.evaluateExpressionsInTableData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _loop_1 = function (i) {
            /** @type {?} */
            var rowData = this_1.tableData.data[i];
            this_1.tableData.headers.forEach((/**
             * @param {?} header
             * @return {?}
             */
            function (header) {
                rowData.data[header.dataProperty] = _this.evaluateConcat(header.dataProperty, rowData.data);
            }));
        };
        var this_1 = this;
        for (var i = 0; i < this.tableData.data.length; i++) {
            _loop_1(i);
        }
    };
    /**
     * @param {?} expression
     * @param {?} data
     * @return {?}
     */
    AngularTreeTableComponent.prototype.executeExpression = /**
     * @param {?} expression
     * @param {?} data
     * @return {?}
     */
    function (expression, data) {
        var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
        /** @type {?} */
        var result = undefined;
        if (expression.indexOf(' - ') > -1) {
            /** @type {?} */
            var expressionParts = expression.split(' - ');
            try {
                for (var _e = tslib_1.__values(expressionParts.entries()), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var _g = tslib_1.__read(_f.value, 2), index = _g[0], expressionPart = _g[1];
                    expressionParts[index] = this.executeExpression(expressionPart, data);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
            }
            expressionParts.forEach((/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
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
            var expressionParts = expression.split(' + ');
            try {
                for (var _h = tslib_1.__values(expressionParts.entries()), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var _k = tslib_1.__read(_j.value, 2), index = _k[0], expressionPart = _k[1];
                    expressionParts[index] = this.executeExpression(expressionPart, data);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                }
                finally { if (e_2) throw e_2.error; }
            }
            expressionParts.forEach((/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
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
            var expressionParts = expression.split(' * ');
            try {
                for (var _l = tslib_1.__values(expressionParts.entries()), _m = _l.next(); !_m.done; _m = _l.next()) {
                    var _o = tslib_1.__read(_m.value, 2), index = _o[0], expressionPart = _o[1];
                    expressionParts[index] = this.executeExpression(expressionPart, data);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_m && !_m.done && (_c = _l.return)) _c.call(_l);
                }
                finally { if (e_3) throw e_3.error; }
            }
            expressionParts.forEach((/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
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
            var expressionParts = expression.split(' / ');
            try {
                for (var _p = tslib_1.__values(expressionParts.entries()), _q = _p.next(); !_q.done; _q = _p.next()) {
                    var _r = tslib_1.__read(_q.value, 2), index = _r[0], expressionPart = _r[1];
                    expressionParts[index] = this.executeExpression(expressionPart, data);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_q && !_q.done && (_d = _p.return)) _d.call(_p);
                }
                finally { if (e_4) throw e_4.error; }
            }
            expressionParts.forEach((/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
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
    };
    /**
     * @param {?} expression
     * @param {?} data
     * @return {?}
     */
    AngularTreeTableComponent.prototype.evaluateConcat = /**
     * @param {?} expression
     * @param {?} data
     * @return {?}
     */
    function (expression, data) {
        var _this = this;
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
            var expressionParts = expression.split('|||');
            /** @type {?} */
            var result_1 = '';
            expressionParts.forEach((/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                result_1 += '' + _this.executeExpression(v, data);
            }));
            return result_1;
        }
        else {
            return this.executeExpression(expression, data);
        }
    };
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
    AngularTreeTableComponent.prototype.getValueWithPathFromObject = /**
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
    function (path, data) {
        var e_5, _a;
        /** @type {?} */
        var pathParts = path.split('.');
        /** @type {?} */
        var result = data;
        try {
            for (var pathParts_1 = tslib_1.__values(pathParts), pathParts_1_1 = pathParts_1.next(); !pathParts_1_1.done; pathParts_1_1 = pathParts_1.next()) {
                var part = pathParts_1_1.value;
                if (part.endsWith(']')) {
                    /** @type {?} */
                    var subParts = part.split('[');
                    /** @type {?} */
                    var arrayProperty = subParts[0];
                    if (result[arrayProperty] === undefined || result[arrayProperty] === null || !Array.isArray(result[arrayProperty])) {
                        return '';
                    }
                    /** @type {?} */
                    var arrayIndex = parseInt(subParts[1].replace(']', ''));
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
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (pathParts_1_1 && !pathParts_1_1.done && (_a = pathParts_1.return)) _a.call(pathParts_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return result;
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
        row.children.config.level = this.tableData.config.level + 1;
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
        var e_6, _a;
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
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            }
            finally { if (e_6) throw e_6.error; }
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
        var e_7, _a;
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
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (data_2_1 && !data_2_1.done && (_a = data_2.return)) _a.call(data_2);
            }
            finally { if (e_7) throw e_7.error; }
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
                var e_8, _a;
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
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (rows_1_1 && !rows_1_1.done && (_a = rows_1.return)) _a.call(rows_1);
                    }
                    finally { if (e_8) throw e_8.error; }
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
                var e_9, _a, e_10, _b, e_11, _c, e_12, _d;
                /** @type {?} */
                var keys = Object.keys(v.data);
                // Need to do calculations
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
                    catch (e_9_1) { e_9 = { error: e_9_1 }; }
                    finally {
                        try {
                            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                        }
                        finally { if (e_9) throw e_9.error; }
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
                                    for (var _e = (e_11 = void 0, tslib_1.__values(_this.tableData.config.columnFilters[key])), _f = _e.next(); !_f.done; _f = _e.next()) {
                                        var orFilter = _f.value;
                                        orMatch = v.data[key].toString().toLowerCase().indexOf(orFilter.toLowerCase()) > -1;
                                        if (orMatch) {
                                            break;
                                        }
                                    }
                                }
                                catch (e_11_1) { e_11 = { error: e_11_1 }; }
                                finally {
                                    try {
                                        if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
                                    }
                                    finally { if (e_11) throw e_11.error; }
                                }
                                matched = orMatch;
                                if (!matched) {
                                    break;
                                }
                            }
                        }
                    }
                    catch (e_10_1) { e_10 = { error: e_10_1 }; }
                    finally {
                        try {
                            if (keys_2_1 && !keys_2_1.done && (_b = keys_2.return)) _b.call(keys_2);
                        }
                        finally { if (e_10) throw e_10.error; }
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
                    catch (e_12_1) { e_12 = { error: e_12_1 }; }
                    finally {
                        try {
                            if (keys_3_1 && !keys_3_1.done && (_d = keys_3.return)) _d.call(keys_3);
                        }
                        finally { if (e_12) throw e_12.error; }
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
                    // Inserting into current page
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
        var e_13, _a, e_14, _b;
        /** @type {?} */
        var dataRows = [];
        /** @type {?} */
        var dataRowsSource = this.tableData.data;
        if (this.tableData.config.excelExportOnlyFilteredRows) {
            dataRowsSource = this.filteredData;
        }
        try {
            for (var dataRowsSource_1 = tslib_1.__values(dataRowsSource), dataRowsSource_1_1 = dataRowsSource_1.next(); !dataRowsSource_1_1.done; dataRowsSource_1_1 = dataRowsSource_1.next()) {
                var d = dataRowsSource_1_1.value;
                /** @type {?} */
                var obj = {};
                try {
                    for (var _c = (e_14 = void 0, tslib_1.__values(this.tableData.headers)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var h = _d.value;
                        obj[h.title] = d.data[h.dataProperty];
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
                dataRows.push(obj);
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (dataRowsSource_1_1 && !dataRowsSource_1_1.done && (_a = dataRowsSource_1.return)) _a.call(dataRowsSource_1);
            }
            finally { if (e_13) throw e_13.error; }
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
        var e_15, _a;
        /** @type {?} */
        var classes = { 'expanded-row': row.expanded, 'collapsed-row': !row.expanded, 'selected': 'row.selected', 'unselected': '!row.selected' };
        try {
            for (var _b = tslib_1.__values(row.classes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var cls = _c.value;
                classes[cls] = true;
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_15) throw e_15.error; }
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
                    template: "<div class=\"tree-table\" *ngIf=\"tableData.config.expandableType.toString() === 'DIFFERENT_HEADERS'\">\r\n  <div class=\"tree-table-loading\" [ngClass]=\"tableData.isLoading ? 'on' : 'off'\">\r\n    <div class=\"loader-msg\">\r\n      Loading...\r\n    </div>\r\n  </div>\r\n  <div class=\"action-container\">\r\n    <div class=\"search-section\"\r\n      *ngIf=\"tableData.config.showPageLengthDropdown || tableData.config.commonSearch || tableData.config.excelExportButton\">\r\n      <div class=\"first-part\" *ngIf=\"tableData.config.showPageLengthDropdown\">\r\n        Show <select class=\"select-page-size form-control form-control-sm\" [(ngModel)]=\"tableData.pageSize\"\r\n          (change)=\"pageSizeChanged()\">\r\n          <option value=\"{{p}}\" *ngFor=\"let p of tableData.config.pageSizes\">{{p}}</option>\r\n        </select> Entries\r\n      </div>\r\n      <div class=\"second-part\">\r\n        <input *ngIf=\"tableData.config.commonSearch\" type=\"text\"\r\n          class=\"form-control form-control-sm text-center col-3 float-right\" [(ngModel)]=\"tableData.keyword\"\r\n          (keyup)=\"search()\" (change)=\"search()\" placeholder=\"Search\" />\r\n        <button *ngIf=\"tableData.config.excelExportButton\"\r\n          class=\"btn btn-sm btn-primary export excelExportButton float-right\"\r\n          (click)=\"excelExportClicked()\">{{tableData.config.excelExportButtonText}}</button>\r\n        <div class=\"dropdown dropleft\" id=\"dropDownVisCon{{randomInstance}}\">\r\n          <button id=\"dropDownVis{{randomInstance}}\" *ngIf=\"tableData.config.columnVisibilityDropDown\"\r\n            class=\"btn btn-sm btn-secondary dropDownBtn v-elipses float-right dropdown-toggle\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">\u22EE</button>\r\n          <div class=\"dropDownBtn-data dropdown-menu\">\r\n\r\n            <ng-container *ngFor=\"let header of currentPageData.headers\">\r\n              <button class=\"btnVis btn-sm btn\" *ngIf=\"header.canChangeVisbilityOnRuntime\"\r\n                [ngClass]=\"header.show ? 'active': ''\" (click)=\" header.show = !header.show;\">{{header.title}}</button>\r\n            </ng-container>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"buttons-section\" *ngIf=\"tableData.config.columnVisibility\">\r\n      <div class=\"column-visibility\" *ngIf=\"tableData.config.columnVisibility\">\r\n        <ng-container *ngFor=\"let header of currentPageData.headers\">\r\n          <button class=\"btnVis\" *ngIf=\"header.canChangeVisbilityOnRuntime\" [ngClass]=\"header.show ? 'active': ''\"\r\n            (click)=\"header.show = !header.show\">{{header.title}}</button>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n    <div class=\"extraInfo-section\" *ngIf=\"tableData.config.extraInfos.length > 0\">\r\n      <div class=\"extraInfo\" [style.width]=\"extraInfoItemWidthPercent + '%'\"\r\n        *ngFor=\"let exInfo of tableData.config.extraInfos\">\r\n        {{exInfo[0]}}: {{exInfo[1]}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <table [class]=\"className + ' ' + tableData.config.customClassName + ' ' + tableData.config.fullClassName\">\r\n    <thead class=\"ds2-table-element--head-row thead-sm\" *ngIf=\"tableData.config.showTableHeaders\">\r\n      <tr>\r\n        <th\r\n          *ngIf=\"!tableData.config.showExpandAllArrows && tableData.config.expandableArrowPlacement.toString() === 'SEPERATE_COLUMN'\"\r\n          [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></th>\r\n        <th\r\n          *ngIf=\"tableData.config.showExpandAllArrows && tableData.config.expandableArrowPlacement.toString() === 'SEPERATE_COLUMN'\"\r\n          [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\">\r\n          <button class=\"btn btn-secondary btn-sm collapsed-row-button\" (click)=\"expandAllRows()\"\r\n            *ngIf=\"!tableData.isAllRowsExpanded\"></button>\r\n          <button class=\"btn btn-secondary btn-sm expanded-row-button\" (click)=\"collapseAllRows()\"\r\n            *ngIf=\"tableData.isAllRowsExpanded\"></button>\r\n        </th>\r\n        <ng-container *ngFor=\"let header of currentPageData.headers; let indx = index;\">\r\n          <th *ngIf=\"header.show && header.dataType !== 'SELECT'\" [ngClass]=\"header.style\" (click)=\"sortColumn(header)\">\r\n            <ng-container *ngIf=\"tableData.config.showExpandAllArrows && tableData.config.expandableArrowPlacement.toString() === 'FIRST_COLUMN'\">\r\n              <span class=\"collapsed-row-button\"\r\n                *ngIf=\"indx === 0 && !tableData.isAllRowsExpanded\"\r\n                (click)=\"expandAllRows()\"></span>\r\n              <span class=\"expanded-row-button\"\r\n                *ngIf=\"indx === 0 && tableData.isAllRowsExpanded\"\r\n                (click)=\"collapseAllRows()\"></span>\r\n            </ng-container>\r\n            {{header.title}}\r\n            <i [ngClass]=\"tableData.config.sortAscClassName+' sort-right-align'\"\r\n              *ngIf=\"tableData.config.sortedColumn[header.dataProperty] === 'ASC'\"></i>\r\n            <i [ngClass]=\"tableData.config.sortDescClassName+' sort-right-align'\"\r\n              *ngIf=\"tableData.config.sortedColumn[header.dataProperty] === 'DESC'\"></i>\r\n            <i [ngClass]=\"tableData.config.sortNothingClassName+' sort-right-align'\"\r\n              *ngIf=\"tableData.config.sortedColumn[header.dataProperty] !== 'DESC' && tableData.config.sortedColumn[header.dataProperty] !== 'ASC'\"></i>\r\n          </th>\r\n          <th *ngIf=\"header.show && header.dataType === 'SELECT'\" [ngClass]=\"header.style\"\r\n            (click)=\"toggleSelectAllRows(header)\">\r\n            <input type=\"checkbox\" class=\"header-check-box select-all\"\r\n              [checked]=\"isAllRowsSelected(header) ? 'checked' : ''\" /> {{header.title}}\r\n          </th>\r\n        </ng-container>\r\n      </tr>\r\n      <tr *ngIf=\"tableData.config.visibleColumnFiltersVisibility\">\r\n        <th [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></th>\r\n        <ng-container *ngFor=\"let header of currentPageData.headers\">\r\n          <th *ngIf=\"header.show\">\r\n            <input type=\"text\" class=\"form-control form-control-sm text-center\" placeholder=\"{{header.title}}\"\r\n              (change)=\"columnSearchChanged(header.dataProperty)\" (keyup)=\"columnSearchChanged(header.dataProperty)\"\r\n              [(ngModel)]=\"tableData.config.visibleColumnFilters[header.dataProperty]\"\r\n              [disabled]=\"!header.enableColumnSearch || header.dataType === 'SELECT'\"\r\n              [name]=\"'filter_'+header.dataProperty\" />\r\n          </th>\r\n        </ng-container>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngIf=\"currentPageData.data.length === 0\">\r\n        <tr *ngIf=\"tableData.isLoading\">\r\n          <td [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n          <td [attr.colspan]=\"currentPageData.headers.length + 1\" style=\"text-align: center;\">\r\n            Loading...\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"!tableData.isLoading\">\r\n          <td [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n          <td [attr.colspan]=\"currentPageData.headers.length + 1\" style=\"text-align: center;\">\r\n            No records found\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n      <ng-container *ngFor=\"let row of currentPageData.data; let indi = index;\">\r\n        <ng-container *ngIf=\"row !== undefined\">\r\n          <tr [ngClass]=\"getRowClass(row)\">\r\n            <td *ngIf=\"!row.expandable && tableData.config.expandableArrowPlacement.toString() === 'SEPERATE_COLUMN'\"\r\n              [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n            <td *ngIf=\"row.expandable && tableData.config.expandableArrowPlacement.toString() === 'SEPERATE_COLUMN'\"\r\n              [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\">\r\n              <button class=\"btn btn-secondary btn-sm collapsed-row-button\" (click)=\"expandRow(row)\"\r\n                *ngIf=\"!row.expanded\"></button>\r\n              <button class=\"btn btn-secondary btn-sm expanded-row-button\" (click)=\"collapseRow(row)\"\r\n                *ngIf=\"row.expanded\"></button>\r\n            </td>\r\n            <ng-container *ngFor=\"let header of currentPageData.headers; let indx = index;\">\r\n              <td *ngIf=\"header.show\" [style]=\"row.styles[header.dataProperty]\"\r\n                [ngClass]=\"row.classes[header.dataProperty]\">\r\n                <ng-container *ngIf=\"row.expandable\">\r\n                  <span class=\"collapsed-row-button\"\r\n                    *ngIf=\"indx === 0 && !row.expanded && tableData.config.expandableArrowPlacement.toString() === 'FIRST_COLUMN'\"\r\n                    (click)=\"expandRow(row)\"></span>\r\n                  <span class=\"expanded-row-button\"\r\n                    *ngIf=\"indx === 0 && row.expanded && tableData.config.expandableArrowPlacement.toString() === 'FIRST_COLUMN'\"\r\n                    (click)=\"collapseRow(row)\"></span>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType === 'ACTIONS'\">\r\n                  <button class=\"tt-row-action  btn-xs btn btn-default\" *ngFor=\"let action of row.actions\"\r\n                    [ngClass]=\"action.classes\" (click)=\"rowAction(row, action)\" [title]=\"action.title\">\r\n                    {{action.label}}\r\n                  </button>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType === 'SELECT'\">\r\n                  <input type=\"checkbox\" class=\"header-check-box select-one\" [checked]=\"row.selected ? 'checked' : ''\"\r\n                    (change)=\"toggleSelectRow(row)\" />\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType === 'INPUT_TEXT'\">\r\n                  <input type=\"text\" class=\"header-input-text tt-input-tag\" [(ngModel)]=\"row.data[header.dataProperty]\"\r\n                    [name]=\"indi + '_' + header.dataProperty\"\r\n                    (change)=\"inputRowTextChangedInternal($event, row.data, header.dataProperty, row.data[header.dataProperty], tableData.config.level)\" />\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType === 'INPUT_SELECT'\">\r\n                  <select class=\"header-input-select tt-select-tag\" [(ngModel)]=\"row.data[header.dataProperty]\"\r\n                    [name]=\"indi + '_' + header.dataProperty\"\r\n                    (change)=\"inputRowSelectChangedInternal($event, row.data, header.dataProperty, row.data[header.dataProperty], tableData.config.level)\">\r\n                    <ng-container *ngIf=\"row.options !== undefined && row.options !== null\">\r\n                      <option [value]=\"opt.value\" *ngFor=\"let opt of row.options\">{{opt.displayText}}</option>\r\n                    </ng-container>\r\n                  </select>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType !== 'ACTIONS' && header.dataType !== 'SELECT'\">\r\n                  <ng-container *ngIf=\"row.clickables[header.dataProperty] !== undefined\">\r\n                    <button class=\"popup-link-button\" (click)=\"clickableClicked(row, header.dataProperty)\"\r\n                      [innerHTML]=\"row.data[header.dataProperty]\">\r\n                    </button>\r\n                  </ng-container>\r\n                  <ng-container\r\n                    *ngIf=\"row.clickables[header.dataProperty] === undefined && header.dataType !== 'INPUT_TEXT' && header.dataType !== 'INPUT_SELECT'\">\r\n                    <span class=\"inner-content-table-cell\" [innerHTML]=\"row.data[header.dataProperty]\"></span>\r\n                  </ng-container>\r\n                </ng-container>\r\n              </td>\r\n            </ng-container>\r\n          </tr>\r\n          <tr *ngIf=\"row.expanded && row.children.config.expandableType.toString() === 'DIFFERENT_HEADERS'\"\r\n            [ngClass]=\"row.expanded ? 'expanded-row-content' : 'collapsed-row-content'\">\r\n            <td style=\"width: 10px;\"></td>\r\n            <td [colSpan]=\"currentPageData.headers.length\">\r\n              <angular-tree-table (inputRowSelectChanged)=\"inputRowSelectChangedChild($event)\"\r\n                (inputRowTextChanged)=\"inputRowTextChangedChild($event)\"\r\n                (rowSelectionChanged)=\"childRowSelectionChanged($event)\" [tableData]=\"row.children\">\r\n              </angular-tree-table>\r\n            </td>\r\n          </tr>\r\n          <ng-container *ngIf=\"row.expanded && row.children.config.expandableType.toString() === 'SAME_HEADERS'\">\r\n            <angular-tree-table (inputRowSelectChanged)=\"inputRowSelectChangedChild($event)\"\r\n              (inputRowTextChanged)=\"inputRowTextChangedChild($event)\"\r\n              (rowSelectionChanged)=\"childRowSelectionChanged($event)\" [tableData]=\"row.children\">\r\n            </angular-tree-table>\r\n          </ng-container>\r\n        </ng-container>\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"table-bottom\">\r\n    <div class=\"page-number-status\">\r\n      Showing {{(tableData.pageSize * (tableData.page - 1)) + 1}} to {{getPageTo()}} of\r\n      <ng-container *ngIf=\"tableData.filteredRowsCount != tableData.totalRowsCount\">\r\n        {{tableData.filteredRowsCount}} rows filtered on {{tableData.totalRowsCount}}\r\n      </ng-container>\r\n      <ng-container *ngIf=\"tableData.filteredRowsCount === tableData.totalRowsCount\">\r\n        {{tableData.filteredRowsCount}}\r\n      </ng-container>\r\n      rows\r\n    </div>\r\n    <div class=\"pagination-buttons\" *ngIf=\"tableData.totalRowsCount > tableData.pageSize\">\r\n      <div [class]=\"tableData.splashMessageFlag ? 'splash-message show' : 'splash-message hide'\">\r\n        <div class=\"message-content\">{{tableData.splashMessageContent}}</div>\r\n      </div>\r\n      <div class=\"btn btnGroup btn-group\">\r\n        <button class=\"btn big\" [class]=\"tableData.page === 1 ? 'btn big btn-secondary ' : 'btn big btn-secondary '\"\r\n          (click)=\"changePage(1)\">First</button>\r\n        <button class=\"btn\" [class]=\"'btn btn-secondary'\" (click)=\"changePage(tableData.page - 1)\">&lt;</button>\r\n        <ng-container *ngFor=\"let pageNumber of pageNumbers()\">\r\n          <button class=\"btn\" [class]=\"tableData.page === pageNumber ? 'btn btn-primary ' : 'btn btn-secondary '\"\r\n            (click)=\"changePage(pageNumber)\">{{pageNumber}}</button>\r\n        </ng-container>\r\n        <button class=\"btn\" [class]=\"'btn btn-secondary'\" (click)=\"changePage(tableData.page + 1)\">&gt;</button>\r\n        <button class=\"btn big\"\r\n          [class]=\"tableData.page === tableData.totalPagesCount() ? 'btn big btn-secondary ' : 'btn big btn-secondary '\"\r\n          (click)=\"changePage(tableData.totalPagesCount())\">Last</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-container *ngIf=\"tableData.config.expandableType.toString() === 'SAME_HEADERS'\">\r\n  <ng-container *ngIf=\"currentPageData.data.length === 0\">\r\n    <tr *ngIf=\"tableData.isLoading\">\r\n      <td [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n      <td [attr.colspan]=\"currentPageData.headers.length + 1\" style=\"text-align: center;\">\r\n        Loading...\r\n      </td>\r\n    </tr>\r\n    <tr *ngIf=\"!tableData.isLoading\">\r\n      <td [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n      <td [attr.colspan]=\"currentPageData.headers.length + 1\" style=\"text-align: center;\">\r\n        No records found\r\n      </td>\r\n    </tr>\r\n  </ng-container>\r\n  <ng-container *ngFor=\"let row of currentPageData.data; let indi = index;\">\r\n    <ng-container *ngIf=\"row !== undefined\">\r\n      <tr [ngClass]=\"getRowClass(row)\">\r\n        <td *ngIf=\"!row.expandable && tableData.config.expandableArrowPlacement.toString() === 'SEPERATE_COLUMN'\"\r\n          [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n        <td *ngIf=\"row.expandable && tableData.config.expandableArrowPlacement.toString() === 'SEPERATE_COLUMN'\"\r\n          [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\">\r\n          <button class=\"btn btn-secondary btn-sm collapsed-row-button\" (click)=\"expandRow(row)\"\r\n            *ngIf=\"!row.expanded\"></button>\r\n          <button class=\"btn btn-secondary btn-sm expanded-row-button\" (click)=\"collapseRow(row)\"\r\n            *ngIf=\"row.expanded\"></button>\r\n        </td>\r\n        <ng-container *ngFor=\"let header of currentPageData.headers; let indx=index;\">\r\n          <td *ngIf=\"header.show\" [style]=\"row.styles[header.dataProperty]\"\r\n            [ngClass]=\"row.classes[header.dataProperty]\">\r\n            <ng-container *ngIf=\"row.expandable\">\r\n              <span class=\"collapsed-row-button\"\r\n                *ngIf=\"indx === 0 && !row.expanded && tableData.config.expandableArrowPlacement.toString() === 'FIRST_COLUMN'\"\r\n                (click)=\"expandRow(row)\"></span>\r\n              <span class=\"expanded-row-button\"\r\n                *ngIf=\"indx === 0 && row.expanded && tableData.config.expandableArrowPlacement.toString() === 'FIRST_COLUMN'\"\r\n                (click)=\"collapseRow(row)\"></span>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"header.dataType === 'ACTIONS'\">\r\n              <button class=\"tt-row-action  btn-xs btn btn-default\" *ngFor=\"let action of row.actions\"\r\n                [ngClass]=\"action.classes\" (click)=\"rowAction(row, action)\" [title]=\"action.title\">\r\n                {{action.label}}\r\n              </button>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"header.dataType === 'SELECT'\">\r\n              <input type=\"checkbox\" class=\"header-check-box select-one\" [checked]=\"row.selected ? 'checked' : ''\"\r\n                (change)=\"toggleSelectRow(row)\" />\r\n            </ng-container>\r\n            <ng-container *ngIf=\"header.dataType === 'INPUT_TEXT'\">\r\n              <input type=\"text\" class=\"header-input-text tt-input-tag\" [(ngModel)]=\"row.data[header.dataProperty]\"\r\n                [name]=\"indi + '_' + header.dataProperty\"\r\n                (change)=\"inputRowTextChangedInternal($event, row.data, header.dataProperty, row.data[header.dataProperty], tableData.config.level)\" />\r\n            </ng-container>\r\n            <ng-container *ngIf=\"header.dataType === 'INPUT_SELECT'\">\r\n              <select class=\"header-input-select tt-select-tag\" [(ngModel)]=\"row.data[header.dataProperty]\"\r\n                [name]=\"indi + '_' + header.dataProperty\"\r\n                (change)=\"inputRowSelectChangedInternal($event, row.data, header.dataProperty, row.data[header.dataProperty], tableData.config.level)\">\r\n                <ng-container *ngIf=\"row.options !== undefined && row.options !== null\">\r\n                  <option [value]=\"opt.value\" *ngFor=\"let opt of row.options\">{{opt.displayText}}</option>\r\n                </ng-container>\r\n              </select>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"header.dataType !== 'ACTIONS' && header.dataType !== 'SELECT'\">\r\n              <ng-container *ngIf=\"row.clickables[header.dataProperty] !== undefined\">\r\n                <button class=\"popup-link-button\" (click)=\"clickableClicked(row, header.dataProperty)\"\r\n                  [innerHTML]=\"row.data[header.dataProperty]\">\r\n                </button>\r\n              </ng-container>\r\n              <ng-container\r\n                *ngIf=\"row.clickables[header.dataProperty] === undefined && header.dataType !== 'INPUT_TEXT' && header.dataType !== 'INPUT_SELECT'\">\r\n                <span class=\"inner-content-table-cell\" [innerHTML]=\"row.data[header.dataProperty]\"></span>\r\n              </ng-container>\r\n            </ng-container>\r\n          </td>\r\n        </ng-container>\r\n      </tr>\r\n      <tr *ngIf=\"row.expanded && row.children.config.expandableType.toString() === 'DIFFERENT_HEADERS'\"\r\n        [ngClass]=\"row.expanded ? 'expanded-row-content' : 'collapsed-row-content'\">\r\n        <td style=\"width: 10px;\"></td>\r\n        <td [colSpan]=\"currentPageData.headers.length\">\r\n          <angular-tree-table (inputRowSelectChanged)=\"inputRowSelectChangedChild($event)\"\r\n            (inputRowTextChanged)=\"inputRowTextChangedChild($event)\"\r\n            (rowSelectionChanged)=\"childRowSelectionChanged($event)\" [tableData]=\"row.children\">\r\n          </angular-tree-table>\r\n        </td>\r\n      </tr>\r\n      <ng-container *ngIf=\"row.expanded && row.children.config.expandableType.toString() === 'SAME_HEADERS'\">\r\n        <angular-tree-table (inputRowSelectChanged)=\"inputRowSelectChangedChild($event)\"\r\n          (inputRowTextChanged)=\"inputRowTextChangedChild($event)\"\r\n          (rowSelectionChanged)=\"childRowSelectionChanged($event)\" [tableData]=\"row.children\">\r\n        </angular-tree-table>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-container>",
                    styles: [":host{display:contents}:host .dropDownBtn-data{overflow:visible;padding:5px}:host.expandable-arrow-position-FIRST_COLUMN td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:30px;padding-right:10px}:host.expandable-arrow-position-FIRST_COLUMN tr.expanded-row{box-sizing:border-box;border:2px solid #00000080;border-bottom:0;font-weight:700;background-color:#0000000d}:host.expandable-arrow-position-FIRST_COLUMN tr.expanded-row+angular-tree-table>tr{border:2px solid #00000080;border-top:0;border-bottom:0}:host.expandable-arrow-position-FIRST_COLUMN tr.expanded-row+angular-tree-table>tr:last-child{border:2px solid #00000080;border-top:0}:host.expandable-arrow-position-FIRST_COLUMN.slevel-1 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-1 tr span.expanded-row-button{position:absolute;left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-1 tr td:first-child{padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-1 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-2 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-2 tr span.expanded-row-button{position:absolute;left:40px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-2 tr td:first-child{padding-left:40px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-2 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-3 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-3 tr span.expanded-row-button{position:absolute;left:60px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-3 tr td:first-child{padding-left:60px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-3 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-4 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-4 tr span.expanded-row-button{position:absolute;left:80px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-4 tr td:first-child{padding-left:80px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-4 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-5 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-5 tr span.expanded-row-button{position:absolute;left:100px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-5 tr td:first-child{padding-left:100px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-5 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-6 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-6 tr span.expanded-row-button{position:absolute;left:120px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-6 tr td:first-child{padding-left:120px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-6 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-7 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-7 tr span.expanded-row-button{position:absolute;left:140px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-7 tr td:first-child{padding-left:140px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-7 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-8 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-8 tr span.expanded-row-button{position:absolute;left:160px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-8 tr td:first-child{padding-left:160px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-8 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-9 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-9 tr span.expanded-row-button{position:absolute;left:180px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-9 tr td:first-child{padding-left:180px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-9 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-10 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-10 tr span.expanded-row-button{position:absolute;left:200px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-10 tr td:first-child{padding-left:200px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-10 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-11 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-11 tr span.expanded-row-button{position:absolute;left:220px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-11 tr td:first-child{padding-left:220px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-11 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-12 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-12 tr span.expanded-row-button{position:absolute;left:240px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-12 tr td:first-child{padding-left:240px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-12 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-13 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-13 tr span.expanded-row-button{position:absolute;left:260px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-13 tr td:first-child{padding-left:260px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-13 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-14 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-14 tr span.expanded-row-button{position:absolute;left:280px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-14 tr td:first-child{padding-left:280px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-14 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-15 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-15 tr span.expanded-row-button{position:absolute;left:300px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-15 tr td:first-child{padding-left:300px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-15 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-16 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-16 tr span.expanded-row-button{position:absolute;left:320px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-16 tr td:first-child{padding-left:320px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-16 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-17 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-17 tr span.expanded-row-button{position:absolute;left:340px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-17 tr td:first-child{padding-left:340px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-17 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-18 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-18 tr span.expanded-row-button{position:absolute;left:360px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-18 tr td:first-child{padding-left:360px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-18 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-19 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-19 tr span.expanded-row-button{position:absolute;left:380px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-19 tr td:first-child{padding-left:380px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-19 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-20 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-20 tr span.expanded-row-button{position:absolute;left:400px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-20 tr td:first-child{padding-left:400px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-20 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-21 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-21 tr span.expanded-row-button{position:absolute;left:420px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-21 tr td:first-child{padding-left:420px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-21 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-22 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-22 tr span.expanded-row-button{position:absolute;left:440px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-22 tr td:first-child{padding-left:440px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-22 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-23 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-23 tr span.expanded-row-button{position:absolute;left:460px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-23 tr td:first-child{padding-left:460px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-23 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-24 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-24 tr span.expanded-row-button{position:absolute;left:480px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-24 tr td:first-child{padding-left:480px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-24 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-25 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-25 tr span.expanded-row-button{position:absolute;left:500px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-25 tr td:first-child{padding-left:500px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-25 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-26 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-26 tr span.expanded-row-button{position:absolute;left:520px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-26 tr td:first-child{padding-left:520px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-26 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-27 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-27 tr span.expanded-row-button{position:absolute;left:540px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-27 tr td:first-child{padding-left:540px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-27 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-28 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-28 tr span.expanded-row-button{position:absolute;left:560px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-28 tr td:first-child{padding-left:560px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-28 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-29 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-29 tr span.expanded-row-button{position:absolute;left:580px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-29 tr td:first-child{padding-left:580px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-29 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-30 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-30 tr span.expanded-row-button{position:absolute;left:600px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-30 tr td:first-child{padding-left:600px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-30 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-31 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-31 tr span.expanded-row-button{position:absolute;left:620px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-31 tr td:first-child{padding-left:620px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-31 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-32 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-32 tr span.expanded-row-button{position:absolute;left:640px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-32 tr td:first-child{padding-left:640px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-32 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-33 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-33 tr span.expanded-row-button{position:absolute;left:660px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-33 tr td:first-child{padding-left:660px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-33 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-34 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-34 tr span.expanded-row-button{position:absolute;left:680px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-34 tr td:first-child{padding-left:680px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-34 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-35 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-35 tr span.expanded-row-button{position:absolute;left:700px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-35 tr td:first-child{padding-left:700px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-35 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-36 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-36 tr span.expanded-row-button{position:absolute;left:720px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-36 tr td:first-child{padding-left:720px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-36 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-37 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-37 tr span.expanded-row-button{position:absolute;left:740px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-37 tr td:first-child{padding-left:740px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-37 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-38 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-38 tr span.expanded-row-button{position:absolute;left:760px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-38 tr td:first-child{padding-left:760px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-38 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-39 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-39 tr span.expanded-row-button{position:absolute;left:780px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-39 tr td:first-child{padding-left:780px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-39 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-40 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-40 tr span.expanded-row-button{position:absolute;left:800px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-40 tr td:first-child{padding-left:800px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-40 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-41 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-41 tr span.expanded-row-button{position:absolute;left:820px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-41 tr td:first-child{padding-left:820px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-41 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-42 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-42 tr span.expanded-row-button{position:absolute;left:840px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-42 tr td:first-child{padding-left:840px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-42 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-43 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-43 tr span.expanded-row-button{position:absolute;left:860px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-43 tr td:first-child{padding-left:860px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-43 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-44 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-44 tr span.expanded-row-button{position:absolute;left:880px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-44 tr td:first-child{padding-left:880px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-44 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-45 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-45 tr span.expanded-row-button{position:absolute;left:900px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-45 tr td:first-child{padding-left:900px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-45 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-46 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-46 tr span.expanded-row-button{position:absolute;left:920px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-46 tr td:first-child{padding-left:920px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-46 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-47 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-47 tr span.expanded-row-button{position:absolute;left:940px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-47 tr td:first-child{padding-left:940px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-47 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-48 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-48 tr span.expanded-row-button{position:absolute;left:960px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-48 tr td:first-child{padding-left:960px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-48 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-49 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-49 tr span.expanded-row-button{position:absolute;left:980px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-49 tr td:first-child{padding-left:980px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-49 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-50 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-50 tr span.expanded-row-button{position:absolute;left:1000px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-50 tr td:first-child{padding-left:1000px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-50 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-51 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-51 tr span.expanded-row-button{position:absolute;left:1020px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-51 tr td:first-child{padding-left:1020px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-51 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-52 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-52 tr span.expanded-row-button{position:absolute;left:1040px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-52 tr td:first-child{padding-left:1040px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-52 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-53 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-53 tr span.expanded-row-button{position:absolute;left:1060px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-53 tr td:first-child{padding-left:1060px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-53 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-54 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-54 tr span.expanded-row-button{position:absolute;left:1080px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-54 tr td:first-child{padding-left:1080px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-54 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-55 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-55 tr span.expanded-row-button{position:absolute;left:1100px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-55 tr td:first-child{padding-left:1100px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-55 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-56 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-56 tr span.expanded-row-button{position:absolute;left:1120px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-56 tr td:first-child{padding-left:1120px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-56 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-57 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-57 tr span.expanded-row-button{position:absolute;left:1140px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-57 tr td:first-child{padding-left:1140px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-57 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-58 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-58 tr span.expanded-row-button{position:absolute;left:1160px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-58 tr td:first-child{padding-left:1160px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-58 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-59 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-59 tr span.expanded-row-button{position:absolute;left:1180px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-59 tr td:first-child{padding-left:1180px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-59 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-60 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-60 tr span.expanded-row-button{position:absolute;left:1200px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-60 tr td:first-child{padding-left:1200px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-60 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-61 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-61 tr span.expanded-row-button{position:absolute;left:1220px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-61 tr td:first-child{padding-left:1220px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-61 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-62 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-62 tr span.expanded-row-button{position:absolute;left:1240px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-62 tr td:first-child{padding-left:1240px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-62 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-63 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-63 tr span.expanded-row-button{position:absolute;left:1260px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-63 tr td:first-child{padding-left:1260px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-63 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-64 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-64 tr span.expanded-row-button{position:absolute;left:1280px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-64 tr td:first-child{padding-left:1280px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-64 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-65 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-65 tr span.expanded-row-button{position:absolute;left:1300px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-65 tr td:first-child{padding-left:1300px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-65 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-66 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-66 tr span.expanded-row-button{position:absolute;left:1320px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-66 tr td:first-child{padding-left:1320px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-66 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-67 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-67 tr span.expanded-row-button{position:absolute;left:1340px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-67 tr td:first-child{padding-left:1340px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-67 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-68 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-68 tr span.expanded-row-button{position:absolute;left:1360px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-68 tr td:first-child{padding-left:1360px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-68 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-69 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-69 tr span.expanded-row-button{position:absolute;left:1380px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-69 tr td:first-child{padding-left:1380px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-69 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-70 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-70 tr span.expanded-row-button{position:absolute;left:1400px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-70 tr td:first-child{padding-left:1400px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-70 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-71 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-71 tr span.expanded-row-button{position:absolute;left:1420px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-71 tr td:first-child{padding-left:1420px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-71 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-72 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-72 tr span.expanded-row-button{position:absolute;left:1440px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-72 tr td:first-child{padding-left:1440px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-72 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-73 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-73 tr span.expanded-row-button{position:absolute;left:1460px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-73 tr td:first-child{padding-left:1460px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-73 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-74 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-74 tr span.expanded-row-button{position:absolute;left:1480px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-74 tr td:first-child{padding-left:1480px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-74 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-75 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-75 tr span.expanded-row-button{position:absolute;left:1500px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-75 tr td:first-child{padding-left:1500px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-75 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-76 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-76 tr span.expanded-row-button{position:absolute;left:1520px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-76 tr td:first-child{padding-left:1520px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-76 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-77 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-77 tr span.expanded-row-button{position:absolute;left:1540px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-77 tr td:first-child{padding-left:1540px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-77 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-78 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-78 tr span.expanded-row-button{position:absolute;left:1560px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-78 tr td:first-child{padding-left:1560px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-78 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-79 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-79 tr span.expanded-row-button{position:absolute;left:1580px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-79 tr td:first-child{padding-left:1580px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-79 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-80 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-80 tr span.expanded-row-button{position:absolute;left:1600px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-80 tr td:first-child{padding-left:1600px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-80 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-81 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-81 tr span.expanded-row-button{position:absolute;left:1620px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-81 tr td:first-child{padding-left:1620px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-81 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-82 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-82 tr span.expanded-row-button{position:absolute;left:1640px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-82 tr td:first-child{padding-left:1640px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-82 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-83 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-83 tr span.expanded-row-button{position:absolute;left:1660px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-83 tr td:first-child{padding-left:1660px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-83 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-84 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-84 tr span.expanded-row-button{position:absolute;left:1680px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-84 tr td:first-child{padding-left:1680px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-84 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-85 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-85 tr span.expanded-row-button{position:absolute;left:1700px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-85 tr td:first-child{padding-left:1700px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-85 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-86 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-86 tr span.expanded-row-button{position:absolute;left:1720px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-86 tr td:first-child{padding-left:1720px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-86 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-87 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-87 tr span.expanded-row-button{position:absolute;left:1740px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-87 tr td:first-child{padding-left:1740px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-87 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-88 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-88 tr span.expanded-row-button{position:absolute;left:1760px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-88 tr td:first-child{padding-left:1760px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-88 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-89 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-89 tr span.expanded-row-button{position:absolute;left:1780px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-89 tr td:first-child{padding-left:1780px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-89 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-90 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-90 tr span.expanded-row-button{position:absolute;left:1800px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-90 tr td:first-child{padding-left:1800px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-90 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-91 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-91 tr span.expanded-row-button{position:absolute;left:1820px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-91 tr td:first-child{padding-left:1820px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-91 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-92 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-92 tr span.expanded-row-button{position:absolute;left:1840px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-92 tr td:first-child{padding-left:1840px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-92 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-93 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-93 tr span.expanded-row-button{position:absolute;left:1860px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-93 tr td:first-child{padding-left:1860px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-93 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-94 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-94 tr span.expanded-row-button{position:absolute;left:1880px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-94 tr td:first-child{padding-left:1880px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-94 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-95 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-95 tr span.expanded-row-button{position:absolute;left:1900px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-95 tr td:first-child{padding-left:1900px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-95 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-96 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-96 tr span.expanded-row-button{position:absolute;left:1920px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-96 tr td:first-child{padding-left:1920px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-96 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-97 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-97 tr span.expanded-row-button{position:absolute;left:1940px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-97 tr td:first-child{padding-left:1940px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-97 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-98 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-98 tr span.expanded-row-button{position:absolute;left:1960px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-98 tr td:first-child{padding-left:1960px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-98 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-99 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-99 tr span.expanded-row-button{position:absolute;left:1980px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-99 tr td:first-child{padding-left:1980px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-99 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-100 tr span.collapsed-row-button,:host.expandable-arrow-position-FIRST_COLUMN.slevel-100 tr span.expanded-row-button{position:absolute;left:2000px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-100 tr td:first-child{padding-left:2000px}:host.expandable-arrow-position-FIRST_COLUMN.slevel-100 tr td:first-child span.inner-content-table-cell{display:inline-block;width:100%;height:100%;padding-left:20px}:host .tree-table-loading{width:100%;background-color:rgba(0,0,0,.5);overflow:auto;position:absolute}:host .tree-table-loading .loader-msg{color:#fff;font-weight:700;text-align:center;width:100%;height:100px;position:absolute;top:calc(50% - 50px)}:host .tree-table-loading.on{height:100%;z-index:1000}:host .tree-table-loading.off{height:0%}:host .table-sm td,:host .table-sm th{padding:.1rem}:host .tree-table{margin-top:10px;margin-bottom:10px;overflow:auto;position:relative}:host .tree-table .select-page-size{display:inline-block;width:auto}:host .tree-table .extraInfo-section .extraInfo{float:left}:host .tree-table .column-visibility{text-align:center}:host .tree-table .column-visibility .btnVis,:host .tree-table .dropDownBtn-data .btnVis{border-style:none;padding:7px;border-radius:2px;margin-right:5px;margin-bottom:5px}:host .tree-table .column-visibility .btnVis.active,:host .tree-table .column-visibility .btnVis.hover,:host .tree-table .column-visibility .btnVis:active,:host .tree-table .column-visibility .btnVis:hover,:host .tree-table .dropDownBtn-data .btnVis.active,:host .tree-table .dropDownBtn-data .btnVis.hover,:host .tree-table .dropDownBtn-data .btnVis:active,:host .tree-table .dropDownBtn-data .btnVis:hover{background-color:#666;color:#fff}:host .tree-table .action-container .btn{margin-right:5px}:host .tree-table .action-container .search-section{overflow:visible;margin-top:10px;margin-bottom:5px}:host .tree-table .action-container .search-section .first-part{width:40%;text-align:left;display:inline-block}:host .tree-table .action-container .search-section .second-part{width:60%;display:inline-block}:host .tree-table .table-bottom{overflow:auto}:host .tree-table .table-bottom .page-number-status{float:left;overflow:auto;padding-top:.375rem}:host .tree-table .table-bottom .btnGroup{float:right;padding-right:0;padding-top:0;padding-bottom:0}:host .tree-table .table-bottom .pagination-buttons{overflow:auto;position:relative}:host .tree-table .table-bottom .pagination-buttons .splash-message{float:right;position:absolute;right:0;z-index:9999;background:#ececec;border-radius:3px;color:#86adef;font-weight:700;padding:5.5px 15px;transition:opacity 1s ease-in-out}:host .tree-table .table-bottom .pagination-buttons .splash-message.show{opacity:1}:host .tree-table .table-bottom .pagination-buttons .splash-message.hide{padding:0;opacity:0}:host .tree-table .table-bottom .pagination-buttons button{width:48px}:host .tree-table .table-bottom .pagination-buttons button.big{width:50px}:host .tree-table table{width:100%;text-align:center;border-collapse:collapse;margin-bottom:5px}:host .tree-table table th{cursor:pointer;-moz-user-select:none;user-select:none;-ms-user-select:none;-webkit-user-select:none;font-weight:700}:host .tree-table table .expanded-row-content{background:0 0}:host .tree-table table tr span.collapsed-row-button,:host .tree-table table tr span.expanded-row-button{position:absolute;left:10px;display:inline-block;width:20px;height:20px;cursor:pointer}:host .tree-table table tr span.collapsed-row-button:after{content:\"\";width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #707070;display:inline-block}:host .tree-table table tr span.expanded-row-button:after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #707070;display:inline-block}:host .tree-table table tr>td:first-child.not-used,:host .tree-table table tr>th:first-child.not-used{display:none}:host .tree-table table tr>td:first-child.used,:host .tree-table table tr>th:first-child.used{width:50px}:host .tree-table table tr>td:first-child.used .collapsed-row-button:after,:host .tree-table table tr>th:first-child.used .collapsed-row-button:after{content:\"\";width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #fff;display:inline-block}:host .tree-table table tr>td:first-child.used .expanded-row-button:after,:host .tree-table table tr>th:first-child.used .expanded-row-button:after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #fff;display:inline-block}:host .tree-table table tr .tt-row-action{margin-right:5px}:host .tree-table table td button.popup-link-button{border-style:none!important;background:0 0!important;color:#86adef!important}"]
                }] }
    ];
    /** @nocollapse */
    AngularTreeTableComponent.ctorParameters = function () { return [
        { type: KeyValueDiffers }
    ]; };
    AngularTreeTableComponent.propDecorators = {
        componentClass: [{ type: HostBinding, args: ['class',] }],
        tableData: [{ type: Input }],
        rowSelectionChanged: [{ type: Output }],
        inputRowSelectChanged: [{ type: Output }],
        inputRowTextChanged: [{ type: Output }]
    };
    return AngularTreeTableComponent;
}());
export { AngularTreeTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci10cmVlLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItdHJlZS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXRyZWUtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBMEIsS0FBSyxFQUFFLGVBQWUsRUFDeEMsTUFBTSxFQUFFLFlBQVksRUFBVyxXQUFXLEVBQzVELE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxhQUFhLEVBQWdCLE1BQU0sNEJBQTRCLENBQUM7QUFHekUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sS0FBSyxTQUFTLE1BQU0sWUFBWSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOztJQUl6RSxNQUFNLEdBQUcsT0FBTztBQUV0QjtJQXNCRSxtQ0FBb0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFmdEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFFakMsY0FBUyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDekMsaUJBQVksR0FBbUIsRUFBRSxDQUFDO1FBQ2xDLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0Qiw4QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFDbEMsb0JBQWUsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBRXRDLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWiw4QkFBeUIsR0FBRyxHQUFHLENBQUM7UUFDdEIsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUNoRCwwQkFBcUIsR0FBRyxJQUFJ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LE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7SUFFRCw4REFBMEI7Ozs7SUFBMUIsVUFBMkIsSUFBZ0Y7UUFDekcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELDREQUF3Qjs7OztJQUF4QixVQUF5QixJQUFnRjtRQUN2RyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQWhyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLCtvcUJBQWtEOztpQkFFbkQ7Ozs7Z0JBcEIyQyxlQUFlOzs7aUNBdUJ4RCxXQUFXLFNBQUMsT0FBTzs0QkFFbkIsS0FBSztzQ0FTTCxNQUFNO3dDQUNOLE1BQU07c0NBQ04sTUFBTTs7SUE4cEJULGdDQUFDO0NBQUEsQUFsckJELElBa3JCQztTQTdxQlkseUJBQXlCOzs7SUFFcEMsbURBQTBDOzs7OztJQUMxQyxnREFBaUQ7O0lBQ2pELDhDQUF5Qzs7SUFDekMsaURBQWtDOztJQUNsQyw4Q0FBZTs7SUFDZixtREFBc0I7O0lBQ3RCLDhEQUFrQzs7SUFDbEMsb0RBQXNDOzs7OztJQUN0Qyx5REFBMEQ7O0lBQzFELHlDQUFZOztJQUNaLDhEQUFnQzs7SUFDaEMsd0RBQTBEOztJQUMxRCwwREFBaUk7O0lBQ2pJLHdEQUErSDs7Ozs7SUFFbkgsNENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIE9uSW5pdCwgS2V5VmFsdWVEaWZmZXIsIElucHV0LCBLZXlWYWx1ZURpZmZlcnMsXHJcbiAgS2V5VmFsdWVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRG9DaGVjaywgSG9zdEJpbmRpbmdcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBUcmVlVGFibGVEYXRhLCBUcmVlVGFibGVSb3cgfSBmcm9tICcuLi9jbGFzc2VzL3RyZWUtdGFibGUtZGF0YSc7XHJcbmltcG9ydCB7IFRyZWVUYWJsZVJvd0FjdGlvbiB9IGZyb20gJy4uL2NsYXNzZXMvdHJlZS10YWJsZS1yb3ctYWN0aW9uJztcclxuaW1wb3J0IHsgVHJlZVRhYmxlSGVhZGVyT2JqZWN0IH0gZnJvbSAnLi4vY2xhc3Nlcy90cmVlLXRhYmxlLWhlYWRlci1vYmplY3QnO1xyXG5pbXBvcnQgeyBUdERhdGFUeXBlIH0gZnJvbSAnLi4vY2xhc3Nlcy90dC1kYXRhLXR5cGUnO1xyXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xyXG5pbXBvcnQgKiBhcyBGaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IFRyZWVUYWJsZVJvd0FjdGlvblR5cGUgfSBmcm9tICcuLi9jbGFzc2VzL3RyZWUtdGFibGUtcm93LWFjdGlvbi10eXBlJztcclxuXHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuXHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FuZ3VsYXItdHJlZS10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FuZ3VsYXItdHJlZS10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYW5ndWxhci10cmVlLXRhYmxlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJUcmVlVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2sge1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgY29tcG9uZW50Q2xhc3MgPSAnJztcclxuICBwcml2YXRlIGRhdGFEaWZmZXJzOiBLZXlWYWx1ZURpZmZlcjxzdHJpbmcsIGFueT47XHJcbiAgQElucHV0KCkgdGFibGVEYXRhID0gbmV3IFRyZWVUYWJsZURhdGEoKTtcclxuICBmaWx0ZXJlZERhdGE6IFRyZWVUYWJsZVJvd1tdID0gW107XHJcbiAgY2xhc3NOYW1lID0gJyc7XHJcbiAgcmFuZG9tSW5zdGFuY2UgPSBudWxsO1xyXG4gIGRyb3Bkb3duSGlkZUxpc3RlbmVyQWRkZWQgPSBmYWxzZTtcclxuICBjdXJyZW50UGFnZURhdGEgPSBuZXcgVHJlZVRhYmxlRGF0YSgpO1xyXG4gIHByaXZhdGUgY29sdW1uRmlsdGVyc0RpZmZlcnM6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PjtcclxuICBqc29uID0gbnVsbDtcclxuICBleHRyYUluZm9JdGVtV2lkdGhQZXJjZW50ID0gMTAwO1xyXG4gIEBPdXRwdXQoKSByb3dTZWxlY3Rpb25DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcclxuICBAT3V0cHV0KCkgaW5wdXRSb3dTZWxlY3RDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBhbnksIHJvd0RhdGE6IGFueSwgaGVhZGVyS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGxldmVsOiBudW1iZXIgfT4oKTtcclxuICBAT3V0cHV0KCkgaW5wdXRSb3dUZXh0Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogYW55LCByb3dEYXRhOiBhbnksIGhlYWRlcktleTogc3RyaW5nLCB2YWx1ZTogYW55LCBsZXZlbDogbnVtYmVyIH0+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzKSB7XHJcbiAgICB0aGlzLmpzb24gPSBKU09OO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnZhbGlkYXRlRGF0YSgpO1xyXG4gICAgdGhpcy5zZXRQYWdlRGF0YSh0aGlzLnRhYmxlRGF0YS5wYWdlKTtcclxuICAgIHRoaXMuY29tcG9uZW50Q2xhc3MgPSAnc2xldmVsLScrdGhpcy50YWJsZURhdGEuY29uZmlnLmxldmVsICsgJyBleHBhbmRhYmxlLWFycm93LXBvc2l0aW9uLScgKyB0aGlzLnRhYmxlRGF0YS5jb25maWcuZXhwYW5kYWJsZUFycm93UGxhY2VtZW50ICsgJyBleHBhbmRhYmxlLXR5cGUtJyArIHRoaXMudGFibGVEYXRhLmNvbmZpZy5leHBhbmRhYmxlVHlwZTtcclxuICAgIHRoaXMuY2xhc3NOYW1lID0gJ3RhYmxlLXRyZWUgbGV2ZWwnICsgdGhpcy50YWJsZURhdGEuY29uZmlnLmxldmVsO1xyXG4gICAgaWYgKHRoaXMudGFibGVEYXRhLmNvbmZpZy5sZXZlbCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0luaXRpYWxpemUgU2VhcmNoIEZ1bmN0aW9uYWxpdHknKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YURpZmZlcnMgPSB0aGlzLmRpZmZlcnMuZmluZCh0aGlzLnRhYmxlRGF0YSkuY3JlYXRlKCk7XHJcbiAgICB0aGlzLmNvbHVtbkZpbHRlcnNEaWZmZXJzID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnMpLmNyZWF0ZSgpO1xyXG4gICAgdGhpcy5yYW5kb21JbnN0YW5jZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoOTk5OSkpO1xyXG4gICAgdGhpcy5leHRyYUluZm9JdGVtV2lkdGhQZXJjZW50ID0gMTAwIC8gdGhpcy50YWJsZURhdGEuY29uZmlnLmV4dHJhSW5mb3MubGVuZ3RoO1xyXG5cclxuICAgIHRoaXMucmVkZWZpbmVUYWJsZURhdGFGdW5jdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIHJlZGVmaW5lVGFibGVEYXRhRnVuY3Rpb25zKCkge1xyXG4gICAgY29uc3QgZGlzID0gdGhpcztcclxuICAgIHRoaXMudGFibGVEYXRhLmFsbFJvd3NDb2xsYXBzZWQgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgIHJldHVybiBkaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEubGVuZ3RoID09PSBkaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEuZmlsdGVyKHYgPT4gIXYuZXhwYW5kZWQpLmxlbmd0aDtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50YWJsZURhdGEuYWxsUm93c0V4cGFuZGVkID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICByZXR1cm4gZGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLmxlbmd0aCA9PT0gZGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLmZpbHRlcih2ID0+IHYuZXhwYW5kZWQpLmxlbmd0aDtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBkYXRhQ2hhbmdlZChjaGFuZ2VzOiBLZXlWYWx1ZUNoYW5nZXM8c3RyaW5nLCBhbnk+KSB7XHJcbiAgICB0aGlzLnJlZGVmaW5lVGFibGVEYXRhRnVuY3Rpb25zKCk7XHJcbiAgICB0aGlzLmV2YWx1YXRlRXhwcmVzc2lvbnNJblRhYmxlRGF0YSgpO1xyXG4gICAgdGhpcy5zZXRQYWdlRGF0YSh0aGlzLnRhYmxlRGF0YS5wYWdlKTtcclxuICB9XHJcblxyXG4gIGV2YWx1YXRlRXhwcmVzc2lvbnNJblRhYmxlRGF0YSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJsZURhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCByb3dEYXRhID0gdGhpcy50YWJsZURhdGEuZGF0YVtpXTtcclxuICAgICAgdGhpcy50YWJsZURhdGEuaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XHJcbiAgICAgICAgcm93RGF0YS5kYXRhW2hlYWRlci5kYXRhUHJvcGVydHldID0gdGhpcy5ldmFsdWF0ZUNvbmNhdChoZWFkZXIuZGF0YVByb3BlcnR5LCByb3dEYXRhLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4ZWN1dGVFeHByZXNzaW9uKGV4cHJlc3Npb246IHN0cmluZywgZGF0YTogYW55KTogYW55IHtcclxuICAgIGxldCByZXN1bHQgPSB1bmRlZmluZWQ7XHJcbiAgICBpZiAoZXhwcmVzc2lvbi5pbmRleE9mKCcgLSAnKSA+IC0xKSB7XHJcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25QYXJ0cyA9IGV4cHJlc3Npb24uc3BsaXQoJyAtICcpO1xyXG4gICAgICBmb3IgKGxldCBbaW5kZXgsIGV4cHJlc3Npb25QYXJ0XSBvZiBleHByZXNzaW9uUGFydHMuZW50cmllcygpKSB7XHJcbiAgICAgICAgZXhwcmVzc2lvblBhcnRzW2luZGV4XSA9IHRoaXMuZXhlY3V0ZUV4cHJlc3Npb24oZXhwcmVzc2lvblBhcnQsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGV4cHJlc3Npb25QYXJ0cy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmVzdWx0ID0gdjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IC0gcGFyc2VGbG9hdCh2KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBlbHNlIGlmIChleHByZXNzaW9uLmluZGV4T2YoJyArICcpID4gLTEpIHtcclxuICAgICAgY29uc3QgZXhwcmVzc2lvblBhcnRzID0gZXhwcmVzc2lvbi5zcGxpdCgnICsgJyk7XHJcbiAgICAgIGZvciAobGV0IFtpbmRleCwgZXhwcmVzc2lvblBhcnRdIG9mIGV4cHJlc3Npb25QYXJ0cy5lbnRyaWVzKCkpIHtcclxuICAgICAgICBleHByZXNzaW9uUGFydHNbaW5kZXhdID0gdGhpcy5leGVjdXRlRXhwcmVzc2lvbihleHByZXNzaW9uUGFydCwgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgZXhwcmVzc2lvblBhcnRzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXN1bHQgPSB2O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwYXJzZUZsb2F0KHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGVsc2UgaWYgKGV4cHJlc3Npb24uaW5kZXhPZignICogJykgPiAtMSkge1xyXG4gICAgICBjb25zdCBleHByZXNzaW9uUGFydHMgPSBleHByZXNzaW9uLnNwbGl0KCcgKiAnKTtcclxuICAgICAgZm9yIChsZXQgW2luZGV4LCBleHByZXNzaW9uUGFydF0gb2YgZXhwcmVzc2lvblBhcnRzLmVudHJpZXMoKSkge1xyXG4gICAgICAgIGV4cHJlc3Npb25QYXJ0c1tpbmRleF0gPSB0aGlzLmV4ZWN1dGVFeHByZXNzaW9uKGV4cHJlc3Npb25QYXJ0LCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBleHByZXNzaW9uUGFydHMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJlc3VsdCA9IHY7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAqIHBhcnNlRmxvYXQodik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvbi5pbmRleE9mKCcgLyAnKSA+IC0xKSB7XHJcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25QYXJ0cyA9IGV4cHJlc3Npb24uc3BsaXQoJyAvICcpO1xyXG4gICAgICBmb3IgKGxldCBbaW5kZXgsIGV4cHJlc3Npb25QYXJ0XSBvZiBleHByZXNzaW9uUGFydHMuZW50cmllcygpKSB7XHJcbiAgICAgICAgZXhwcmVzc2lvblBhcnRzW2luZGV4XSA9IHRoaXMuZXhlY3V0ZUV4cHJlc3Npb24oZXhwcmVzc2lvblBhcnQsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGV4cHJlc3Npb25QYXJ0cy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmVzdWx0ID0gdjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0IC8gcGFyc2VGbG9hdCh2KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVXaXRoUGF0aEZyb21PYmplY3QoZXhwcmVzc2lvbiwgZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBldmFsdWF0ZUNvbmNhdChleHByZXNzaW9uOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGFbZXhwcmVzc2lvbl0gIT09IHVuZGVmaW5lZCAmJiBkYXRhW2V4cHJlc3Npb25dICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBkYXRhW2V4cHJlc3Npb25dO1xyXG4gICAgfVxyXG4gICAgaWYgKGV4cHJlc3Npb24uc3RhcnRzV2l0aCgnPUNPTkNBVCgnKSAmJiBleHByZXNzaW9uLmVuZHNXaXRoKCcpJykpIHtcclxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbi5yZXBsYWNlKCc9Q09OQ0FUKCcsICcnKTtcclxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbi5zdWJzdHJpbmcoMCwgZXhwcmVzc2lvbi5sZW5ndGggLSAxKTtcclxuICAgICAgICBjb25zdCBleHByZXNzaW9uUGFydHMgPSBleHByZXNzaW9uLnNwbGl0KCd8fHwnKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgZXhwcmVzc2lvblBhcnRzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSAnJyArIHRoaXMuZXhlY3V0ZUV4cHJlc3Npb24odiwgZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgLyoqXHJcbiAgICoge1xyXG4gICAqICAgIFwiUE9fTlVNQkVSXCI6IFwiMTIzNDU2XCIsXHJcbiAgICogICAgXCJQT19UQVhcIjogW3tcclxuICAgKiAgICAgICAgXCJTR1NUXCI6IDE1XHJcbiAgICogICAgfV1cclxuICAgKiB9XHJcbiAgICogXHJcbiAgICogUE9fVEFYLlNHU1RcclxuICAgKiBQT19UQVhbMF0uU0dTVFxyXG4gICAqIFBPX1RBWFswXS5TR1NUICsgUE9fVEFYWzBdLkNHU1RcclxuICAgKiA9Q09OQ0FUKCdTR1NUOiAnfHx8UE9fVEFYWzBdLlNHU1QgKyBQT19UQVhbMF0uQ0dTVHx8fCdcXHJcXG4nKVxyXG4gICAqL1xyXG4gIGdldFZhbHVlV2l0aFBhdGhGcm9tT2JqZWN0KHBhdGg6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBwYXRoUGFydHMgPSBwYXRoLnNwbGl0KCcuJyk7XHJcbiAgICBsZXQgcmVzdWx0ID0gZGF0YTtcclxuICAgIGZvciAobGV0IHBhcnQgb2YgcGF0aFBhcnRzKSB7XHJcbiAgICAgIGlmIChwYXJ0LmVuZHNXaXRoKCddJykpIHtcclxuICAgICAgICBjb25zdCBzdWJQYXJ0cyA9IHBhcnQuc3BsaXQoJ1snKTtcclxuICAgICAgICBjb25zdCBhcnJheVByb3BlcnR5ID0gc3ViUGFydHNbMF07XHJcbiAgICAgICAgaWYgKHJlc3VsdFthcnJheVByb3BlcnR5XSA9PT0gdW5kZWZpbmVkIHx8IHJlc3VsdFthcnJheVByb3BlcnR5XSA9PT0gbnVsbCB8fCAhQXJyYXkuaXNBcnJheShyZXN1bHRbYXJyYXlQcm9wZXJ0eV0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFycmF5SW5kZXggPSBwYXJzZUludChzdWJQYXJ0c1sxXS5yZXBsYWNlKCddJywgJycpKTtcclxuICAgICAgICBpZiAoaXNOYU4oYXJyYXlJbmRleCkpIHtcclxuICAgICAgICAgIHJldHVybiAnI0VSUjogTmFOJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0W2FycmF5UHJvcGVydHldW2FycmF5SW5kZXhdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFydCA9PT0gJyAnKSB7XHJcbiAgICAgICAgICByZXR1cm4gJyAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzdWx0W3BhcnRdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybiBwYXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQgPSByZXN1bHRbcGFydF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoVGFibGUoKSB7XHJcbiAgICB0aGlzLnNldFBhZ2VEYXRhKHRoaXMudGFibGVEYXRhLnBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xyXG4gICAgbGV0IGNoYW5nZXMgPSB0aGlzLmRhdGFEaWZmZXJzLmRpZmYodGhpcy50YWJsZURhdGEpO1xyXG4gICAgaWYgKGNoYW5nZXMpIHtcclxuICAgICAgdGhpcy5kYXRhQ2hhbmdlZChjaGFuZ2VzKTtcclxuICAgIH1cclxuICAgIGNoYW5nZXMgPSB0aGlzLmNvbHVtbkZpbHRlcnNEaWZmZXJzLmRpZmYodGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnMpO1xyXG4gICAgaWYgKGNoYW5nZXMpIHtcclxuICAgICAgdGhpcy5kYXRhQ2hhbmdlZChjaGFuZ2VzKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5kcm9wZG93bkhpZGVMaXN0ZW5lckFkZGVkKSB7XHJcbiAgICAgICQoJyNkcm9wRG93blZpc0NvbicgKyB0aGlzLnJhbmRvbUluc3RhbmNlKS5vbignaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUuY2xpY2tFdmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBpZiAoJChlLmNsaWNrRXZlbnQudGFyZ2V0KS5oYXNDbGFzcygnYnRuVmlzJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyb3Bkb3duSGlkZUxpc3RlbmVyQWRkZWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cGFuZFJvdyhyb3c6IFRyZWVUYWJsZVJvdykge1xyXG4gICAgcm93LmV4cGFuZGVkID0gdHJ1ZTtcclxuICAgIHJvdy5jaGlsZHJlbi5jb25maWcubGV2ZWwgPSB0aGlzLnRhYmxlRGF0YS5jb25maWcubGV2ZWwgKyAxO1xyXG4gICAgaWYgKHRoaXMudGFibGVEYXRhLmNvbmZpZy5ldmVudHMucm93RXhwYW5kZWQgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEuY29uZmlnLmV2ZW50cy5yb3dFeHBhbmRlZChyb3csIHRoaXMudGFibGVEYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbGxhcHNlUm93KHJvdzogVHJlZVRhYmxlUm93KSB7XHJcbiAgICByb3cuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMudGFibGVEYXRhLmlzQWxsUm93c0V4cGFuZGVkID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy50YWJsZURhdGEuY29uZmlnLmV2ZW50cy5yb3dDb2xsYXBzZWQgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEuY29uZmlnLmV2ZW50cy5yb3dDb2xsYXBzZWQocm93LCB0aGlzLnRhYmxlRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBhbmRBbGxSb3dzKCkge1xyXG4gICAgdGhpcy5leHBhbmRBbGxSb3dzSW5EYXRhKHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEpO1xyXG4gICAgdGhpcy50YWJsZURhdGEuaXNBbGxSb3dzRXhwYW5kZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZXhwYW5kQWxsUm93c0luRGF0YShkYXRhOiBUcmVlVGFibGVSb3dbXSkge1xyXG4gICAgZm9yIChjb25zdCByb3cgb2YgZGF0YSkge1xyXG4gICAgICBpZiAocm93LmV4cGFuZGFibGUpIHtcclxuICAgICAgICBpZiAocm93LmNoaWxkcmVuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBpZiAocm93LmNoaWxkcmVuLmRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFibGVEYXRhLmNvbmZpZy5zaG93RXhwYW5kQWxsRW1wdHlDaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgIC8vIHJvdy5leHBhbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5leHBhbmRSb3cocm93KTtcclxuICAgICAgICAgICAgICB0aGlzLmV4cGFuZEFsbFJvd3NJbkRhdGEocm93LmNoaWxkcmVuLmRhdGEpO1xyXG4gICAgICAgICAgICAgIHJvdy5jaGlsZHJlbi5pc0FsbFJvd3NFeHBhbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJvdy5jaGlsZHJlbi5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIHJvdy5leHBhbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZFJvdyhyb3cpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRBbGxSb3dzSW5EYXRhKHJvdy5jaGlsZHJlbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHJvdy5jaGlsZHJlbi5pc0FsbFJvd3NFeHBhbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb2xsYXBzZUFsbFJvd3MoKSB7XHJcbiAgICB0aGlzLmNvbGxhcHNlQWxsUm93c0luRGF0YSh0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhKTtcclxuICAgIHRoaXMudGFibGVEYXRhLmlzQWxsUm93c0V4cGFuZGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb2xsYXBzZUFsbFJvd3NJbkRhdGEoZGF0YTogVHJlZVRhYmxlUm93W10pIHtcclxuICAgIGZvciAoY29uc3Qgcm93IG9mIGRhdGEpIHtcclxuICAgICAgaWYgKHJvdy5leHBhbmRhYmxlKSB7XHJcbiAgICAgICAgaWYgKHJvdy5jaGlsZHJlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgaWYgKHJvdy5jaGlsZHJlbi5kYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlRGF0YS5jb25maWcuc2hvd0V4cGFuZEFsbEVtcHR5Q2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAvLyByb3cuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlUm93KHJvdyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbFJvd3NJbkRhdGEocm93LmNoaWxkcmVuLmRhdGEpO1xyXG4gICAgICAgICAgICAgIHJvdy5jaGlsZHJlbi5pc0FsbFJvd3NFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChyb3cuY2hpbGRyZW4uZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByb3cuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VSb3cocm93KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VBbGxSb3dzSW5EYXRhKHJvdy5jaGlsZHJlbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHJvdy5jaGlsZHJlbi5pc0FsbFJvd3NFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUm93KHJvdzogVHJlZVRhYmxlUm93KSB7XHJcbiAgICByb3cuZXhwYW5kZWQgPyB0aGlzLmNvbGxhcHNlUm93KHJvdykgOiB0aGlzLmV4cGFuZFJvdyhyb3cpO1xyXG4gIH1cclxuXHJcbiAgcm93QWN0aW9uKHJvdzogVHJlZVRhYmxlUm93LCBhY3Rpb246IFRyZWVUYWJsZVJvd0FjdGlvbikge1xyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBUcmVlVGFibGVSb3dBY3Rpb25UeXBlLlRPR0dMRV9DSElMRCkge1xyXG4gICAgICB0aGlzLnRvZ2dsZVJvdyhyb3cpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbi5hY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBhY3Rpb24uYWN0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgIGFjdGlvbi5hY3Rpb24uYmluZChhY3Rpb24uY29udGV4dCwgcm93LmRhdGEsIGFjdGlvbikoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZVBhZ2UocGFnZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy50YWJsZURhdGEucGFnZSA9PT0gcGFnZSB8fCBwYWdlIDwgMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAocGFnZSA+IHRoaXMudGFibGVEYXRhLnRvdGFsUGFnZXNDb3VudCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIGlmICh0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLmxlbmd0aCA8IHRoaXMudGFibGVEYXRhLnBhZ2VTaXplICYmIHRoaXMudGFibGVEYXRhLnBhZ2UgPCBwYWdlKSB7XHJcbiAgICAvLyAgIHRoaXMudGFibGVEYXRhLnNwbGFzaE1lc3NhZ2UoJ1JlYWNoZWQgbGFzdCBwYWdlJyk7XHJcbiAgICAvLyAgIHJldHVybjtcclxuICAgIC8vIH1cclxuICAgIHRoaXMuc2V0UGFnZURhdGEocGFnZSk7XHJcbiAgICB0aGlzLmNvbGxhcHNlQWxsUm93cygpO1xyXG4gIH1cclxuXHJcbiAgc2V0UGFnZURhdGEocGFnZU51bWJlcjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmV4dHJhSW5mb0l0ZW1XaWR0aFBlcmNlbnQgPSAxMDAgLyB0aGlzLnRhYmxlRGF0YS5jb25maWcuZXh0cmFJbmZvcy5sZW5ndGg7XHJcbiAgICBjb25zdCBkaXMgPSB0aGlzO1xyXG4gICAgaWYgKHRoaXMudGFibGVEYXRhLnNlcnZlckNvbmZpZy51cmwgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRhYmxlRGF0YS5zZXJ2ZXJDb25maWcudXJsICE9PSBudWxsKSB7XHJcbiAgICAgIGlmIChwYWdlTnVtYmVyICE9PSAxKSB7XHJcbiAgICAgICAgaWYgKChwYWdlTnVtYmVyIC0gMSkgKiB0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSA+IHRoaXMudGFibGVEYXRhLnRvdGFsUm93c0NvdW50KSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgUGFnZScsIChwYWdlTnVtYmVyIC0gMSkgKiB0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSwgdGhpcy50YWJsZURhdGEudG90YWxSb3dzQ291bnQpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5wYWdlID0gcGFnZU51bWJlcjtcclxuICAgICAgdGhpcy50YWJsZURhdGEubG9hZERhdGEocm93cyA9PiB7XHJcbiAgICAgICAgLy8gaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gICBkaXMuY2hhbmdlUGFnZShkaXMudGFibGVEYXRhLnBhZ2UgLSAxKTtcclxuICAgICAgICAvLyAgIGRpcy50YWJsZURhdGEuc3BsYXNoTWVzc2FnZSgnUmVhY2hlZCBsYXN0IHBhZ2UnKTtcclxuICAgICAgICAvLyAgIGNvbnNvbGUud2FybignTm8gZGF0YSBvbiB0aGUgbmV4dCBwYWdlJyk7XHJcbiAgICAgICAgLy8gICAvLyByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGRpcy5maWx0ZXJlZERhdGEuc3BsaWNlKDAsIHRoaXMuZmlsdGVyZWREYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xyXG4gICAgICAgICAgZGlzLmZpbHRlcmVkRGF0YS5wdXNoKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJvd3NDb3VudCA9IGRpcy5maWx0ZXJlZERhdGEubGVuZ3RoO1xyXG4gICAgICAgIC8vIGRpcy50YWJsZURhdGEucGFnZXNDb3VudCA9IE1hdGguZmxvb3Iocm93c0NvdW50IC8gdGhpcy50YWJsZURhdGEucGFnZVNpemUpO1xyXG4gICAgICAgIC8vIGlmIChkaXMudGFibGVEYXRhLnBhZ2VTaXplICogZGlzLnRhYmxlRGF0YS5wYWdlc0NvdW50IDwgcm93c0NvdW50KSB7XHJcbiAgICAgICAgLy8gICBkaXMudGFibGVEYXRhLnBhZ2VzQ291bnQrKztcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgZGlzLmN1cnJlbnRQYWdlRGF0YS5oZWFkZXJzID0gZGlzLnRhYmxlRGF0YS5oZWFkZXJzO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAocGFnZU51bWJlciAtIDEpICogdGhpcy50YWJsZURhdGEucGFnZVNpemU7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50UGFnZURhdGEuZGF0YSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLnNwbGljZSgwLCB0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJzZUludCh0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSArICcnLCAxMCk7IGkrKykge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ0FkZGluZyBWdmFsdWUnLCB0aGlzLmZpbHRlcmVkRGF0YVtpXSwgaSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5maWx0ZXJlZERhdGFbaV0gIT09IG51bGwgJiYgdGhpcy5maWx0ZXJlZERhdGFbaV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLnB1c2godGhpcy5maWx0ZXJlZERhdGFbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXMudGFibGVEYXRhLnRvdGFsUm93c0NvdW50ID0gZGlzLnRhYmxlRGF0YS5kYXRhLmxlbmd0aDtcclxuICAgICAgaWYgKHBhZ2VOdW1iZXIgIT09IDEpIHtcclxuICAgICAgICBpZiAoKHBhZ2VOdW1iZXIgLSAxKSAqIHRoaXMudGFibGVEYXRhLnBhZ2VTaXplID4gdGhpcy50YWJsZURhdGEudG90YWxSb3dzQ291bnQpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBQYWdlJywgKHBhZ2VOdW1iZXIgLSAxKSAqIHRoaXMudGFibGVEYXRhLnBhZ2VTaXplLCB0aGlzLnRhYmxlRGF0YS50b3RhbFJvd3NDb3VudCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLnBhZ2UgPSBwYWdlTnVtYmVyO1xyXG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YS5zcGxpY2UoMCwgdGhpcy5maWx0ZXJlZERhdGEubGVuZ3RoKTtcclxuICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSB0aGlzLnRhYmxlRGF0YS5kYXRhLmZpbHRlcigodikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2LmRhdGEpO1xyXG4gICAgICAgIC8vIE5lZWQgdG8gZG8gY2FsY3VsYXRpb25zXHJcbiAgICAgICAgbGV0IG1hdGNoZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy50YWJsZURhdGEua2V5d29yZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMudGFibGVEYXRhLmtleXdvcmQgIT09IG51bGwgJiYgdGhpcy50YWJsZURhdGEua2V5d29yZC50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgIGlmICh2LmRhdGFba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHYuZGF0YVtrZXldID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWF0Y2hlZCA9IHYuZGF0YVtrZXldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMudGFibGVEYXRhLmtleXdvcmQudG9Mb3dlckNhc2UoKSkgPiAtMTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZWQpIHtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtYXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1hdGNoZWQgJiYgdGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRhYmxlRGF0YS5jb25maWcuY29sdW1uRmlsdGVycyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnNba2V5XSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgdGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnNba2V5XSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkodGhpcy50YWJsZURhdGEuY29uZmlnLmNvbHVtbkZpbHRlcnNba2V5XSkpIHtcclxuICAgICAgICAgICAgICBpZiAodi5kYXRhW2tleV0gPT09IHVuZGVmaW5lZCB8fCB2LmRhdGFba2V5XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxldCBvck1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBvckZpbHRlciBvZiB0aGlzLnRhYmxlRGF0YS5jb25maWcuY29sdW1uRmlsdGVyc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICBvck1hdGNoID0gdi5kYXRhW2tleV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yob3JGaWx0ZXIudG9Mb3dlckNhc2UoKSkgPiAtMTtcclxuICAgICAgICAgICAgICAgIGlmIChvck1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBtYXRjaGVkID0gb3JNYXRjaDtcclxuICAgICAgICAgICAgICBpZiAoIW1hdGNoZWQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWF0Y2hlZCAmJiB0aGlzLnRhYmxlRGF0YS5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRhYmxlRGF0YS5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnMgIT09IG51bGwpIHtcclxuICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFibGVEYXRhLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1trZXldICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICB0aGlzLnRhYmxlRGF0YS5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNba2V5XSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgIHRoaXMudGFibGVEYXRhLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1trZXldLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICBpZiAodi5kYXRhW2tleV0gPT09IHVuZGVmaW5lZCB8fCB2LmRhdGFba2V5XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG1hdGNoZWQgPSB2LmRhdGFba2V5XS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnRhYmxlRGF0YS5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNba2V5XS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgICAgICAgICAgIGlmICghbWF0Y2hlZCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXRjaGVkO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3Qgcm93c0NvdW50ID0gZGlzLmZpbHRlcmVkRGF0YS5sZW5ndGg7XHJcbiAgICAgIGRpcy50YWJsZURhdGEuZmlsdGVyZWRSb3dzQ291bnQgPSByb3dzQ291bnQ7XHJcbiAgICAgIC8vIGRpcy50YWJsZURhdGEucGFnZXNDb3VudCA9IE1hdGguZmxvb3Iocm93c0NvdW50IC8gdGhpcy50YWJsZURhdGEucGFnZVNpemUpO1xyXG4gICAgICAvLyBpZiAoZGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSAqIGRpcy50YWJsZURhdGEucGFnZXNDb3VudCA8IHJvd3NDb3VudCkge1xyXG4gICAgICAvLyAgIGRpcy50YWJsZURhdGEucGFnZXNDb3VudCsrO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIGRpcy5jdXJyZW50UGFnZURhdGEuaGVhZGVycyA9IGRpcy50YWJsZURhdGEuaGVhZGVycztcclxuICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IChwYWdlTnVtYmVyIC0gMSkgKiB0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEgPSBbXTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLnNwbGljZSgwLCB0aGlzLmN1cnJlbnRQYWdlRGF0YS5kYXRhLmxlbmd0aCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDwgcGFyc2VJbnQoc3RhcnRJbmRleCArICcnLCAxMCkgKyBwYXJzZUludCh0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSArICcnLCAxMCk7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmZpbHRlcmVkRGF0YVtpXSAhPT0gbnVsbCAmJiB0aGlzLmZpbHRlcmVkRGF0YVtpXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAvLyBJbnNlcnRpbmcgaW50byBjdXJyZW50IHBhZ2VcclxuICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2VEYXRhLmRhdGEucHVzaCh0aGlzLmZpbHRlcmVkRGF0YVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGlja2FibGVDbGlja2VkKHJvdzogVHJlZVRhYmxlUm93LCBkYXRhUHJvcGVydHk6IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGVvZiByb3cuY2xpY2thYmxlc1tkYXRhUHJvcGVydHldID09PSAnc3RyaW5nJykge1xyXG4gICAgICBpZiAocm93LmNsaWNrYWJsZXNbZGF0YVByb3BlcnR5XSA9PT0gVHJlZVRhYmxlUm93QWN0aW9uVHlwZS5UT0dHTEVfQ0hJTEQudG9TdHJpbmcoKSkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlUm93KHJvdyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocm93LmNsaWNrYWJsZXNDb250ZXh0ICE9PSBudWxsKSB7XHJcbiAgICAgIHJvdy5jbGlja2FibGVzW2RhdGFQcm9wZXJ0eV0uYmluZChyb3cuY2xpY2thYmxlc0NvbnRleHQsIHJvdy5kYXRhLCBkYXRhUHJvcGVydHkpKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3cuY2xpY2thYmxlc1tkYXRhUHJvcGVydHldKHJvdy5kYXRhLCBkYXRhUHJvcGVydHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVEYXRhKCkge1xyXG4gICAgY29uc29sZS53YXJuKCdEYXRhIFNjaGVtYSBuZWVkIHRvIGJlIHZhbGlkYXRlZCcpO1xyXG4gIH1cclxuXHJcbiAgY29sdW1uU2VhcmNoQ2hhbmdlZChkYXRhUHJvcGVydHk6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXRQYWdlRGF0YSgxKTtcclxuICB9XHJcblxyXG4gIHBhZ2VOdW1iZXJzKCkge1xyXG4gICAgY29uc3QgcGFnZU51bWJlcnMgPSBbXTtcclxuICAgIGNvbnN0IGxpbWl0ID0gMjtcclxuICAgIGNvbnN0IG1heExpbWl0ID0gNDtcclxuICAgIGZvciAobGV0IHAgPSB0aGlzLnRhYmxlRGF0YS5wYWdlIC0gbGltaXQ7IHAgPCB0aGlzLnRhYmxlRGF0YS5wYWdlOyBwKyspIHtcclxuICAgICAgaWYgKHAgPiAwKSB7XHJcbiAgICAgICAgcGFnZU51bWJlcnMucHVzaChwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdW5maWxsZWRDb3VudCA9IGxpbWl0IC0gcGFnZU51bWJlcnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgcSA9IHRoaXMudGFibGVEYXRhLnBhZ2U7IHEgPD0gdGhpcy50YWJsZURhdGEucGFnZSArIHVuZmlsbGVkQ291bnQgKyBsaW1pdDsgcSsrKSB7XHJcbiAgICAgIGlmIChxIDw9IHRoaXMudGFibGVEYXRhLnRvdGFsUGFnZXNDb3VudCgpKSB7XHJcbiAgICAgICAgcGFnZU51bWJlcnMucHVzaChxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHBhZ2VOdW1iZXJzLmxlbmd0aCA8IG1heExpbWl0KSB7XHJcbiAgICAgIGZvciAobGV0IHAgPSB0aGlzLnRhYmxlRGF0YS5wYWdlIC0gbGltaXQgKiAyOyBwIDwgdGhpcy50YWJsZURhdGEucGFnZSAtIGxpbWl0OyBwKyspIHtcclxuICAgICAgICBpZiAocCA+IDApIHtcclxuICAgICAgICAgIHBhZ2VOdW1iZXJzLnVuc2hpZnQocCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFnZU51bWJlcnM7XHJcbiAgfVxyXG5cclxuICBleHBvcnRFeGNlbExvY2FsKCkge1xyXG4gICAgY29uc3QgZGF0YVJvd3MgPSBbXTtcclxuICAgIGxldCBkYXRhUm93c1NvdXJjZSA9IHRoaXMudGFibGVEYXRhLmRhdGE7XHJcbiAgICBpZiAodGhpcy50YWJsZURhdGEuY29uZmlnLmV4Y2VsRXhwb3J0T25seUZpbHRlcmVkUm93cykge1xyXG4gICAgICBkYXRhUm93c1NvdXJjZSA9IHRoaXMuZmlsdGVyZWREYXRhO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgZCBvZiBkYXRhUm93c1NvdXJjZSkge1xyXG4gICAgICBjb25zdCBvYmogPSB7fTtcclxuICAgICAgZm9yIChsZXQgaCBvZiB0aGlzLnRhYmxlRGF0YS5oZWFkZXJzKSB7XHJcbiAgICAgICAgb2JqW2gudGl0bGVdID0gZC5kYXRhW2guZGF0YVByb3BlcnR5XTtcclxuICAgICAgfVxyXG4gICAgICBkYXRhUm93cy5wdXNoKG9iaik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmaWxlVHlwZSA9ICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldDtjaGFyc2V0PVVURi04JztcclxuICAgIGNvbnN0IGZpbGVFeHRlbnNpb24gPSAnLnhsc3gnO1xyXG4gICAgY29uc3Qgd3M6IFhMU1guV29ya1NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KGRhdGFSb3dzKTtcclxuICAgIGNvbnN0IHdiOiBYTFNYLldvcmtCb29rID0geyBTaGVldHM6IHsgZGF0YTogd3MgfSwgU2hlZXROYW1lczogWydkYXRhJ10gfTtcclxuICAgIGNvbnN0IGV4Y2VsQnVmZmVyOiBhbnkgPSBYTFNYLndyaXRlKHdiLCB7IGJvb2tUeXBlOiAneGxzeCcsIHR5cGU6ICdhcnJheScgfSk7XHJcbiAgICBjb25zdCBkYXRhOiBCbG9iID0gbmV3IEJsb2IoW2V4Y2VsQnVmZmVyXSwgeyB0eXBlOiBmaWxlVHlwZSB9KTtcclxuICAgIEZpbGVTYXZlci5zYXZlQXMoZGF0YSwgdGhpcy50YWJsZURhdGEuY29uZmlnLmV4Y2VsRXhwb3J0RmlsZU5hbWUgKyBmaWxlRXh0ZW5zaW9uKTtcclxuICB9XHJcblxyXG4gIHNvcnRDb2x1bW4oaGVhZGVyOiBUcmVlVGFibGVIZWFkZXJPYmplY3QpIHtcclxuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGhlYWRlci5kYXRhUHJvcGVydHk7XHJcbiAgICBpZiAodGhpcy50YWJsZURhdGEuY29uZmlnLnNvcnRlZENvbHVtbltwcm9wZXJ0eU5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEuY29uZmlnLnNvcnRlZENvbHVtbiA9IHt9O1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5jb25maWcuc29ydGVkQ29sdW1uW3Byb3BlcnR5TmFtZV0gPSAnREVTQyc7XHJcbiAgICAgIHRoaXMuc29ydERlc2NlbmQoaGVhZGVyKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50YWJsZURhdGEuY29uZmlnLnNvcnRlZENvbHVtbltwcm9wZXJ0eU5hbWVdID09PSAnREVTQycpIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEuY29uZmlnLnNvcnRlZENvbHVtbltwcm9wZXJ0eU5hbWVdID0gJ0FTQyc7XHJcbiAgICAgIHRoaXMuc29ydEFzY2VuZChoZWFkZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVsZXRlIHRoaXMudGFibGVEYXRhLmNvbmZpZy5zb3J0ZWRDb2x1bW5bcHJvcGVydHlOYW1lXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNvcnRBc2NlbmQoaGVhZGVyOiBUcmVlVGFibGVIZWFkZXJPYmplY3QpIHtcclxuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGhlYWRlci5kYXRhUHJvcGVydHk7XHJcbiAgICBpZiAoaGVhZGVyLmRhdGFUeXBlID09PSBUdERhdGFUeXBlLk5VTUJFUikge1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5kYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAocGFyc2VGbG9hdChhLmRhdGFbcHJvcGVydHlOYW1lXSkgPCBwYXJzZUZsb2F0KGIuZGF0YVtwcm9wZXJ0eU5hbWVdKSkge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyc2VGbG9hdChhLmRhdGFbcHJvcGVydHlOYW1lXSkgPiBwYXJzZUZsb2F0KGIuZGF0YVtwcm9wZXJ0eU5hbWVdKSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoaGVhZGVyLmRhdGFUeXBlID09PSBUdERhdGFUeXBlLkRBVEUpIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEuZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vbWVudChhLmRhdGFbcHJvcGVydHlOYW1lXSkudG9EYXRlKCkuZ2V0VGltZSgpIDwgbW9tZW50KGIuZGF0YVtwcm9wZXJ0eU5hbWVdKS50b0RhdGUoKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vbWVudChhLmRhdGFbcHJvcGVydHlOYW1lXSkudG9EYXRlKCkuZ2V0VGltZSgpID4gbW9tZW50KGIuZGF0YVtwcm9wZXJ0eU5hbWVdKS50b0RhdGUoKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5kYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAoYS5kYXRhW3Byb3BlcnR5TmFtZV0gPCBiLmRhdGFbcHJvcGVydHlOYW1lXSkge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYS5kYXRhW3Byb3BlcnR5TmFtZV0gPiBiLmRhdGFbcHJvcGVydHlOYW1lXSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0UGFnZURhdGEodGhpcy50YWJsZURhdGEucGFnZSk7XHJcbiAgfVxyXG5cclxuICBzb3J0RGVzY2VuZChoZWFkZXI6IFRyZWVUYWJsZUhlYWRlck9iamVjdCkge1xyXG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gaGVhZGVyLmRhdGFQcm9wZXJ0eTtcclxuICAgIGlmIChoZWFkZXIuZGF0YVR5cGUgPT09IFR0RGF0YVR5cGUuTlVNQkVSKSB7XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLmRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChwYXJzZUZsb2F0KGEuZGF0YVtwcm9wZXJ0eU5hbWVdKSA8IHBhcnNlRmxvYXQoYi5kYXRhW3Byb3BlcnR5TmFtZV0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcnNlRmxvYXQoYS5kYXRhW3Byb3BlcnR5TmFtZV0pID4gcGFyc2VGbG9hdChiLmRhdGFbcHJvcGVydHlOYW1lXSkpIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChoZWFkZXIuZGF0YVR5cGUgPT09IFR0RGF0YVR5cGUuREFURSkge1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YS5kYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAobW9tZW50KGEuZGF0YVtwcm9wZXJ0eU5hbWVdKS50b0RhdGUoKS5nZXRUaW1lKCkgPCBtb21lbnQoYi5kYXRhW3Byb3BlcnR5TmFtZV0pLnRvRGF0ZSgpLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb21lbnQoYS5kYXRhW3Byb3BlcnR5TmFtZV0pLnRvRGF0ZSgpLmdldFRpbWUoKSA+IG1vbWVudChiLmRhdGFbcHJvcGVydHlOYW1lXSkudG9EYXRlKCkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGFibGVEYXRhLmRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChhLmRhdGFbcHJvcGVydHlOYW1lXSA8IGIuZGF0YVtwcm9wZXJ0eU5hbWVdKSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGEuZGF0YVtwcm9wZXJ0eU5hbWVdID4gYi5kYXRhW3Byb3BlcnR5TmFtZV0pIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRQYWdlRGF0YSh0aGlzLnRhYmxlRGF0YS5wYWdlKTtcclxuICB9XHJcblxyXG4gIHNlYXJjaCgpIHtcclxuICAgIHRoaXMuc2V0UGFnZURhdGEoMSk7XHJcbiAgfVxyXG5cclxuICBwYWdlU2l6ZUNoYW5nZWQoKSB7XHJcbiAgICB0aGlzLnNldFBhZ2VEYXRhKDEpO1xyXG4gIH1cclxuXHJcbiAgZXhjZWxFeHBvcnRDbGlja2VkKCkge1xyXG4gICAgaWYgKHRoaXMudGFibGVEYXRhLnNlcnZlckNvbmZpZyAhPT0gdW5kZWZpbmVkICYmIHRoaXMudGFibGVEYXRhLnNlcnZlckNvbmZpZyAhPT0gbnVsbCAmJiB0aGlzLnRhYmxlRGF0YS5zZXJ2ZXJDb25maWcuZXhjZWxFeHBvcnRVcmwgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRhYmxlRGF0YS5zZXJ2ZXJDb25maWcuZXhjZWxFeHBvcnRVcmwgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEubG9hZEV4Y2VsRGF0YSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5leHBvcnRFeGNlbExvY2FsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQYWdlVG8oKSB7XHJcbiAgICBsZXQgdG8gPSB0aGlzLnRhYmxlRGF0YS5wYWdlU2l6ZSAqIHRoaXMudGFibGVEYXRhLnBhZ2U7XHJcbiAgICBpZiAodG8gPiB0aGlzLnRhYmxlRGF0YS5maWx0ZXJlZFJvd3NDb3VudCkge1xyXG4gICAgICB0byA9IHRoaXMudGFibGVEYXRhLmZpbHRlcmVkUm93c0NvdW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvO1xyXG4gIH1cclxuXHJcbiAgaXNBbGxSb3dzU2VsZWN0ZWQoaGVhZGVyOiBUcmVlVGFibGVIZWFkZXJPYmplY3QpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnRhYmxlRGF0YS5kYXRhLmZpbHRlcih2ID0+IHYuc2VsZWN0ZWQpLmxlbmd0aCA9PT0gdGhpcy50YWJsZURhdGEuZGF0YS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTZWxlY3RBbGxSb3dzKGhlYWRlcjogVHJlZVRhYmxlSGVhZGVyT2JqZWN0KSB7XHJcbiAgICB0aGlzLmlzQWxsUm93c1NlbGVjdGVkKGhlYWRlcikgPyB0aGlzLmRlc2VsZWN0QWxsUm93cyhoZWFkZXIpIDogdGhpcy5zZWxlY3RBbGxSb3dzKGhlYWRlcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbGVjdEFsbFJvd3MoaGVhZGVyOiBUcmVlVGFibGVIZWFkZXJPYmplY3QpIHtcclxuICAgIHRoaXMudGFibGVEYXRhLmRhdGEgPSB0aGlzLnRhYmxlRGF0YS5kYXRhLm1hcCh2ID0+IHsgdi5zZWxlY3RlZCA9IHRydWU7IHJldHVybiB2OyB9KTtcclxuICAgIHRoaXMudXBkYXRlSG9zdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXNlbGVjdEFsbFJvd3MoaGVhZGVyOiBUcmVlVGFibGVIZWFkZXJPYmplY3QpIHtcclxuICAgIHRoaXMudGFibGVEYXRhLmRhdGEgPSB0aGlzLnRhYmxlRGF0YS5kYXRhLm1hcCh2ID0+IHsgdi5zZWxlY3RlZCA9IGZhbHNlOyByZXR1cm4gdjsgfSk7XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3QoKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNlbGVjdFJvdyhyb3c6IFRyZWVUYWJsZVJvdykge1xyXG4gICAgcm93LnNlbGVjdGVkID0gIXJvdy5zZWxlY3RlZDtcclxuICAgIHRoaXMudXBkYXRlSG9zdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Um93Q2xhc3Mocm93OiBUcmVlVGFibGVSb3cpIHtcclxuICAgIGxldCBjbGFzc2VzID0geyAnZXhwYW5kZWQtcm93Jzogcm93LmV4cGFuZGVkLCAnY29sbGFwc2VkLXJvdyc6ICFyb3cuZXhwYW5kZWQsICdzZWxlY3RlZCc6ICdyb3cuc2VsZWN0ZWQnLCAndW5zZWxlY3RlZCc6ICchcm93LnNlbGVjdGVkJyB9O1xyXG4gICAgZm9yIChjb25zdCBjbHMgb2Ygcm93LmNsYXNzZXMpIHtcclxuICAgICAgY2xhc3Nlc1tjbHNdID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRSb3dzKCkge1xyXG4gICAgY29uc3Qgcm93cyA9IFsuLi50aGlzLnRhYmxlRGF0YS5kYXRhLmZpbHRlcih2ID0+IHtcclxuICAgICAgaWYgKHYuc2VsZWN0ZWQpIHtcclxuICAgICAgICByZXR1cm4gdi5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KV07XHJcbiAgICByZXR1cm4gcm93cy5tYXAodiA9PiB2LmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgY2hpbGRSb3dTZWxlY3Rpb25DaGFuZ2VkKGRhdGE6IFRyZWVUYWJsZVJvd1tdKSB7XHJcbiAgICBpZiAodGhpcy5yb3dTZWxlY3Rpb25DaGFuZ2VkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yb3dTZWxlY3Rpb25DaGFuZ2VkICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMucm93U2VsZWN0aW9uQ2hhbmdlZC5lbWl0KGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlSG9zdCgpIHtcclxuICAgIGlmICh0aGlzLnJvd1NlbGVjdGlvbkNoYW5nZWQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnJvd1NlbGVjdGlvbkNoYW5nZWQgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5yb3dTZWxlY3Rpb25DaGFuZ2VkLmVtaXQodGhpcy5nZXRTZWxlY3RlZFJvd3MoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dFJvd1NlbGVjdENoYW5nZWRJbnRlcm5hbChldmVudDogYW55LCByb3dEYXRhOiBhbnksIGhlYWRlcktleTogc3RyaW5nLCB2YWx1ZTogYW55LCBsZXZlbDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmlucHV0Um93U2VsZWN0Q2hhbmdlZC5lbWl0KHsgZXZlbnQsIHJvd0RhdGEsIGhlYWRlcktleSwgdmFsdWUsIGxldmVsIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRSb3dUZXh0Q2hhbmdlZEludGVybmFsKGV2ZW50OiBhbnksIHJvd0RhdGE6IGFueSwgaGVhZGVyS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGxldmVsOiBudW1iZXIpIHtcclxuICAgIHRoaXMuaW5wdXRSb3dUZXh0Q2hhbmdlZC5lbWl0KHsgZXZlbnQsIHJvd0RhdGEsIGhlYWRlcktleSwgdmFsdWUsIGxldmVsIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRSb3dTZWxlY3RDaGFuZ2VkQ2hpbGQoZGF0YTogeyBldmVudDogYW55LCByb3dEYXRhOiBhbnksIGhlYWRlcktleTogc3RyaW5nLCB2YWx1ZTogYW55LCBsZXZlbDogbnVtYmVyIH0pIHtcclxuICAgIHRoaXMuaW5wdXRSb3dTZWxlY3RDaGFuZ2VkLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBpbnB1dFJvd1RleHRDaGFuZ2VkQ2hpbGQoZGF0YTogeyBldmVudDogYW55LCByb3dEYXRhOiBhbnksIGhlYWRlcktleTogc3RyaW5nLCB2YWx1ZTogYW55LCBsZXZlbDogbnVtYmVyIH0pIHtcclxuICAgIHRoaXMuaW5wdXRSb3dUZXh0Q2hhbmdlZC5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19