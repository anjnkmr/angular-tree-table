/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class TreeTableDataConfig {
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
const ExpandableType = {
    DIFFERENT_HEADERS: 'DIFFERENT_HEADERS',
    SAME_HEADERS: 'SAME_HEADERS',
};
export { ExpandableType };
/** @enum {string} */
const ExpandableArrowPlacement = {
    SEPERATE_COLUMN: 'SEPERATE_COLUMN',
    FIRST_COLUMN: 'FIRST_COLUMN',
};
export { ExpandableArrowPlacement };
export class TreeTableDataEvents {
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
export class TreeTableDataServerConfig {
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
export class TreeTableDataServerConfigParamMapping {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS10YWJsZS1kYXRhLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItdHJlZS10YWJsZS8iLCJzb3VyY2VzIjpbImNsYXNzZXMvdHJlZS10YWJsZS1kYXRhLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLG1CQUFtQjtJQUFoQzs7Ozs7O1FBTUksWUFBTyxHQUFJLElBQUksQ0FBQzs7Ozs7O1FBTWhCLGVBQVUsR0FBUyxFQUFFLENBQUM7Ozs7OztRQU10QixxQkFBZ0IsR0FBSSxJQUFJLENBQUM7Ozs7OztRQU16QixxQkFBZ0IsR0FBSSxLQUFLLENBQUM7Ozs7OztRQU0xQiw2QkFBd0IsR0FBSSxLQUFLLENBQUM7Ozs7OztRQU1sQyxtQ0FBOEIsR0FBSSxLQUFLLENBQUM7Ozs7Ozs7O1FBUXhDLHlCQUFvQixHQUFJLEVBQUUsQ0FBQzs7Ozs7O1FBTTNCLGtCQUFhLEdBQUkscURBQXFELENBQUM7Ozs7OztRQU12RSxxQkFBZ0IsR0FBSSx1QkFBdUIsQ0FBQzs7Ozs7O1FBTTVDLHNCQUFpQixHQUFJLHdCQUF3QixDQUFDOzs7Ozs7UUFNOUMseUJBQW9CLEdBQUksMkJBQTJCLENBQUM7Ozs7OztRQU1wRCxvQkFBZSxHQUFJLElBQUksQ0FBQzs7Ozs7O1FBTXhCLHFCQUFnQixHQUFJLEtBQUssQ0FBQzs7Ozs7O1FBTTFCLHdCQUFtQixHQUFJLEtBQUssQ0FBQzs7Ozs7O1FBTTdCLCtCQUEwQixHQUFJLEtBQUssQ0FBQzs7Ozs7Ozs7UUFRcEMsaUJBQVksR0FBSSxFQUFFLENBQUM7Ozs7OztRQU1uQiwyQkFBc0IsR0FBSSxJQUFJLENBQUM7Ozs7OztRQU0vQixjQUFTLEdBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQzs7Ozs7O1FBTS9CLFVBQUssR0FBSSxDQUFDLENBQUM7Ozs7UUFJWCxrQkFBYSxHQUFJLEVBQUUsQ0FBQzs7Ozs7O1FBTXBCLGtC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QU8scUNBQXFDO0lBQWxEOzs7Ozs7UUFNSSxTQUFJLEdBQUksTUFBTSxDQUFDOzs7Ozs7UUFNZixVQUFLLEdBQUksT0FBTyxDQUFDOzs7Ozs7UUFNakIsU0FBSSxHQUFJLE1BQU0sQ0FBQzs7Ozs7O1FBTWYsV0FBTSxHQUFJLFFBQVEsQ0FBQzs7Ozs7O1FBTW5CLGNBQVMsR0FBSSxXQUFXLENBQUM7Ozs7OztRQU16QixlQUFVLEdBQUksWUFBWSxDQUFDOzs7Ozs7UUFNM0IsY0FBUyxHQUFJLFdBQVcsQ0FBQztJQUM3QixDQUFDO0NBQUE7Ozs7Ozs7O0lBckNHLHFEQUFlOzs7Ozs7O0lBTWYsc0RBQWlCOzs7Ozs7O0lBTWpCLHFEQUFlOzs7Ozs7O0lBTWYsdURBQW1COzs7Ozs7O0lBTW5CLDBEQUF5Qjs7Ozs7OztJQU16QiwyREFBMkI7Ozs7Ozs7SUFNM0IsMERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRyZWVUYWJsZURhdGFDb25maWcge1xuICAgIC8qKlxuICAgICAqIENvbnRleHQgc2hvdWxkIGJlIEhvc3QgY29tcG9uZW50IGluc3RhbmNlIG9mIHRyZWUgdGFibGVcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBudWxsYFxuICAgICAqL1xuICAgIGNvbnRleHQ/ID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHR3byBkaW1lbnNpb25hbCBhcnJheSwgZWFjaCBzdWJhcnJheSBzaG91bGQgY29udGFpbiAyIG9yIGxlc3Mgc3RyaW5ncywgYW5kIHRoZXJlIGlzIG5vIGxpbWl0IGZvciBzdWJhcnJheXMgY291bnRcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBbXWBcbiAgICAgKi9cbiAgICBleHRyYUluZm9zPzpbXVtdID0gW107XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIHNob3cvIGhpZGUgVGFibGUgSGVhZGVyc1xuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHRydWVgIC0gU2hvd3MgVGFibGUgSGVhZGVyc1xuICAgICAqL1xuICAgIHNob3dUYWJsZUhlYWRlcnM/ID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBDb2x1bW4gVmlzaWJpbGl0eSB3aWxsIHNob3cgdGhlIGdyb3VwIG9mIGJ1dHRvbnMgb24gdG9wIG9mIHRhYmxlLCB3aGljaCB3aWxsIGFsbG93IHVzIHRvIHRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiBlYWNoIGNvbHVtblxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYCAtIGhpZGRlblxuICAgICAqL1xuICAgIGNvbHVtblZpc2liaWxpdHk/ID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBDb2x1bW4gVmlzaWJpbGl0eSBidXQgaXQgc2hvd24gYXMgcG9wb3Zlci4gSXQgcmVxdWlyZXMgcG9wcGVyIGpzIGxpYnJhcnkgdG8gd29ya1xuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGZhbHNlYCAtIGhpZGRlblxuICAgICAqL1xuICAgIGNvbHVtblZpc2liaWxpdHlEcm9wRG93bj8gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBFbmFibGVzIHNlcGVyYXRlIHNlYXJjaCBmaWVsZCBmb3IgZWFjaCBjb2x1bW4gdW5kZXIgZWFjaCB0YWJsZSBoZWFkZXJcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAgLSBEaXNhYmxlZFxuICAgICAqL1xuICAgIHZpc2libGVDb2x1bW5GaWx0ZXJzVmlzaWJpbGl0eT8gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gc2V0IHRoZSBzZWFyY2ggdmFsdWUgYnkgZGVmYXVsdCBiYXNlZCBvbiBgZGF0YVByb3BlcnR5YFxuICAgICAqIFxuICAgICAqIEV4OiB7Y291bnRyeTogJ0luZGlhJ31cbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGB7fWBcbiAgICAgKi9cbiAgICB2aXNpYmxlQ29sdW1uRmlsdGVycz8gPSB7fTtcbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIGZvciB0YWJsZSB0YWdcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBzdGFja3RhYmxlIHRhYmxlLWJvcmRlcmVkIGxhcmdlLW9ubHkgdGFibGUgdGFibGUtc21gXG4gICAgICovXG4gICAgZnVsbENsYXNzTmFtZT8gPSAnc3RhY2t0YWJsZSB0YWJsZS1ib3JkZXJlZCBsYXJnZS1vbmx5IHRhYmxlIHRhYmxlLXNtJztcbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIGZvciB0aCB0YWcgd2hpY2ggaXMgc29ydGVkIGluIGBhc2NlbmRpbmdgIG9yZGVyXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgY29sLXNvcnQgY29sLXNvcnQtYXNjYFxuICAgICAqL1xuICAgIHNvcnRBc2NDbGFzc05hbWU/ID0gJ2NvbC1zb3J0IGNvbC1zb3J0LWFzYyc7XG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSBmb3IgdGggdGFnIHdoaWNoIGlzIHNvcnRlZCBpbiBgZGVzY2VuZGluZ2Agb3JkZXJcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBjb2wtc29ydCBjb2wtc29ydC1kZXNjYFxuICAgICAqL1xuICAgIHNvcnREZXNjQ2xhc3NOYW1lPyA9ICdjb2wtc29ydCBjb2wtc29ydC1kZXNjJztcbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIGZvciB0aCB0YWcgd2hpY2ggaXMgYG5vdCBzb3J0ZWRgXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgY29sLXNvcnQgY29sLXNvcnQtbm90aGluZ2BcbiAgICAgKi9cbiAgICBzb3J0Tm90aGluZ0NsYXNzTmFtZT8gPSAnY29sLXNvcnQgY29sLXNvcnQtbm90aGluZyc7XG4gICAgLyoqXG4gICAgICogRXh0cmEgY2xhc3MgbmFtZSBmb3IgdGFibGUgdGFnXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgbnVsbGBcbiAgICAgKi9cbiAgICBjdXN0b21DbGFzc05hbWU/ID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBUaGlzIG9wdGlvbiB3aWxsIHNob3cgdGhlIEV4cGFuZCBSb3cgQnV0dG9uIG9uIGVhY2ggcm93LCBpZiBjaGlsZCBleGlzdHNcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWBcbiAgICAgKi9cbiAgICBzaG93RXhwYW5kQXJyb3dzPyA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFRoaXMgb3B0aW9uIHdpbGwgc2hvdyB0aGUgRXhwYW5kIFJvdyBCdXR0b24gb24gdGFibGUgaGVhZGVyLCB3aGljaCB3aWxsIGV4cGFuZC8gY29sbGFwc2UgYWxsIHJvd3Mgd2l0aCBjaGlsZHJlbiBhdCBhIHRpbWVcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWBcbiAgICAgKi9cbiAgICBzaG93RXhwYW5kQWxsQXJyb3dzPyA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIElmIHRoaXMgb3B0aW9uIGlzIGB0cnVlYCB0aGVuIGl0IHdpbGwgZXhwYW5kIGFsbCB0aGUgcm93cyBpcnJlc3BlY3RpdmUgb2YgY2hpbGQgdGFibGUgaGFzIHJvd3Mgb3Igbm90XG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgIC0gT25seSBleHBhbmQgcm93cyB3aXRoIGNoaWxkIHdoaWNoIGhhcyByb3dzXG4gICAgICovXG4gICAgc2hvd0V4cGFuZEFsbEVtcHR5Q2hpbGRyZW4/ID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB1c2VkIHNldCB0aGUgZGVmYXVsdCBzb3J0ZWQgY29sdW1uIGFuZCBvcmRlciBiYXNlZCBvbiBkYXRhUHJvcGVydHlcbiAgICAgKiBcbiAgICAgKiBFeDoge2ZpcnN0TmFtZTogJ2FzYyd9XG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBge31gXG4gICAgICovXG4gICAgc29ydGVkQ29sdW1uPyA9IHt9O1xuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBzaG93cyB0aGUgcGFnZSBsZW5ndGggZHJvcGRvd24sIHdoaWNoIHdpbGwgdXNlZCB0byByZW5kZXIgdGhlIG5vIG9mIHJvd3Mgb24gZWFjaCBwYWdlXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWBcbiAgICAgKi9cbiAgICBzaG93UGFnZUxlbmd0aERyb3Bkb3duPyA9IHRydWU7XG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIHVzZWQgdG8gY3VzdG9taXplIHBhZ2UgbGVuZ3RoIGRyb3Bkb3duIG9wdGlvbnNcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBbMTAsIDI1LCA1MCwgMTAwXWBcbiAgICAgKi9cbiAgICBwYWdlU2l6ZXM/ID0gWzEwLCAyNSwgNTAsIDEwMF07XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBmb3IgaW50ZXJuYWwgcHVwb3NlIG9mIHRoZSBgYW5ndWxhci10cmVlLXRhYmxlYC4gRG9uJ3QgdXNlIGl0LlxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYDBgXG4gICAgICovXG4gICAgbGV2ZWw/ID0gMDtcbiAgICAvKipcbiAgICAgKiBDb2x1bW4gRmlsdGVycyBhcmUgdXNlZCB0byBzZW5kIHRoZSBjb2x1bW4gd2lzZSBzZWFyY2gga2V5d29yZHMgdG8gc2VydmVyLiBEb24ndCB1c2UgaXQuIEl0IHdpbGwgYmUgdXNlZCBieSBgYW5ndWxhci10cmVlLXRhYmxlYCBpdHNlbGYuXG4gICAgICovXG4gICAgY29sdW1uRmlsdGVycz8gPSB7fTtcbiAgICAvKipcbiAgICAgKiBSb3cgY2xpY2thYmxlcyBhcmUgYWxsb3dzIHlvdSB0byBjb25maWd1cmUgdGhlIHJvdyBkZXRhaWwgY2xpY2tpbmcgYWN0aW9ucyB3aXRoIGEgY2FsbGJhY2sgbWV0aG9kIGJhc2VkIG9uIGRhdGFQcm9wZXJ0eVxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHt9YFxuICAgICAqL1xuICAgIHJvd0NsaWNrYWJsZXM/ID0ge307XG4gICAgLyoqXG4gICAgICogVGhpcyBzaG91bGQgYmUgaW5zdGFuY2Ugb2YgY29tcG9uZW50IG9yIHRoZSBpbnN0YW5jZSBvZiBjbGFzcyB3aGVyZSB0aGUgY2FsbGJhY2tzIG9mIHJvd0NsaWNrYWJsZXMgaW1wbGVtZW50ZWRcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBudWxsYFxuICAgICAqL1xuICAgIHJvd0NsaWNrYWJsZXNDb250ZXh0PyA9IG51bGw7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIHNob3cvIGhpZGUgdGhlIGNvbW1vbiBzZWFyY2ggYm94XG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWBcbiAgICAgKi9cbiAgICBjb21tb25TZWFyY2g/ID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gc2hvdy8gaGlkZSBFeHBvcnQgRXhjZWwgQnV0dG9uXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgXG4gICAgICovXG4gICAgZXhjZWxFeHBvcnRCdXR0b24/ID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgRXhjZWxFeHBvcnQgb25seSBmaWx0ZXJlZCB0cnVlXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgXG4gICAgICovXG4gICAgZXhjZWxFeHBvcnRPbmx5RmlsdGVyZWRSb3dzPyA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdXNlZCB0byBjb25maWd1cmUgdGhlIEV4Y2VsRXhwb3J0IGZpbGUgbmFtZVxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYEV4cG9ydEZpbGVgXG4gICAgICovXG4gICAgZXhjZWxFeHBvcnRGaWxlTmFtZT8gPSAnRXhwb3J0RmlsZSc7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgRXhjZWwgRXhwb3J0IEJ1dHRvbiB0ZXh0XG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgRXhjZWwgRXhwb3J0YFxuICAgICAqL1xuICAgIGV4Y2VsRXhwb3J0QnV0dG9uVGV4dD8gPSAnRXhjZWwgRXhwb3J0JztcbiAgICAvKipcbiAgICAgKiBJdCBpcyBXSVAsIFdoaWNoIHdpbGwgYmUgdXNlZCB0byBleHBvcnQgdG8gZXhjZWwgZmlsZSBhbG9uZyB3aXRoIGFsbCBjaGlsZHJlbiBvZiByb3dzXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWBcbiAgICAgKi9cbiAgICBleGNlbEV4cG9ydEFsbENoaWxkcmVuPyA9IHRydWU7XG4gICAgLyoqXG4gICAgICogSXQgaXMgV0lQLCBXaGljaCB3aWxsIGJlIHVzZWQgdG8gZXhwb3J0IHRvIGV4Y2VsIGZpbGUgYWxvbmcgd2l0aCBhbGwgY2hpbGRyZW4gb2Ygcm93c1xuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHRydWVgXG4gICAgICovXG4gICAgZXhjZWxFeHBvcnRPbmx5RXhwYW5kZWQ/ID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogSXQgaXMgV0lQLCB3aGljaCB3aWxsIHVzZWQgdG8gY29uZmlndXJlIHRoZSBjYWxsYmFja3MgZm9yIGV2ZW50cyBvZiB0aGUgYGFuZ3VsYXItdHJlZS10YWJsZWBcbiAgICAgKi9cbiAgICBldmVudHM/OiBUcmVlVGFibGVEYXRhRXZlbnRzID0gbmV3IFRyZWVUYWJsZURhdGFFdmVudHMoKTtcblxuICAgIC8qKlxuICAgICAqIEV4cGFuZGFibGUgVHlwZVxuICAgICAqIERlZmF1bHQ6IGBFeHBhbmRhYmxlVHlwZS5ESUZGRVJFTlRfSEVBREVSU2BcbiAgICAgKi9cbiAgICBleHBhbmRhYmxlVHlwZT86IEV4cGFuZGFibGVUeXBlID0gRXhwYW5kYWJsZVR5cGUuRElGRkVSRU5UX0hFQURFUlM7XG5cbiAgICBleHBhbmRhYmxlQXJyb3dQbGFjZW1lbnQ/OiBFeHBhbmRhYmxlQXJyb3dQbGFjZW1lbnQgPSBFeHBhbmRhYmxlQXJyb3dQbGFjZW1lbnQuU0VQRVJBVEVfQ09MVU1OO1xufVxuXG5leHBvcnQgZW51bSBFeHBhbmRhYmxlVHlwZSB7XG4gICAgRElGRkVSRU5UX0hFQURFUlMgPSAnRElGRkVSRU5UX0hFQURFUlMnLCBcbiAgICBTQU1FX0hFQURFUlMgPSAnU0FNRV9IRUFERVJTJ1xufVxuXG5leHBvcnQgZW51bSBFeHBhbmRhYmxlQXJyb3dQbGFjZW1lbnQge1xuICAgIFNFUEVSQVRFX0NPTFVNTiA9ICdTRVBFUkFURV9DT0xVTU4nLCBcbiAgICBGSVJTVF9DT0xVTU4gPSAnRklSU1RfQ09MVU1OJ1xufVxuXG5leHBvcnQgY2xhc3MgVHJlZVRhYmxlRGF0YUV2ZW50cyB7XG4gICAgc2hvdWxkUm93RXhwYW5kPyA9IG51bGw7XG4gICAgcm93RXhwYW5kZWQ/ID0gbnVsbDtcbiAgICBzaG91bGRSb3dDb2xsYXBzZT8gPSBudWxsO1xuICAgIHJvd0NvbGxhcHNlZD8gPSBudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgVHJlZVRhYmxlRGF0YVNlcnZlckNvbmZpZyB7XG4gICAgLyoqXG4gICAgICogYHVybGAgdG8gaW52b2tlIGZvciB0aGUgZGF0YSBmcm9tIHNlcnZlclxuICAgICAqIFxuICAgICAqIEV4OiBgaHR0cHM6Ly9yZXN0YXBpc2FtcGxlLmNvbS9lbnRpdGllc2BcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBudWxsYFxuICAgICAqL1xuICAgIHVybCA9IG51bGw7XG4gICAgLyoqXG4gICAgICogYHVybGAgdG8gaW52b2tlIGZvciB0aGUgZGF0YSBmcm9tIHNlcnZlciBhcyBhIGZpbGVcbiAgICAgKiBcbiAgICAgKiBFeDogYGh0dHBzOi8vcmVzdGFwaXNhbXBsZS5jb20vZW50aXRpZXMvZXhwb3J0YFxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYG51bGxgXG4gICAgICovXG4gICAgZXhjZWxFeHBvcnRVcmw/ID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBIVFRQIE1ldGhvZCBmb3IgYHVybGAgYW5kIGBleGNlbEV4cG9ydFVybGBcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBudWxsYFxuICAgICAqL1xuICAgIG1ldGhvZD8gPSBudWxsO1xuICAgIC8qKlxuICAgICAqIGBhbmd1bGFyLXRyZWUtdGFibGVgIGhhbmRsZXMgYWxsIHRoZSBldmVudHMsIHBhZ2UgY2hhbmdlLCBuZXh0IHBhZ2UsIHByZXYgcGFnZSwgcGFnZSBsZW5ndGggY2hhbmdlIHRocm91Z2ggYXBpIGNhbGwgYW5kIHVzaW5nIGRpZmZlcmVudCBwYXJhbWV0ZXIuIFRoZXNlIGFyZSB1c2VkIHRvIGN1c3RvbWl6ZSB0aG9zZSBwYXJhbWV0ZXIga2V5cyBhcyBwZXIgdGhlIHNlcnZlciBzaWRlIHJlcXVpcmVtZW50c1xuICAgICAqXG4gICAgICogRGVmYXVsdCB2YWx1ZXMgYXJlIGBwYWdlLCBsaW1pdCwgc29ydCwgc2VhcmNoLCBjb2xTZWFyY2gsIGNvbEZpbHRlcnMsIHBhZ2VUb2tlbmBcbiAgICAgKi9cbiAgICBwYXJhbU5hbWVzPyA9IG5ldyBUcmVlVGFibGVEYXRhU2VydmVyQ29uZmlnUGFyYW1NYXBwaW5nKCk7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgcHJvcGVydHkga2V5IG9mIGFycmF5IGluIHRoZSBhcGkgcmVzcG9uc2VcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGByb3dzYFxuICAgICAqL1xuICAgIHJvd3NLZXk/ID0gJ3Jvd3MnO1xuICAgIC8qKiBcbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gY29uZmlndXJlIHRoZSBwcm9wZXJ0eSBrZXkgb2YgdG90YWxSb3dzQ291bnQgaW4gdGhlIGFwaSByZXNwb25zZVxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHRvdGFsUm93c0NvdW50YFxuICAgICAqL1xuICAgIHRvdGFsUm93c0NvdW50S2V5PyA9ICd0b3RhbFJvd3NDb3VudCc7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgcHJvcGVydHkga2V5IG9mIGZpbHRlcmVkUm93c0NvdW50IGluIHRoZSBhcGkgcmVzcG9uc2VcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmaWx0ZXJlZFJvd0NvdW50YFxuICAgICAqL1xuICAgIGZpbHRlcmVkUm93c0NvdW50S2V5PyA9ICdmaWx0ZXJlZFJvd3NDb3VudCc7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgdW5pcXVlIGtleSBpbiB0aGUgZWFjaCByb3cgb2YgdGhlIHJlc3BvbnNlXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgbnVsbGBcbiAgICAgKi9cbiAgICByb3dVbmlxdWVLZXk/ID0gbnVsbFxufVxuXG5leHBvcnQgY2xhc3MgVHJlZVRhYmxlRGF0YVNlcnZlckNvbmZpZ1BhcmFtTWFwcGluZyB7XG4gICAgLyoqXG4gICAgICogUGFnZSBudW1iZXIgb2YgdGhlIHBhZ2Ugd2lsbCBzZW5kIHVuZGVyIGtleSBjb25maWd1cmVkIGhlcmVcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBwYWdlYFxuICAgICAqL1xuICAgIHBhZ2U/ID0gJ3BhZ2UnO1xuICAgIC8qKlxuICAgICAqIExpbWl0IG9mIHRoZSBwYWdlIHdpbGwgc2VuZCB1bmRlciBrZXkgY29uZmlndXJlZCBoZXJlXG4gICAgICogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgbGltaXRgXG4gICAgICovXG4gICAgbGltaXQ/ID0gJ2xpbWl0JztcbiAgICAvKipcbiAgICAgKiBTb3J0IG9mIHRoZSB0YWJsZSBvZiBlYWNoIGNvbHVtbiB3aWxsIHNlbmQgdW5kZXIga2V5IGNvbmZpZ3VyZWQgaGVyZVxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHNvcnRgXG4gICAgICovXG4gICAgc29ydD8gPSAnc29ydCc7XG4gICAgLyoqXG4gICAgICogU2VhcmNoIGtleXdvcmQgd2lsIGJlIHNlbmQgdW5kZXIga2V5IGNvbmZpZ3VyZWQgaGVyZVxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHNlYXJjaGBcbiAgICAgKi9cbiAgICBzZWFyY2g/ID0gJ3NlYXJjaCc7XG4gICAgLyoqXG4gICAgICogU2VhcmNoIGtleXdvcmQgb2YgZWFjaCBjb2x1bW4gd2lsbCBiZSBzZW5kIHVuZGVyIGtleSBjb25maWd1cmVkIGhlcmVcbiAgICAgKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBjb2xTZWFyY2hgXG4gICAgICovXG4gICAgY29sU2VhcmNoPyA9ICdjb2xTZWFyY2gnO1xuICAgIC8qKlxuICAgICAqIEZpbHRlciBvZiBlYWNoIGNvbHVtbiB3aWxsIGJlIHNlbmQgdW5kZXIga2V5IGNvbmZpZ3VyZWQgaGVyZVxuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYGNvbEZpbHRlcnNgXG4gICAgICovXG4gICAgY29sRmlsdGVycz8gPSAnY29sRmlsdGVycyc7XG4gICAgLyoqXG4gICAgICogTm90IHVzaW5nIHJpZ2h0IG5vd1xuICAgICAqIFxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYHBhZ2VUb2tlbmBcbiAgICAgKi9cbiAgICBwYWdlVG9rZW4/ID0gJ3BhZ2VUb2tlbic7XG59Il19