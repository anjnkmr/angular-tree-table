/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { saveAs } from 'file-saver';
import { TreeTableDataConfig, TreeTableDataServerConfig } from './tree-table-data-config';
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
export { TreeTableRow };
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
            for (var colSearchKeys_1 = tslib_1.__values(colSearchKeys), colSearchKeys_1_1 = colSearchKeys_1.next(); !colSearchKeys_1_1.done; colSearchKeys_1_1 = colSearchKeys_1.next()) {
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
                            for (var _b = tslib_1.__values(resp[_this.serverConfig.rowsKey]), _c = _b.next(); !_c.done; _c = _b.next()) {
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
export { TreeTableData };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS10YWJsZS1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci10cmVlLXRhYmxlLyIsInNvdXJjZXMiOlsiY2xhc3Nlcy90cmVlLXRhYmxlLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRzFGO0lBa0JJLHNCQUFZLEVBQVUsRUFBRSxJQUFRLEVBQUUsVUFBbUIsRUFBRSxRQUF1QjtRQWpCOUUsT0FBRSxHQUFXLElBQUksQ0FBQztRQUNsQixTQUFJLEdBQU8sRUFBRSxDQUFDO1FBQ2QsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixhQUFRLEdBQWtCLElBQUksQ0FBQztRQUMvQixhQUFRLEdBQUcsS0FBSyxDQUFDOztRQUVqQixzQkFBaUIsR0FBUSxJQUFJLENBQUM7O1FBRTlCLGVBQVUsR0FBTyxFQUFFLENBQUM7UUFDcEIsV0FBTSxHQUFPLEVBQUUsQ0FBQztRQUNoQixZQUFPLEdBQWEsRUFBRSxDQUFDOztRQUV2QixZQUFPLEdBQXlCLEVBQUUsQ0FBQzs7UUFFbkMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixZQUFPLEdBQTRDLEVBQUUsQ0FBQztRQUdsRCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7Ozs7SUF2QkcsMEJBQWtCOztJQUNsQiw0QkFBYzs7SUFDZCxrQ0FBbUI7O0lBQ25CLGdDQUErQjs7SUFDL0IsZ0NBQWlCOztJQUVqQix5Q0FBOEI7O0lBRTlCLGtDQUFvQjs7SUFDcEIsOEJBQWdCOztJQUNoQiwrQkFBdUI7O0lBRXZCLCtCQUFtQzs7SUFFbkMsZ0NBQTBCOztJQUMxQiwrQkFBc0Q7O0FBVzFEO0lBc0JJLHVCQUFZLE1BQTRCLEVBQUUsWUFBd0MsRUFBRSxJQUFpQjtRQXJCckcsWUFBTyxHQUE0QixFQUFFLENBQUM7UUFDdEMsU0FBSSxHQUFtQixFQUFFLENBQUM7UUFFMUIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixZQUFPLEdBQVcsSUFBSSxDQUFDO1FBQ3ZCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLHlCQUFvQixHQUFHLEVBQUUsQ0FBQztRQUMxQixXQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFFMUIsaUJBQVksR0FBRyxJQUFJLHlCQUF5QixFQUFFLENBQUM7UUFDL0MsV0FBTSxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUNuQyxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUVSLFNBQUksR0FBZSxJQUFJLENBQUM7UUFHNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxZQUFZLEtBQUssU0FBUyxJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDckQsSUFBSSxZQUFZLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxZQUFZLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtnQkFDM0UsWUFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQzthQUMxRDtZQUNELElBQUksWUFBWSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksWUFBWSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7Z0JBQ3JFLFlBQVksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7YUFDcEQ7WUFDRCxJQUFJLFlBQVksQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLFlBQVksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUMvRSxZQUFZLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO2FBQzlEO1lBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDakMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO2FBQU07WUFDSCx1Q0FBdUM7U0FDMUM7UUFDRCxJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO2dCQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO2FBQzlDO1lBQ0QsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUN4QztZQUNELElBQUksTUFBTSxDQUFDLGdCQUFnQixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxFQUFFO2dCQUMzRSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQzthQUMxRDtZQUNELElBQUksTUFBTSxDQUFDLGdCQUFnQixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxFQUFFO2dCQUMzRSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQzthQUMxRDtZQUNELElBQUksTUFBTSxDQUFDLGNBQWMsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLGNBQWMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3ZFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7YUFDdEQ7WUFDRCxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLHdCQUF3QixLQUFLLElBQUksRUFBRTtnQkFDM0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUM7YUFDMUU7WUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUN2RCxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ3RDO2lCQUFNO2dCQUNILElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssU0FBUzt1QkFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO29CQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7aUJBQzlEO2dCQUNELElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUzt1QkFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO29CQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7aUJBQ2hFO2FBQ0o7WUFDRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFO2dCQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO2FBQ3BEO1lBQ0QsSUFBSSxNQUFNLENBQUMsbUJBQW1CLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsS0FBSyxJQUFJLEVBQUU7Z0JBQ2pGLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO2FBQ2hFO1lBQ0QsSUFBSSxNQUFNLENBQUMscUJBQXFCLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsS0FBSyxJQUFJLEVBQUU7Z0JBQ3JGLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDO2FBQ3BFO1lBQ0QsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO2FBQzFEO1lBQ0QsSUFBSSxNQUFNLENBQUMsaUJBQWlCLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsS0FBSyxJQUFJLEVBQUU7Z0JBQzdFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDO2FBQzVEO1lBQ0QsSUFBSSxNQUFNLENBQUMsb0JBQW9CLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsS0FBSyxJQUFJLEVBQUU7Z0JBQ25GLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO2FBQ2xFO1lBQ0QsSUFBSSxNQUFNLENBQUMsZUFBZSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsZUFBZSxLQUFLLElBQUksRUFBRTtnQkFDekUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQzthQUN4RDtZQUNELElBQUksTUFBTSxDQUFDLG1CQUFtQixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsbUJBQW1CLEtBQUssSUFBSSxFQUFFO2dCQUNqRixJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQzthQUNoRTtZQUNELElBQUksTUFBTSxDQUFDLDBCQUEwQixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsMEJBQTBCLEtBQUssSUFBSSxFQUFFO2dCQUMvRixJQUFJLENBQUMsTUFBTSxDQUFDLDBCQUEwQixHQUFHLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQzthQUM5RTtZQUNELElBQUksTUFBTSxDQUFDLHNCQUFzQixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsc0JBQXNCLEtBQUssSUFBSSxFQUFFO2dCQUN2RixJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQzthQUN0RTtZQUNELElBQUksTUFBTSxDQUFDLGdCQUFnQixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxFQUFFO2dCQUMzRSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQzthQUMxRDtZQUNELElBQUksTUFBTSxDQUFDLHdCQUF3QixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsd0JBQXdCLEtBQUssSUFBSSxFQUFFO2dCQUMzRixJQUFJLENBQUMsTUFBTSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQzthQUMxRTtZQUNELElBQUksTUFBTSxDQUFDLDhCQUE4QixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsOEJBQThCLEtBQUssSUFBSSxFQUFFO2dCQUN2RyxJQUFJLENBQUMsTUFBTSxDQUFDLDhCQUE4QixHQUFHLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQzthQUN0RjtZQUNELElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7Z0JBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7YUFDbEQ7WUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO2FBQ3BDO1lBQ0QsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtnQkFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQzthQUNsRDtZQUNELElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQUU7Z0JBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7YUFDcEQ7WUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDNUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUM5QyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNuRDtpQkFDSjtnQkFDRCw0Q0FBNEM7YUFDL0M7WUFDRCxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLG9CQUFvQixLQUFLLElBQUksRUFBRTtnQkFDbkYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7YUFDbEU7WUFDRCxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLG9CQUFvQixLQUFLLElBQUksRUFBRTtnQkFDbkYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7YUFDbEU7WUFDRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFO2dCQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO2FBQ3BEO1lBQ0QsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtnQkFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQzthQUNsRDtZQUNELElBQUksTUFBTSxDQUFDLGlCQUFpQixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsaUJBQWlCLEtBQUssSUFBSSxFQUFFO2dCQUM3RSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQzthQUM1RDtZQUNELElBQUksTUFBTSxDQUFDLDJCQUEyQixLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsMkJBQTJCLEtBQUssSUFBSSxFQUFFO2dCQUNqRyxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUEyQixHQUFHLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQzthQUNoRjtTQUNKO2FBQU07WUFDSCxnQ0FBZ0M7U0FDbkM7UUFDRCxxQ0FBcUM7SUFDekMsQ0FBQzs7OztJQUVELHVDQUFlOzs7SUFBZjs7WUFDVSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRO1FBQ3BELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsaUNBQVM7OztJQUFUOzs7WUFDVSxNQUFNLEdBQUcsRUFBRTtRQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDakYsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMvRTtTQUNKO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDOztZQUMvRSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDOztZQUNuRSxLQUFnQixJQUFBLGtCQUFBLGlCQUFBLGFBQWEsQ0FBQSw0Q0FBQSx1RUFBRTtnQkFBMUIsSUFBSSxHQUFHLDBCQUFBO2dCQUNSLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUU7b0JBQ2hELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDaEQ7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtvQkFDckQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNoRDtnQkFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUM5QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2hEO2dCQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ3JELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDaEQ7YUFDSjs7Ozs7Ozs7O1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xHLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQscUNBQWE7Ozs7SUFBYixVQUFjLFFBQWM7UUFDeEIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsS0FBSyxJQUFJLEVBQUU7WUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQzdDLE9BQU87U0FDVjs7WUFDSyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTs7O1lBRXpCLEdBQUcsR0FBRyxJQUFJO1FBQ2hCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDNUYsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7O29CQUNoQixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksRUFBRSwwQkFBMEIsRUFBQyxDQUFFO2dCQUNsRSxNQUFNLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsRUFBQyxDQUFDO1NBQ047SUFDTCxDQUFDOzs7OztJQUVELGdDQUFROzs7O0lBQVIsVUFBUyxRQUFjO1FBQXZCLGlCQXFFQztRQXBFRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFLLElBQUksRUFBRTtZQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDbEMsT0FBTztTQUNWOztZQUNLLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQy9CLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDM0QsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzVDLE9BQU87YUFDVjtTQUNKO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztZQUNuQyxHQUFHLEdBQUcsSUFBSTtRQUNoQixHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNyQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsSUFBSTs7Z0JBQzNELElBQUksUUFBUSxLQUFLLFNBQVMsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFOzt3QkFDdkMsSUFBSSxHQUFHLEVBQUU7b0JBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFO3dCQUMzRixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ2IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNsQixJQUFJLEdBQUcsQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFOzRCQUN0QixHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs0QkFDdEIsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7eUJBQ3ZCO3FCQUNKO3lCQUFNO3dCQUNILEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFDaEUsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUM7OzRCQUN0RSxLQUFxQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7Z0NBQWpELElBQU0sTUFBTSxXQUFBOztvQ0FDVCxTQUFTLEdBQUcsSUFBSTtnQ0FDcEIsSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksS0FBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO29DQUN6RixTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQ0FDcEM7cUNBQU07b0NBQ0gsU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lDQUN0RDs7b0NBQ0ssR0FBRyxHQUFHLElBQUksWUFBWSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQztnQ0FDakUsR0FBRyxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7Z0NBQ3pELEdBQUcsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0NBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7NkJBQ2xCOzs7Ozs7Ozs7OzRCQUNLLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUM5RixJQUFJLFVBQVUsS0FBSyxTQUFTLElBQUksVUFBVSxLQUFLLElBQUksRUFBRTs0QkFDakQsSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksS0FBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO2dDQUN6RixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQzs2QkFDdkU7eUJBQ0o7d0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNmLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDbEIsSUFBSSxHQUFHLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTs0QkFDdEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7NEJBQ3RCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO3lCQUN2QjtxQkFDSjtpQkFDSjtxQkFBTTtvQkFDSCxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ2xCLElBQUksR0FBRyxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUU7d0JBQ3RCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3dCQUN0QixHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztxQkFDdkI7aUJBQ0o7WUFDTCxDQUFDOzs7O1lBQUUsVUFBQSxHQUFHO2dCQUNGLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxHQUFHLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTtvQkFDdEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2lCQUN2QjtZQUNMLENBQUMsRUFBQyxDQUFDO1NBQ047SUFDTCxDQUFDOzs7O0lBRUQsdUNBQWU7OztJQUFmO1FBQ0ksT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELHdDQUFnQjs7O0lBQWhCO1FBQ0ksT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFRCxxQ0FBYTs7OztJQUFiLFVBQWMsR0FBVztRQUNyQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsR0FBRyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7O1lBQ3hCLEdBQUcsR0FBRyxJQUFJO1FBQ2hCLFVBQVU7OztRQUFDO1lBQ1AsR0FBRyxDQUFDLGlCQUFpQixHQUFJLEtBQUssQ0FBQztRQUNuQyxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBdlNELElBdVNDOzs7O0lBdFNHLGdDQUFzQzs7SUFDdEMsNkJBQTBCOztJQUUxQixrQ0FBa0I7O0lBQ2xCLGdDQUF1Qjs7SUFDdkIsNkJBQVM7O0lBQ1QsaUNBQWM7O0lBQ2QsbUNBQWtCOztJQUNsQix1Q0FBbUI7O0lBQ25CLDBDQUFzQjs7SUFDdEIsMENBQTBCOztJQUMxQiw2Q0FBMEI7O0lBQzFCLCtCQUFnQjs7SUFDaEIsMENBQTBCOztJQUUxQixxQ0FBK0M7O0lBQy9DLCtCQUFtQzs7SUFDbkMsb0NBQWdCOzs7OztJQUVoQiw2QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmVlVGFibGVIZWFkZXJPYmplY3QgfSBmcm9tICcuL3RyZWUtdGFibGUtaGVhZGVyLW9iamVjdCc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgeyBUcmVlVGFibGVEYXRhQ29uZmlnLCBUcmVlVGFibGVEYXRhU2VydmVyQ29uZmlnIH0gZnJvbSAnLi90cmVlLXRhYmxlLWRhdGEtY29uZmlnJztcclxuaW1wb3J0IHsgVHJlZVRhYmxlUm93QWN0aW9uIH0gZnJvbSAnLi90cmVlLXRhYmxlLXJvdy1hY3Rpb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVUYWJsZVJvdyB7XHJcbiAgICBpZDogc3RyaW5nID0gbnVsbDtcclxuICAgIGRhdGE6IHt9ID0ge307XHJcbiAgICBleHBhbmRhYmxlID0gZmFsc2U7XHJcbiAgICBjaGlsZHJlbjogVHJlZVRhYmxlRGF0YSA9IG51bGw7XHJcbiAgICBleHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgLy8gQ2xpY2thYmxlcyBDb250ZXh0IGZvciBBY3Rpb25zXHJcbiAgICBjbGlja2FibGVzQ29udGV4dDogYW55ID0gbnVsbDtcclxuICAgIC8vIENsaWNrYWJsZSBQcm9wZXJ0aWVzIGFuZCBBY3Rpb25zXHJcbiAgICBjbGlja2FibGVzOiB7fSA9IHt9O1xyXG4gICAgc3R5bGVzOiB7fSA9IHt9O1xyXG4gICAgY2xhc3Nlczogc3RyaW5nW10gPSBbXTtcclxuICAgIC8vIEFjdGlvbnMgSGVhZGVyIEJ1dHRvbnNcclxuICAgIGFjdGlvbnM6IFRyZWVUYWJsZVJvd0FjdGlvbltdID0gW107XHJcbiAgICAvLyBJcyByb3cgc2VsZWN0ZWRcclxuICAgIHNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBvcHRpb25zOiB7dmFsdWU6IHN0cmluZywgZGlzcGxheVRleHQ6IHN0cmluZ31bXSA9ICBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBkYXRhOiB7fSwgZXhwYW5kYWJsZTogYm9vbGVhbiwgY2hpbGRyZW46IFRyZWVUYWJsZURhdGEpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLmV4cGFuZGFibGUgPSBleHBhbmRhYmxlO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlVGFibGVEYXRhIHtcclxuICAgIGhlYWRlcnM6IFRyZWVUYWJsZUhlYWRlck9iamVjdFtdID0gW107XHJcbiAgICBkYXRhOiBUcmVlVGFibGVSb3dbXSA9IFtdO1xyXG5cclxuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAga2V5d29yZDogc3RyaW5nID0gbnVsbDtcclxuICAgIHBhZ2UgPSAxO1xyXG4gICAgcGFnZVNpemUgPSAxMDtcclxuICAgIGxhc3RQYXJhbXMgPSBudWxsO1xyXG4gICAgdG90YWxSb3dzQ291bnQgPSAwO1xyXG4gICAgZmlsdGVyZWRSb3dzQ291bnQgPSAwO1xyXG4gICAgc3BsYXNoTWVzc2FnZUZsYWcgPSBmYWxzZTtcclxuICAgIHNwbGFzaE1lc3NhZ2VDb250ZW50ID0gJyc7XHJcbiAgICB0b2tlbnMgPSBbbnVsbF07XHJcbiAgICBpc0FsbFJvd3NFeHBhbmRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHNlcnZlckNvbmZpZyA9IG5ldyBUcmVlVGFibGVEYXRhU2VydmVyQ29uZmlnKCk7XHJcbiAgICBjb25maWcgPSBuZXcgVHJlZVRhYmxlRGF0YUNvbmZpZygpO1xyXG4gICAgbG9hZENvdW50ZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogVHJlZVRhYmxlRGF0YUNvbmZpZywgc2VydmVyQ29uZmlnPzogVHJlZVRhYmxlRGF0YVNlcnZlckNvbmZpZywgaHR0cD86IEh0dHBDbGllbnQpIHtcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgICAgIGlmIChzZXJ2ZXJDb25maWcgIT09IHVuZGVmaW5lZCAmJiBzZXJ2ZXJDb25maWcgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHNlcnZlckNvbmZpZy5wYXJhbU5hbWVzID09PSB1bmRlZmluZWQgfHwgc2VydmVyQ29uZmlnLnBhcmFtTmFtZXMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNlcnZlckNvbmZpZy5wYXJhbU5hbWVzID0gdGhpcy5zZXJ2ZXJDb25maWcucGFyYW1OYW1lcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VydmVyQ29uZmlnLnJvd3NLZXkgPT09IHVuZGVmaW5lZCB8fCBzZXJ2ZXJDb25maWcucm93c0tleSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2VydmVyQ29uZmlnLnJvd3NLZXkgPSB0aGlzLnNlcnZlckNvbmZpZy5yb3dzS2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZXJ2ZXJDb25maWcucm93VW5pcXVlS2V5ID09PSB1bmRlZmluZWQgfHwgc2VydmVyQ29uZmlnLnJvd1VuaXF1ZUtleSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2VydmVyQ29uZmlnLnJvd1VuaXF1ZUtleSA9IHRoaXMuc2VydmVyQ29uZmlnLnJvd1VuaXF1ZUtleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNlcnZlckNvbmZpZyA9IHNlcnZlckNvbmZpZztcclxuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdObyBTZXJ2ZXIgUHJvcGVydGllcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnICE9PSB1bmRlZmluZWQgJiYgY29uZmlnICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuZXh0cmFJbmZvcyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5leHRyYUluZm9zICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5leHRyYUluZm9zID0gY29uZmlnLmV4dHJhSW5mb3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5jb250ZXh0ICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmNvbnRleHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNvbnRleHQgPSBjb25maWcuY29udGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnNob3dUYWJsZUhlYWRlcnMgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc2hvd1RhYmxlSGVhZGVycyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuc2hvd1RhYmxlSGVhZGVycyA9IGNvbmZpZy5zaG93VGFibGVIZWFkZXJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuc2hvd0V4cGFuZEFycm93cyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5zaG93RXhwYW5kQXJyb3dzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zaG93RXhwYW5kQXJyb3dzID0gY29uZmlnLnNob3dFeHBhbmRBcnJvd3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5leHBhbmRhYmxlVHlwZSAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5leHBhbmRhYmxlVHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXhwYW5kYWJsZVR5cGUgPSBjb25maWcuZXhwYW5kYWJsZVR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5leHBhbmRhYmxlQXJyb3dQbGFjZW1lbnQgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZXhwYW5kYWJsZUFycm93UGxhY2VtZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5leHBhbmRhYmxlQXJyb3dQbGFjZW1lbnQgPSBjb25maWcuZXhwYW5kYWJsZUFycm93UGxhY2VtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuZXZlbnRzID09PSB1bmRlZmluZWQgfHwgY29uZmlnLmV2ZW50cyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmV2ZW50cyA9IHRoaXMuY29uZmlnLmV2ZW50cztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuZXZlbnRzLnJvd0V4cGFuZGVkICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAmJiBjb25maWcuZXZlbnRzLnJvd0V4cGFuZGVkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXZlbnRzLnJvd0V4cGFuZGVkID0gY29uZmlnLmV2ZW50cy5yb3dFeHBhbmRlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuZXZlbnRzLnJvd0NvbGxhcHNlZCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgY29uZmlnLmV2ZW50cy5yb3dDb2xsYXBzZWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5ldmVudHMucm93Q29sbGFwc2VkID0gY29uZmlnLmV2ZW50cy5yb3dDb2xsYXBzZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5mdWxsQ2xhc3NOYW1lICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmZ1bGxDbGFzc05hbWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmZ1bGxDbGFzc05hbWUgPSBjb25maWcuZnVsbENsYXNzTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmV4Y2VsRXhwb3J0RmlsZU5hbWUgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZXhjZWxFeHBvcnRGaWxlTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXhjZWxFeHBvcnRGaWxlTmFtZSA9IGNvbmZpZy5leGNlbEV4cG9ydEZpbGVOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuZXhjZWxFeHBvcnRCdXR0b25UZXh0ICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmV4Y2VsRXhwb3J0QnV0dG9uVGV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXhjZWxFeHBvcnRCdXR0b25UZXh0ID0gY29uZmlnLmV4Y2VsRXhwb3J0QnV0dG9uVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnNvcnRBc2NDbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc29ydEFzY0NsYXNzTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuc29ydEFzY0NsYXNzTmFtZSA9IGNvbmZpZy5zb3J0QXNjQ2xhc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuc29ydERlc2NDbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc29ydERlc2NDbGFzc05hbWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNvcnREZXNjQ2xhc3NOYW1lID0gY29uZmlnLnNvcnREZXNjQ2xhc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuc29ydE5vdGhpbmdDbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc29ydE5vdGhpbmdDbGFzc05hbWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNvcnROb3RoaW5nQ2xhc3NOYW1lID0gY29uZmlnLnNvcnROb3RoaW5nQ2xhc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuY3VzdG9tQ2xhc3NOYW1lICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmN1c3RvbUNsYXNzTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuY3VzdG9tQ2xhc3NOYW1lID0gY29uZmlnLmN1c3RvbUNsYXNzTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnNob3dFeHBhbmRBbGxBcnJvd3MgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc2hvd0V4cGFuZEFsbEFycm93cyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuc2hvd0V4cGFuZEFsbEFycm93cyA9IGNvbmZpZy5zaG93RXhwYW5kQWxsQXJyb3dzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuc2hvd0V4cGFuZEFsbEVtcHR5Q2hpbGRyZW4gIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc2hvd0V4cGFuZEFsbEVtcHR5Q2hpbGRyZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNob3dFeHBhbmRBbGxFbXB0eUNoaWxkcmVuID0gY29uZmlnLnNob3dFeHBhbmRBbGxFbXB0eUNoaWxkcmVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuc2hvd1BhZ2VMZW5ndGhEcm9wZG93biAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5zaG93UGFnZUxlbmd0aERyb3Bkb3duICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zaG93UGFnZUxlbmd0aERyb3Bkb3duID0gY29uZmlnLnNob3dQYWdlTGVuZ3RoRHJvcGRvd247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5jb2x1bW5WaXNpYmlsaXR5ICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmNvbHVtblZpc2liaWxpdHkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNvbHVtblZpc2liaWxpdHkgPSBjb25maWcuY29sdW1uVmlzaWJpbGl0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmNvbHVtblZpc2liaWxpdHlEcm9wRG93biAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5jb2x1bW5WaXNpYmlsaXR5RHJvcERvd24gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNvbHVtblZpc2liaWxpdHlEcm9wRG93biA9IGNvbmZpZy5jb2x1bW5WaXNpYmlsaXR5RHJvcERvd247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1Zpc2liaWxpdHkgIT09IHVuZGVmaW5lZCAmJiBjb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNWaXNpYmlsaXR5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1Zpc2liaWxpdHkgPSBjb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNWaXNpYmlsaXR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuc29ydGVkQ29sdW1uICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnNvcnRlZENvbHVtbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuc29ydGVkQ29sdW1uID0gY29uZmlnLnNvcnRlZENvbHVtbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmxldmVsICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmxldmVsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sZXZlbCA9IGNvbmZpZy5sZXZlbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmNvbW1vblNlYXJjaCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5jb21tb25TZWFyY2ggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNvbW1vblNlYXJjaCA9IGNvbmZpZy5jb21tb25TZWFyY2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5jb2x1bW5GaWx0ZXJzICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmNvbHVtbkZpbHRlcnMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNvbHVtbkZpbHRlcnMgPSBjb25maWcuY29sdW1uRmlsdGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnBhZ2VTaXplcyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5wYWdlU2l6ZXMgIT09IG51bGwgJiYgY29uZmlnLnBhZ2VTaXplcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5wYWdlU2l6ZXMuc3BsaWNlKDAsIHRoaXMuY29uZmlnLnBhZ2VTaXplcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBjb25maWcucGFnZVNpemVzLmxlbmd0aDsgcCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5wYWdlU2l6ZXNbcF0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnBhZ2VTaXplcy5wdXNoKGNvbmZpZy5wYWdlU2l6ZXNbcF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY29uZmlnLnBhZ2VTaXplcyA9IGNvbmZpZy5wYWdlU2l6ZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVycyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVycyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnMgPSBjb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5yb3dDbGlja2FibGVzQ29udGV4dCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5yb3dDbGlja2FibGVzQ29udGV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcucm93Q2xpY2thYmxlc0NvbnRleHQgPSBjb25maWcucm93Q2xpY2thYmxlc0NvbnRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5yb3dDbGlja2FibGVzICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnJvd0NsaWNrYWJsZXMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnJvd0NsaWNrYWJsZXMgPSBjb25maWcucm93Q2xpY2thYmxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmNvbW1vblNlYXJjaCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5jb21tb25TZWFyY2ggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNvbW1vblNlYXJjaCA9IGNvbmZpZy5jb21tb25TZWFyY2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5leGNlbEV4cG9ydEJ1dHRvbiAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5leGNlbEV4cG9ydEJ1dHRvbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXhjZWxFeHBvcnRCdXR0b24gPSBjb25maWcuZXhjZWxFeHBvcnRCdXR0b247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5leGNlbEV4cG9ydE9ubHlGaWx0ZXJlZFJvd3MgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZXhjZWxFeHBvcnRPbmx5RmlsdGVyZWRSb3dzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5leGNlbEV4cG9ydE9ubHlGaWx0ZXJlZFJvd3MgPSBjb25maWcuZXhjZWxFeHBvcnRPbmx5RmlsdGVyZWRSb3dzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ05vIFByb3BlcnRpZXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1Byb3BlcnRpZXMnLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdGFsUGFnZXNDb3VudCgpIHtcclxuICAgICAgICBjb25zdCBwYWdlcyA9IHRoaXMuZmlsdGVyZWRSb3dzQ291bnQgLyB0aGlzLnBhZ2VTaXplO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwocGFnZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmFtcygpIHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcclxuICAgICAgICBpZiAodGhpcy5wYWdlIC0gMSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRva2Vuc1t0aGlzLnBhZ2UgLSAxXSAhPT0gdW5kZWZpbmVkICYmIHRoaXMudG9rZW5zW3RoaXMucGFnZSAtIDFdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbdGhpcy5zZXJ2ZXJDb25maWcucGFyYW1OYW1lcy5wYWdlVG9rZW5dID0gdGhpcy50b2tlbnNbdGhpcy5wYWdlIC0gMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyYW1zW3RoaXMuc2VydmVyQ29uZmlnLnBhcmFtTmFtZXMucGFnZV0gPSB0aGlzLnBhZ2U7XHJcbiAgICAgICAgcGFyYW1zW3RoaXMuc2VydmVyQ29uZmlnLnBhcmFtTmFtZXMuc2VhcmNoXSA9IHRoaXMua2V5d29yZDtcclxuICAgICAgICBwYXJhbXNbdGhpcy5zZXJ2ZXJDb25maWcucGFyYW1OYW1lcy5saW1pdF0gPSB0aGlzLnBhZ2VTaXplO1xyXG4gICAgICAgIHBhcmFtc1t0aGlzLnNlcnZlckNvbmZpZy5wYXJhbU5hbWVzLmNvbEZpbHRlcnNdID0gSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWcuY29sdW1uRmlsdGVycyk7XHJcbiAgICAgICAgcGFyYW1zW3RoaXMuc2VydmVyQ29uZmlnLnBhcmFtTmFtZXMuc29ydF0gPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbmZpZy5zb3J0ZWRDb2x1bW4pO1xyXG4gICAgICAgIGNvbnN0IGNvbFNlYXJjaEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVycyk7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGNvbFNlYXJjaEtleXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1trZXldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1trZXldID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV0udHJpbSgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyYW1zW3RoaXMuc2VydmVyQ29uZmlnLnBhcmFtTmFtZXMuY29sU2VhcmNoXSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzKTtcclxuICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRFeGNlbERhdGEoY2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXJ2ZXJDb25maWcuZXhjZWxFeHBvcnRVcmwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFeGNlbEV4cG9ydFVybCBub3Qgc3BlY2lmaWVkJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5nZXRQYXJhbXMoKTtcclxuICAgICAgICAvLyBkZWxldGUgcGFyYW1zW3RoaXMuc2VydmVyQ29uZmlnLnBhcmFtTmFtZXMubGltaXRdO1xyXG4gICAgICAgIGNvbnN0IGRpcyA9IHRoaXM7XHJcbiAgICAgICAgZGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmVyQ29uZmlnLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICAgICAgdGhpcy5odHRwLmdldCh0aGlzLnNlcnZlckNvbmZpZy5leGNlbEV4cG9ydFVybCwgeyBwYXJhbXMsIHJlc3BvbnNlVHlwZTogJ2Jsb2InIH0pLnN1YnNjcmliZShyZXNwID0+IHtcclxuICAgICAgICAgICAgICAgIGRpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVzcF0sIHt0eXBlOiAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJ30gKTtcclxuICAgICAgICAgICAgICAgIHNhdmVBcyhibG9iLCAnT3JkZXJzLnhsc3gnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWREYXRhKGNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmVyQ29uZmlnLnVybCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1VSTCBub3Qgc3BlY2lmaWVkJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5nZXRQYXJhbXMoKTtcclxuICAgICAgICBpZiAodGhpcy5sYXN0UGFyYW1zICE9PSB1bmRlZmluZWQgJiYgdGhpcy5sYXN0UGFyYW1zICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RQYXJhbXMgPT09IEpTT04uc3RyaW5naWZ5KHBhcmFtcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3RQYXJhbXMgPSBKU09OLnN0cmluZ2lmeShwYXJhbXMpO1xyXG4gICAgICAgIGNvbnN0IGRpcyA9IHRoaXM7XHJcbiAgICAgICAgZGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZGlzLmxvYWRDb3VudGVyKys7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmVyQ29uZmlnLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgICAgICAgdGhpcy5odHRwLmdldCh0aGlzLnNlcnZlckNvbmZpZy51cmwsIHsgcGFyYW1zIH0pLnN1YnNjcmliZShyZXNwID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIGNhbGxiYWNrICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwW3RoaXMuc2VydmVyQ29uZmlnLnJvd3NLZXldID09PSB1bmRlZmluZWQgfHwgcmVzcFt0aGlzLnNlcnZlckNvbmZpZy5yb3dzS2V5XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcy5sb2FkQ291bnRlci0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzLmxvYWRDb3VudGVyIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcy5sb2FkQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUm93c0NvdW50ID0gcmVzcFt0aGlzLnNlcnZlckNvbmZpZy50b3RhbFJvd3NDb3VudEtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRSb3dzQ291bnQgPSByZXNwW3RoaXMuc2VydmVyQ29uZmlnLmZpbHRlcmVkUm93c0NvdW50S2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCByYXdSb3cgb2YgcmVzcFt0aGlzLnNlcnZlckNvbmZpZy5yb3dzS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXF1ZVZhbCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJDb25maWcucm93VW5pcXVlS2V5ID09PSB1bmRlZmluZWQgfHwgdGhpcy5zZXJ2ZXJDb25maWcucm93VW5pcXVlS2V5ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlVmFsID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZVZhbCA9IHJhd1Jvd1t0aGlzLnNlcnZlckNvbmZpZy5yb3dVbmlxdWVLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gbmV3IFRyZWVUYWJsZVJvdyh1bmlxdWVWYWwsIHJhd1JvdywgZmFsc2UsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuY2xpY2thYmxlc0NvbnRleHQgPSB0aGlzLmNvbmZpZy5yb3dDbGlja2FibGVzQ29udGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5jbGlja2FibGVzID0gdGhpcy5jb25maWcucm93Q2xpY2thYmxlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3MucHVzaChyb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RSYXdSb3cgPSByZXNwW3RoaXMuc2VydmVyQ29uZmlnLnJvd3NLZXldW3Jlc3BbdGhpcy5zZXJ2ZXJDb25maWcucm93c0tleV0ubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0UmF3Um93ICE9PSB1bmRlZmluZWQgJiYgbGFzdFJhd1JvdyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VydmVyQ29uZmlnLnJvd1VuaXF1ZUtleSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc2VydmVyQ29uZmlnLnJvd1VuaXF1ZUtleSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zW3RoaXMucGFnZV0gPSBsYXN0UmF3Um93W3RoaXMuc2VydmVyQ29uZmlnLnJvd1VuaXF1ZUtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socm93cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcy5sb2FkQ291bnRlci0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzLmxvYWRDb3VudGVyIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcy5sb2FkQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcy5sb2FkQ291bnRlci0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXMubG9hZENvdW50ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcy5sb2FkQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzLmxvYWRDb3VudGVyLS07XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzLmxvYWRDb3VudGVyIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzLmxvYWRDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFsbFJvd3NFeHBhbmRlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsUm93c0NvbGxhcHNlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3BsYXNoTWVzc2FnZShtc2c6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc3BsYXNoTWVzc2FnZUNvbnRlbnQgPSBtc2c7XHJcbiAgICAgICAgdGhpcy5zcGxhc2hNZXNzYWdlRmxhZyA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgZGlzID0gdGhpcztcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzLnNwbGFzaE1lc3NhZ2VGbGFnICA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==