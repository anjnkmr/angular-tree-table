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
    return TreeTableDataConfig;
}());
export { TreeTableDataConfig };
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
var TreeTableDataEvents = /** @class */ (function () {
    function TreeTableDataEvents() {
        this.shouldRowExpand = null;
        this.rowExpanded = null;
        this.shouldRowCollapse = null;
        this.rowCollapsed = null;
    }
    return TreeTableDataEvents;
}());
export { TreeTableDataEvents };
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
export { TreeTableDataServerConfig };
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
export { TreeTableDataServerConfigParamMapping };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS10YWJsZS1kYXRhLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItdHJlZS10YWJsZS8iLCJzb3VyY2VzIjpbImNsYXNzZXMvdHJlZS10YWJsZS1kYXRhLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFBQTs7Ozs7O1FBTUksWUFBTyxHQUFJLElBQUksQ0FBQzs7Ozs7O1FBTWhCLGVBQVUsR0FBUyxFQUFFLENBQUM7Ozs7OztRQU10QixxQkFBZ0IsR0FBSSxJQUFJLENBQUM7Ozs7OztRQU16QixxQkFBZ0IsR0FBSSxLQUFLLENBQUM7Ozs7OztRQU0xQiw2QkFBd0IsR0FBSSxLQUFLLENBQUM7Ozs7OztRQU1sQyxtQ0FBOEIsR0FBSSxLQUFLLENBQUM7Ozs7Ozs7O1FBUXhDLHlCQUFvQixHQUFJLEVBQUUsQ0FBQzs7Ozs7O1FBTTNCLGtCQUFhLEdBQUkscURBQXFELENBQUM7Ozs7OztRQU12RSxxQkFBZ0IsR0FBSSx1QkFBdUIsQ0FBQzs7Ozs7O1FBTTVDLHNCQUFpQixHQUFJLHdCQUF3QixDQUFDOzs7Ozs7UUFNOUMseUJBQW9CLEdBQUksMkJBQTJCLENBQUM7Ozs7OztRQU1wRCxvQkFBZSxHQUFJLElBQUksQ0FBQzs7Ozs7O1FBTXhCLHFCQUFnQixHQUFJLEtBQUssQ0FBQzs7Ozs7O1FBTTFCLHdCQUFtQixHQUFJLEtBQUssQ0FBQzs7Ozs7O1FBTTdCLCtCQUEwQixHQUFJLEtBQUssQ0FBQzs7Ozs7Ozs7UUFRcEMsaUJBQVksR0FBSSxFQUFFLENBQUM7Ozs7OztRQU1uQiwyQkFBc0IsR0FBSSxJQUFJLENBQUM7Ozs7OztRQU0vQixjQUFTLEdBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQzs7Ozs7O1FBTS9CLFVBQUssR0FBSSxDQUFDLENBQUM7Ozs7UUFJWCxrQkFBYSxHQUFJLEVBQUUsQ0FBQzs7Ozs7O1FBTXBCLGtCQUFhLEdBQUksRUFBRSxDQUFD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Q0FBQztJQUFELDRDQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQzs7Ozs7Ozs7O0lBckNHLHFEQUFlOzs7Ozs7O0lBTWYsc0RBQWlCOzs7Ozs7O0lBTWpCLHFEQUFlOzs7Ozs7O0lBTWYsdURBQW1COzs7Ozs7O0lBTW5CLDBEQUF5Qjs7Ozs7OztJQU16QiwyREFBMkI7Ozs7Ozs7SUFNM0IsMERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRyZWVUYWJsZURhdGFDb25maWcge1xuICAgIC8qKlxuICAgICAqIENvbnRleHQgc2hvdWxkIGJlIEhvc3QgY29tcG9uZW50IGluc3RhbmNlIG9mIHRyZWUgdGFibGVcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBudWxsYFxuICAgICAqL1xuICAgIGNvbnRleHQ/ID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHR3byBkaW1lbnNpb25hbCBhcnJheSwgZWFjaCBzdWJhcnJheSBzaG91bGQgY29udGFpbiAyIG9yIGxlc3Mgc3RyaW5ncywgYW5kIHRoZXJlIGlzIG5vIGxpbWl0IGZvciBzdWJhcnJheXMgY291bnRcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBbXWBcbiAgICAgKi9cbiAgICBleHRyYUluZm9zPzpbXVtdID0gW107XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIHNob3cvIGhpZGUgVGFibGUgSGVhZGVyc1xuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHRydWVgIC0gU2hvd3MgVGFibGUgSGVhZGVyc1xuICAgICAqL1xuICAgIHNob3dUYWJsZUhlYWRlcnM/ID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBDb2x1bW4gVmlzaWJpbGl0eSB3aWxsIHNob3cgdGhlIGdyb3VwIG9mIGJ1dHRvbnMgb24gdG9wIG9mIHRhYmxlLCB3aGljaCB3aWxsIGFsbG93IHVzIHRvIHRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiBlYWNoIGNvbHVtblxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYCAtIGhpZGRlblxuICAgICAqL1xuICAgIGNvbHVtblZpc2liaWxpdHk/ID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBDb2x1bW4gVmlzaWJpbGl0eSBidXQgaXQgc2hvd24gYXMgcG9wb3Zlci4gSXQgcmVxdWlyZXMgcG9wcGVyIGpzIGxpYnJhcnkgdG8gd29ya1xuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYCAtIGhpZGRlblxuICAgICAqL1xuICAgIGNvbHVtblZpc2liaWxpdHlEcm9wRG93bj8gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBFbmFibGVzIHNlcGVyYXRlIHNlYXJjaCBmaWVsZCBmb3IgZWFjaCBjb2x1bW4gdW5kZXIgZWFjaCB0YWJsZSBoZWFkZXJcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAgLSBEaXNhYmxlZFxuICAgICAqL1xuICAgIHZpc2libGVDb2x1bW5GaWx0ZXJzVmlzaWJpbGl0eT8gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gc2V0IHRoZSBzZWFyY2ggdmFsdWUgYnkgZGVmYXVsdCBiYXNlZCBvbiBgZGF0YVByb3BlcnR5YFxuICAgICAqIFxuICAgICAqIEV4OiB7Y291bnRyeTogJ0luZGlhJ31cbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGB7fWBcbiAgICAgKi9cbiAgICB2aXNpYmxlQ29sdW1uRmlsdGVycz8gPSB7fTtcbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIGZvciB0YWJsZSB0YWdcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBzdGFja3RhYmxlIHRhYmxlLWJvcmRlcmVkIGxhcmdlLW9ubHkgdGFibGUgdGFibGUtc21gXG4gICAgICovXG4gICAgZnVsbENsYXNzTmFtZT8gPSAnc3RhY2t0YWJsZSB0YWJsZS1ib3JkZXJlZCBsYXJnZS1vbmx5IHRhYmxlIHRhYmxlLXNtJztcbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIGZvciB0aCB0YWcgd2hpY2ggaXMgc29ydGVkIGluIGBhc2NlbmRpbmdgIG9yZGVyXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgY29sLXNvcnQgY29sLXNvcnQtYXNjYFxuICAgICAqL1xuICAgIHNvcnRBc2NDbGFzc05hbWU/ID0gJ2NvbC1zb3J0IGNvbC1zb3J0LWFzYyc7XG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSBmb3IgdGggdGFnIHdoaWNoIGlzIHNvcnRlZCBpbiBgZGVzY2VuZGluZ2Agb3JkZXJcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBjb2wtc29ydCBjb2wtc29ydC1kZXNjYFxuICAgICAqL1xuICAgIHNvcnREZXNjQ2xhc3NOYW1lPyA9ICdjb2wtc29ydCBjb2wtc29ydC1kZXNjJztcbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIGZvciB0aCB0YWcgd2hpY2ggaXMgYG5vdCBzb3J0ZWRgXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgY29sLXNvcnQgY29sLXNvcnQtbm90aGluZ2BcbiAgICAgKi9cbiAgICBzb3J0Tm90aGluZ0NsYXNzTmFtZT8gPSAnY29sLXNvcnQgY29sLXNvcnQtbm90aGluZyc7XG4gICAgLyoqXG4gICAgICogRXh0cmEgY2xhc3MgbmFtZSBmb3IgdGFibGUgdGFnXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgbnVsbGBcbiAgICAgKi9cbiAgICBjdXN0b21DbGFzc05hbWU/ID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBUaGlzIG9wdGlvbiB3aWxsIHNob3cgdGhlIEV4cGFuZCBSb3cgQnV0dG9uIG9uIGVhY2ggcm93LCBpZiBjaGlsZCBleGlzdHNcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWBcbiAgICAgKi9cbiAgICBzaG93RXhwYW5kQXJyb3dzPyA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFRoaXMgb3B0aW9uIHdpbGwgc2hvdyB0aGUgRXhwYW5kIFJvdyBCdXR0b24gb24gdGFibGUgaGVhZGVyLCB3aGljaCB3aWxsIGV4cGFuZC8gY29sbGFwc2UgYWxsIHJvd3Mgd2l0aCBjaGlsZHJlbiBhdCBhIHRpbWVcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWBcbiAgICAgKi9cbiAgICBzaG93RXhwYW5kQWxsQXJyb3dzPyA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIElmIHRoaXMgb3B0aW9uIGlzIGB0cnVlYCB0aGVuIGl0IHdpbGwgZXhwYW5kIGFsbCB0aGUgcm93cyBpcnJlc3BlY3RpdmUgb2YgY2hpbGQgdGFibGUgaGFzIHJvd3Mgb3Igbm90XG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgIC0gT25seSBleHBhbmQgcm93cyB3aXRoIGNoaWxkIHdoaWNoIGhhcyByb3dzXG4gICAgICovXG4gICAgc2hvd0V4cGFuZEFsbEVtcHR5Q2hpbGRyZW4/ID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB1c2VkIHNldCB0aGUgZGVmYXVsdCBzb3J0ZWQgY29sdW1uIGFuZCBvcmRlciBiYXNlZCBvbiBkYXRhUHJvcGVydHlcbiAgICAgKiBcbiAgICAgKiBFeDoge2ZpcnN0TmFtZTogJ2FzYyd9XG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBge31gXG4gICAgICovXG4gICAgc29ydGVkQ29sdW1uPyA9IHt9O1xuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBzaG93cyB0aGUgcGFnZSBsZW5ndGggZHJvcGRvd24sIHdoaWNoIHdpbGwgdXNlZCB0byByZW5kZXIgdGhlIG5vIG9mIHJvd3Mgb24gZWFjaCBwYWdlXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWBcbiAgICAgKi9cbiAgICBzaG93UGFnZUxlbmd0aERyb3Bkb3duPyA9IHRydWU7XG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIHVzZWQgdG8gY3VzdG9taXplIHBhZ2UgbGVuZ3RoIGRyb3Bkb3duIG9wdGlvbnNcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBbMTAsIDI1LCA1MCwgMTAwXWBcbiAgICAgKi9cbiAgICBwYWdlU2l6ZXM/ID0gWzEwLCAyNSwgNTAsIDEwMF07XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBmb3IgaW50ZXJuYWwgcHVwb3NlIG9mIHRoZSBgYW5ndWxhci10cmVlLXRhYmxlYC4gRG9uJ3QgdXNlIGl0LlxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYDBgXG4gICAgICovXG4gICAgbGV2ZWw/ID0gMDtcbiAgICAvKipcbiAgICAgKiBDb2x1bW4gRmlsdGVycyBhcmUgdXNlZCB0byBzZW5kIHRoZSBjb2x1bW4gd2lzZSBzZWFyY2gga2V5d29yZHMgdG8gc2VydmVyLiBEb24ndCB1c2UgaXQuIEl0IHdpbGwgYmUgdXNlZCBieSBgYW5ndWxhci10cmVlLXRhYmxlYCBpdHNlbGYuXG4gICAgICovXG4gICAgY29sdW1uRmlsdGVycz8gPSB7fTtcbiAgICAvKipcbiAgICAgKiBSb3cgY2xpY2thYmxlcyBhcmUgYWxsb3dzIHlvdSB0byBjb25maWd1cmUgdGhlIHJvdyBkZXRhaWwgY2xpY2tpbmcgYWN0aW9ucyB3aXRoIGEgY2FsbGJhY2sgbWV0aG9kIGJhc2VkIG9uIGRhdGFQcm9wZXJ0eVxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHt9YFxuICAgICAqL1xuICAgIHJvd0NsaWNrYWJsZXM/ID0ge307XG4gICAgLyoqXG4gICAgICogVGhpcyBzaG91bGQgYmUgaW5zdGFuY2Ugb2YgY29tcG9uZW50IG9yIHRoZSBpbnN0YW5jZSBvZiBjbGFzcyB3aGVyZSB0aGUgY2FsbGJhY2tzIG9mIHJvd0NsaWNrYWJsZXMgaW1wbGVtZW50ZWRcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBudWxsYFxuICAgICAqL1xuICAgIHJvd0NsaWNrYWJsZXNDb250ZXh0PyA9IG51bGw7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIHNob3cvIGhpZGUgdGhlIGNvbW1vbiBzZWFyY2ggYm94XG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWBcbiAgICAgKi9cbiAgICBjb21tb25TZWFyY2g/ID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gc2hvdy8gaGlkZSBFeHBvcnQgRXhjZWwgQnV0dG9uXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgXG4gICAgICovXG4gICAgZXhjZWxFeHBvcnRCdXR0b24/ID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgRXhjZWxFeHBvcnQgZmlsZSBuYW1lXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgRXhwb3J0RmlsZWBcbiAgICAgKi9cbiAgICBleGNlbEV4cG9ydEZpbGVOYW1lPyA9ICdFeHBvcnRGaWxlJztcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gY29uZmlndXJlIHRoZSBFeGNlbCBFeHBvcnQgQnV0dG9uIHRleHRcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBFeGNlbCBFeHBvcnRgXG4gICAgICovXG4gICAgZXhjZWxFeHBvcnRCdXR0b25UZXh0PyA9ICdFeGNlbCBFeHBvcnQnO1xuICAgIC8qKlxuICAgICAqIEl0IGlzIFdJUCwgV2hpY2ggd2lsbCBiZSB1c2VkIHRvIGV4cG9ydCB0byBleGNlbCBmaWxlIGFsb25nIHdpdGggYWxsIGNoaWxkcmVuIG9mIHJvd3NcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGB0cnVlYFxuICAgICAqL1xuICAgIGV4Y2VsRXhwb3J0QWxsQ2hpbGRyZW4/ID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBJdCBpcyBXSVAsIFdoaWNoIHdpbGwgYmUgdXNlZCB0byBleHBvcnQgdG8gZXhjZWwgZmlsZSBhbG9uZyB3aXRoIGFsbCBjaGlsZHJlbiBvZiByb3dzXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWBcbiAgICAgKi9cbiAgICBleGNlbEV4cG9ydE9ubHlFeHBhbmRlZD8gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJdCBpcyBXSVAsIHdoaWNoIHdpbGwgdXNlZCB0byBjb25maWd1cmUgdGhlIGNhbGxiYWNrcyBmb3IgZXZlbnRzIG9mIHRoZSBgYW5ndWxhci10cmVlLXRhYmxlYFxuICAgICAqL1xuICAgIGV2ZW50cz86IFRyZWVUYWJsZURhdGFFdmVudHMgPSBuZXcgVHJlZVRhYmxlRGF0YUV2ZW50cygpO1xufVxuXG5leHBvcnQgY2xhc3MgVHJlZVRhYmxlRGF0YUV2ZW50cyB7XG4gICAgc2hvdWxkUm93RXhwYW5kPyA9IG51bGw7XG4gICAgcm93RXhwYW5kZWQ/ID0gbnVsbDtcbiAgICBzaG91bGRSb3dDb2xsYXBzZT8gPSBudWxsO1xuICAgIHJvd0NvbGxhcHNlZD8gPSBudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgVHJlZVRhYmxlRGF0YVNlcnZlckNvbmZpZyB7XG4gICAgLyoqXG4gICAgICogYHVybGAgdG8gaW52b2tlIGZvciB0aGUgZGF0YSBmcm9tIHNlcnZlclxuICAgICAqIFxuICAgICAqIEV4OiBgaHR0cHM6Ly9yZXN0YXBpc2FtcGxlLmNvbS9lbnRpdGllc2BcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBudWxsYFxuICAgICAqL1xuICAgIHVybCA9IG51bGw7XG4gICAgLyoqXG4gICAgICogYHVybGAgdG8gaW52b2tlIGZvciB0aGUgZGF0YSBmcm9tIHNlcnZlciBhcyBhIGZpbGVcbiAgICAgKiBcbiAgICAgKiBFeDogYGh0dHBzOi8vcmVzdGFwaXNhbXBsZS5jb20vZW50aXRpZXMvZXhwb3J0YFxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYG51bGxgXG4gICAgICovXG4gICAgZXhjZWxFeHBvcnRVcmw/ID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBIVFRQIE1ldGhvZCBmb3IgYHVybGAgYW5kIGBleGNlbEV4cG9ydFVybGBcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBudWxsYFxuICAgICAqL1xuICAgIG1ldGhvZD8gPSBudWxsO1xuICAgIC8qKlxuICAgICAqIGBhbmd1bGFyLXRyZWUtdGFibGVgIGhhbmRsZXMgYWxsIHRoZSBldmVudHMsIHBhZ2UgY2hhbmdlLCBuZXh0IHBhZ2UsIHByZXYgcGFnZSwgcGFnZSBsZW5ndGggY2hhbmdlIHRocm91Z2ggYXBpIGNhbGwgYW5kIHVzaW5nIGRpZmZlcmVudCBwYXJhbWV0ZXIuIFRoZXNlIGFyZSB1c2VkIHRvIGN1c3RvbWl6ZSB0aG9zZSBwYXJhbWV0ZXIga2V5cyBhcyBwZXIgdGhlIHNlcnZlciBzaWRlIHJlcXVpcmVtZW50c1xuICAgICAqXG4gICAgICogRGVmYXVsdCB2YWx1ZXMgYXJlIGBwYWdlLCBsaW1pdCwgc29ydCwgc2VhcmNoLCBjb2xTZWFyY2gsIGNvbEZpbHRlcnMsIHBhZ2VUb2tlbmBcbiAgICAgKi9cbiAgICBwYXJhbU5hbWVzPyA9IG5ldyBUcmVlVGFibGVEYXRhU2VydmVyQ29uZmlnUGFyYW1NYXBwaW5nKCk7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgcHJvcGVydHkga2V5IG9mIGFycmF5IGluIHRoZSBhcGkgcmVzcG9uc2VcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGByb3dzYFxuICAgICAqL1xuICAgIHJvd3NLZXk/ID0gJ3Jvd3MnO1xuICAgIC8qKiBcbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gY29uZmlndXJlIHRoZSBwcm9wZXJ0eSBrZXkgb2YgdG90YWxSb3dzQ291bnQgaW4gdGhlIGFwaSByZXNwb25zZVxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHRvdGFsUm93c0NvdW50YFxuICAgICAqL1xuICAgIHRvdGFsUm93c0NvdW50S2V5PyA9ICd0b3RhbFJvd3NDb3VudCc7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgcHJvcGVydHkga2V5IG9mIGZpbHRlcmVkUm93c0NvdW50IGluIHRoZSBhcGkgcmVzcG9uc2VcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmaWx0ZXJlZFJvd0NvdW50YFxuICAgICAqL1xuICAgIGZpbHRlcmVkUm93c0NvdW50S2V5PyA9ICdmaWx0ZXJlZFJvd3NDb3VudCc7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgdW5pcXVlIGtleSBpbiB0aGUgZWFjaCByb3cgb2YgdGhlIHJlc3BvbnNlXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgbnVsbGBcbiAgICAgKi9cbiAgICByb3dVbmlxdWVLZXk/ID0gbnVsbFxufVxuXG5leHBvcnQgY2xhc3MgVHJlZVRhYmxlRGF0YVNlcnZlckNvbmZpZ1BhcmFtTWFwcGluZyB7XG4gICAgLyoqXG4gICAgICogUGFnZSBudW1iZXIgb2YgdGhlIHBhZ2Ugd2lsbCBzZW5kIHVuZGVyIGtleSBjb25maWd1cmVkIGhlcmVcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBwYWdlYFxuICAgICAqL1xuICAgIHBhZ2U/ID0gJ3BhZ2UnO1xuICAgIC8qKlxuICAgICAqIExpbWl0IG9mIHRoZSBwYWdlIHdpbGwgc2VuZCB1bmRlciBrZXkgY29uZmlndXJlZCBoZXJlXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgbGltaXRgXG4gICAgICovXG4gICAgbGltaXQ/ID0gJ2xpbWl0JztcbiAgICAvKipcbiAgICAgKiBTb3J0IG9mIHRoZSB0YWJsZSBvZiBlYWNoIGNvbHVtbiB3aWxsIHNlbmQgdW5kZXIga2V5IGNvbmZpZ3VyZWQgaGVyZVxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHNvcnRgXG4gICAgICovXG4gICAgc29ydD8gPSAnc29ydCc7XG4gICAgLyoqXG4gICAgICogU2VhcmNoIGtleXdvcmQgd2lsIGJlIHNlbmQgdW5kZXIga2V5IGNvbmZpZ3VyZWQgaGVyZVxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHNlYXJjaGBcbiAgICAgKi9cbiAgICBzZWFyY2g/ID0gJ3NlYXJjaCc7XG4gICAgLyoqXG4gICAgICogU2VhcmNoIGtleXdvcmQgb2YgZWFjaCBjb2x1bW4gd2lsbCBiZSBzZW5kIHVuZGVyIGtleSBjb25maWd1cmVkIGhlcmVcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBjb2xTZWFyY2hgXG4gICAgICovXG4gICAgY29sU2VhcmNoPyA9ICdjb2xTZWFyY2gnO1xuICAgIC8qKlxuICAgICAqIEZpbHRlciBvZiBlYWNoIGNvbHVtbiB3aWxsIGJlIHNlbmQgdW5kZXIga2V5IGNvbmZpZ3VyZWQgaGVyZVxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGNvbEZpbHRlcnNgXG4gICAgICovXG4gICAgY29sRmlsdGVycz8gPSAnY29sRmlsdGVycyc7XG4gICAgLyoqXG4gICAgICogTm90IHVzaW5nIHJpZ2h0IG5vd1xuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHBhZ2VUb2tlbmBcbiAgICAgKi9cbiAgICBwYWdlVG9rZW4/ID0gJ3BhZ2VUb2tlbic7XG59Il19