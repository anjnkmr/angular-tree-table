import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, KeyValueDiffers, Input, Output, NgModule } from '@angular/core';
import * as moment_ from 'moment';
import { saveAs } from 'file-saver';
import { utils, write } from 'xlsx';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularTreeTableService {
    constructor() { }
}
AngularTreeTableService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AngularTreeTableService.ctorParameters = () => [];
/** @nocollapse */ AngularTreeTableService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularTreeTableService_Factory() { return new AngularTreeTableService(); }, token: AngularTreeTableService, providedIn: "root" });

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
}
class TreeTableDataEvents {
    constructor() {
        this.shouldRowExpand = null;
        this.rowExpanded = null;
        this.shouldRowCollapse = null;
        this.rowCollapsed = null;
    }
}
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
                saveAs(blob, 'Orders.xlsx');
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
const moment = moment_;
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
        const ws = utils.json_to_sheet(dataRows);
        /** @type {?} */
        const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
        /** @type {?} */
        const excelBuffer = write(wb, { bookType: 'xlsx', type: 'array' });
        /** @type {?} */
        const data = new Blob([excelBuffer], { type: fileType });
        saveAs(data, this.tableData.config.excelExportFileName + fileExtension);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularTreeTableModule {
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
}

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

export { AngularTreeTableComponent, AngularTreeTableModule, AngularTreeTableService, TreeTableData, TreeTableHeaderObject, TreeTableRow, TreeTableRowAction, TreeTableRowActionType, TtDataType, TreeTableDataConfig as ɵa, TreeTableDataServerConfig as ɵb };
//# sourceMappingURL=angular-tree-table.js.map
