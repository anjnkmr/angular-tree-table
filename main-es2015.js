(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./dist/angular-tree-table/fesm2015/angular-tree-table.js":
/*!****************************************************************!*\
  !*** ./dist/angular-tree-table/fesm2015/angular-tree-table.js ***!
  \****************************************************************/
/*! exports provided: AngularTreeTableComponent, AngularTreeTableModule, AngularTreeTableService, TreeTableData, TreeTableHeaderObject, TreeTableRow, TreeTableRowAction, TreeTableRowActionType, TtDataType, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularTreeTableComponent", function() { return AngularTreeTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularTreeTableModule", function() { return AngularTreeTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularTreeTableService", function() { return AngularTreeTableService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableData", function() { return TreeTableData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableHeaderObject", function() { return TreeTableHeaderObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableRow", function() { return TreeTableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableRowAction", function() { return TreeTableRowAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableRowActionType", function() { return TreeTableRowActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TtDataType", function() { return TtDataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TreeTableDataConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return TreeTableDataServerConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularTreeTableService {
    constructor() { }
}
AngularTreeTableService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AngularTreeTableService.ctorParameters = () => [];
/** @nocollapse */ AngularTreeTableService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AngularTreeTableService_Factory() { return new AngularTreeTableService(); }, token: AngularTreeTableService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeTableRow {
    /**
     * @param {?} id
     * @param {?} data
     * @param {?} expandable
     * @param {?} children
     */
    constructor(id, data, expandable, children) {
        this.id = null;
        this.data = {};
        this.expandable = false;
        this.children = null;
        this.expanded = false;
        // Clickables Context for Actions
        this.clickablesContext = null;
        // Clickable Properties and Actions
        this.clickables = {};
        this.styles = {};
        this.classes = [];
        // Actions Header Buttons
        this.actions = [];
        // Is row selected
        this.selected = false;
        this.options = [];
        this.id = id;
        this.data = data;
        this.expandable = expandable;
        this.children = children;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeTableDataConfig {
    constructor() {
        /**
         * Context should be Host component instance of tree table
         *
         * Default value is `null`
         */
        this.context = null;
        /**
         * This is two dimensional array, each subarray should contain 2 or less strings, and there is no limit for subarrays count
         *
         * Default value is `[]`
         */
        this.extraInfos = [];
        /**
         * This is used to show/ hide Table Headers
         *
         * Default value is `true` - Shows Table Headers
         */
        this.showTableHeaders = true;
        /**
         * Column Visibility will show the group of buttons on top of table, which will allow us to toggle the visibility of each column
         *
         * Default value is `false` - hidden
         */
        this.columnVisibility = false;
        /**
         * Same as Column Visibility but it shown as popover. It requires popper js library to work
         *
         * Default value is `false` - hidden
         */
        this.columnVisibilityDropDown = false;
        /**
         * Enables seperate search field for each column under each table header
         *
         * Default value is `false` - Disabled
         */
        this.visibleColumnFiltersVisibility = false;
        /**
         * This is used to set the search value by default based on `dataProperty`
         *
         * Ex: {country: 'India'}
         *
         * Default value is `{}`
         */
        this.visibleColumnFilters = {};
        /**
         * Class name for table tag
         *
         * Default value is `stacktable table-bordered large-only table table-sm`
         */
        this.fullClassName = 'stacktable table-bordered large-only table table-sm';
        /**
         * Class name for th tag which is sorted in `ascending` order
         *
         * Default value is `col-sort col-sort-asc`
         */
        this.sortAscClassName = 'col-sort col-sort-asc';
        /**
         * Class name for th tag which is sorted in `descending` order
         *
         * Default value is `col-sort col-sort-desc`
         */
        this.sortDescClassName = 'col-sort col-sort-desc';
        /**
         * Class name for th tag which is `not sorted`
         *
         * Default value is `col-sort col-sort-nothing`
         */
        this.sortNothingClassName = 'col-sort col-sort-nothing';
        /**
         * Extra class name for table tag
         *
         * Default value is `null`
         */
        this.customClassName = null;
        /**
         * This option will show the Expand Row Button on each row, if child exists
         *
         * Default value is `false`
         */
        this.showExpandArrows = false;
        /**
         * This option will show the Expand Row Button on table header, which will expand/ collapse all rows with children at a time
         *
         * Default value is `false`
         */
        this.showExpandAllArrows = false;
        /**
         * If this option is `true` then it will expand all the rows irrespective of child table has rows or not
         *
         * Default value is `false` - Only expand rows with child which has rows
         */
        this.showExpandAllEmptyChildren = false;
        /**
         * This is used set the default sorted column and order based on dataProperty
         *
         * Ex: {firstName: 'asc'}
         *
         * Default value is `{}`
         */
        this.sortedColumn = {};
        /**
         * This will shows the page length dropdown, which will used to render the no of rows on each page
         *
         * Default value is `true`
         */
        this.showPageLengthDropdown = true;
        /**
         * This will used to customize page length dropdown options
         *
         * Default value is `[10, 25, 50, 100]`
         */
        this.pageSizes = [10, 25, 50, 100];
        /**
         * This is for internal pupose of the `angular-tree-table`. Don't use it.
         *
         * Default value is `0`
         */
        this.level = 0;
        /**
         * Column Filters are used to send the column wise search keywords to server. Don't use it. It will be used by `angular-tree-table` itself.
         */
        this.columnFilters = {};
        /**
         * Row clickables are allows you to configure the row detail clicking actions with a callback method based on dataProperty
         *
         * Default value is `{}`
         */
        this.rowClickables = {};
        /**
         * This should be instance of component or the instance of class where the callbacks of rowClickables implemented
         *
         * Default value is `null`
         */
        this.rowClickablesContext = null;
        /**
         * This is used to show/ hide the common search box
         *
         * Default value is `true`
         */
        this.commonSearch = true;
        /**
         * This is used to show/ hide Export Excel Button
         *
         * Default value is `false`
         */
        this.excelExportButton = false;
        /**
         * This is used to configure the ExcelExport file name
         *
         * Default value is `ExportFile`
         */
        this.excelExportFileName = 'ExportFile';
        /**
         * This is used to configure the Excel Export Button text
         *
         * Default value is `Excel Export`
         */
        this.excelExportButtonText = 'Excel Export';
        /**
         * It is WIP, Which will be used to export to excel file along with all children of rows
         *
         * Default value is `true`
         */
        this.excelExportAllChildren = true;
        /**
         * It is WIP, Which will be used to export to excel file along with all children of rows
         *
         * Default value is `true`
         */
        this.excelExportOnlyExpanded = false;
        /**
         * It is WIP, which will used to configure the callbacks for events of the `angular-tree-table`
         */
        this.events = new TreeTableDataEvents();
    }
}
if (false) {}
class TreeTableDataEvents {
    constructor() {
        this.shouldRowExpand = null;
        this.rowExpanded = null;
        this.shouldRowCollapse = null;
        this.rowCollapsed = null;
    }
}
if (false) {}
class TreeTableDataServerConfig {
    constructor() {
        /**
         * `url` to invoke for the data from server
         *
         * Ex: `https://restapisample.com/entities`
         *
         * Default value is `null`
         */
        this.url = null;
        /**
         * `url` to invoke for the data from server as a file
         *
         * Ex: `https://restapisample.com/entities/export`
         *
         * Default value is `null`
         */
        this.excelExportUrl = null;
        /**
         * HTTP Method for `url` and `excelExportUrl`
         *
         * Default value is `null`
         */
        this.method = null;
        /**
         * `angular-tree-table` handles all the events, page change, next page, prev page, page length change through api call and using different parameter. These are used to customize those parameter keys as per the server side requirements
         *
         * Default values are `page, limit, sort, search, colSearch, colFilters, pageToken`
         */
        this.paramNames = new TreeTableDataServerConfigParamMapping();
        /**
         * This is used to configure the property key of array in the api response
         *
         * Default value is `rows`
         */
        this.rowsKey = 'rows';
        /**
         * This is used to configure the property key of totalRowsCount in the api response
         *
         * Default value is `totalRowsCount`
         */
        this.totalRowsCountKey = 'totalRowsCount';
        /**
         * This is used to configure the property key of filteredRowsCount in the api response
         *
         * Default value is `filteredRowCount`
         */
        this.filteredRowsCountKey = 'filteredRowsCount';
        /**
         * This is used to configure the unique key in the each row of the response
         *
         * Default value is `null`
         */
        this.rowUniqueKey = null;
    }
}
if (false) {}
class TreeTableDataServerConfigParamMapping {
    constructor() {
        /**
         * Page number of the page will send under key configured here
         *
         * Default value is `page`
         */
        this.page = 'page';
        /**
         * Limit of the page will send under key configured here
         *
         * Default value is `limit`
         */
        this.limit = 'limit';
        /**
         * Sort of the table of each column will send under key configured here
         *
         * Default value is `sort`
         */
        this.sort = 'sort';
        /**
         * Search keyword wil be send under key configured here
         *
         * Default value is `search`
         */
        this.search = 'search';
        /**
         * Search keyword of each column will be send under key configured here
         *
         * Default value is `colSearch`
         */
        this.colSearch = 'colSearch';
        /**
         * Filter of each column will be send under key configured here
         *
         * Default value is `colFilters`
         */
        this.colFilters = 'colFilters';
        /**
         * Not using right now
         *
         * Default value is `pageToken`
         */
        this.pageToken = 'pageToken';
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeTableData {
    /**
     * @param {?=} config
     * @param {?=} serverConfig
     * @param {?=} http
     */
    constructor(config, serverConfig, http) {
        this.headers = [];
        this.data = [];
        this.isLoading = false;
        this.keyword = null;
        this.page = 1;
        this.pageSize = 10;
        this.lastParams = null;
        this.totalRowsCount = 0;
        this.filteredRowsCount = 0;
        this.splashMessageFlag = false;
        this.splashMessageContent = '';
        this.tokens = [null];
        this.isAllRowsExpanded = false;
        this.serverConfig = new TreeTableDataServerConfig();
        this.config = new TreeTableDataConfig();
        this.loadCounter = 0;
        this.http = null;
        this.http = http;
        if (serverConfig !== undefined && serverConfig !== null) {
            if (serverConfig.paramNames === undefined || serverConfig.paramNames === null) {
                serverConfig.paramNames = this.serverConfig.paramNames;
            }
            if (serverConfig.rowsKey === undefined || serverConfig.rowsKey === null) {
                serverConfig.rowsKey = this.serverConfig.rowsKey;
            }
            if (serverConfig.rowUniqueKey === undefined || serverConfig.rowUniqueKey === null) {
                serverConfig.rowUniqueKey = this.serverConfig.rowUniqueKey;
            }
            this.serverConfig = serverConfig;
            this.loadData();
        }
        else {
            // console.log('No Server Properties');
        }
        if (config !== undefined && config !== null) {
            if (config.extraInfos !== undefined && config.extraInfos !== null) {
                this.config.extraInfos = config.extraInfos;
            }
            if (config.context !== undefined && config.context !== null) {
                this.config.context = config.context;
            }
            if (config.showTableHeaders !== undefined && config.showTableHeaders !== null) {
                this.config.showTableHeaders = config.showTableHeaders;
            }
            if (config.showExpandArrows !== undefined && config.showExpandArrows !== null) {
                this.config.showExpandArrows = config.showExpandArrows;
            }
            if (config.events === undefined || config.events === null) {
                config.events = this.config.events;
            }
            else {
                if (config.events.rowExpanded !== undefined
                    && config.events.rowExpanded !== null) {
                    this.config.events.rowExpanded = config.events.rowExpanded;
                }
                if (config.events.rowCollapsed !== undefined
                    && config.events.rowCollapsed !== null) {
                    this.config.events.rowCollapsed = config.events.rowCollapsed;
                }
            }
            if (config.fullClassName !== undefined && config.fullClassName !== null) {
                this.config.fullClassName = config.fullClassName;
            }
            if (config.excelExportFileName !== undefined && config.excelExportFileName !== null) {
                this.config.excelExportFileName = config.excelExportFileName;
            }
            if (config.excelExportButtonText !== undefined && config.excelExportButtonText !== null) {
                this.config.excelExportButtonText = config.excelExportButtonText;
            }
            if (config.sortAscClassName !== undefined && config.sortAscClassName !== null) {
                this.config.sortAscClassName = config.sortAscClassName;
            }
            if (config.sortDescClassName !== undefined && config.sortDescClassName !== null) {
                this.config.sortDescClassName = config.sortDescClassName;
            }
            if (config.sortNothingClassName !== undefined && config.sortNothingClassName !== null) {
                this.config.sortNothingClassName = config.sortNothingClassName;
            }
            if (config.customClassName !== undefined && config.customClassName !== null) {
                this.config.customClassName = config.customClassName;
            }
            if (config.showExpandAllArrows !== undefined && config.showExpandAllArrows !== null) {
                this.config.showExpandAllArrows = config.showExpandAllArrows;
            }
            if (config.showExpandAllEmptyChildren !== undefined && config.showExpandAllEmptyChildren !== null) {
                this.config.showExpandAllEmptyChildren = config.showExpandAllEmptyChildren;
            }
            if (config.showPageLengthDropdown !== undefined && config.showPageLengthDropdown !== null) {
                this.config.showPageLengthDropdown = config.showPageLengthDropdown;
            }
            if (config.columnVisibility !== undefined && config.columnVisibility !== null) {
                this.config.columnVisibility = config.columnVisibility;
            }
            if (config.columnVisibilityDropDown !== undefined && config.columnVisibilityDropDown !== null) {
                this.config.columnVisibilityDropDown = config.columnVisibilityDropDown;
            }
            if (config.visibleColumnFiltersVisibility !== undefined && config.visibleColumnFiltersVisibility !== null) {
                this.config.visibleColumnFiltersVisibility = config.visibleColumnFiltersVisibility;
            }
            if (config.sortedColumn !== undefined && config.sortedColumn !== null) {
                this.config.sortedColumn = config.sortedColumn;
            }
            if (config.level !== undefined && config.level !== null) {
                this.config.level = config.level;
            }
            if (config.commonSearch !== undefined && config.commonSearch !== null) {
                this.config.commonSearch = config.commonSearch;
            }
            if (config.columnFilters !== undefined && config.columnFilters !== null) {
                this.config.columnFilters = config.columnFilters;
            }
            if (config.pageSizes !== undefined && config.pageSizes !== null && config.pageSizes.length > 0) {
                this.config.pageSizes.splice(0, this.config.pageSizes.length);
                for (let p = 0; p < config.pageSizes.length; p++) {
                    if (config.pageSizes[p] > 0) {
                        this.config.pageSizes.push(config.pageSizes[p]);
                    }
                }
                // this.config.pageSizes = config.pageSizes;
            }
            if (config.visibleColumnFilters !== undefined && config.visibleColumnFilters !== null) {
                this.config.visibleColumnFilters = config.visibleColumnFilters;
            }
            if (config.rowClickablesContext !== undefined && config.rowClickablesContext !== null) {
                this.config.rowClickablesContext = config.rowClickablesContext;
            }
            if (config.rowClickables !== undefined && config.rowClickables !== null) {
                this.config.rowClickables = config.rowClickables;
            }
            if (config.commonSearch !== undefined && config.commonSearch !== null) {
                this.config.commonSearch = config.commonSearch;
            }
            if (config.excelExportButton !== undefined && config.excelExportButton !== null) {
                this.config.excelExportButton = config.excelExportButton;
            }
        }
        else {
            // console.log('No Properties');
        }
        // console.log('Properties', config);
    }
    /**
     * @return {?}
     */
    totalPagesCount() {
        /** @type {?} */
        const pages = this.filteredRowsCount / this.pageSize;
        return Math.ceil(pages);
    }
    /**
     * @return {?}
     */
    getParams() {
        /** @type {?} */
        const params = {};
        if (this.page - 1 >= 0) {
            if (this.tokens[this.page - 1] !== undefined && this.tokens[this.page - 1] !== null) {
                params[this.serverConfig.paramNames.pageToken] = this.tokens[this.page - 1];
            }
        }
        params[this.serverConfig.paramNames.page] = this.page;
        params[this.serverConfig.paramNames.search] = this.keyword;
        params[this.serverConfig.paramNames.limit] = this.pageSize;
        params[this.serverConfig.paramNames.colFilters] = JSON.stringify(this.config.columnFilters);
        params[this.serverConfig.paramNames.sort] = JSON.stringify(this.config.sortedColumn);
        /** @type {?} */
        const colSearchKeys = Object.keys(this.config.visibleColumnFilters);
        for (let key of colSearchKeys) {
            if (this.config.visibleColumnFilters[key] === null) {
                delete this.config.visibleColumnFilters[key];
            }
            if (this.config.visibleColumnFilters[key] === undefined) {
                delete this.config.visibleColumnFilters[key];
            }
            if (this.config.visibleColumnFilters[key] === '') {
                delete this.config.visibleColumnFilters[key];
            }
            if (this.config.visibleColumnFilters[key].trim() === '') {
                delete this.config.visibleColumnFilters[key];
            }
        }
        params[this.serverConfig.paramNames.colSearch] = JSON.stringify(this.config.visibleColumnFilters);
        return params;
    }
    /**
     * @param {?=} callback
     * @return {?}
     */
    loadExcelData(callback) {
        if (this.serverConfig.excelExportUrl === null) {
            console.warn('ExcelExportUrl not specified');
            return;
        }
        /** @type {?} */
        const params = this.getParams();
        // delete params[this.serverConfig.paramNames.limit];
        /** @type {?} */
        const dis = this;
        dis.isLoading = true;
        if (this.serverConfig.method === 'GET') {
            this.http.get(this.serverConfig.excelExportUrl, { params, responseType: 'blob' }).subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                dis.isLoading = false;
                /** @type {?} */
                const blob = new Blob([resp], { type: 'application/vnd.ms-excel' });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, 'Orders.xlsx');
            }));
        }
    }
    /**
     * @param {?=} callback
     * @return {?}
     */
    loadData(callback) {
        if (this.serverConfig.url === null) {
            console.warn('URL not specified');
            return;
        }
        /** @type {?} */
        const params = this.getParams();
        if (this.lastParams !== undefined && this.lastParams !== null) {
            if (this.lastParams === JSON.stringify(params)) {
                return;
            }
        }
        this.lastParams = JSON.stringify(params);
        /** @type {?} */
        const dis = this;
        dis.isLoading = true;
        dis.loadCounter++;
        if (this.serverConfig.method === 'GET') {
            this.http.get(this.serverConfig.url, { params }).subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            resp => {
                if (callback !== undefined && callback !== null) {
                    /** @type {?} */
                    const rows = [];
                    if (resp[this.serverConfig.rowsKey] === undefined || resp[this.serverConfig.rowsKey] === null) {
                        callback([]);
                        dis.loadCounter--;
                        if (dis.loadCounter <= 0) {
                            dis.isLoading = false;
                            dis.loadCounter = 0;
                        }
                    }
                    else {
                        this.totalRowsCount = resp[this.serverConfig.totalRowsCountKey];
                        this.filteredRowsCount = resp[this.serverConfig.filteredRowsCountKey];
                        for (const rawRow of resp[this.serverConfig.rowsKey]) {
                            /** @type {?} */
                            let uniqueVal = null;
                            if (this.serverConfig.rowUniqueKey === undefined || this.serverConfig.rowUniqueKey === null) {
                                uniqueVal = new Date().getTime();
                            }
                            else {
                                uniqueVal = rawRow[this.serverConfig.rowUniqueKey];
                            }
                            /** @type {?} */
                            const row = new TreeTableRow(uniqueVal, rawRow, false, undefined);
                            row.clickablesContext = this.config.rowClickablesContext;
                            row.clickables = this.config.rowClickables;
                            rows.push(row);
                        }
                        /** @type {?} */
                        const lastRawRow = resp[this.serverConfig.rowsKey][resp[this.serverConfig.rowsKey].length - 1];
                        if (lastRawRow !== undefined && lastRawRow !== null) {
                            if (this.serverConfig.rowUniqueKey !== undefined && this.serverConfig.rowUniqueKey !== null) {
                                this.tokens[this.page] = lastRawRow[this.serverConfig.rowUniqueKey];
                            }
                        }
                        callback(rows);
                        dis.loadCounter--;
                        if (dis.loadCounter <= 0) {
                            dis.isLoading = false;
                            dis.loadCounter = 0;
                        }
                    }
                }
                else {
                    dis.loadCounter--;
                    if (dis.loadCounter <= 0) {
                        dis.isLoading = false;
                        dis.loadCounter = 0;
                    }
                }
            }), (/**
             * @param {?} err
             * @return {?}
             */
            err => {
                dis.loadCounter--;
                if (dis.loadCounter <= 0) {
                    dis.isLoading = false;
                    dis.loadCounter = 0;
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    allRowsExpanded() {
        return false;
    }
    /**
     * @return {?}
     */
    allRowsCollapsed() {
        return false;
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    splashMessage(msg) {
        this.splashMessageContent = msg;
        this.splashMessageFlag = true;
        /** @type {?} */
        const dis = this;
        setTimeout((/**
         * @return {?}
         */
        () => {
            dis.splashMessageFlag = false;
        }), 2000);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const TtDataType = {
    NUMBER: 'NUMBER',
    TEXT: 'TEXT',
    DATE: 'DATE',
    ACTIONS: 'ACTIONS',
    SELECT: 'SELECT',
    INPUT_TEXT: 'INPUT_TEXT',
    INPUT_SELECT: 'INPUT_SELECT',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const TreeTableRowActionType = {
    BUTTON: 0, LINK: 1, TOGGLE_CHILD: 2, TOGGLE_SELECT: 3,
};
TreeTableRowActionType[TreeTableRowActionType.BUTTON] = 'BUTTON';
TreeTableRowActionType[TreeTableRowActionType.LINK] = 'LINK';
TreeTableRowActionType[TreeTableRowActionType.TOGGLE_CHILD] = 'TOGGLE_CHILD';
TreeTableRowActionType[TreeTableRowActionType.TOGGLE_SELECT] = 'TOGGLE_SELECT';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moment = moment__WEBPACK_IMPORTED_MODULE_1__;
class AngularTreeTableComponent {
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
        this.rowSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputRowSelectChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputRowTextChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(dataRows);
        /** @type {?} */
        const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
        /** @type {?} */
        const excelBuffer = Object(xlsx__WEBPACK_IMPORTED_MODULE_3__["write"])(wb, { bookType: 'xlsx', type: 'array' });
        /** @type {?} */
        const data = new Blob([excelBuffer], { type: fileType });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(data, this.tableData.config.excelExportFileName + fileExtension);
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'angular-tree-table',
                template: "<div class=\"tree-table\">\r\n  <div class=\"tree-table-loading\" [ngClass]=\"tableData.isLoading ? 'on' : 'off'\">\r\n    <div class=\"loader-msg\">\r\n      Loading...\r\n    </div>\r\n  </div>\r\n  <div class=\"action-container\">\r\n    <div class=\"search-section\" *ngIf=\"tableData.config.showPageLengthDropdown || tableData.config.commonSearch || tableData.config.excelExportButton\">\r\n      <div class=\"first-part\" *ngIf=\"tableData.config.showPageLengthDropdown\">\r\n        Show <select class=\"select-page-size form-control form-control-sm\" [(ngModel)]=\"tableData.pageSize\"\r\n          (change)=\"pageSizeChanged()\">\r\n          <option value=\"{{p}}\" *ngFor=\"let p of tableData.config.pageSizes\">{{p}}</option>\r\n        </select> Entries\r\n      </div>\r\n      <div class=\"second-part\">\r\n        <input *ngIf=\"tableData.config.commonSearch\" type=\"text\"\r\n          class=\"form-control form-control-sm text-center col-3 float-right\" [(ngModel)]=\"tableData.keyword\"\r\n          (keyup)=\"search()\" (change)=\"search()\" placeholder=\"Search\" />\r\n        <button *ngIf=\"tableData.config.excelExportButton\"\r\n          class=\"btn btn-sm btn-primary export excelExportButton float-right\" (click)=\"excelExportClicked()\">{{tableData.config.excelExportButtonText}}</button>\r\n        <div class=\"dropdown dropleft\" id=\"dropDownVisCon{{randomInstance}}\">\r\n          <button id=\"dropDownVis{{randomInstance}}\" *ngIf=\"tableData.config.columnVisibilityDropDown\"\r\n            class=\"btn btn-sm btn-secondary dropDownBtn v-elipses float-right dropdown-toggle\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">\u22EE</button>\r\n            <div class=\"dropDownBtn-data dropdown-menu\">\r\n              <button class=\"btnVis btn-sm btn\" *ngFor=\"let header of currentPageData.headers\"\r\n                [ngClass]=\"header.show ? 'active': ''\" (click)=\" header.show = !header.show;\">{{header.title}}</button>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"buttons-section\" *ngIf=\"tableData.config.columnVisibility\">\r\n      <div class=\"column-visibility\" *ngIf=\"tableData.config.columnVisibility\">\r\n        <button class=\"btnVis\" *ngFor=\"let header of currentPageData.headers\" [ngClass]=\"header.show ? 'active': ''\"\r\n          (click)=\"header.show = !header.show\">{{header.title}}</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"extraInfo-section\" *ngIf=\"tableData.config.extraInfos.length > 0\">\r\n      <div class=\"extraInfo\" [style.width]=\"extraInfoItemWidthPercent + '%'\" *ngFor=\"let exInfo of tableData.config.extraInfos\">\r\n        {{exInfo[0]}}: {{exInfo[1]}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <table [class]=\"className + ' ' + tableData.config.customClassName + ' ' + tableData.config.fullClassName\">\r\n    <thead class=\"ds2-table-element--head-row thead-sm\" *ngIf=\"tableData.config.showTableHeaders\">\r\n      <tr>\r\n        <th *ngIf=\"!tableData.config.showExpandAllArrows\" [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></th>\r\n        <th *ngIf=\"tableData.config.showExpandAllArrows\" [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\">\r\n          <button class=\"btn btn-secondary btn-sm collapsed-row-button\" (click)=\"expandAllRows()\" \r\n                      *ngIf=\"!tableData.isAllRowsExpanded\"></button>\r\n              <button class=\"btn btn-secondary btn-sm expanded-row-button\" (click)=\"collapseAllRows()\" \r\n                      *ngIf=\"tableData.isAllRowsExpanded\"></button>\r\n        </th>\r\n        <ng-container *ngFor=\"let header of currentPageData.headers\">\r\n          <th *ngIf=\"header.show && header.dataType !== 'SELECT'\" [ngClass]=\"header.style\" (click)=\"sortColumn(header)\">{{header.title}}\r\n            <i [ngClass]=\"tableData.config.sortAscClassName+' sort-right-align'\" *ngIf=\"tableData.config.sortedColumn[header.dataProperty] === 'ASC'\"></i>\r\n            <i [ngClass]=\"tableData.config.sortDescClassName+' sort-right-align'\" *ngIf=\"tableData.config.sortedColumn[header.dataProperty] === 'DESC'\"></i>\r\n            <i [ngClass]=\"tableData.config.sortNothingClassName+' sort-right-align'\" *ngIf=\"tableData.config.sortedColumn[header.dataProperty] !== 'DESC' && tableData.config.sortedColumn[header.dataProperty] !== 'ASC'\"></i>\r\n          </th>\r\n          <th *ngIf=\"header.show && header.dataType === 'SELECT'\" [ngClass]=\"header.style\" (click)=\"toggleSelectAllRows(header)\">\r\n            <input type=\"checkbox\" class=\"header-check-box select-all\" [checked]=\"isAllRowsSelected(header) ? 'checked' : ''\"/> {{header.title}}\r\n          </th>\r\n        </ng-container>\r\n      </tr>\r\n      <tr *ngIf=\"tableData.config.visibleColumnFiltersVisibility\">\r\n        <th [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></th>\r\n        <ng-container *ngFor=\"let header of currentPageData.headers\">\r\n          <th *ngIf=\"header.show\">\r\n            <input type=\"text\" class=\"form-control form-control-sm text-center\" placeholder=\"{{header.title}}\"\r\n              (change)=\"columnSearchChanged(header.dataProperty)\" (keyup)=\"columnSearchChanged(header.dataProperty)\"\r\n              [(ngModel)]=\"tableData.config.visibleColumnFilters[header.dataProperty]\"\r\n              [disabled]=\"!header.enableColumnSearch || header.dataType === 'SELECT'\" [name]=\"'filter_'+header.dataProperty\" />\r\n          </th>\r\n        </ng-container>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngIf=\"currentPageData.data.length === 0\">\r\n        <tr *ngIf=\"tableData.isLoading\">\r\n          <td [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n          <td [attr.colspan]=\"currentPageData.headers.length + 1\" style=\"text-align: center;\">\r\n            Loading...\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"!tableData.isLoading\">\r\n          <td [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n          <td [attr.colspan]=\"currentPageData.headers.length + 1\" style=\"text-align: center;\">\r\n            No records found\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n      <ng-container *ngFor=\"let row of currentPageData.data; let indi = index;\">\r\n        <ng-container *ngIf=\"row !== undefined\">\r\n          <tr [ngClass]=\"getRowClass(row)\">\r\n            <td *ngIf=\"!row.expandable\" [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\"></td>\r\n            <td *ngIf=\"row.expandable\" [ngClass]=\"tableData.config.showExpandArrows ? 'used' : 'not-used'\">\r\n              <button class=\"btn btn-secondary btn-sm collapsed-row-button\" (click)=\"expandRow(row)\" \r\n                      *ngIf=\"!row.expanded\"></button>\r\n              <button class=\"btn btn-secondary btn-sm expanded-row-button\" (click)=\"collapseRow(row)\" \r\n                      *ngIf=\"row.expanded\"></button>\r\n            </td>\r\n            <ng-container *ngFor=\"let header of currentPageData.headers\">\r\n              <td *ngIf=\"header.show\" [style]=\"row.styles[header.dataProperty]\"\r\n                [ngClass]=\"row.classes[header.dataProperty]\">\r\n                <ng-container *ngIf=\"header.dataType === 'ACTIONS'\">\r\n                  <button class=\"tt-row-action  btn-xs btn btn-default\" *ngFor=\"let action of row.actions\"\r\n                    [ngClass]=\"action.classes\" (click)=\"rowAction(row, action)\" [title]=\"action.title\">\r\n                    {{action.label}}\r\n                  </button>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType === 'SELECT'\">\r\n                  <input type=\"checkbox\" class=\"header-check-box select-one\" \r\n                         [checked]=\"row.selected ? 'checked' : ''\" \r\n                         (change)=\"toggleSelectRow(row)\"/>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType === 'INPUT_TEXT'\">\r\n                  <input type=\"text\" class=\"header-input-text tt-input-tag\" [(ngModel)]=\"row.data[header.dataProperty]\" [name]=\"indi + '_' + header.dataProperty\" (change)=\"inputRowTextChangedInternal($event, row.data, header.dataProperty, row.data[header.dataProperty], tableData.config.level)\"/>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType === 'INPUT_SELECT'\">\r\n                  <select class=\"header-input-select tt-select-tag\" [(ngModel)]=\"row.data[header.dataProperty]\" [name]=\"indi + '_' + header.dataProperty\" (change)=\"inputRowSelectChangedInternal($event, row.data, header.dataProperty, row.data[header.dataProperty], tableData.config.level)\">\r\n                    <ng-container *ngIf=\"row.options !== undefined && row.options !== null\">\r\n                      <option [value]=\"opt.value\" *ngFor=\"let opt of row.options\">{{opt.displayText}}</option>\r\n                    </ng-container>\r\n                  </select>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"header.dataType !== 'ACTIONS' && header.dataType !== 'SELECT'\">\r\n                  <ng-container *ngIf=\"row.clickables[header.dataProperty] !== undefined\">\r\n                    <button class=\"popup-link-button\"\r\n                      (click)=\"clickableClicked(row, header.dataProperty)\">{{row.data[header.dataProperty]}}</button>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"row.clickables[header.dataProperty] === undefined && header.dataType !== 'INPUT_TEXT' && header.dataType !== 'INPUT_SELECT'\">\r\n                    {{row.data[header.dataProperty]}}\r\n                  </ng-container>\r\n                </ng-container>\r\n              </td>\r\n            </ng-container>\r\n          </tr>\r\n          <tr *ngIf=\"row.expanded\" [ngClass]=\"row.expanded ? 'expanded-row-content' : 'collapsed-row-content'\">\r\n            <td style=\"width: 10px;\"></td>\r\n            <td [colSpan]=\"currentPageData.headers.length\">\r\n              <angular-tree-table (inputRowSelectChanged)=\"inputRowSelectChangedChild($event)\" (inputRowTextChanged)=\"inputRowTextChangedChild($event)\" (rowSelectionChanged)=\"childRowSelectionChanged($event)\" [tableData]=\"row.children\"></angular-tree-table>\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"table-bottom\">\r\n    <div class=\"page-number-status\">\r\n      Showing {{(tableData.pageSize * (tableData.page - 1)) + 1}} to {{getPageTo()}} of\r\n      <ng-container *ngIf=\"tableData.filteredRowsCount != tableData.totalRowsCount\">\r\n        {{tableData.filteredRowsCount}} rows filtered on {{tableData.totalRowsCount}}\r\n      </ng-container>\r\n      <ng-container *ngIf=\"tableData.filteredRowsCount === tableData.totalRowsCount\">\r\n        {{tableData.filteredRowsCount}}\r\n      </ng-container>\r\n      rows\r\n    </div>\r\n    <div class=\"pagination-buttons\" *ngIf=\"tableData.totalRowsCount > tableData.pageSize\">\r\n      <div [class]=\"tableData.splashMessageFlag ? 'splash-message show' : 'splash-message hide'\">\r\n        <div class=\"message-content\">{{tableData.splashMessageContent}}</div>\r\n      </div>\r\n      <div class=\"btn btnGroup btn-group\">\r\n        <button class=\"btn big\" [class]=\"tableData.page === 1 ? 'btn big btn-secondary ' : 'btn big btn-secondary '\"\r\n          (click)=\"changePage(1)\">First</button>\r\n        <button class=\"btn\" [class]=\"'btn btn-secondary'\" (click)=\"changePage(tableData.page - 1)\">&lt;</button>\r\n        <ng-container *ngFor=\"let pageNumber of pageNumbers()\">\r\n          <button class=\"btn\" [class]=\"tableData.page === pageNumber ? 'btn btn-primary ' : 'btn btn-secondary '\"\r\n            (click)=\"changePage(pageNumber)\">{{pageNumber}}</button>\r\n        </ng-container>\r\n        <button class=\"btn\" [class]=\"'btn btn-secondary'\" (click)=\"changePage(tableData.page + 1)\">&gt;</button>\r\n        <button class=\"btn big\"\r\n          [class]=\"tableData.page === tableData.totalPagesCount() ? 'btn big btn-secondary ' : 'btn big btn-secondary '\"\r\n          (click)=\"changePage(tableData.totalPagesCount())\">Last</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [":host .dropDownBtn-data{overflow:visible;padding:5px}:host .tree-table-loading{width:100%;background-color:rgba(0,0,0,.5);overflow:auto;position:absolute}:host .tree-table-loading .loader-msg{color:#fff;font-weight:700;text-align:center;width:100%;height:100px;position:absolute;top:calc(50% - 50px)}:host .tree-table-loading.on{height:100%;z-index:1000}:host .tree-table-loading.off{height:0%}:host .tree-table{margin-top:10px;margin-bottom:10px;overflow:auto;position:relative}:host .tree-table .select-page-size{display:inline-block;width:auto}:host .tree-table .extraInfo-section .extraInfo{float:left}:host .tree-table .column-visibility{text-align:center}:host .tree-table .column-visibility .btnVis,:host .tree-table .dropDownBtn-data .btnVis{border-style:none;padding:7px;border-radius:2px;margin-right:5px;margin-bottom:5px}:host .tree-table .column-visibility .btnVis.active,:host .tree-table .column-visibility .btnVis.hover,:host .tree-table .column-visibility .btnVis:active,:host .tree-table .column-visibility .btnVis:hover,:host .tree-table .dropDownBtn-data .btnVis.active,:host .tree-table .dropDownBtn-data .btnVis.hover,:host .tree-table .dropDownBtn-data .btnVis:active,:host .tree-table .dropDownBtn-data .btnVis:hover{background-color:#666;color:#fff}:host .tree-table .action-container .btn{margin-right:5px}:host .tree-table .action-container .search-section{overflow:visible;margin-top:10px;margin-bottom:5px}:host .tree-table .action-container .search-section .first-part{width:40%;text-align:left;display:inline-block}:host .tree-table .action-container .search-section .second-part{width:60%;display:inline-block}:host .tree-table .table-bottom{overflow:auto}:host .tree-table .table-bottom .page-number-status{float:left;overflow:auto;padding-top:.375rem}:host .tree-table .table-bottom .btnGroup{float:right;padding-right:0;padding-top:0;padding-bottom:0}:host .tree-table .table-bottom .pagination-buttons{overflow:auto;position:relative}:host .tree-table .table-bottom .pagination-buttons .splash-message{float:right;position:absolute;right:0;z-index:9999;background:#ececec;border-radius:3px;color:#86adef;font-weight:700;padding:5.5px 15px;transition:opacity 1s ease-in-out}:host .tree-table .table-bottom .pagination-buttons .splash-message.show{opacity:1}:host .tree-table .table-bottom .pagination-buttons .splash-message.hide{padding:0;opacity:0}:host .tree-table .table-bottom .pagination-buttons button{width:48px}:host .tree-table .table-bottom .pagination-buttons button.big{width:50px}:host .tree-table table{width:100%;text-align:center;border-collapse:collapse;margin-bottom:5px}:host .tree-table table th{cursor:pointer;-moz-user-select:none;user-select:none;-ms-user-select:none;-webkit-user-select:none;font-weight:700}:host .tree-table table .expanded-row-content{background:0 0}:host .tree-table table tr>td:first-child.not-used,:host .tree-table table tr>th:first-child.not-used{display:none}:host .tree-table table tr>td:first-child.used,:host .tree-table table tr>th:first-child.used{width:50px}:host .tree-table table tr>td:first-child.used .collapsed-row-button:after,:host .tree-table table tr>th:first-child.used .collapsed-row-button:after{content:\"\";width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #fff;display:inline-block}:host .tree-table table tr>td:first-child.used .expanded-row-button:after,:host .tree-table table tr>th:first-child.used .expanded-row-button:after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #fff;display:inline-block}:host .tree-table table tr .tt-row-action{margin-right:5px}:host .tree-table table td button.popup-link-button{border-style:none!important;background:0 0!important;color:#86adef!important}"]
            }] }
];
/** @nocollapse */
AngularTreeTableComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }
];
AngularTreeTableComponent.propDecorators = {
    tableData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowSelectionChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    inputRowSelectChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    inputRowTextChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularTreeTableModule {
}
AngularTreeTableModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [AngularTreeTableComponent],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
                ],
                exports: [
                    AngularTreeTableComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeTableHeaderObject {
    //It will take effect when column search is enabled in data
    /**
     * @param {?} title
     * @param {?} dataProperty
     * @param {?} style
     * @param {?} show
     */
    constructor(title, dataProperty, style, show) {
        this.dataType = TtDataType.TEXT;
        this.enableColumnSearch = true; //It will take effect when column search is enabled in data
        this.dataProperty = dataProperty;
        this.title = title;
        this.style = style;
        this.show = show;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeTableRowAction {
    /**
     * @param {?} label
     * @param {?} title
     * @param {?} classes
     * @param {?} action
     */
    constructor(label, title, classes, action) {
        this.type = TreeTableRowActionType.BUTTON;
        this.label = label;
        this.title = title;
        this.classes = classes;
        this.action = action;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular-tree-table.js.map


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column h-100\">\r\n  <div class=\"d-flex flex-column container main-content flex-grow-1\">\r\n    <div class=\"d-flex\">\r\n      <div class=\"project-details d-flex flex-column flex-item\">\r\n        <div class=\"project-heading\">Angular Tree Table</div>\r\n        <div class=\"project-description\">Expandanble and Collapsible Table structure in Angular in Angular Way</div>\r\n      </div>\r\n      <div class=\"d-flex flex-fill\"></div>\r\n      <div class=\"d-flex flex-item\">\r\n        <a class=\"doc-links\" target=\"AngularTreeTable\"\r\n          href=\"https://github.com/anjnkmr/angular-tree-table\">\r\n          <svg class=\"octicon octicon-mark-github v-align-middle\" height=\"35\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"32\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z\"></path></svg>\r\n        </a>\r\n        &nbsp;\r\n        <a class=\"doc-links\" target=\"AngularTreeTable\"\r\n          href=\"https://medium.com/@anjnkmr/angular-tree-table-bb9312c9720\">\r\n          <svg width=\"35\" height=\"35\" viewBox=\"5 5 35 35\" class=\"q\"><path d=\"M5 40V5h35v35H5zm8.56-12.63c0 .56-.03.69-.32 1.03L10.8 31.4v.4h6.97v-.4L15.3 28.4c-.29-.34-.34-.5-.34-1.03v-8.95l6.13 13.36h.71l5.26-13.36v10.64c0 .3 0 .35-.19.53l-1.85 1.8v.4h9.2v-.4l-1.83-1.8c-.18-.18-.2-.24-.2-.53V15.94c0-.3.02-.35.2-.53l1.82-1.8v-.4h-6.47l-4.62 11.55-5.2-11.54h-6.8v.4l2.15 2.63c.24.3.29.37.29.77v10.35z\"></path></svg>\r\n        </a>\r\n      </div>\r\n      <div class=\"d-flex flex-fill\"></div>\r\n      <a class=\" d-flex flex-item\" target=\"AngularTreeTable\" href=\"https://npmjs.com/package/angular-tree-table\"><img\r\n          src=\"https://nodei.co/npm/angular-tree-table.png?downloads=true\"></a>\r\n    </div>\r\n    <ul class=\"nav nav-fill nav-tabs\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"basic\">Basic</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"select\">Select</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"expandable\">Expandable</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"expandable-header-less\">No Headers</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"inputs\">Inputs</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"server-side\">Server Side</a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"nav-content container flex-grow-1\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/basic/basic.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/basic/basic.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<angular-tree-table [tableData]=\"tableData\"></angular-tree-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/expandable-header-less/expandable-header-less.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/expandable-header-less/expandable-header-less.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<angular-tree-table [tableData]=\"tableData\"></angular-tree-table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/expandable/expandable.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/expandable/expandable.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<angular-tree-table [tableData]=\"tableData\"></angular-tree-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/inputs/inputs.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/inputs/inputs.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<angular-tree-table [tableData]=\"tableData\"></angular-tree-table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/select/select.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/select/select.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<angular-tree-table [tableData]=\"tableData\" \r\n                    (rowSelectionChanged)=\"rowSelectionChanged($event)\"></angular-tree-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/server-side/server-side.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/server-side/server-side.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>We will add this example soon...</p>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_basic_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/basic/basic.component */ "./src/app/components/basic/basic.component.ts");
/* harmony import */ var _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/expandable/expandable.component */ "./src/app/components/expandable/expandable.component.ts");
/* harmony import */ var _components_server_side_server_side_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/server-side/server-side.component */ "./src/app/components/server-side/server-side.component.ts");
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/select/select.component */ "./src/app/components/select/select.component.ts");
/* harmony import */ var _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/inputs/inputs.component */ "./src/app/components/inputs/inputs.component.ts");
/* harmony import */ var _components_expandable_header_less_expandable_header_less_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/expandable-header-less/expandable-header-less.component */ "./src/app/components/expandable-header-less/expandable-header-less.component.ts");









const routes = [
    {
        path: '',
        redirectTo: 'basic',
        pathMatch: 'full'
    },
    {
        path: 'basic',
        component: _components_basic_basic_component__WEBPACK_IMPORTED_MODULE_3__["BasicComponent"]
    },
    {
        path: 'select',
        component: _components_select_select_component__WEBPACK_IMPORTED_MODULE_6__["SelectComponent"]
    },
    {
        path: 'expandable',
        component: _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_4__["ExpandableComponent"]
    },
    {
        path: 'expandable-header-less',
        component: _components_expandable_header_less_expandable_header_less_component__WEBPACK_IMPORTED_MODULE_8__["ExpandableHeaderLessComponent"]
    },
    {
        path: 'inputs',
        component: _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_7__["InputsComponent"]
    },
    {
        path: 'server-side',
        component: _components_server_side_server_side_component__WEBPACK_IMPORTED_MODULE_5__["ServerSideComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angularTreeTable';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_tree_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-tree-table */ "./dist/angular-tree-table/fesm2015/angular-tree-table.js");
/* harmony import */ var _components_basic_basic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/basic/basic.component */ "./src/app/components/basic/basic.component.ts");
/* harmony import */ var _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/expandable/expandable.component */ "./src/app/components/expandable/expandable.component.ts");
/* harmony import */ var _components_server_side_server_side_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/server-side/server-side.component */ "./src/app/components/server-side/server-side.component.ts");
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/select/select.component */ "./src/app/components/select/select.component.ts");
/* harmony import */ var _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/inputs/inputs.component */ "./src/app/components/inputs/inputs.component.ts");
/* harmony import */ var _components_expandable_header_less_expandable_header_less_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/expandable-header-less/expandable-header-less.component */ "./src/app/components/expandable-header-less/expandable-header-less.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _components_basic_basic_component__WEBPACK_IMPORTED_MODULE_5__["BasicComponent"],
            _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_6__["ExpandableComponent"],
            _components_server_side_server_side_component__WEBPACK_IMPORTED_MODULE_7__["ServerSideComponent"],
            _components_select_select_component__WEBPACK_IMPORTED_MODULE_8__["SelectComponent"],
            _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_9__["InputsComponent"],
            _components_expandable_header_less_expandable_header_less_component__WEBPACK_IMPORTED_MODULE_10__["ExpandableHeaderLessComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            angular_tree_table__WEBPACK_IMPORTED_MODULE_4__["AngularTreeTableModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/basic/basic.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/basic/basic.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFzaWMvYmFzaWMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/basic/basic.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/basic/basic.component.ts ***!
  \*****************************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_tree_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-tree-table */ "./dist/angular-tree-table/fesm2015/angular-tree-table.js");



let BasicComponent = class BasicComponent {
    constructor() {
        this.tableData = null;
        this.tableConfig = {};
        this.tableHeaders = [];
    }
    ngOnInit() {
        this.populateDummyData();
    }
    populateDummyData() {
        const data = [];
        for (let i = 0; i < 120; i++) {
            const row = new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableRow"](i + '', { sno: i + 1, name: 'John ' + (i + 1), age: i + 1 }, false, null);
            data.push(row);
        }
        this.tableData = new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableData"](this.tableConfig);
        this.populateHeaders();
        this.tableData.data = data;
    }
    populateHeaders() {
        this.tableHeaders.splice(0, this.tableHeaders.length);
        this.tableHeaders.push(new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableHeaderObject"]('Sno', 'sno', null, true));
        this.tableHeaders.push(new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableHeaderObject"]('Name', 'name', null, true));
        this.tableHeaders.push(new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableHeaderObject"]('Age', 'age', null, true));
        this.tableData.headers = this.tableHeaders;
    }
};
BasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic',
        template: __webpack_require__(/*! raw-loader!./basic.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/basic/basic.component.html"),
        styles: [__webpack_require__(/*! ./basic.component.scss */ "./src/app/components/basic/basic.component.scss")]
    })
], BasicComponent);



/***/ }),

/***/ "./src/app/components/expandable-header-less/expandable-header-less.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/expandable-header-less/expandable-header-less.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwYW5kYWJsZS1oZWFkZXItbGVzcy9leHBhbmRhYmxlLWhlYWRlci1sZXNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/expandable-header-less/expandable-header-less.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/expandable-header-less/expandable-header-less.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ExpandableHeaderLessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableHeaderLessComponent", function() { return ExpandableHeaderLessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_tree_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-tree-table */ "./dist/angular-tree-table/fesm2015/angular-tree-table.js");



let ExpandableHeaderLessComponent = class ExpandableHeaderLessComponent {
    constructor() {
        this.tableData = null;
        this.tableConfig = {
            showTableHeaders: false,
            showExpandArrows: true,
            showExpandAllArrows: true,
            columnVisibility: false,
            columnVisibilityDropDown: false,
            commonSearch: false,
            excelExportButton: false,
            showPageLengthDropdown: false
        };
        this.tableHeaders = [];
    }
    ngOnInit() {
        this.populateDummyData();
    }
    populateDummyData() {
        const data = [];
        for (let i = 0; i < 120; i++) {
            const row = new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableRow"](i + '', { sno: i + 1, name: 'John ' + (i + 1), age: i + 1 }, false, null);
            if (i % 10 !== 0) {
                row.expandable = true;
                const subTableData = new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableData"](this.tableConfig); //We can add new config object if required
                const subData = [];
                for (let j = 0; j < (10 - i % 10); j++) {
                    const subRow = new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableRow"](j + '', { sno: j + 1, name: 'Paul ' + (j + 1), age: j + 1 }, false, null);
                    subData.push(subRow);
                }
                subTableData.headers = this.tableHeaders; //Using the same headers as parent table, we can use separate if required
                subTableData.data = subData;
                row.children = subTableData;
            }
            data.push(row);
        }
        this.tableData = new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableData"](this.tableConfig);
        this.populateHeaders();
        this.tableData.data = data;
    }
    populateHeaders() {
        this.tableHeaders.splice(0, this.tableHeaders.length);
        this.tableHeaders.push(new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableHeaderObject"]('Sno', 'sno', null, true));
        this.tableHeaders.push(new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableHeaderObject"]('Name', 'name', null, true));
        this.tableHeaders.push(new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableHeaderObject"]('Age', 'age', null, true));
        this.tableData.headers = this.tableHeaders;
    }
};
ExpandableHeaderLessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expandable-header-less',
        template: __webpack_require__(/*! raw-loader!./expandable-header-less.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/expandable-header-less/expandable-header-less.component.html"),
        styles: [__webpack_require__(/*! ./expandable-header-less.component.scss */ "./src/app/components/expandable-header-less/expandable-header-less.component.scss")]
    })
], ExpandableHeaderLessComponent);



/***/ }),

/***/ "./src/app/components/expandable/expandable.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/expandable/expandable.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/expandable/expandable.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/expandable/expandable.component.ts ***!
  \***************************************************************/
/*! exports provided: ExpandableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableComponent", function() { return ExpandableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_tree_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-tree-table */ "./dist/angular-tree-table/fesm2015/angular-tree-table.js");



let ExpandableComponent = class ExpandableComponent {
    constructor() {
        this.tableData = null;
        this.tableConfig = {
            showExpandArrows: true,
            showExpandAllArrows: true,
            columnVisibility: true,
            columnVisibilityDropDown: true // To show columns visibility options on table as a popover
        };
        this.tableHeaders = [];
    }
    ngOnInit() {
        this.populateDummyData();
    }
    populateDummyData() {
        const data = [];
        for (let i = 0; i < 120; i++) {
            const row = new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableRow"](i + '', { sno: i + 1, name: 'John ' + (i + 1), age: i + 1 }, false, null);
            if (i % 10 !== 0) {
                row.expandable = true;
                const subTableData = new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableData"](this.tableConfig); //We can add new config object if required
                const subData = [];
                for (let j = 0; j < (10 - i % 10); j++) {
                    const subRow = new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableRow"](j + '', { sno: j + 1, name: 'Paul ' + (j + 1), age: j + 1 }, false, null);
                    subData.push(subRow);
                }
                subTableData.headers = this.tableHeaders; //Using the same headers as parent table, we can use separate if required
                subTableData.data = subData;
                row.children = subTableData;
            }
            data.push(row);
        }
        this.tableData = new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableData"](this.tableConfig);
        this.populateHeaders();
        this.tableData.data = data;
    }
    populateHeaders() {
        this.tableHeaders.splice(0, this.tableHeaders.length);
        this.tableHeaders.push(new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableHeaderObject"]('Sno', 'sno', null, true));
        this.tableHeaders.push(new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableHeaderObject"]('Name', 'name', null, true));
        this.tableHeaders.push(new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableHeaderObject"]('Age', 'age', null, true));
        this.tableData.headers = this.tableHeaders;
    }
};
ExpandableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expandable',
        template: __webpack_require__(/*! raw-loader!./expandable.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/expandable/expandable.component.html"),
        styles: [__webpack_require__(/*! ./expandable.component.scss */ "./src/app/components/expandable/expandable.component.scss")]
    })
], ExpandableComponent);



/***/ }),

/***/ "./src/app/components/inputs/inputs.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/inputs/inputs.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5wdXRzL2lucHV0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/inputs/inputs.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/inputs/inputs.component.ts ***!
  \*******************************************************/
/*! exports provided: InputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsComponent", function() { return InputsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_tree_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-tree-table */ "./dist/angular-tree-table/fesm2015/angular-tree-table.js");



let InputsComponent = class InputsComponent {
    constructor() {
        this.tableData = null;
        this.tableConfig = {};
        this.tableHeaders = [];
    }
    ngOnInit() {
        this.populateDummyData();
    }
    populateDummyData() {
        const data = [];
        for (let i = 0; i < 120; i++) {
            const row = new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableRow"](i + '', { sno: i + 1, name: 'John ' + (i + 1), age: i + 1 }, false, null);
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
        this.tableData = new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableData"](this.tableConfig);
        this.populateHeaders();
        this.tableData.data = data;
    }
    populateHeaders() {
        this.tableHeaders.splice(0, this.tableHeaders.length);
        this.tableHeaders.push(new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableHeaderObject"]('Sno', 'sno', null, true));
        this.tableHeaders.push(new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableHeaderObject"]('Name', 'name', null, true));
        const ageHeader = new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableHeaderObject"]('Age', 'age', null, true);
        ageHeader.dataType = angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TtDataType"].INPUT_TEXT;
        this.tableHeaders.push(ageHeader);
        const diedHeader = new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableHeaderObject"]('Died', 'died', null, true);
        diedHeader.dataType = angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TtDataType"].INPUT_SELECT;
        this.tableHeaders.push(diedHeader);
        this.tableData.headers = this.tableHeaders;
    }
};
InputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inputs',
        template: __webpack_require__(/*! raw-loader!./inputs.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/inputs/inputs.component.html"),
        styles: [__webpack_require__(/*! ./inputs.component.scss */ "./src/app/components/inputs/inputs.component.scss")]
    })
], InputsComponent);



/***/ }),

/***/ "./src/app/components/select/select.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/select/select.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/select/select.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/select/select.component.ts ***!
  \*******************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_tree_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-tree-table */ "./dist/angular-tree-table/fesm2015/angular-tree-table.js");



let SelectComponent = class SelectComponent {
    constructor() {
        this.tableData = null;
        this.tableConfig = {};
        this.tableHeaders = [];
    }
    ngOnInit() {
        this.populateDummyData();
    }
    populateDummyData() {
        const data = [];
        for (let i = 0; i < 120; i++) {
            const row = new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableRow"](i + '', { sno: i + 1, name: 'John ' + (i + 1), age: i + 1 }, false, null);
            data.push(row);
        }
        this.tableData = new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableData"](this.tableConfig);
        this.populateHeaders();
        this.tableData.data = data;
    }
    rowSelectionChanged(selected) {
        console.log('Selection changed', selected);
    }
    populateHeaders() {
        this.tableHeaders.splice(0, this.tableHeaders.length);
        const selectAllHeader = new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableHeaderObject"]('Select All', null, null, true);
        selectAllHeader.dataType = angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TtDataType"].SELECT;
        this.tableHeaders.push(selectAllHeader);
        this.tableHeaders.push(new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableHeaderObject"]('Sno', 'sno', null, true));
        this.tableHeaders.push(new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableHeaderObject"]('Name', 'name', null, true));
        this.tableHeaders.push(new angular_tree_table__WEBPACK_IMPORTED_MODULE_2__["TreeTableHeaderObject"]('Age', 'age', null, true));
        this.tableData.headers = this.tableHeaders;
    }
};
SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select',
        template: __webpack_require__(/*! raw-loader!./select.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/select/select.component.html"),
        styles: [__webpack_require__(/*! ./select.component.scss */ "./src/app/components/select/select.component.scss")]
    })
], SelectComponent);



/***/ }),

/***/ "./src/app/components/server-side/server-side.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/server-side/server-side.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmVyLXNpZGUvc2VydmVyLXNpZGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/server-side/server-side.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/server-side/server-side.component.ts ***!
  \*****************************************************************/
/*! exports provided: ServerSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerSideComponent", function() { return ServerSideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServerSideComponent = class ServerSideComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServerSideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-server-side',
        template: __webpack_require__(/*! raw-loader!./server-side.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/server-side/server-side.component.html"),
        styles: [__webpack_require__(/*! ./server-side.component.scss */ "./src/app/components/server-side/server-side.component.scss")]
    })
], ServerSideComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/data/Anjan/angular-tree-table/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map