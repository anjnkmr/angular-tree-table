export declare class TreeTableDataConfig {
    /**
     * Context should be Host component instance of tree table
     *
     * Default value is `null`
     */
    context?: any;
    /**
     * This is two dimensional array, each subarray should contain 2 or less strings, and there is no limit for subarrays count
     *
     * Default value is `[]`
     */
    extraInfos?: [][];
    /**
     * This is used to show/ hide Table Headers
     *
     * Default value is `true` - Shows Table Headers
     */
    showTableHeaders?: boolean;
    /**
     * Column Visibility will show the group of buttons on top of table, which will allow us to toggle the visibility of each column
     *
     * Default value is `false` - hidden
     */
    columnVisibility?: boolean;
    /**
     * Same as Column Visibility but it shown as popover. It requires popper js library to work
     *
     * Default value is `false` - hidden
     */
    columnVisibilityDropDown?: boolean;
    /**
     * Enables seperate search field for each column under each table header
     *
     * Default value is `false` - Disabled
     */
    visibleColumnFiltersVisibility?: boolean;
    /**
     * This is used to set the search value by default based on `dataProperty`
     *
     * Ex: {country: 'India'}
     *
     * Default value is `{}`
     */
    visibleColumnFilters?: {};
    /**
     * Class name for table tag
     *
     * Default value is `stacktable table-bordered large-only table table-sm`
     */
    fullClassName?: string;
    /**
     * Class name for th tag which is sorted in `ascending` order
     *
     * Default value is `col-sort col-sort-asc`
     */
    sortAscClassName?: string;
    /**
     * Class name for th tag which is sorted in `descending` order
     *
     * Default value is `col-sort col-sort-desc`
     */
    sortDescClassName?: string;
    /**
     * Class name for th tag which is `not sorted`
     *
     * Default value is `col-sort col-sort-nothing`
     */
    sortNothingClassName?: string;
    /**
     * Extra class name for table tag
     *
     * Default value is `null`
     */
    customClassName?: any;
    /**
     * This option will show the Expand Row Button on each row, if child exists
     *
     * Default value is `false`
     */
    showExpandArrows?: boolean;
    /**
     * This option will show the Expand Row Button on table header, which will expand/ collapse all rows with children at a time
     *
     * Default value is `false`
     */
    showExpandAllArrows?: boolean;
    /**
     * If this option is `true` then it will expand all the rows irrespective of child table has rows or not
     *
     * Default value is `false` - Only expand rows with child which has rows
     */
    showExpandAllEmptyChildren?: boolean;
    /**
     * This is used set the default sorted column and order based on dataProperty
     *
     * Ex: {firstName: 'asc'}
     *
     * Default value is `{}`
     */
    sortedColumn?: {};
    /**
     * This will shows the page length dropdown, which will used to render the no of rows on each page
     *
     * Default value is `true`
     */
    showPageLengthDropdown?: boolean;
    /**
     * This will used to customize page length dropdown options
     *
     * Default value is `[10, 25, 50, 100]`
     */
    pageSizes?: number[];
    /**
     * This is for internal pupose of the `angular-tree-table`. Don't use it.
     *
     * Default value is `0`
     */
    level?: number;
    /**
     * Column Filters are used to send the column wise search keywords to server. Don't use it. It will be used by `angular-tree-table` itself.
     */
    columnFilters?: {};
    /**
     * Row clickables are allows you to configure the row detail clicking actions with a callback method based on dataProperty
     *
     * Default value is `{}`
     */
    rowClickables?: {};
    /**
     * This should be instance of component or the instance of class where the callbacks of rowClickables implemented
     *
     * Default value is `null`
     */
    rowClickablesContext?: any;
    /**
     * This is used to show/ hide the common search box
     *
     * Default value is `true`
     */
    commonSearch?: boolean;
    /**
     * This is used to show/ hide Export Excel Button
     *
     * Default value is `false`
     */
    excelExportButton?: boolean;
    /**
     * This is used to configure the ExcelExport file name
     *
     * Default value is `ExportFile`
     */
    excelExportFileName?: string;
    /**
     * This is used to configure the Excel Export Button text
     *
     * Default value is `Excel Export`
     */
    excelExportButtonText?: string;
    /**
     * It is WIP, Which will be used to export to excel file along with all children of rows
     *
     * Default value is `true`
     */
    excelExportAllChildren?: boolean;
    /**
     * It is WIP, Which will be used to export to excel file along with all children of rows
     *
     * Default value is `true`
     */
    excelExportOnlyExpanded?: boolean;
    /**
     * It is WIP, which will used to configure the callbacks for events of the `angular-tree-table`
     */
    events?: TreeTableDataEvents;
}
export declare class TreeTableDataEvents {
    shouldRowExpand?: any;
    rowExpanded?: any;
    shouldRowCollapse?: any;
    rowCollapsed?: any;
}
export declare class TreeTableDataServerConfig {
    /**
     * `url` to invoke for the data from server
     *
     * Ex: `https://restapisample.com/entities`
     *
     * Default value is `null`
     */
    url: any;
    /**
     * `url` to invoke for the data from server as a file
     *
     * Ex: `https://restapisample.com/entities/export`
     *
     * Default value is `null`
     */
    excelExportUrl?: any;
    /**
     * HTTP Method for `url` and `excelExportUrl`
     *
     * Default value is `null`
     */
    method?: any;
    /**
     * `angular-tree-table` handles all the events, page change, next page, prev page, page length change through api call and using different parameter. These are used to customize those parameter keys as per the server side requirements
     *
     * Default values are `page, limit, sort, search, colSearch, colFilters, pageToken`
     */
    paramNames?: TreeTableDataServerConfigParamMapping;
    /**
     * This is used to configure the property key of array in the api response
     *
     * Default value is `rows`
     */
    rowsKey?: string;
    /**
     * This is used to configure the property key of totalRowsCount in the api response
     *
     * Default value is `totalRowsCount`
     */
    totalRowsCountKey?: string;
    /**
     * This is used to configure the property key of filteredRowsCount in the api response
     *
     * Default value is `filteredRowCount`
     */
    filteredRowsCountKey?: string;
    /**
     * This is used to configure the unique key in the each row of the response
     *
     * Default value is `null`
     */
    rowUniqueKey?: any;
}
export declare class TreeTableDataServerConfigParamMapping {
    /**
     * Page number of the page will send under key configured here
     *
     * Default value is `page`
     */
    page?: string;
    /**
     * Limit of the page will send under key configured here
     *
     * Default value is `limit`
     */
    limit?: string;
    /**
     * Sort of the table of each column will send under key configured here
     *
     * Default value is `sort`
     */
    sort?: string;
    /**
     * Search keyword wil be send under key configured here
     *
     * Default value is `search`
     */
    search?: string;
    /**
     * Search keyword of each column will be send under key configured here
     *
     * Default value is `colSearch`
     */
    colSearch?: string;
    /**
     * Filter of each column will be send under key configured here
     *
     * Default value is `colFilters`
     */
    colFilters?: string;
    /**
     * Not using right now
     *
     * Default value is `pageToken`
     */
    pageToken?: string;
}
