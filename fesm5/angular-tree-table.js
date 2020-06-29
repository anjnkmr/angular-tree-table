import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, KeyValueDiffers, HostBinding, Input, Output, NgModule } from '@angular/core';
import { __values, __read, __spread } from 'tslib';
import * as moment_ from 'moment';
import { saveAs } from 'file-saver';
import { utils, write } from 'xlsx';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularTreeTableService = /** @class */ (function () {
    function AngularTreeTableService() {
    }
    AngularTreeTableService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularTreeTableService.ctorParameters = function () { return []; };
    /** @nocollapse */ AngularTreeTableService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularTreeTableService_Factory() { return new AngularTreeTableService(); }, token: AngularTreeTableService, providedIn: "root" });
    return AngularTreeTableService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TreeTableDataConfig = /** @class */ (function () {
    function TreeTableDataConfig() {
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
         * This is used to configure the ExcelExport only filtered true
         *
         * Default value is `false`
         */
        this.excelExportOnlyFilteredRows = false;
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
        /**
         * Expandable Type
         * Default: `ExpandableType.DIFFERENT_HEADERS`
         */
        this.expandableType = ExpandableType.DIFFERENT_HEADERS;
        this.expandableArrowPlacement = ExpandableArrowPlacement.SEPERATE_COLUMN;
    }
    return TreeTableDataConfig;
}());
if (false) {
    /**
     * Context should be Host component instance of tree table
     *
     * Default value is `null`
     * @type {?}
     */
    TreeTableDataConfig.prototype.context;
    /**
     * This is two dimensional array, each subarray should contain 2 or less strings, and there is no limit for subarrays count
     *
     * Default value is `[]`
     * @type {?}
     */
    TreeTableDataConfig.prototype.extraInfos;
    /**
     * This is used to show/ hide Table Headers
     *
     * Default value is `true` - Shows Table Headers
     * @type {?}
     */
    TreeTableDataConfig.prototype.showTableHeaders;
    /**
     * Column Visibility will show the group of buttons on top of table, which will allow us to toggle the visibility of each column
     *
     * Default value is `false` - hidden
     * @type {?}
     */
    TreeTableDataConfig.prototype.columnVisibility;
    /**
     * Same as Column Visibility but it shown as popover. It requires popper js library to work
     *
     * Default value is `false` - hidden
     * @type {?}
     */
    TreeTableDataConfig.prototype.columnVisibilityDropDown;
    /**
     * Enables seperate search field for each column under each table header
     *
     * Default value is `false` - Disabled
     * @type {?}
     */
    TreeTableDataConfig.prototype.visibleColumnFiltersVisibility;
    /**
     * This is used to set the search value by default based on `dataProperty`
     *
     * Ex: {country: 'India'}
     *
     * Default value is `{}`
     * @type {?}
     */
    TreeTableDataConfig.prototype.visibleColumnFilters;
    /**
     * Class name for table tag
     *
     * Default value is `stacktable table-bordered large-only table table-sm`
     * @type {?}
     */
    TreeTableDataConfig.prototype.fullClassName;
    /**
     * Class name for th tag which is sorted in `ascending` order
     *
     * Default value is `col-sort col-sort-asc`
     * @type {?}
     */
    TreeTableDataConfig.prototype.sortAscClassName;
    /**
     * Class name for th tag which is sorted in `descending` order
     *
     * Default value is `col-sort col-sort-desc`
     * @type {?}
     */
    TreeTableDataConfig.prototype.sortDescClassName;
    /**
     * Class name for th tag which is `not sorted`
     *
     * Default value is `col-sort col-sort-nothing`
     * @type {?}
     */
    TreeTableDataConfig.prototype.sortNothingClassName;
    /**
     * Extra class name for table tag
     *
     * Default value is `null`
     * @type {?}
     */
    TreeTableDataConfig.prototype.customClassName;
    /**
     * This option will show the Expand Row Button on each row, if child exists
     *
     * Default value is `false`
     * @type {?}
     */
    TreeTableDataConfig.prototype.showExpandArrows;
    /**
     * This option will show the Expand Row Button on table header, which will expand/ collapse all rows with children at a time
     *
     * Default value is `false`
     * @type {?}
     */
    TreeTableDataConfig.prototype.showExpandAllArrows;
    /**
     * If this option is `true` then it will expand all the rows irrespective of child table has rows or not
     *
     * Default value is `false` - Only expand rows with child which has rows
     * @type {?}
     */
    TreeTableDataConfig.prototype.showExpandAllEmptyChildren;
    /**
     * This is used set the default sorted column and order based on dataProperty
     *
     * Ex: {firstName: 'asc'}
     *
     * Default value is `{}`
     * @type {?}
     */
    TreeTableDataConfig.prototype.sortedColumn;
    /**
     * This will shows the page length dropdown, which will used to render the no of rows on each page
     *
     * Default value is `true`
     * @type {?}
     */
    TreeTableDataConfig.prototype.showPageLengthDropdown;
    /**
     * This will used to customize page length dropdown options
     *
     * Default value is `[10, 25, 50, 100]`
     * @type {?}
     */
    TreeTableDataConfig.prototype.pageSizes;
    /**
     * This is for internal pupose of the `angular-tree-table`. Don't use it.
     *
     * Default value is `0`
     * @type {?}
     */
    TreeTableDataConfig.prototype.level;
    /**
     * Column Filters are used to send the column wise search keywords to server. Don't use it. It will be used by `angular-tree-table` itself.
     * @type {?}
     */
    TreeTableDataConfig.prototype.columnFilters;
    /**
     * Row clickables are allows you to configure the row detail clicking actions with a callback method based on dataProperty
     *
     * Default value is `{}`
     * @type {?}
     */
    TreeTableDataConfig.prototype.rowClickables;
    /**
     * This should be instance of component or the instance of class where the callbacks of rowClickables implemented
     *
     * Default value is `null`
     * @type {?}
     */
    TreeTableDataConfig.prototype.rowClickablesContext;
    /**
     * This is used to show/ hide the common search box
     *
     * Default value is `true`
     * @type {?}
     */
    TreeTableDataConfig.prototype.commonSearch;
    /**
     * This is used to show/ hide Export Excel Button
     *
     * Default value is `false`
     * @type {?}
     */
    TreeTableDataConfig.prototype.excelExportButton;
    /**
     * This is used to configure the ExcelExport only filtered true
     *
     * Default value is `false`
     * @type {?}
     */
    TreeTableDataConfig.prototype.excelExportOnlyFilteredRows;
    /**
     * This is used to configure the ExcelExport file name
     *
     * Default value is `ExportFile`
     * @type {?}
     */
    TreeTableDataConfig.prototype.excelExportFileName;
    /**
     * This is used to configure the Excel Export Button text
     *
     * Default value is `Excel Export`
     * @type {?}
     */
    TreeTableDataConfig.prototype.excelExportButtonText;
    /**
     * It is WIP, Which will be used to export to excel file along with all children of rows
     *
     * Default value is `true`
     * @type {?}
     */
    TreeTableDataConfig.prototype.excelExportAllChildren;
    /**
     * It is WIP, Which will be used to export to excel file along with all children of rows
     *
     * Default value is `true`
     * @type {?}
     */
    TreeTableDataConfig.prototype.excelExportOnlyExpanded;
    /**
     * It is WIP, which will used to configure the callbacks for events of the `angular-tree-table`
     * @type {?}
     */
    TreeTableDataConfig.prototype.events;
    /**
     * Expandable Type
     * Default: `ExpandableType.DIFFERENT_HEADERS`
     * @type {?}
     */
    TreeTableDataConfig.prototype.expandableType;
    /** @type {?} */
    TreeTableDataConfig.prototype.expandableArrowPlacement;
}
/** @enum {string} */
var ExpandableType = {
    DIFFERENT_HEADERS: 'DIFFERENT_HEADERS',
    SAME_HEADERS: 'SAME_HEADERS',
};
/** @enum {string} */
var ExpandableArrowPlacement = {
    SEPERATE_COLUMN: 'SEPERATE_COLUMN',
    FIRST_COLUMN: 'FIRST_COLUMN',
};
var TreeTableDataEvents = /** @class */ (function () {
    function TreeTableDataEvents() {
        this.shouldRowExpand = null;
        this.rowExpanded = null;
        this.shouldRowCollapse = null;
        this.rowCollapsed = null;
    }
    return TreeTableDataEvents;
}());
if (false) {
    /** @type {?} */
    TreeTableDataEvents.prototype.shouldRowExpand;
    /** @type {?} */
    TreeTableDataEvents.prototype.rowExpanded;
    /** @type {?} */
    TreeTableDataEvents.prototype.shouldRowCollapse;
    /** @type {?} */
    TreeTableDataEvents.prototype.rowCollapsed;
}
var TreeTableDataServerConfig = /** @class */ (function () {
    function TreeTableDataServerConfig() {
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
    return TreeTableDataServerConfig;
}());
if (false) {
    /**
     * `url` to invoke for the data from server
     *
     * Ex: `https://restapisample.com/entities`
     *
     * Default value is `null`
     * @type {?}
     */
    TreeTableDataServerConfig.prototype.url;
    /**
     * `url` to invoke for the data from server as a file
     *
     * Ex: `https://restapisample.com/entities/export`
     *
     * Default value is `null`
     * @type {?}
     */
    TreeTableDataServerConfig.prototype.excelExportUrl;
    /**
     * HTTP Method for `url` and `excelExportUrl`
     *
     * Default value is `null`
     * @type {?}
     */
    TreeTableDataServerConfig.prototype.method;
    /**
     * `angular-tree-table` handles all the events, page change, next page, prev page, page length change through api call and using different parameter. These are used to customize those parameter keys as per the server side requirements
     *
     * Default values are `page, limit, sort, search, colSearch, colFilters, pageToken`
     * @type {?}
     */
    TreeTableDataServerConfig.prototype.paramNames;
    /**
     * This is used to configure the property key of array in the api response
     *
     * Default value is `rows`
     * @type {?}
     */
    TreeTableDataServerConfig.prototype.rowsKey;
    /**
     * This is used to configure the property key of totalRowsCount in the api response
     *
     * Default value is `totalRowsCount`
     * @type {?}
     */
    TreeTableDataServerConfig.prototype.totalRowsCountKey;
    /**
     * This is used to configure the property key of filteredRowsCount in the api response
     *
     * Default value is `filteredRowCount`
     * @type {?}
     */
    TreeTableDataServerConfig.prototype.filteredRowsCountKey;
    /**
     * This is used to configure the unique key in the each row of the response
     *
     * Default value is `null`
     * @type {?}
     */
    TreeTableDataServerConfig.prototype.rowUniqueKey;
}
var TreeTableDataServerConfigParamMapping = /** @class */ (function () {
    function TreeTableDataServerConfigParamMapping() {
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
    return TreeTableDataServerConfigParamMapping;
}());
if (false) {
    /**
     * Page number of the page will send under key configured here
     *
     * Default value is `page`
     * @type {?}
     */
    TreeTableDataServerConfigParamMapping.prototype.page;
    /**
     * Limit of the page will send under key configured here
     *
     * Default value is `limit`
     * @type {?}
     */
    TreeTableDataServerConfigParamMapping.prototype.limit;
    /**
     * Sort of the table of each column will send under key configured here
     *
     * Default value is `sort`
     * @type {?}
     */
    TreeTableDataServerConfigParamMapping.prototype.sort;
    /**
     * Search keyword wil be send under key configured here
     *
     * Default value is `search`
     * @type {?}
     */
    TreeTableDataServerConfigParamMapping.prototype.search;
    /**
     * Search keyword of each column will be send under key configured here
     *
     * Default value is `colSearch`
     * @type {?}
     */
    TreeTableDataServerConfigParamMapping.prototype.colSearch;
    /**
     * Filter of each column will be send under key configured here
     *
     * Default value is `colFilters`
     * @type {?}
     */
    TreeTableDataServerConfigParamMapping.prototype.colFilters;
    /**
     * Not using right now
     *
     * Default value is `pageToken`
     * @type {?}
     */
    TreeTableDataServerConfigParamMapping.prototype.pageToken;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TreeTableRow = /** @class */ (function () {
    function TreeTableRow(id, data, expandable, children) {
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
    return TreeTableRow;
}());
if (false) {
    /** @type {?} */
    TreeTableRow.prototype.id;
    /** @type {?} */
    TreeTableRow.prototype.data;
    /** @type {?} */
    TreeTableRow.prototype.expandable;
    /** @type {?} */
    TreeTableRow.prototype.children;
    /** @type {?} */
    TreeTableRow.prototype.expanded;
    /** @type {?} */
    TreeTableRow.prototype.clickablesContext;
    /** @type {?} */
    TreeTableRow.prototype.clickables;
    /** @type {?} */
    TreeTableRow.prototype.styles;
    /** @type {?} */
    TreeTableRow.prototype.classes;
    /** @type {?} */
    TreeTableRow.prototype.actions;
    /** @type {?} */
    TreeTableRow.prototype.selected;
    /** @type {?} */
    TreeTableRow.prototype.options;
}
var TreeTableData = /** @class */ (function () {
    function TreeTableData(config, serverConfig, http) {
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
            if (config.expandableType !== undefined && config.expandableType !== null) {
                this.config.expandableType = config.expandableType;
            }
            if (config.expandableArrowPlacement !== undefined && config.expandableArrowPlacement !== null) {
                this.config.expandableArrowPlacement = config.expandableArrowPlacement;
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
                for (var p = 0; p < config.pageSizes.length; p++) {
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
            if (config.excelExportOnlyFilteredRows !== undefined && config.excelExportOnlyFilteredRows !== null) {
                this.config.excelExportOnlyFilteredRows = config.excelExportOnlyFilteredRows;
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
    TreeTableData.prototype.totalPagesCount = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pages = this.filteredRowsCount / this.pageSize;
        return Math.ceil(pages);
    };
    /**
     * @return {?}
     */
    TreeTableData.prototype.getParams = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var params = {};
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
        var colSearchKeys = Object.keys(this.config.visibleColumnFilters);
        try {
            for (var colSearchKeys_1 = __values(colSearchKeys), colSearchKeys_1_1 = colSearchKeys_1.next(); !colSearchKeys_1_1.done; colSearchKeys_1_1 = colSearchKeys_1.next()) {
                var key = colSearchKeys_1_1.value;
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (colSearchKeys_1_1 && !colSearchKeys_1_1.done && (_a = colSearchKeys_1.return)) _a.call(colSearchKeys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        params[this.serverConfig.paramNames.colSearch] = JSON.stringify(this.config.visibleColumnFilters);
        return params;
    };
    /**
     * @param {?=} callback
     * @return {?}
     */
    TreeTableData.prototype.loadExcelData = /**
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        if (this.serverConfig.excelExportUrl === null) {
            console.warn('ExcelExportUrl not specified');
            return;
        }
        /** @type {?} */
        var params = this.getParams();
        // delete params[this.serverConfig.paramNames.limit];
        /** @type {?} */
        var dis = this;
        dis.isLoading = true;
        if (this.serverConfig.method === 'GET') {
            this.http.get(this.serverConfig.excelExportUrl, { params: params, responseType: 'blob' }).subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                dis.isLoading = false;
                /** @type {?} */
                var blob = new Blob([resp], { type: 'application/vnd.ms-excel' });
                saveAs(blob, 'Orders.xlsx');
            }));
        }
    };
    /**
     * @param {?=} callback
     * @return {?}
     */
    TreeTableData.prototype.loadData = /**
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        var _this = this;
        if (this.serverConfig.url === null) {
            console.warn('URL not specified');
            return;
        }
        /** @type {?} */
        var params = this.getParams();
        if (this.lastParams !== undefined && this.lastParams !== null) {
            if (this.lastParams === JSON.stringify(params)) {
                return;
            }
        }
        this.lastParams = JSON.stringify(params);
        /** @type {?} */
        var dis = this;
        dis.isLoading = true;
        dis.loadCounter++;
        if (this.serverConfig.method === 'GET') {
            this.http.get(this.serverConfig.url, { params: params }).subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                var e_2, _a;
                if (callback !== undefined && callback !== null) {
                    /** @type {?} */
                    var rows = [];
                    if (resp[_this.serverConfig.rowsKey] === undefined || resp[_this.serverConfig.rowsKey] === null) {
                        callback([]);
                        dis.loadCounter--;
                        if (dis.loadCounter <= 0) {
                            dis.isLoading = false;
                            dis.loadCounter = 0;
                        }
                    }
                    else {
                        _this.totalRowsCount = resp[_this.serverConfig.totalRowsCountKey];
                        _this.filteredRowsCount = resp[_this.serverConfig.filteredRowsCountKey];
                        try {
                            for (var _b = __values(resp[_this.serverConfig.rowsKey]), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var rawRow = _c.value;
                                /** @type {?} */
                                var uniqueVal = null;
                                if (_this.serverConfig.rowUniqueKey === undefined || _this.serverConfig.rowUniqueKey === null) {
                                    uniqueVal = new Date().getTime();
                                }
                                else {
                                    uniqueVal = rawRow[_this.serverConfig.rowUniqueKey];
                                }
                                /** @type {?} */
                                var row = new TreeTableRow(uniqueVal, rawRow, false, undefined);
                                row.clickablesContext = _this.config.rowClickablesContext;
                                row.clickables = _this.config.rowClickables;
                                rows.push(row);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        /** @type {?} */
                        var lastRawRow = resp[_this.serverConfig.rowsKey][resp[_this.serverConfig.rowsKey].length - 1];
                        if (lastRawRow !== undefined && lastRawRow !== null) {
                            if (_this.serverConfig.rowUniqueKey !== undefined && _this.serverConfig.rowUniqueKey !== null) {
                                _this.tokens[_this.page] = lastRawRow[_this.serverConfig.rowUniqueKey];
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
            function (err) {
                dis.loadCounter--;
                if (dis.loadCounter <= 0) {
                    dis.isLoading = false;
                    dis.loadCounter = 0;
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    TreeTableData.prototype.allRowsExpanded = /**
     * @return {?}
     */
    function () {
        return false;
    };
    /**
     * @return {?}
     */
    TreeTableData.prototype.allRowsCollapsed = /**
     * @return {?}
     */
    function () {
        return false;
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    TreeTableData.prototype.splashMessage = /**
     * @param {?} msg
     * @return {?}
     */
    function (msg) {
        this.splashMessageContent = msg;
        this.splashMessageFlag = true;
        /** @type {?} */
        var dis = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            dis.splashMessageFlag = false;
        }), 2000);
    };
    return TreeTableData;
}());
if (false) {
    /** @type {?} */
    TreeTableData.prototype.headers;
    /** @type {?} */
    TreeTableData.prototype.data;
    /** @type {?} */
    TreeTableData.prototype.isLoading;
    /** @type {?} */
    TreeTableData.prototype.keyword;
    /** @type {?} */
    TreeTableData.prototype.page;
    /** @type {?} */
    TreeTableData.prototype.pageSize;
    /** @type {?} */
    TreeTableData.prototype.lastParams;
    /** @type {?} */
    TreeTableData.prototype.totalRowsCount;
    /** @type {?} */
    TreeTableData.prototype.filteredRowsCount;
    /** @type {?} */
    TreeTableData.prototype.splashMessageFlag;
    /** @type {?} */
    TreeTableData.prototype.splashMessageContent;
    /** @type {?} */
    TreeTableData.prototype.tokens;
    /** @type {?} */
    TreeTableData.prototype.isAllRowsExpanded;
    /** @type {?} */
    TreeTableData.prototype.serverConfig;
    /** @type {?} */
    TreeTableData.prototype.config;
    /** @type {?} */
    TreeTableData.prototype.loadCounter;
    /**
     * @type {?}
     * @private
     */
    TreeTableData.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var TtDataType = {
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
var TreeTableRowActionType = {
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
                for (var _e = __values(expressionParts.entries()), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var _g = __read(_f.value, 2), index = _g[0], expressionPart = _g[1];
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
                for (var _h = __values(expressionParts.entries()), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var _k = __read(_j.value, 2), index = _k[0], expressionPart = _k[1];
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
                for (var _l = __values(expressionParts.entries()), _m = _l.next(); !_m.done; _m = _l.next()) {
                    var _o = __read(_m.value, 2), index = _o[0], expressionPart = _o[1];
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
                for (var _p = __values(expressionParts.entries()), _q = _p.next(); !_q.done; _q = _p.next()) {
                    var _r = __read(_q.value, 2), index = _r[0], expressionPart = _r[1];
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
            for (var pathParts_1 = __values(pathParts), pathParts_1_1 = pathParts_1.next(); !pathParts_1_1.done; pathParts_1_1 = pathParts_1.next()) {
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
            for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
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
            for (var data_2 = __values(data), data_2_1 = data_2.next(); !data_2_1.done; data_2_1 = data_2.next()) {
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
                    for (var rows_1 = __values(rows), rows_1_1 = rows_1.next(); !rows_1_1.done; rows_1_1 = rows_1.next()) {
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
                        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
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
                        for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
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
                                    for (var _e = (e_11 = void 0, __values(_this.tableData.config.columnFilters[key])), _f = _e.next(); !_f.done; _f = _e.next()) {
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
                        for (var keys_3 = __values(keys), keys_3_1 = keys_3.next(); !keys_3_1.done; keys_3_1 = keys_3.next()) {
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
            for (var dataRowsSource_1 = __values(dataRowsSource), dataRowsSource_1_1 = dataRowsSource_1.next(); !dataRowsSource_1_1.done; dataRowsSource_1_1 = dataRowsSource_1.next()) {
                var d = dataRowsSource_1_1.value;
                /** @type {?} */
                var obj = {};
                try {
                    for (var _c = (e_14 = void 0, __values(this.tableData.headers)), _d = _c.next(); !_d.done; _d = _c.next()) {
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
        var ws = utils.json_to_sheet(dataRows);
        /** @type {?} */
        var wb = { Sheets: { data: ws }, SheetNames: ['data'] };
        /** @type {?} */
        var excelBuffer = write(wb, { bookType: 'xlsx', type: 'array' });
        /** @type {?} */
        var data = new Blob([excelBuffer], { type: fileType });
        saveAs(data, this.tableData.config.excelExportFileName + fileExtension);
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
            for (var _b = __values(row.classes), _c = _b.next(); !_c.done; _c = _b.next()) {
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
        var rows = __spread(this.tableData.data.filter((/**
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularTreeTableModule = /** @class */ (function () {
    function AngularTreeTableModule() {
    }
    AngularTreeTableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AngularTreeTableComponent],
                    imports: [
                        FormsModule,
                        CommonModule
                    ],
                    exports: [
                        AngularTreeTableComponent
                    ]
                },] }
    ];
    return AngularTreeTableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TreeTableHeaderObject = /** @class */ (function () {
    function TreeTableHeaderObject(title, dataProperty, style, show, canChangeVisibilityOnRuntime) {
        if (canChangeVisibilityOnRuntime === void 0) { canChangeVisibilityOnRuntime = true; }
        this.dataType = TtDataType.TEXT;
        this.enableColumnSearch = true; //It will take effect when column search is enabled in data
        //It will take effect when column search is enabled in data
        this.canChangeVisbilityOnRuntime = true;
        this.dataProperty = dataProperty;
        this.title = title;
        this.style = style;
        this.show = show;
        this.canChangeVisbilityOnRuntime = canChangeVisibilityOnRuntime;
    }
    return TreeTableHeaderObject;
}());
if (false) {
    /** @type {?} */
    TreeTableHeaderObject.prototype.dataProperty;
    /** @type {?} */
    TreeTableHeaderObject.prototype.title;
    /** @type {?} */
    TreeTableHeaderObject.prototype.style;
    /** @type {?} */
    TreeTableHeaderObject.prototype.show;
    /** @type {?} */
    TreeTableHeaderObject.prototype.dataType;
    /** @type {?} */
    TreeTableHeaderObject.prototype.enableColumnSearch;
    /** @type {?} */
    TreeTableHeaderObject.prototype.canChangeVisbilityOnRuntime;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TreeTableRowAction = /** @class */ (function () {
    function TreeTableRowAction(label, title, classes, action) {
        this.type = TreeTableRowActionType.BUTTON;
        this.label = label;
        this.title = title;
        this.classes = classes;
        this.action = action;
    }
    return TreeTableRowAction;
}());
if (false) {
    /** @type {?} */
    TreeTableRowAction.prototype.label;
    /** @type {?} */
    TreeTableRowAction.prototype.title;
    /** @type {?} */
    TreeTableRowAction.prototype.classes;
    /** @type {?} */
    TreeTableRowAction.prototype.action;
    /** @type {?} */
    TreeTableRowAction.prototype.type;
    /** @type {?} */
    TreeTableRowAction.prototype.reference;
    /** @type {?} */
    TreeTableRowAction.prototype.context;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularTreeTableComponent, AngularTreeTableModule, AngularTreeTableService, ExpandableArrowPlacement, ExpandableType, TreeTableData, TreeTableDataConfig, TreeTableDataEvents, TreeTableDataServerConfig, TreeTableDataServerConfigParamMapping, TreeTableHeaderObject, TreeTableRow, TreeTableRowAction, TreeTableRowActionType, TtDataType };
//# sourceMappingURL=angular-tree-table.js.map
