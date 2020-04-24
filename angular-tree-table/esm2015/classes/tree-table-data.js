/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TreeTableRow } from './tree-table-row';
import { saveAs } from 'file-saver';
import { TreeTableDataConfig, TreeTableDataServerConfig } from './tree-table-data-config';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS10YWJsZS1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci10cmVlLXRhYmxlLyIsInNvdXJjZXMiOlsiY2xhc3Nlcy90cmVlLXRhYmxlLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTFGLE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFzQnRCLFlBQVksTUFBNEIsRUFBRSxZQUF3QyxFQUFFLElBQWlCO1FBckJyRyxZQUFPLEdBQTRCLEVBQUUsQ0FBQztRQUN0QyxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUUxQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFlBQU8sR0FBVyxJQUFJLENBQUM7UUFDdkIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIseUJBQW9CLEdBQUcsRUFBRSxDQUFDO1FBQzFCLFdBQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUUxQixpQkFBWSxHQUFHLElBQUkseUJBQXlCLEVBQUUsQ0FBQztRQUMvQyxXQUFNLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBQ25DLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRVIsU0FBSSxHQUFlLElBQUksQ0FBQztRQUc1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLFlBQVksS0FBSyxTQUFTLElBQUksWUFBWSxLQUFLLElBQUksRUFBRTtZQUNyRCxJQUFJLFlBQVksQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLFlBQVksQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO2dCQUMzRSxZQUFZLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO2FBQzFEO1lBQ0QsSUFBSSxZQUFZLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxZQUFZLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDckUsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQzthQUNwRDtZQUNELElBQUksWUFBWSxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksWUFBWSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7Z0JBQy9FLFlBQVksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUM7YUFDOUQ7WUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7YUFBTTtZQUNILHVDQUF1QztTQUMxQztRQUNELElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3pDLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7Z0JBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7YUFDOUM7WUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ3hDO1lBQ0QsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO2FBQzFEO1lBQ0QsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO2FBQzFEO1lBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDdkQsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUN0QztpQkFBTTtnQkFDSCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxLQUFLLFNBQVM7dUJBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtvQkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO2lCQUM5RDtnQkFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVM7dUJBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtvQkFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO2lCQUNoRTthQUNKO1lBQ0QsSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLElBQUksRUFBRTtnQkFDckUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQzthQUNwRDtZQUNELElBQUksTUFBTSxDQUFDLG1CQUFtQixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsbUJBQW1CLEtBQUssSUFBSSxFQUFFO2dCQUNqRixJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQzthQUNoRTtZQUNELElBQUksTUFBTSxDQUFDLHFCQUFxQixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMscUJBQXFCLEtBQUssSUFBSSxFQUFFO2dCQUNyRixJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQzthQUNwRTtZQUNELElBQUksTUFBTSxDQUFDLGdCQUFnQixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxFQUFFO2dCQUMzRSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQzthQUMxRDtZQUNELElBQUksTUFBTSxDQUFDLGlCQUFpQixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsaUJBQWlCLEtBQUssSUFBSSxFQUFFO2dCQUM3RSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQzthQUM1RDtZQUNELElBQUksTUFBTSxDQUFDLG9CQUFvQixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsb0JBQW9CLEtBQUssSUFBSSxFQUFFO2dCQUNuRixJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQzthQUNsRTtZQUNELElBQUksTUFBTSxDQUFDLGVBQWUsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLGVBQWUsS0FBSyxJQUFJLEVBQUU7Z0JBQ3pFLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7YUFDeEQ7WUFDRCxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLG1CQUFtQixLQUFLLElBQUksRUFBRTtnQkFDakYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7YUFDaEU7WUFDRCxJQUFJLE1BQU0sQ0FBQywwQkFBMEIsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLDBCQUEwQixLQUFLLElBQUksRUFBRTtnQkFDL0YsSUFBSSxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsR0FBRyxNQUFNLENBQUMsMEJBQTBCLENBQUM7YUFDOUU7WUFDRCxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLHNCQUFzQixLQUFLLElBQUksRUFBRTtnQkFDdkYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQUM7YUFDdEU7WUFDRCxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLGdCQUFnQixLQUFLLElBQUksRUFBRTtnQkFDM0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7YUFDMUQ7WUFDRCxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLHdCQUF3QixLQUFLLElBQUksRUFBRTtnQkFDM0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUM7YUFDMUU7WUFDRCxJQUFJLE1BQU0sQ0FBQyw4QkFBOEIsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLDhCQUE4QixLQUFLLElBQUksRUFBRTtnQkFDdkcsSUFBSSxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsR0FBRyxNQUFNLENBQUMsOEJBQThCLENBQUM7YUFDdEY7WUFDRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtnQkFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUNwQztZQUNELElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7Z0JBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7YUFDbEQ7WUFDRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFO2dCQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO2FBQ3BEO1lBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzVGLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDOUMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDbkQ7aUJBQ0o7Z0JBQ0QsNENBQTRDO2FBQy9DO1lBQ0QsSUFBSSxNQUFNLENBQUMsb0JBQW9CLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsS0FBSyxJQUFJLEVBQUU7Z0JBQ25GLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO2FBQ2xFO1lBQ0QsSUFBSSxNQUFNLENBQUMsb0JBQW9CLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsS0FBSyxJQUFJLEVBQUU7Z0JBQ25GLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO2FBQ2xFO1lBQ0QsSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLElBQUksRUFBRTtnQkFDckUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQzthQUNwRDtZQUNELElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7Z0JBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7YUFDbEQ7WUFDRCxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLGlCQUFpQixLQUFLLElBQUksRUFBRTtnQkFDN0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7YUFDNUQ7U0FDSjthQUFNO1lBQ0gsZ0NBQWdDO1NBQ25DO1FBQ0QscUNBQXFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxlQUFlOztjQUNMLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVE7UUFDcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxTQUFTOztjQUNDLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUNqRixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQy9FO1NBQ0o7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7O2NBQy9FLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7UUFDbkUsS0FBSyxJQUFJLEdBQUcsSUFBSSxhQUFhLEVBQUU7WUFDM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hEO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDckQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hEO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDOUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hEO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDckQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hEO1NBQ0o7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEcsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsUUFBYztRQUN4QixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxLQUFLLElBQUksRUFBRTtZQUMzQyxPQUFPLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDN0MsT0FBTztTQUNWOztjQUNLLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFOzs7Y0FFekIsR0FBRyxHQUFHLElBQUk7UUFDaEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMvRixHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7c0JBQ2hCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLDBCQUEwQixFQUFDLENBQUU7Z0JBQ2xFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFFBQWM7UUFDbkIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2xDLE9BQU87U0FDVjs7Y0FDSyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUMvQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQzNELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM1QyxPQUFPO2FBQ1Y7U0FDSjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Y0FDbkMsR0FBRyxHQUFHLElBQUk7UUFDaEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDckIsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzlELElBQUksUUFBUSxLQUFLLFNBQVMsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFOzswQkFDdkMsSUFBSSxHQUFHLEVBQUU7b0JBQ2YsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFO3dCQUMzRixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ2IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNsQixJQUFJLEdBQUcsQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFOzRCQUN0QixHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs0QkFDdEIsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7eUJBQ3ZCO3FCQUNKO3lCQUFNO3dCQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFDaEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUM7d0JBQ3RFLEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7O2dDQUM5QyxTQUFTLEdBQUcsSUFBSTs0QkFDcEIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO2dDQUN6RixTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs2QkFDcEM7aUNBQU07Z0NBQ0gsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDOzZCQUN0RDs7a0NBQ0ssR0FBRyxHQUFHLElBQUksWUFBWSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQzs0QkFDakUsR0FBRyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7NEJBQ3pELEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7NEJBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ2xCOzs4QkFDSyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDOUYsSUFBSSxVQUFVLEtBQUssU0FBUyxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7NEJBQ2pELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtnQ0FDekYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7NkJBQ3ZFO3lCQUNKO3dCQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDZixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ2xCLElBQUksR0FBRyxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUU7NEJBQ3RCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzRCQUN0QixHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQzt5QkFDdkI7cUJBQ0o7aUJBQ0o7cUJBQU07b0JBQ0gsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNsQixJQUFJLEdBQUcsQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFO3dCQUN0QixHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzt3QkFDdEIsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7cUJBQ3ZCO2lCQUNKO1lBQ0wsQ0FBQzs7OztZQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNMLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxHQUFHLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTtvQkFDdEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2lCQUN2QjtZQUNMLENBQUMsRUFBQyxDQUFDO1NBQ047SUFDTCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNYLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDWixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxHQUFXO1FBQ3JCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzs7Y0FDeEIsR0FBRyxHQUFHLElBQUk7UUFDaEIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ1osR0FBRyxDQUFDLGlCQUFpQixHQUFJLEtBQUssQ0FBQztRQUNuQyxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0NBQ0o7OztJQTdSRyxnQ0FBc0M7O0lBQ3RDLDZCQUEwQjs7SUFFMUIsa0NBQWtCOztJQUNsQixnQ0FBdUI7O0lBQ3ZCLDZCQUFTOztJQUNULGlDQUFjOztJQUNkLG1DQUFrQjs7SUFDbEIsdUNBQW1COztJQUNuQiwwQ0FBc0I7O0lBQ3RCLDBDQUEwQjs7SUFDMUIsNkNBQTBCOztJQUMxQiwrQkFBZ0I7O0lBQ2hCLDBDQUEwQjs7SUFFMUIscUNBQStDOztJQUMvQywrQkFBbUM7O0lBQ25DLG9DQUFnQjs7Ozs7SUFFaEIsNkJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJlZVRhYmxlSGVhZGVyT2JqZWN0IH0gZnJvbSAnLi90cmVlLXRhYmxlLWhlYWRlci1vYmplY3QnO1xyXG5pbXBvcnQgeyBUcmVlVGFibGVSb3cgfSBmcm9tICcuL3RyZWUtdGFibGUtcm93JztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IFRyZWVUYWJsZURhdGFDb25maWcsIFRyZWVUYWJsZURhdGFTZXJ2ZXJDb25maWcgfSBmcm9tICcuL3RyZWUtdGFibGUtZGF0YS1jb25maWcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVUYWJsZURhdGEge1xyXG4gICAgaGVhZGVyczogVHJlZVRhYmxlSGVhZGVyT2JqZWN0W10gPSBbXTtcclxuICAgIGRhdGE6IFRyZWVUYWJsZVJvd1tdID0gW107XHJcblxyXG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBrZXl3b3JkOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcGFnZSA9IDE7XHJcbiAgICBwYWdlU2l6ZSA9IDEwO1xyXG4gICAgbGFzdFBhcmFtcyA9IG51bGw7XHJcbiAgICB0b3RhbFJvd3NDb3VudCA9IDA7XHJcbiAgICBmaWx0ZXJlZFJvd3NDb3VudCA9IDA7XHJcbiAgICBzcGxhc2hNZXNzYWdlRmxhZyA9IGZhbHNlO1xyXG4gICAgc3BsYXNoTWVzc2FnZUNvbnRlbnQgPSAnJztcclxuICAgIHRva2VucyA9IFtudWxsXTtcclxuICAgIGlzQWxsUm93c0V4cGFuZGVkID0gZmFsc2U7XHJcblxyXG4gICAgc2VydmVyQ29uZmlnID0gbmV3IFRyZWVUYWJsZURhdGFTZXJ2ZXJDb25maWcoKTtcclxuICAgIGNvbmZpZyA9IG5ldyBUcmVlVGFibGVEYXRhQ29uZmlnKCk7XHJcbiAgICBsb2FkQ291bnRlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBUcmVlVGFibGVEYXRhQ29uZmlnLCBzZXJ2ZXJDb25maWc/OiBUcmVlVGFibGVEYXRhU2VydmVyQ29uZmlnLCBodHRwPzogSHR0cENsaWVudCkge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgaWYgKHNlcnZlckNvbmZpZyAhPT0gdW5kZWZpbmVkICYmIHNlcnZlckNvbmZpZyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoc2VydmVyQ29uZmlnLnBhcmFtTmFtZXMgPT09IHVuZGVmaW5lZCB8fCBzZXJ2ZXJDb25maWcucGFyYW1OYW1lcyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2VydmVyQ29uZmlnLnBhcmFtTmFtZXMgPSB0aGlzLnNlcnZlckNvbmZpZy5wYXJhbU5hbWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZXJ2ZXJDb25maWcucm93c0tleSA9PT0gdW5kZWZpbmVkIHx8IHNlcnZlckNvbmZpZy5yb3dzS2V5ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJDb25maWcucm93c0tleSA9IHRoaXMuc2VydmVyQ29uZmlnLnJvd3NLZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlcnZlckNvbmZpZy5yb3dVbmlxdWVLZXkgPT09IHVuZGVmaW5lZCB8fCBzZXJ2ZXJDb25maWcucm93VW5pcXVlS2V5ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJDb25maWcucm93VW5pcXVlS2V5ID0gdGhpcy5zZXJ2ZXJDb25maWcucm93VW5pcXVlS2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmVyQ29uZmlnID0gc2VydmVyQ29uZmlnO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ05vIFNlcnZlciBQcm9wZXJ0aWVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5leHRyYUluZm9zICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmV4dHJhSW5mb3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmV4dHJhSW5mb3MgPSBjb25maWcuZXh0cmFJbmZvcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmNvbnRleHQgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuY29udGV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuY29udGV4dCA9IGNvbmZpZy5jb250ZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuc2hvd1RhYmxlSGVhZGVycyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5zaG93VGFibGVIZWFkZXJzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zaG93VGFibGVIZWFkZXJzID0gY29uZmlnLnNob3dUYWJsZUhlYWRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5zaG93RXhwYW5kQXJyb3dzICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnNob3dFeHBhbmRBcnJvd3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNob3dFeHBhbmRBcnJvd3MgPSBjb25maWcuc2hvd0V4cGFuZEFycm93cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmV2ZW50cyA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5ldmVudHMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5ldmVudHMgPSB0aGlzLmNvbmZpZy5ldmVudHM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmV2ZW50cy5yb3dFeHBhbmRlZCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgY29uZmlnLmV2ZW50cy5yb3dFeHBhbmRlZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmV2ZW50cy5yb3dFeHBhbmRlZCA9IGNvbmZpZy5ldmVudHMucm93RXhwYW5kZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmV2ZW50cy5yb3dDb2xsYXBzZWQgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICYmIGNvbmZpZy5ldmVudHMucm93Q29sbGFwc2VkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXZlbnRzLnJvd0NvbGxhcHNlZCA9IGNvbmZpZy5ldmVudHMucm93Q29sbGFwc2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuZnVsbENsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5mdWxsQ2xhc3NOYW1lICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5mdWxsQ2xhc3NOYW1lID0gY29uZmlnLmZ1bGxDbGFzc05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5leGNlbEV4cG9ydEZpbGVOYW1lICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmV4Y2VsRXhwb3J0RmlsZU5hbWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmV4Y2VsRXhwb3J0RmlsZU5hbWUgPSBjb25maWcuZXhjZWxFeHBvcnRGaWxlTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmV4Y2VsRXhwb3J0QnV0dG9uVGV4dCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5leGNlbEV4cG9ydEJ1dHRvblRleHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmV4Y2VsRXhwb3J0QnV0dG9uVGV4dCA9IGNvbmZpZy5leGNlbEV4cG9ydEJ1dHRvblRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5zb3J0QXNjQ2xhc3NOYW1lICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnNvcnRBc2NDbGFzc05hbWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNvcnRBc2NDbGFzc05hbWUgPSBjb25maWcuc29ydEFzY0NsYXNzTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnNvcnREZXNjQ2xhc3NOYW1lICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnNvcnREZXNjQ2xhc3NOYW1lICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zb3J0RGVzY0NsYXNzTmFtZSA9IGNvbmZpZy5zb3J0RGVzY0NsYXNzTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnNvcnROb3RoaW5nQ2xhc3NOYW1lICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnNvcnROb3RoaW5nQ2xhc3NOYW1lICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zb3J0Tm90aGluZ0NsYXNzTmFtZSA9IGNvbmZpZy5zb3J0Tm90aGluZ0NsYXNzTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmN1c3RvbUNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5jdXN0b21DbGFzc05hbWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmN1c3RvbUNsYXNzTmFtZSA9IGNvbmZpZy5jdXN0b21DbGFzc05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5zaG93RXhwYW5kQWxsQXJyb3dzICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnNob3dFeHBhbmRBbGxBcnJvd3MgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNob3dFeHBhbmRBbGxBcnJvd3MgPSBjb25maWcuc2hvd0V4cGFuZEFsbEFycm93cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnNob3dFeHBhbmRBbGxFbXB0eUNoaWxkcmVuICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnNob3dFeHBhbmRBbGxFbXB0eUNoaWxkcmVuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zaG93RXhwYW5kQWxsRW1wdHlDaGlsZHJlbiA9IGNvbmZpZy5zaG93RXhwYW5kQWxsRW1wdHlDaGlsZHJlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnNob3dQYWdlTGVuZ3RoRHJvcGRvd24gIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc2hvd1BhZ2VMZW5ndGhEcm9wZG93biAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuc2hvd1BhZ2VMZW5ndGhEcm9wZG93biA9IGNvbmZpZy5zaG93UGFnZUxlbmd0aERyb3Bkb3duO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuY29sdW1uVmlzaWJpbGl0eSAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5jb2x1bW5WaXNpYmlsaXR5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5jb2x1bW5WaXNpYmlsaXR5ID0gY29uZmlnLmNvbHVtblZpc2liaWxpdHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5jb2x1bW5WaXNpYmlsaXR5RHJvcERvd24gIT09IHVuZGVmaW5lZCAmJiBjb25maWcuY29sdW1uVmlzaWJpbGl0eURyb3BEb3duICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5jb2x1bW5WaXNpYmlsaXR5RHJvcERvd24gPSBjb25maWcuY29sdW1uVmlzaWJpbGl0eURyb3BEb3duO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNWaXNpYmlsaXR5ICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzVmlzaWJpbGl0eSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNWaXNpYmlsaXR5ID0gY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzVmlzaWJpbGl0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnNvcnRlZENvbHVtbiAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5zb3J0ZWRDb2x1bW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNvcnRlZENvbHVtbiA9IGNvbmZpZy5zb3J0ZWRDb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5sZXZlbCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5sZXZlbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcubGV2ZWwgPSBjb25maWcubGV2ZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5jb21tb25TZWFyY2ggIT09IHVuZGVmaW5lZCAmJiBjb25maWcuY29tbW9uU2VhcmNoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5jb21tb25TZWFyY2ggPSBjb25maWcuY29tbW9uU2VhcmNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuY29sdW1uRmlsdGVycyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5jb2x1bW5GaWx0ZXJzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5jb2x1bW5GaWx0ZXJzID0gY29uZmlnLmNvbHVtbkZpbHRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5wYWdlU2l6ZXMgIT09IHVuZGVmaW5lZCAmJiBjb25maWcucGFnZVNpemVzICE9PSBudWxsICYmIGNvbmZpZy5wYWdlU2l6ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcucGFnZVNpemVzLnNwbGljZSgwLCB0aGlzLmNvbmZpZy5wYWdlU2l6ZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgY29uZmlnLnBhZ2VTaXplcy5sZW5ndGg7IHArKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcucGFnZVNpemVzW3BdID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5wYWdlU2l6ZXMucHVzaChjb25maWcucGFnZVNpemVzW3BdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNvbmZpZy5wYWdlU2l6ZXMgPSBjb25maWcucGFnZVNpemVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnMgIT09IHVuZGVmaW5lZCAmJiBjb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzID0gY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcucm93Q2xpY2thYmxlc0NvbnRleHQgIT09IHVuZGVmaW5lZCAmJiBjb25maWcucm93Q2xpY2thYmxlc0NvbnRleHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnJvd0NsaWNrYWJsZXNDb250ZXh0ID0gY29uZmlnLnJvd0NsaWNrYWJsZXNDb250ZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcucm93Q2xpY2thYmxlcyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5yb3dDbGlja2FibGVzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5yb3dDbGlja2FibGVzID0gY29uZmlnLnJvd0NsaWNrYWJsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5jb21tb25TZWFyY2ggIT09IHVuZGVmaW5lZCAmJiBjb25maWcuY29tbW9uU2VhcmNoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5jb21tb25TZWFyY2ggPSBjb25maWcuY29tbW9uU2VhcmNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuZXhjZWxFeHBvcnRCdXR0b24gIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZXhjZWxFeHBvcnRCdXR0b24gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmV4Y2VsRXhwb3J0QnV0dG9uID0gY29uZmlnLmV4Y2VsRXhwb3J0QnV0dG9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ05vIFByb3BlcnRpZXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1Byb3BlcnRpZXMnLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdGFsUGFnZXNDb3VudCgpIHtcclxuICAgICAgICBjb25zdCBwYWdlcyA9IHRoaXMuZmlsdGVyZWRSb3dzQ291bnQgLyB0aGlzLnBhZ2VTaXplO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwocGFnZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmFtcygpIHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcclxuICAgICAgICBpZiAodGhpcy5wYWdlIC0gMSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRva2Vuc1t0aGlzLnBhZ2UgLSAxXSAhPT0gdW5kZWZpbmVkICYmIHRoaXMudG9rZW5zW3RoaXMucGFnZSAtIDFdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbdGhpcy5zZXJ2ZXJDb25maWcucGFyYW1OYW1lcy5wYWdlVG9rZW5dID0gdGhpcy50b2tlbnNbdGhpcy5wYWdlIC0gMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyYW1zW3RoaXMuc2VydmVyQ29uZmlnLnBhcmFtTmFtZXMucGFnZV0gPSB0aGlzLnBhZ2U7XHJcbiAgICAgICAgcGFyYW1zW3RoaXMuc2VydmVyQ29uZmlnLnBhcmFtTmFtZXMuc2VhcmNoXSA9IHRoaXMua2V5d29yZDtcclxuICAgICAgICBwYXJhbXNbdGhpcy5zZXJ2ZXJDb25maWcucGFyYW1OYW1lcy5saW1pdF0gPSB0aGlzLnBhZ2VTaXplO1xyXG4gICAgICAgIHBhcmFtc1t0aGlzLnNlcnZlckNvbmZpZy5wYXJhbU5hbWVzLmNvbEZpbHRlcnNdID0gSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWcuY29sdW1uRmlsdGVycyk7XHJcbiAgICAgICAgcGFyYW1zW3RoaXMuc2VydmVyQ29uZmlnLnBhcmFtTmFtZXMuc29ydF0gPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbmZpZy5zb3J0ZWRDb2x1bW4pO1xyXG4gICAgICAgIGNvbnN0IGNvbFNlYXJjaEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVycyk7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGNvbFNlYXJjaEtleXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1trZXldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1trZXldID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV0udHJpbSgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyYW1zW3RoaXMuc2VydmVyQ29uZmlnLnBhcmFtTmFtZXMuY29sU2VhcmNoXSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzKTtcclxuICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRFeGNlbERhdGEoY2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXJ2ZXJDb25maWcuZXhjZWxFeHBvcnRVcmwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFeGNlbEV4cG9ydFVybCBub3Qgc3BlY2lmaWVkJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5nZXRQYXJhbXMoKTtcclxuICAgICAgICAvLyBkZWxldGUgcGFyYW1zW3RoaXMuc2VydmVyQ29uZmlnLnBhcmFtTmFtZXMubGltaXRdO1xyXG4gICAgICAgIGNvbnN0IGRpcyA9IHRoaXM7XHJcbiAgICAgICAgZGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmVyQ29uZmlnLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICAgICAgdGhpcy5odHRwLmdldCh0aGlzLnNlcnZlckNvbmZpZy5leGNlbEV4cG9ydFVybCwgeyBwYXJhbXMsIHJlc3BvbnNlVHlwZTogJ2Jsb2InIH0pLnN1YnNjcmliZShyZXNwID0+IHtcclxuICAgICAgICAgICAgICAgIGRpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVzcF0sIHt0eXBlOiAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJ30gKTtcclxuICAgICAgICAgICAgICAgIHNhdmVBcyhibG9iLCAnT3JkZXJzLnhsc3gnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWREYXRhKGNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmVyQ29uZmlnLnVybCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1VSTCBub3Qgc3BlY2lmaWVkJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5nZXRQYXJhbXMoKTtcclxuICAgICAgICBpZiAodGhpcy5sYXN0UGFyYW1zICE9PSB1bmRlZmluZWQgJiYgdGhpcy5sYXN0UGFyYW1zICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RQYXJhbXMgPT09IEpTT04uc3RyaW5naWZ5KHBhcmFtcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3RQYXJhbXMgPSBKU09OLnN0cmluZ2lmeShwYXJhbXMpO1xyXG4gICAgICAgIGNvbnN0IGRpcyA9IHRoaXM7XHJcbiAgICAgICAgZGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZGlzLmxvYWRDb3VudGVyKys7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmVyQ29uZmlnLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICAgICAgdGhpcy5odHRwLmdldCh0aGlzLnNlcnZlckNvbmZpZy51cmwsIHsgcGFyYW1zIH0pLnN1YnNjcmliZShyZXNwID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIGNhbGxiYWNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwW3RoaXMuc2VydmVyQ29uZmlnLnJvd3NLZXldID09PSB1bmRlZmluZWQgfHwgcmVzcFt0aGlzLnNlcnZlckNvbmZpZy5yb3dzS2V5XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcy5sb2FkQ291bnRlci0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzLmxvYWRDb3VudGVyIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcy5sb2FkQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUm93c0NvdW50ID0gcmVzcFt0aGlzLnNlcnZlckNvbmZpZy50b3RhbFJvd3NDb3VudEtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRSb3dzQ291bnQgPSByZXNwW3RoaXMuc2VydmVyQ29uZmlnLmZpbHRlcmVkUm93c0NvdW50S2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCByYXdSb3cgb2YgcmVzcFt0aGlzLnNlcnZlckNvbmZpZy5yb3dzS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXF1ZVZhbCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJDb25maWcucm93VW5pcXVlS2V5ID09PSB1bmRlZmluZWQgfHwgdGhpcy5zZXJ2ZXJDb25maWcucm93VW5pcXVlS2V5ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlVmFsID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZVZhbCA9IHJhd1Jvd1t0aGlzLnNlcnZlckNvbmZpZy5yb3dVbmlxdWVLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gbmV3IFRyZWVUYWJsZVJvdyh1bmlxdWVWYWwsIHJhd1JvdywgZmFsc2UsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuY2xpY2thYmxlc0NvbnRleHQgPSB0aGlzLmNvbmZpZy5yb3dDbGlja2FibGVzQ29udGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5jbGlja2FibGVzID0gdGhpcy5jb25maWcucm93Q2xpY2thYmxlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3MucHVzaChyb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RSYXdSb3cgPSByZXNwW3RoaXMuc2VydmVyQ29uZmlnLnJvd3NLZXldW3Jlc3BbdGhpcy5zZXJ2ZXJDb25maWcucm93c0tleV0ubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0UmF3Um93ICE9PSB1bmRlZmluZWQgJiYgbGFzdFJhd1JvdyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VydmVyQ29uZmlnLnJvd1VuaXF1ZUtleSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc2VydmVyQ29uZmlnLnJvd1VuaXF1ZUtleSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zW3RoaXMucGFnZV0gPSBsYXN0UmF3Um93W3RoaXMuc2VydmVyQ29uZmlnLnJvd1VuaXF1ZUtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socm93cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcy5sb2FkQ291bnRlci0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzLmxvYWRDb3VudGVyIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcy5sb2FkQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcy5sb2FkQ291bnRlci0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXMubG9hZENvdW50ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcy5sb2FkQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzLmxvYWRDb3VudGVyLS07XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzLmxvYWRDb3VudGVyIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzLmxvYWRDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFsbFJvd3NFeHBhbmRlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsUm93c0NvbGxhcHNlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3BsYXNoTWVzc2FnZShtc2c6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc3BsYXNoTWVzc2FnZUNvbnRlbnQgPSBtc2c7XHJcbiAgICAgICAgdGhpcy5zcGxhc2hNZXNzYWdlRmxhZyA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgZGlzID0gdGhpcztcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzLnNwbGFzaE1lc3NhZ2VGbGFnICA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==