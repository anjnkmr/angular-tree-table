export class TreeTableDataConfig {
    /**
     * Context should be Host component instance of tree table
     * 
     * Default value is `null`
     */
    context? = null;
    /**
     * This is two dimensional array, each subarray should contain 2 or less strings, and there is no limit for subarrays count
     * 
     * Default value is `[]`
     */
    extraInfos?:[][] = [];
    /**
     * This is used to show/ hide Table Headers
     * 
     * Default value is `true` - Shows Table Headers
     */
    showTableHeaders? = true;
    /**
     * Column Visibility will show the group of buttons on top of table, which will allow us to toggle the visibility of each column
     * 
     * Default value is `false` - hidden
     */
    columnVisibility? = false;
    /**
     * Same as Column Visibility but it shown as popover. It requires popper js library to work
     * 
     * Default value is `false` - hidden
     */
    columnVisibilityDropDown? = false;
    /**
     * Enables seperate search field for each column under each table header
     * 
     * Default value is `false` - Disabled
     */
    visibleColumnFiltersVisibility? = false;
    /**
     * This is used to set the search value by default based on `dataProperty`
     * 
     * Ex: {country: 'India'}
     * 
     * Default value is `{}`
     */
    visibleColumnFilters? = {};
    /**
     * Class name for table tag
     * 
     * Default value is `stacktable table-bordered large-only table table-sm`
     */
    fullClassName? = 'stacktable table-bordered large-only table table-sm';
    /**
     * Class name for th tag which is sorted in `ascending` order
     * 
     * Default value is `col-sort col-sort-asc`
     */
    sortAscClassName? = 'col-sort col-sort-asc';
    /**
     * Class name for th tag which is sorted in `descending` order
     * 
     * Default value is `col-sort col-sort-desc`
     */
    sortDescClassName? = 'col-sort col-sort-desc';
    /**
     * Class name for th tag which is `not sorted`
     * 
     * Default value is `col-sort col-sort-nothing`
     */
    sortNothingClassName? = 'col-sort col-sort-nothing';
    /**
     * Extra class name for table tag
     * 
     * Default value is `null`
     */
    customClassName? = null;
    /**
     * This option will show the Expand Row Button on each row, if child exists
     * 
     * Default value is `false`
     */
    showExpandArrows? = false;
    /**
     * This option will show the Expand Row Button on table header, which will expand/ collapse all rows with children at a time
     * 
     * Default value is `false`
     */
    showExpandAllArrows? = false;
    /**
     * If this option is `true` then it will expand all the rows irrespective of child table has rows or not
     * 
     * Default value is `false` - Only expand rows with child which has rows
     */
    showExpandAllEmptyChildren? = false;
    /**
     * This is used set the default sorted column and order based on dataProperty
     * 
     * Ex: {firstName: 'asc'}
     * 
     * Default value is `{}`
     */
    sortedColumn? = {};
    /**
     * This will shows the page length dropdown, which will used to render the no of rows on each page
     * 
     * Default value is `true`
     */
    showPageLengthDropdown? = true;
    /**
     * This will used to customize page length dropdown options
     * 
     * Default value is `[10, 25, 50, 100]`
     */
    pageSizes? = [10, 25, 50, 100];
    /**
     * This is for internal pupose of the `angular-tree-table`. Don't use it.
     * 
     * Default value is `0`
     */
    level? = 0;
    /**
     * Column Filters are used to send the column wise search keywords to server. Don't use it. It will be used by `angular-tree-table` itself.
     */
    columnFilters? = {};
    /**
     * Row clickables are allows you to configure the row detail clicking actions with a callback method based on dataProperty
     * 
     * Default value is `{}`
     */
    rowClickables? = {};
    /**
     * This should be instance of component or the instance of class where the callbacks of rowClickables implemented
     * 
     * Default value is `null`
     */
    rowClickablesContext? = null;
    /**
     * This is used to show/ hide the common search box
     * 
     * Default value is `true`
     */
    commonSearch? = true;
    /**
     * This is used to show/ hide Export Excel Button
     * 
     * Default value is `false`
     */
    excelExportButton? = false;
    /**
     * This is used to configure the ExcelExport only filtered true
     * 
     * Default value is `false`
     */
    excelExportOnlyFilteredRows? = false;
    /**
     * This is used to configure the ExcelExport file name
     * 
     * Default value is `ExportFile`
     */
    excelExportFileName? = 'ExportFile';
    /**
     * This is used to configure the Excel Export Button text
     * 
     * Default value is `Excel Export`
     */
    excelExportButtonText? = 'Excel Export';
    /**
     * It is WIP, Which will be used to export to excel file along with all children of rows
     * 
     * Default value is `true`
     */
    excelExportAllChildren? = true;
    /**
     * It is WIP, Which will be used to export to excel file along with all children of rows
     * 
     * Default value is `true`
     */
    excelExportOnlyExpanded? = false;
    /**
     * It is WIP, which will used to configure the callbacks for events of the `angular-tree-table`
     */
    events?: TreeTableDataEvents = new TreeTableDataEvents();

    /**
     * Expandable Type
     * Default: `ExpandableType.DIFFERENT_HEADERS`
     */
    expandableType?: ExpandableType = ExpandableType.DIFFERENT_HEADERS;

    expandableArrowPlacement?: ExpandableArrowPlacement = ExpandableArrowPlacement.SEPERATE_COLUMN;

    /** 
     * Locale Setting: This will be used when you are using $VC (Currency variables) for now
     * Default: `en-IN`
     */
    locale?: string = 'en-IN';

    /**
     * Currency code: This will be used when you are using $VC (Currency variables) for now
     * Default: `INR`
     */
    currencyCode?: string = 'INR';
}

export enum ExpandableType {
    DIFFERENT_HEADERS = 'DIFFERENT_HEADERS', 
    SAME_HEADERS = 'SAME_HEADERS'
}

export enum ExpandableArrowPlacement {
    SEPERATE_COLUMN = 'SEPERATE_COLUMN', 
    FIRST_COLUMN = 'FIRST_COLUMN'
}

export class TreeTableDataEvents {
    shouldRowExpand? = null;
    rowExpanded? = null;
    shouldRowCollapse? = null;
    rowCollapsed? = null;
}

export class TreeTableDataServerConfig {
    /**
     * `url` to invoke for the data from server
     * 
     * Ex: `https://restapisample.com/entities`
     * 
     * Default value is `null`
     */
    url = null;
    /**
     * `url` to invoke for the data from server as a file
     * 
     * Ex: `https://restapisample.com/entities/export`
     * 
     * Default value is `null`
     */
    excelExportUrl? = null;
    /**
     * HTTP Method for `url` and `excelExportUrl`
     * 
     * Default value is `null`
     */
    method? = null;
    /**
     * `angular-tree-table` handles all the events, page change, next page, prev page, page length change through api call and using different parameter. These are used to customize those parameter keys as per the server side requirements
     *
     * Default values are `page, limit, sort, search, colSearch, colFilters, pageToken`
     */
    paramNames? = new TreeTableDataServerConfigParamMapping();
    /**
     * This is used to configure the property key of array in the api response
     * 
     * Default value is `rows`
     */
    rowsKey? = 'rows';
    /** 
     * This is used to configure the property key of totalRowsCount in the api response
     * 
     * Default value is `totalRowsCount`
     */
    totalRowsCountKey? = 'totalRowsCount';
    /**
     * This is used to configure the property key of filteredRowsCount in the api response
     * 
     * Default value is `filteredRowCount`
     */
    filteredRowsCountKey? = 'filteredRowsCount';
    /**
     * This is used to configure the unique key in the each row of the response
     * 
     * Default value is `null`
     */
    rowUniqueKey? = null;
    /**
     * Configure this callback function to get the raw response of the api call each time invoked
     */
    apiResponseCallback?: ((data: any) => void) = undefined;
}

export class TreeTableDataServerConfigParamMapping {
    /**
     * Page number of the page will send under key configured here
     * 
     * Default value is `page`
     */
    page? = 'page';
    /**
     * Limit of the page will send under key configured here
     * 
     * Default value is `limit`
     */
    limit? = 'limit';
    /**
     * Sort of the table of each column will send under key configured here
     * 
     * Default value is `sort`
     */
    sort? = 'sort';
    /**
     * Search keyword wil be send under key configured here
     * 
     * Default value is `search`
     */
    search? = 'search';
    /**
     * Search keyword of each column will be send under key configured here
     * 
     * Default value is `colSearch`
     */
    colSearch? = 'colSearch';
    /**
     * Filter of each column will be send under key configured here
     * 
     * Default value is `colFilters`
     */
    colFilters? = 'colFilters';
    /**
     * Not using right now
     * 
     * Default value is `pageToken`
     */
    pageToken? = 'pageToken';
}