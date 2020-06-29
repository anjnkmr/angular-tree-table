/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { saveAs } from 'file-saver';
import { TreeTableDataConfig, TreeTableDataServerConfig } from './tree-table-data-config';
export class TreeTableRow {
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
export class TreeTableData {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS10YWJsZS1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci10cmVlLXRhYmxlLyIsInNvdXJjZXMiOlsiY2xhc3Nlcy90cmVlLXRhYmxlLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDcEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLHlCQUF5QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHMUYsTUFBTSxPQUFPLFlBQVk7Ozs7Ozs7SUFrQnJCLFlBQVksRUFBVSxFQUFFLElBQVEsRUFBRSxVQUFtQixFQUFFLFFBQXVCO1FBakI5RSxPQUFFLEdBQVcsSUFBSSxDQUFDO1FBQ2xCLFNBQUksR0FBTyxFQUFFLENBQUM7UUFDZCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGFBQVEsR0FBa0IsSUFBSSxDQUFDO1FBQy9CLGFBQVEsR0FBRyxLQUFLLENBQUM7O1FBRWpCLHNCQUFpQixHQUFRLElBQUksQ0FBQzs7UUFFOUIsZUFBVSxHQUFPLEVBQUUsQ0FBQztRQUNwQixXQUFNLEdBQU8sRUFBRSxDQUFDO1FBQ2hCLFlBQU8sR0FBYSxFQUFFLENBQUM7O1FBRXZCLFlBQU8sR0FBeUIsRUFBRSxDQUFDOztRQUVuQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFlBQU8sR0FBNEMsRUFBRSxDQUFDO1FBR2xELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztDQUNKOzs7SUF2QkcsMEJBQWtCOztJQUNsQiw0QkFBYzs7SUFDZCxrQ0FBbUI7O0lBQ25CLGdDQUErQjs7SUFDL0IsZ0NBQWlCOztJQUVqQix5Q0FBOEI7O0lBRTlCLGtDQUFvQjs7SUFDcEIsOEJBQWdCOztJQUNoQiwrQkFBdUI7O0lBRXZCLCtCQUFtQzs7SUFFbkMsZ0NBQTBCOztJQUMxQiwrQkFBc0Q7O0FBVzFELE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFzQnRCLFlBQVksTUFBNEIsRUFBRSxZQUF3QyxFQUFFLElBQWlCO1FBckJyRyxZQUFPLEdBQTRCLEVBQUUsQ0FBQztRQUN0QyxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUUxQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFlBQU8sR0FBVyxJQUFJLENBQUM7UUFDdkIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIseUJBQW9CLEdBQUcsRUFBRSxDQUFDO1FBQzFCLFdBQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUUxQixpQkFBWSxHQUFHLElBQUkseUJBQXlCLEVBQUUsQ0FBQztRQUMvQyxXQUFNLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBQ25DLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRVIsU0FBSSxHQUFlLElBQUksQ0FBQztRQUc1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLFlBQVksS0FBSyxTQUFTLElBQUksWUFBWSxLQUFLLElBQUksRUFBRTtZQUNyRCxJQUFJLFlBQVksQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLFlBQVksQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO2dCQUMzRSxZQUFZLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO2FBQzFEO1lBQ0QsSUFBSSxZQUFZLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxZQUFZLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDckUsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQzthQUNwRDtZQUNELElBQUksWUFBWSxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksWUFBWSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7Z0JBQy9FLFlBQVksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7YUFDOUQ7WUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7YUFBTTtZQUNILHVDQUF1QztTQUMxQztRQUNELElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7Z0JBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7YUFDOUM7WUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ3hDO1lBQ0QsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO2FBQzFEO1lBQ0QsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO2FBQzFEO1lBQ0QsSUFBSSxNQUFNLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsY0FBYyxLQUFLLElBQUksRUFBRTtnQkFDdkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQzthQUN0RDtZQUNELElBQUksTUFBTSxDQUFDLHdCQUF3QixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsd0JBQXdCLEtBQUssSUFBSSxFQUFFO2dCQUMzRixJQUFJLENBQUMsTUFBTSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQzthQUMxRTtZQUNELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ3ZELE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDdEM7aUJBQU07Z0JBQ0gsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsS0FBSyxTQUFTO3VCQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7b0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztpQkFDOUQ7Z0JBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxTQUFTO3VCQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztpQkFDaEU7YUFDSjtZQUNELElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQUU7Z0JBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7YUFDcEQ7WUFDRCxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLG1CQUFtQixLQUFLLElBQUksRUFBRTtnQkFDakYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7YUFDaEU7WUFDRCxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLHFCQUFxQixLQUFLLElBQUksRUFBRTtnQkFDckYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUM7YUFDcEU7WUFDRCxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLGdCQUFnQixLQUFLLElBQUksRUFBRTtnQkFDM0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7YUFDMUQ7WUFDRCxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLGlCQUFpQixLQUFLLElBQUksRUFBRTtnQkFDN0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7YUFDNUQ7WUFDRCxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLG9CQUFvQixLQUFLLElBQUksRUFBRTtnQkFDbkYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7YUFDbEU7WUFDRCxJQUFJLE1BQU0sQ0FBQyxlQUFlLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxlQUFlLEtBQUssSUFBSSxFQUFFO2dCQUN6RSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO2FBQ3hEO1lBQ0QsSUFBSSxNQUFNLENBQUMsbUJBQW1CLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsS0FBSyxJQUFJLEVBQUU7Z0JBQ2pGLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO2FBQ2hFO1lBQ0QsSUFBSSxNQUFNLENBQUMsMEJBQTBCLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQywwQkFBMEIsS0FBSyxJQUFJLEVBQUU7Z0JBQy9GLElBQUksQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEdBQUcsTUFBTSxDQUFDLDBCQUEwQixDQUFDO2FBQzlFO1lBQ0QsSUFBSSxNQUFNLENBQUMsc0JBQXNCLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsS0FBSyxJQUFJLEVBQUU7Z0JBQ3ZGLElBQUksQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUFDO2FBQ3RFO1lBQ0QsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO2FBQzFEO1lBQ0QsSUFBSSxNQUFNLENBQUMsd0JBQXdCLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsS0FBSyxJQUFJLEVBQUU7Z0JBQzNGLElBQUksQ0FBQyxNQUFNLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDO2FBQzFFO1lBQ0QsSUFBSSxNQUFNLENBQUMsOEJBQThCLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyw4QkFBOEIsS0FBSyxJQUFJLEVBQUU7Z0JBQ3ZHLElBQUksQ0FBQyxNQUFNLENBQUMsOEJBQThCLEdBQUcsTUFBTSxDQUFDLDhCQUE4QixDQUFDO2FBQ3RGO1lBQ0QsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtnQkFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQzthQUNsRDtZQUNELElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDcEM7WUFDRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLElBQUksRUFBRTtnQkFDckUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQzthQUNwRDtZQUNELElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUM1RixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzlDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ25EO2lCQUNKO2dCQUNELDRDQUE0QzthQUMvQztZQUNELElBQUksTUFBTSxDQUFDLG9CQUFvQixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsb0JBQW9CLEtBQUssSUFBSSxFQUFFO2dCQUNuRixJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQzthQUNsRTtZQUNELElBQUksTUFBTSxDQUFDLG9CQUFvQixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsb0JBQW9CLEtBQUssSUFBSSxFQUFFO2dCQUNuRixJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQzthQUNsRTtZQUNELElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQUU7Z0JBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7YUFDcEQ7WUFDRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxNQUFNLENBQUMsaUJBQWlCLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsS0FBSyxJQUFJLEVBQUU7Z0JBQzdFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDO2FBQzVEO1lBQ0QsSUFBSSxNQUFNLENBQUMsMkJBQTJCLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQywyQkFBMkIsS0FBSyxJQUFJLEVBQUU7Z0JBQ2pHLElBQUksQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEdBQUcsTUFBTSxDQUFDLDJCQUEyQixDQUFDO2FBQ2hGO1NBQ0o7YUFBTTtZQUNILGdDQUFnQztTQUNuQztRQUNELHFDQUFxQztJQUN6QyxDQUFDOzs7O0lBRUQsZUFBZTs7Y0FDTCxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRO1FBQ3BELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsU0FBUzs7Y0FDQyxNQUFNLEdBQUcsRUFBRTtRQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDakYsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMvRTtTQUNKO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDOztjQUMvRSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ25FLEtBQUssSUFBSSxHQUFHLElBQUksYUFBYSxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ2hELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoRDtZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQ3JELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoRDtZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQzlDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoRDtZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3JELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoRDtTQUNKO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xHLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFFBQWM7UUFDeEIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsS0FBSyxJQUFJLEVBQUU7WUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQzdDLE9BQU87U0FDVjs7Y0FDSyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTs7O2NBRXpCLEdBQUcsR0FBRyxJQUFJO1FBQ2hCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRTtnQkFDL0YsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7O3NCQUNoQixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksRUFBRSwwQkFBMEIsRUFBQyxDQUFFO2dCQUNsRSxNQUFNLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsRUFBQyxDQUFDO1NBQ047SUFDTCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxRQUFjO1FBQ25CLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNsQyxPQUFPO1NBQ1Y7O2NBQ0ssTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDL0IsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtZQUMzRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDNUMsT0FBTzthQUNWO1NBQ0o7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7O2NBQ25DLEdBQUcsR0FBRyxJQUFJO1FBQ2hCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM5RCxJQUFJLFFBQVEsS0FBSyxTQUFTLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTs7MEJBQ3ZDLElBQUksR0FBRyxFQUFFO29CQUNmLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRTt3QkFDM0YsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNiLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDbEIsSUFBSSxHQUFHLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTs0QkFDdEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7NEJBQ3RCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO3lCQUN2QjtxQkFDSjt5QkFBTTt3QkFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7d0JBQ2hFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO3dCQUN0RSxLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFOztnQ0FDOUMsU0FBUyxHQUFHLElBQUk7NEJBQ3BCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtnQ0FDekYsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7NkJBQ3BDO2lDQUFNO2dDQUNILFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQzs2QkFDdEQ7O2tDQUNLLEdBQUcsR0FBRyxJQUFJLFlBQVksQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUM7NEJBQ2pFLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDOzRCQUN6RCxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDOzRCQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUNsQjs7OEJBQ0ssVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQzlGLElBQUksVUFBVSxLQUFLLFNBQVMsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFOzRCQUNqRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7Z0NBQ3pGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDOzZCQUN2RTt5QkFDSjt3QkFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2YsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNsQixJQUFJLEdBQUcsQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFOzRCQUN0QixHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs0QkFDdEIsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7eUJBQ3ZCO3FCQUNKO2lCQUNKO3FCQUFNO29CQUNILEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbEIsSUFBSSxHQUFHLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTt3QkFDdEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQ3RCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO3FCQUN2QjtpQkFDSjtZQUNMLENBQUM7Ozs7WUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDTCxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2xCLElBQUksR0FBRyxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUU7b0JBQ3RCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN0QixHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztpQkFDdkI7WUFDTCxDQUFDLEVBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQzs7OztJQUVELGVBQWU7UUFDWCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ1osT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsR0FBVztRQUNyQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7O2NBQ3hCLEdBQUcsR0FBRyxJQUFJO1FBQ2hCLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNaLEdBQUcsQ0FBQyxpQkFBaUIsR0FBSSxLQUFLLENBQUM7UUFDbkMsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztDQUNKOzs7SUF0U0csZ0NBQXNDOztJQUN0Qyw2QkFBMEI7O0lBRTFCLGtDQUFrQjs7SUFDbEIsZ0NBQXVCOztJQUN2Qiw2QkFBUzs7SUFDVCxpQ0FBYzs7SUFDZCxtQ0FBa0I7O0lBQ2xCLHVDQUFtQjs7SUFDbkIsMENBQXNCOztJQUN0QiwwQ0FBMEI7O0lBQzFCLDZDQUEwQjs7SUFDMUIsK0JBQWdCOztJQUNoQiwwQ0FBMEI7O0lBRTFCLHFDQUErQzs7SUFDL0MsK0JBQW1DOztJQUNuQyxvQ0FBZ0I7Ozs7O0lBRWhCLDZCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyZWVUYWJsZUhlYWRlck9iamVjdCB9IGZyb20gJy4vdHJlZS10YWJsZS1oZWFkZXItb2JqZWN0JztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IFRyZWVUYWJsZURhdGFDb25maWcsIFRyZWVUYWJsZURhdGFTZXJ2ZXJDb25maWcgfSBmcm9tICcuL3RyZWUtdGFibGUtZGF0YS1jb25maWcnO1xyXG5pbXBvcnQgeyBUcmVlVGFibGVSb3dBY3Rpb24gfSBmcm9tICcuL3RyZWUtdGFibGUtcm93LWFjdGlvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZVRhYmxlUm93IHtcclxuICAgIGlkOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgZGF0YToge30gPSB7fTtcclxuICAgIGV4cGFuZGFibGUgPSBmYWxzZTtcclxuICAgIGNoaWxkcmVuOiBUcmVlVGFibGVEYXRhID0gbnVsbDtcclxuICAgIGV4cGFuZGVkID0gZmFsc2U7XHJcbiAgICAvLyBDbGlja2FibGVzIENvbnRleHQgZm9yIEFjdGlvbnNcclxuICAgIGNsaWNrYWJsZXNDb250ZXh0OiBhbnkgPSBudWxsO1xyXG4gICAgLy8gQ2xpY2thYmxlIFByb3BlcnRpZXMgYW5kIEFjdGlvbnNcclxuICAgIGNsaWNrYWJsZXM6IHt9ID0ge307XHJcbiAgICBzdHlsZXM6IHt9ID0ge307XHJcbiAgICBjbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgLy8gQWN0aW9ucyBIZWFkZXIgQnV0dG9uc1xyXG4gICAgYWN0aW9uczogVHJlZVRhYmxlUm93QWN0aW9uW10gPSBbXTtcclxuICAgIC8vIElzIHJvdyBzZWxlY3RlZFxyXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG9wdGlvbnM6IHt2YWx1ZTogc3RyaW5nLCBkaXNwbGF5VGV4dDogc3RyaW5nfVtdID0gIFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGRhdGE6IHt9LCBleHBhbmRhYmxlOiBib29sZWFuLCBjaGlsZHJlbjogVHJlZVRhYmxlRGF0YSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuZXhwYW5kYWJsZSA9IGV4cGFuZGFibGU7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVUYWJsZURhdGEge1xyXG4gICAgaGVhZGVyczogVHJlZVRhYmxlSGVhZGVyT2JqZWN0W10gPSBbXTtcclxuICAgIGRhdGE6IFRyZWVUYWJsZVJvd1tdID0gW107XHJcblxyXG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBrZXl3b3JkOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcGFnZSA9IDE7XHJcbiAgICBwYWdlU2l6ZSA9IDEwO1xyXG4gICAgbGFzdFBhcmFtcyA9IG51bGw7XHJcbiAgICB0b3RhbFJvd3NDb3VudCA9IDA7XHJcbiAgICBmaWx0ZXJlZFJvd3NDb3VudCA9IDA7XHJcbiAgICBzcGxhc2hNZXNzYWdlRmxhZyA9IGZhbHNlO1xyXG4gICAgc3BsYXNoTWVzc2FnZUNvbnRlbnQgPSAnJztcclxuICAgIHRva2VucyA9IFtudWxsXTtcclxuICAgIGlzQWxsUm93c0V4cGFuZGVkID0gZmFsc2U7XHJcblxyXG4gICAgc2VydmVyQ29uZmlnID0gbmV3IFRyZWVUYWJsZURhdGFTZXJ2ZXJDb25maWcoKTtcclxuICAgIGNvbmZpZyA9IG5ldyBUcmVlVGFibGVEYXRhQ29uZmlnKCk7XHJcbiAgICBsb2FkQ291bnRlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBUcmVlVGFibGVEYXRhQ29uZmlnLCBzZXJ2ZXJDb25maWc/OiBUcmVlVGFibGVEYXRhU2VydmVyQ29uZmlnLCBodHRwPzogSHR0cENsaWVudCkge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgaWYgKHNlcnZlckNvbmZpZyAhPT0gdW5kZWZpbmVkICYmIHNlcnZlckNvbmZpZyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoc2VydmVyQ29uZmlnLnBhcmFtTmFtZXMgPT09IHVuZGVmaW5lZCB8fCBzZXJ2ZXJDb25maWcucGFyYW1OYW1lcyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2VydmVyQ29uZmlnLnBhcmFtTmFtZXMgPSB0aGlzLnNlcnZlckNvbmZpZy5wYXJhbU5hbWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZXJ2ZXJDb25maWcucm93c0tleSA9PT0gdW5kZWZpbmVkIHx8IHNlcnZlckNvbmZpZy5yb3dzS2V5ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJDb25maWcucm93c0tleSA9IHRoaXMuc2VydmVyQ29uZmlnLnJvd3NLZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlcnZlckNvbmZpZy5yb3dVbmlxdWVLZXkgPT09IHVuZGVmaW5lZCB8fCBzZXJ2ZXJDb25maWcucm93VW5pcXVlS2V5ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJDb25maWcucm93VW5pcXVlS2V5ID0gdGhpcy5zZXJ2ZXJDb25maWcucm93VW5pcXVlS2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmVyQ29uZmlnID0gc2VydmVyQ29uZmlnO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ05vIFNlcnZlciBQcm9wZXJ0aWVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5leHRyYUluZm9zICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmV4dHJhSW5mb3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmV4dHJhSW5mb3MgPSBjb25maWcuZXh0cmFJbmZvcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmNvbnRleHQgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuY29udGV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuY29udGV4dCA9IGNvbmZpZy5jb250ZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuc2hvd1RhYmxlSGVhZGVycyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5zaG93VGFibGVIZWFkZXJzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zaG93VGFibGVIZWFkZXJzID0gY29uZmlnLnNob3dUYWJsZUhlYWRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5zaG93RXhwYW5kQXJyb3dzICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnNob3dFeHBhbmRBcnJvd3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNob3dFeHBhbmRBcnJvd3MgPSBjb25maWcuc2hvd0V4cGFuZEFycm93cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmV4cGFuZGFibGVUeXBlICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmV4cGFuZGFibGVUeXBlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5leHBhbmRhYmxlVHlwZSA9IGNvbmZpZy5leHBhbmRhYmxlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmV4cGFuZGFibGVBcnJvd1BsYWNlbWVudCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5leHBhbmRhYmxlQXJyb3dQbGFjZW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmV4cGFuZGFibGVBcnJvd1BsYWNlbWVudCA9IGNvbmZpZy5leHBhbmRhYmxlQXJyb3dQbGFjZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5ldmVudHMgPT09IHVuZGVmaW5lZCB8fCBjb25maWcuZXZlbnRzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcuZXZlbnRzID0gdGhpcy5jb25maWcuZXZlbnRzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5ldmVudHMucm93RXhwYW5kZWQgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICYmIGNvbmZpZy5ldmVudHMucm93RXhwYW5kZWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5ldmVudHMucm93RXhwYW5kZWQgPSBjb25maWcuZXZlbnRzLnJvd0V4cGFuZGVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5ldmVudHMucm93Q29sbGFwc2VkICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAmJiBjb25maWcuZXZlbnRzLnJvd0NvbGxhcHNlZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmV2ZW50cy5yb3dDb2xsYXBzZWQgPSBjb25maWcuZXZlbnRzLnJvd0NvbGxhcHNlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmZ1bGxDbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZnVsbENsYXNzTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZnVsbENsYXNzTmFtZSA9IGNvbmZpZy5mdWxsQ2xhc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuZXhjZWxFeHBvcnRGaWxlTmFtZSAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5leGNlbEV4cG9ydEZpbGVOYW1lICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5leGNlbEV4cG9ydEZpbGVOYW1lID0gY29uZmlnLmV4Y2VsRXhwb3J0RmlsZU5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5leGNlbEV4cG9ydEJ1dHRvblRleHQgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZXhjZWxFeHBvcnRCdXR0b25UZXh0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5leGNlbEV4cG9ydEJ1dHRvblRleHQgPSBjb25maWcuZXhjZWxFeHBvcnRCdXR0b25UZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuc29ydEFzY0NsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5zb3J0QXNjQ2xhc3NOYW1lICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zb3J0QXNjQ2xhc3NOYW1lID0gY29uZmlnLnNvcnRBc2NDbGFzc05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5zb3J0RGVzY0NsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5zb3J0RGVzY0NsYXNzTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuc29ydERlc2NDbGFzc05hbWUgPSBjb25maWcuc29ydERlc2NDbGFzc05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5zb3J0Tm90aGluZ0NsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5zb3J0Tm90aGluZ0NsYXNzTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuc29ydE5vdGhpbmdDbGFzc05hbWUgPSBjb25maWcuc29ydE5vdGhpbmdDbGFzc05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5jdXN0b21DbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuY3VzdG9tQ2xhc3NOYW1lICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5jdXN0b21DbGFzc05hbWUgPSBjb25maWcuY3VzdG9tQ2xhc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuc2hvd0V4cGFuZEFsbEFycm93cyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5zaG93RXhwYW5kQWxsQXJyb3dzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zaG93RXhwYW5kQWxsQXJyb3dzID0gY29uZmlnLnNob3dFeHBhbmRBbGxBcnJvd3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5zaG93RXhwYW5kQWxsRW1wdHlDaGlsZHJlbiAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5zaG93RXhwYW5kQWxsRW1wdHlDaGlsZHJlbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuc2hvd0V4cGFuZEFsbEVtcHR5Q2hpbGRyZW4gPSBjb25maWcuc2hvd0V4cGFuZEFsbEVtcHR5Q2hpbGRyZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5zaG93UGFnZUxlbmd0aERyb3Bkb3duICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnNob3dQYWdlTGVuZ3RoRHJvcGRvd24gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNob3dQYWdlTGVuZ3RoRHJvcGRvd24gPSBjb25maWcuc2hvd1BhZ2VMZW5ndGhEcm9wZG93bjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmNvbHVtblZpc2liaWxpdHkgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuY29sdW1uVmlzaWJpbGl0eSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuY29sdW1uVmlzaWJpbGl0eSA9IGNvbmZpZy5jb2x1bW5WaXNpYmlsaXR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuY29sdW1uVmlzaWJpbGl0eURyb3BEb3duICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmNvbHVtblZpc2liaWxpdHlEcm9wRG93biAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuY29sdW1uVmlzaWJpbGl0eURyb3BEb3duID0gY29uZmlnLmNvbHVtblZpc2liaWxpdHlEcm9wRG93bjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzVmlzaWJpbGl0eSAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1Zpc2liaWxpdHkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzVmlzaWJpbGl0eSA9IGNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1Zpc2liaWxpdHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5zb3J0ZWRDb2x1bW4gIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc29ydGVkQ29sdW1uICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zb3J0ZWRDb2x1bW4gPSBjb25maWcuc29ydGVkQ29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcubGV2ZWwgIT09IHVuZGVmaW5lZCAmJiBjb25maWcubGV2ZWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxldmVsID0gY29uZmlnLmxldmVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuY29tbW9uU2VhcmNoICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmNvbW1vblNlYXJjaCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuY29tbW9uU2VhcmNoID0gY29uZmlnLmNvbW1vblNlYXJjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmNvbHVtbkZpbHRlcnMgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuY29sdW1uRmlsdGVycyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuY29sdW1uRmlsdGVycyA9IGNvbmZpZy5jb2x1bW5GaWx0ZXJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcucGFnZVNpemVzICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnBhZ2VTaXplcyAhPT0gbnVsbCAmJiBjb25maWcucGFnZVNpemVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnBhZ2VTaXplcy5zcGxpY2UoMCwgdGhpcy5jb25maWcucGFnZVNpemVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IGNvbmZpZy5wYWdlU2l6ZXMubGVuZ3RoOyBwKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLnBhZ2VTaXplc1twXSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcucGFnZVNpemVzLnB1c2goY29uZmlnLnBhZ2VTaXplc1twXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jb25maWcucGFnZVNpemVzID0gY29uZmlnLnBhZ2VTaXplcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVycyA9IGNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnJvd0NsaWNrYWJsZXNDb250ZXh0ICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnJvd0NsaWNrYWJsZXNDb250ZXh0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5yb3dDbGlja2FibGVzQ29udGV4dCA9IGNvbmZpZy5yb3dDbGlja2FibGVzQ29udGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnJvd0NsaWNrYWJsZXMgIT09IHVuZGVmaW5lZCAmJiBjb25maWcucm93Q2xpY2thYmxlcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcucm93Q2xpY2thYmxlcyA9IGNvbmZpZy5yb3dDbGlja2FibGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuY29tbW9uU2VhcmNoICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmNvbW1vblNlYXJjaCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuY29tbW9uU2VhcmNoID0gY29uZmlnLmNvbW1vblNlYXJjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmV4Y2VsRXhwb3J0QnV0dG9uICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmV4Y2VsRXhwb3J0QnV0dG9uICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5leGNlbEV4cG9ydEJ1dHRvbiA9IGNvbmZpZy5leGNlbEV4cG9ydEJ1dHRvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmV4Y2VsRXhwb3J0T25seUZpbHRlcmVkUm93cyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5leGNlbEV4cG9ydE9ubHlGaWx0ZXJlZFJvd3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmV4Y2VsRXhwb3J0T25seUZpbHRlcmVkUm93cyA9IGNvbmZpZy5leGNlbEV4cG9ydE9ubHlGaWx0ZXJlZFJvd3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTm8gUHJvcGVydGllcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnUHJvcGVydGllcycsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdG90YWxQYWdlc0NvdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHBhZ2VzID0gdGhpcy5maWx0ZXJlZFJvd3NDb3VudCAvIHRoaXMucGFnZVNpemU7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChwYWdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyYW1zKCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2UgLSAxID49IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG9rZW5zW3RoaXMucGFnZSAtIDFdICE9PSB1bmRlZmluZWQgJiYgdGhpcy50b2tlbnNbdGhpcy5wYWdlIC0gMV0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtc1t0aGlzLnNlcnZlckNvbmZpZy5wYXJhbU5hbWVzLnBhZ2VUb2tlbl0gPSB0aGlzLnRva2Vuc1t0aGlzLnBhZ2UgLSAxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJhbXNbdGhpcy5zZXJ2ZXJDb25maWcucGFyYW1OYW1lcy5wYWdlXSA9IHRoaXMucGFnZTtcclxuICAgICAgICBwYXJhbXNbdGhpcy5zZXJ2ZXJDb25maWcucGFyYW1OYW1lcy5zZWFyY2hdID0gdGhpcy5rZXl3b3JkO1xyXG4gICAgICAgIHBhcmFtc1t0aGlzLnNlcnZlckNvbmZpZy5wYXJhbU5hbWVzLmxpbWl0XSA9IHRoaXMucGFnZVNpemU7XHJcbiAgICAgICAgcGFyYW1zW3RoaXMuc2VydmVyQ29uZmlnLnBhcmFtTmFtZXMuY29sRmlsdGVyc10gPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbmZpZy5jb2x1bW5GaWx0ZXJzKTtcclxuICAgICAgICBwYXJhbXNbdGhpcy5zZXJ2ZXJDb25maWcucGFyYW1OYW1lcy5zb3J0XSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY29uZmlnLnNvcnRlZENvbHVtbik7XHJcbiAgICAgICAgY29uc3QgY29sU2VhcmNoS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzKTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgb2YgY29sU2VhcmNoS2V5cykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNba2V5XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV0gPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNba2V5XS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJhbXNbdGhpcy5zZXJ2ZXJDb25maWcucGFyYW1OYW1lcy5jb2xTZWFyY2hdID0gSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnMpO1xyXG4gICAgICAgIHJldHVybiBwYXJhbXM7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEV4Y2VsRGF0YShjYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlcnZlckNvbmZpZy5leGNlbEV4cG9ydFVybCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0V4Y2VsRXhwb3J0VXJsIG5vdCBzcGVjaWZpZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmdldFBhcmFtcygpO1xyXG4gICAgICAgIC8vIGRlbGV0ZSBwYXJhbXNbdGhpcy5zZXJ2ZXJDb25maWcucGFyYW1OYW1lcy5saW1pdF07XHJcbiAgICAgICAgY29uc3QgZGlzID0gdGhpcztcclxuICAgICAgICBkaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5zZXJ2ZXJDb25maWcubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VydmVyQ29uZmlnLmV4Y2VsRXhwb3J0VXJsLCB7IHBhcmFtcywgcmVzcG9uc2VUeXBlOiAnYmxvYicgfSkuc3Vic2NyaWJlKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtyZXNwXSwge3R5cGU6ICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnfSApO1xyXG4gICAgICAgICAgICAgICAgc2F2ZUFzKGJsb2IsICdPcmRlcnMueGxzeCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZERhdGEoY2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXJ2ZXJDb25maWcudXJsID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVVJMIG5vdCBzcGVjaWZpZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmdldFBhcmFtcygpO1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RQYXJhbXMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmxhc3RQYXJhbXMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdFBhcmFtcyA9PT0gSlNPTi5zdHJpbmdpZnkocGFyYW1zKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdFBhcmFtcyA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XHJcbiAgICAgICAgY29uc3QgZGlzID0gdGhpcztcclxuICAgICAgICBkaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkaXMubG9hZENvdW50ZXIrKztcclxuICAgICAgICBpZiAodGhpcy5zZXJ2ZXJDb25maWcubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VydmVyQ29uZmlnLnVybCwgeyBwYXJhbXMgfSkuc3Vic2NyaWJlKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgY2FsbGJhY2sgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BbdGhpcy5zZXJ2ZXJDb25maWcucm93c0tleV0gPT09IHVuZGVmaW5lZCB8fCByZXNwW3RoaXMuc2VydmVyQ29uZmlnLnJvd3NLZXldID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKFtdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzLmxvYWRDb3VudGVyLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXMubG9hZENvdW50ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzLmxvYWRDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxSb3dzQ291bnQgPSByZXNwW3RoaXMuc2VydmVyQ29uZmlnLnRvdGFsUm93c0NvdW50S2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJlZFJvd3NDb3VudCA9IHJlc3BbdGhpcy5zZXJ2ZXJDb25maWcuZmlsdGVyZWRSb3dzQ291bnRLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJhd1JvdyBvZiByZXNwW3RoaXMuc2VydmVyQ29uZmlnLnJvd3NLZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdW5pcXVlVmFsID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlcnZlckNvbmZpZy5yb3dVbmlxdWVLZXkgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnNlcnZlckNvbmZpZy5yb3dVbmlxdWVLZXkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVWYWwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlVmFsID0gcmF3Um93W3RoaXMuc2VydmVyQ29uZmlnLnJvd1VuaXF1ZUtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBuZXcgVHJlZVRhYmxlUm93KHVuaXF1ZVZhbCwgcmF3Um93LCBmYWxzZSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5jbGlja2FibGVzQ29udGV4dCA9IHRoaXMuY29uZmlnLnJvd0NsaWNrYWJsZXNDb250ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmNsaWNrYWJsZXMgPSB0aGlzLmNvbmZpZy5yb3dDbGlja2FibGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdFJhd1JvdyA9IHJlc3BbdGhpcy5zZXJ2ZXJDb25maWcucm93c0tleV1bcmVzcFt0aGlzLnNlcnZlckNvbmZpZy5yb3dzS2V5XS5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RSYXdSb3cgIT09IHVuZGVmaW5lZCAmJiBsYXN0UmF3Um93ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJDb25maWcucm93VW5pcXVlS2V5ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5zZXJ2ZXJDb25maWcucm93VW5pcXVlS2V5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnNbdGhpcy5wYWdlXSA9IGxhc3RSYXdSb3dbdGhpcy5zZXJ2ZXJDb25maWcucm93VW5pcXVlS2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyb3dzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzLmxvYWRDb3VudGVyLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXMubG9hZENvdW50ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzLmxvYWRDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzLmxvYWRDb3VudGVyLS07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpcy5sb2FkQ291bnRlciA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzLmxvYWRDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXMubG9hZENvdW50ZXItLTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXMubG9hZENvdW50ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXMubG9hZENvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWxsUm93c0V4cGFuZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhbGxSb3dzQ29sbGFwc2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzcGxhc2hNZXNzYWdlKG1zZzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zcGxhc2hNZXNzYWdlQ29udGVudCA9IG1zZztcclxuICAgICAgICB0aGlzLnNwbGFzaE1lc3NhZ2VGbGFnID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBkaXMgPSB0aGlzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXMuc3BsYXNoTWVzc2FnZUZsYWcgID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbn1cclxuIl19