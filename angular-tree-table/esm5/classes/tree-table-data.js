/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { TreeTableRow } from './tree-table-row';
import { saveAs } from 'file-saver';
import { TreeTableDataConfig, TreeTableDataServerConfig } from './tree-table-data-config';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS10YWJsZS1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci10cmVlLXRhYmxlLyIsInNvdXJjZXMiOlsiY2xhc3Nlcy90cmVlLXRhYmxlLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNwQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUxRjtJQXNCSSx1QkFBWSxNQUE0QixFQUFFLFlBQXdDLEVBQUUsSUFBaUI7UUFyQnJHLFlBQU8sR0FBNEIsRUFBRSxDQUFDO1FBQ3RDLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBRTFCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTyxHQUFXLElBQUksQ0FBQztRQUN2QixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQix5QkFBb0IsR0FBRyxFQUFFLENBQUM7UUFDMUIsV0FBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRTFCLGlCQUFZLEdBQUcsSUFBSSx5QkFBeUIsRUFBRSxDQUFDO1FBQy9DLFdBQU0sR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7UUFDbkMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFFUixTQUFJLEdBQWUsSUFBSSxDQUFDO1FBRzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksWUFBWSxLQUFLLFNBQVMsSUFBSSxZQUFZLEtBQUss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QUUxQixrQ0FBa0I7O0lBQ2xCLGdDQUF1Qjs7SUFDdkIsNkJBQVM7O0lBQ1QsaUNBQWM7O0lBQ2QsbUNBQWtCOztJQUNsQix1Q0FBbUI7O0lBQ25CLDBDQUFzQjs7SUFDdEIsMENBQTBCOztJQUMxQiw2Q0FBMEI7O0lBQzFCLCtCQUFnQjs7SUFDaEIsMENBQTBCOztJQUUxQixxQ0FBK0M7O0lBQy9DLCtCQUFtQzs7SUFDbkMsb0NBQWdCOzs7OztJQUVoQiw2QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmVlVGFibGVIZWFkZXJPYmplY3QgfSBmcm9tICcuL3RyZWUtdGFibGUtaGVhZGVyLW9iamVjdCc7XHJcbmltcG9ydCB7IFRyZWVUYWJsZVJvdyB9IGZyb20gJy4vdHJlZS10YWJsZS1yb3cnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0IHsgVHJlZVRhYmxlRGF0YUNvbmZpZywgVHJlZVRhYmxlRGF0YVNlcnZlckNvbmZpZyB9IGZyb20gJy4vdHJlZS10YWJsZS1kYXRhLWNvbmZpZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZVRhYmxlRGF0YSB7XHJcbiAgICBoZWFkZXJzOiBUcmVlVGFibGVIZWFkZXJPYmplY3RbXSA9IFtdO1xyXG4gICAgZGF0YTogVHJlZVRhYmxlUm93W10gPSBbXTtcclxuXHJcbiAgICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIGtleXdvcmQ6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwYWdlID0gMTtcclxuICAgIHBhZ2VTaXplID0gMTA7XHJcbiAgICBsYXN0UGFyYW1zID0gbnVsbDtcclxuICAgIHRvdGFsUm93c0NvdW50ID0gMDtcclxuICAgIGZpbHRlcmVkUm93c0NvdW50ID0gMDtcclxuICAgIHNwbGFzaE1lc3NhZ2VGbGFnID0gZmFsc2U7XHJcbiAgICBzcGxhc2hNZXNzYWdlQ29udGVudCA9ICcnO1xyXG4gICAgdG9rZW5zID0gW251bGxdO1xyXG4gICAgaXNBbGxSb3dzRXhwYW5kZWQgPSBmYWxzZTtcclxuXHJcbiAgICBzZXJ2ZXJDb25maWcgPSBuZXcgVHJlZVRhYmxlRGF0YVNlcnZlckNvbmZpZygpO1xyXG4gICAgY29uZmlnID0gbmV3IFRyZWVUYWJsZURhdGFDb25maWcoKTtcclxuICAgIGxvYWRDb3VudGVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IFRyZWVUYWJsZURhdGFDb25maWcsIHNlcnZlckNvbmZpZz86IFRyZWVUYWJsZURhdGFTZXJ2ZXJDb25maWcsIGh0dHA/OiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgICAgICBpZiAoc2VydmVyQ29uZmlnICE9PSB1bmRlZmluZWQgJiYgc2VydmVyQ29uZmlnICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChzZXJ2ZXJDb25maWcucGFyYW1OYW1lcyA9PT0gdW5kZWZpbmVkIHx8IHNlcnZlckNvbmZpZy5wYXJhbU5hbWVzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJDb25maWcucGFyYW1OYW1lcyA9IHRoaXMuc2VydmVyQ29uZmlnLnBhcmFtTmFtZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlcnZlckNvbmZpZy5yb3dzS2V5ID09PSB1bmRlZmluZWQgfHwgc2VydmVyQ29uZmlnLnJvd3NLZXkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNlcnZlckNvbmZpZy5yb3dzS2V5ID0gdGhpcy5zZXJ2ZXJDb25maWcucm93c0tleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VydmVyQ29uZmlnLnJvd1VuaXF1ZUtleSA9PT0gdW5kZWZpbmVkIHx8IHNlcnZlckNvbmZpZy5yb3dVbmlxdWVLZXkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNlcnZlckNvbmZpZy5yb3dVbmlxdWVLZXkgPSB0aGlzLnNlcnZlckNvbmZpZy5yb3dVbmlxdWVLZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJDb25maWcgPSBzZXJ2ZXJDb25maWc7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTm8gU2VydmVyIFByb3BlcnRpZXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmV4dHJhSW5mb3MgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZXh0cmFJbmZvcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXh0cmFJbmZvcyA9IGNvbmZpZy5leHRyYUluZm9zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuY29udGV4dCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5jb250ZXh0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5jb250ZXh0ID0gY29uZmlnLmNvbnRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5zaG93VGFibGVIZWFkZXJzICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnNob3dUYWJsZUhlYWRlcnMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNob3dUYWJsZUhlYWRlcnMgPSBjb25maWcuc2hvd1RhYmxlSGVhZGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnNob3dFeHBhbmRBcnJvd3MgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc2hvd0V4cGFuZEFycm93cyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuc2hvd0V4cGFuZEFycm93cyA9IGNvbmZpZy5zaG93RXhwYW5kQXJyb3dzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuZXZlbnRzID09PSB1bmRlZmluZWQgfHwgY29uZmlnLmV2ZW50cyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmV2ZW50cyA9IHRoaXMuY29uZmlnLmV2ZW50cztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuZXZlbnRzLnJvd0V4cGFuZGVkICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAmJiBjb25maWcuZXZlbnRzLnJvd0V4cGFuZGVkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXZlbnRzLnJvd0V4cGFuZGVkID0gY29uZmlnLmV2ZW50cy5yb3dFeHBhbmRlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuZXZlbnRzLnJvd0NvbGxhcHNlZCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgY29uZmlnLmV2ZW50cy5yb3dDb2xsYXBzZWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5ldmVudHMucm93Q29sbGFwc2VkID0gY29uZmlnLmV2ZW50cy5yb3dDb2xsYXBzZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5mdWxsQ2xhc3NOYW1lICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmZ1bGxDbGFzc05hbWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmZ1bGxDbGFzc05hbWUgPSBjb25maWcuZnVsbENsYXNzTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmV4Y2VsRXhwb3J0RmlsZU5hbWUgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZXhjZWxFeHBvcnRGaWxlTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXhjZWxFeHBvcnRGaWxlTmFtZSA9IGNvbmZpZy5leGNlbEV4cG9ydEZpbGVOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuZXhjZWxFeHBvcnRCdXR0b25UZXh0ICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmV4Y2VsRXhwb3J0QnV0dG9uVGV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXhjZWxFeHBvcnRCdXR0b25UZXh0ID0gY29uZmlnLmV4Y2VsRXhwb3J0QnV0dG9uVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnNvcnRBc2NDbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc29ydEFzY0NsYXNzTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuc29ydEFzY0NsYXNzTmFtZSA9IGNvbmZpZy5zb3J0QXNjQ2xhc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuc29ydERlc2NDbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc29ydERlc2NDbGFzc05hbWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNvcnREZXNjQ2xhc3NOYW1lID0gY29uZmlnLnNvcnREZXNjQ2xhc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuc29ydE5vdGhpbmdDbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc29ydE5vdGhpbmdDbGFzc05hbWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNvcnROb3RoaW5nQ2xhc3NOYW1lID0gY29uZmlnLnNvcnROb3RoaW5nQ2xhc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuY3VzdG9tQ2xhc3NOYW1lICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmN1c3RvbUNsYXNzTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuY3VzdG9tQ2xhc3NOYW1lID0gY29uZmlnLmN1c3RvbUNsYXNzTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnNob3dFeHBhbmRBbGxBcnJvd3MgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc2hvd0V4cGFuZEFsbEFycm93cyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuc2hvd0V4cGFuZEFsbEFycm93cyA9IGNvbmZpZy5zaG93RXhwYW5kQWxsQXJyb3dzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuc2hvd0V4cGFuZEFsbEVtcHR5Q2hpbGRyZW4gIT09IHVuZGVmaW5lZCAmJiBjb25maWcuc2hvd0V4cGFuZEFsbEVtcHR5Q2hpbGRyZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNob3dFeHBhbmRBbGxFbXB0eUNoaWxkcmVuID0gY29uZmlnLnNob3dFeHBhbmRBbGxFbXB0eUNoaWxkcmVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuc2hvd1BhZ2VMZW5ndGhEcm9wZG93biAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5zaG93UGFnZUxlbmd0aERyb3Bkb3duICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zaG93UGFnZUxlbmd0aERyb3Bkb3duID0gY29uZmlnLnNob3dQYWdlTGVuZ3RoRHJvcGRvd247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5jb2x1bW5WaXNpYmlsaXR5ICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmNvbHVtblZpc2liaWxpdHkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNvbHVtblZpc2liaWxpdHkgPSBjb25maWcuY29sdW1uVmlzaWJpbGl0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmNvbHVtblZpc2liaWxpdHlEcm9wRG93biAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5jb2x1bW5WaXNpYmlsaXR5RHJvcERvd24gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNvbHVtblZpc2liaWxpdHlEcm9wRG93biA9IGNvbmZpZy5jb2x1bW5WaXNpYmlsaXR5RHJvcERvd247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1Zpc2liaWxpdHkgIT09IHVuZGVmaW5lZCAmJiBjb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNWaXNpYmlsaXR5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVyc1Zpc2liaWxpdHkgPSBjb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNWaXNpYmlsaXR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuc29ydGVkQ29sdW1uICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnNvcnRlZENvbHVtbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuc29ydGVkQ29sdW1uID0gY29uZmlnLnNvcnRlZENvbHVtbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmxldmVsICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmxldmVsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sZXZlbCA9IGNvbmZpZy5sZXZlbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmNvbW1vblNlYXJjaCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5jb21tb25TZWFyY2ggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNvbW1vblNlYXJjaCA9IGNvbmZpZy5jb21tb25TZWFyY2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5jb2x1bW5GaWx0ZXJzICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmNvbHVtbkZpbHRlcnMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNvbHVtbkZpbHRlcnMgPSBjb25maWcuY29sdW1uRmlsdGVycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnBhZ2VTaXplcyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5wYWdlU2l6ZXMgIT09IG51bGwgJiYgY29uZmlnLnBhZ2VTaXplcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5wYWdlU2l6ZXMuc3BsaWNlKDAsIHRoaXMuY29uZmlnLnBhZ2VTaXplcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBjb25maWcucGFnZVNpemVzLmxlbmd0aDsgcCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5wYWdlU2l6ZXNbcF0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnBhZ2VTaXplcy5wdXNoKGNvbmZpZy5wYWdlU2l6ZXNbcF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY29uZmlnLnBhZ2VTaXplcyA9IGNvbmZpZy5wYWdlU2l6ZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVycyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy52aXNpYmxlQ29sdW1uRmlsdGVycyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnMgPSBjb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5yb3dDbGlja2FibGVzQ29udGV4dCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5yb3dDbGlja2FibGVzQ29udGV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcucm93Q2xpY2thYmxlc0NvbnRleHQgPSBjb25maWcucm93Q2xpY2thYmxlc0NvbnRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5yb3dDbGlja2FibGVzICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnJvd0NsaWNrYWJsZXMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnJvd0NsaWNrYWJsZXMgPSBjb25maWcucm93Q2xpY2thYmxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmNvbW1vblNlYXJjaCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5jb21tb25TZWFyY2ggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNvbW1vblNlYXJjaCA9IGNvbmZpZy5jb21tb25TZWFyY2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5leGNlbEV4cG9ydEJ1dHRvbiAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5leGNlbEV4cG9ydEJ1dHRvbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZXhjZWxFeHBvcnRCdXR0b24gPSBjb25maWcuZXhjZWxFeHBvcnRCdXR0b247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTm8gUHJvcGVydGllcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnUHJvcGVydGllcycsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdG90YWxQYWdlc0NvdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHBhZ2VzID0gdGhpcy5maWx0ZXJlZFJvd3NDb3VudCAvIHRoaXMucGFnZVNpemU7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChwYWdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyYW1zKCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2UgLSAxID49IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG9rZW5zW3RoaXMucGFnZSAtIDFdICE9PSB1bmRlZmluZWQgJiYgdGhpcy50b2tlbnNbdGhpcy5wYWdlIC0gMV0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtc1t0aGlzLnNlcnZlckNvbmZpZy5wYXJhbU5hbWVzLnBhZ2VUb2tlbl0gPSB0aGlzLnRva2Vuc1t0aGlzLnBhZ2UgLSAxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJhbXNbdGhpcy5zZXJ2ZXJDb25maWcucGFyYW1OYW1lcy5wYWdlXSA9IHRoaXMucGFnZTtcclxuICAgICAgICBwYXJhbXNbdGhpcy5zZXJ2ZXJDb25maWcucGFyYW1OYW1lcy5zZWFyY2hdID0gdGhpcy5rZXl3b3JkO1xyXG4gICAgICAgIHBhcmFtc1t0aGlzLnNlcnZlckNvbmZpZy5wYXJhbU5hbWVzLmxpbWl0XSA9IHRoaXMucGFnZVNpemU7XHJcbiAgICAgICAgcGFyYW1zW3RoaXMuc2VydmVyQ29uZmlnLnBhcmFtTmFtZXMuY29sRmlsdGVyc10gPSBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbmZpZy5jb2x1bW5GaWx0ZXJzKTtcclxuICAgICAgICBwYXJhbXNbdGhpcy5zZXJ2ZXJDb25maWcucGFyYW1OYW1lcy5zb3J0XSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY29uZmlnLnNvcnRlZENvbHVtbik7XHJcbiAgICAgICAgY29uc3QgY29sU2VhcmNoS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzKTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgb2YgY29sU2VhcmNoS2V5cykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNba2V5XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnZpc2libGVDb2x1bW5GaWx0ZXJzW2tleV0gPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNba2V5XS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnNba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJhbXNbdGhpcy5zZXJ2ZXJDb25maWcucGFyYW1OYW1lcy5jb2xTZWFyY2hdID0gSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWcudmlzaWJsZUNvbHVtbkZpbHRlcnMpO1xyXG4gICAgICAgIHJldHVybiBwYXJhbXM7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEV4Y2VsRGF0YShjYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlcnZlckNvbmZpZy5leGNlbEV4cG9ydFVybCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0V4Y2VsRXhwb3J0VXJsIG5vdCBzcGVjaWZpZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmdldFBhcmFtcygpO1xyXG4gICAgICAgIC8vIGRlbGV0ZSBwYXJhbXNbdGhpcy5zZXJ2ZXJDb25maWcucGFyYW1OYW1lcy5saW1pdF07XHJcbiAgICAgICAgY29uc3QgZGlzID0gdGhpcztcclxuICAgICAgICBkaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5zZXJ2ZXJDb25maWcubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VydmVyQ29uZmlnLmV4Y2VsRXhwb3J0VXJsLCB7IHBhcmFtcywgcmVzcG9uc2VUeXBlOiAnYmxvYicgfSkuc3Vic2NyaWJlKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtyZXNwXSwge3R5cGU6ICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnfSApO1xyXG4gICAgICAgICAgICAgICAgc2F2ZUFzKGJsb2IsICdPcmRlcnMueGxzeCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZERhdGEoY2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXJ2ZXJDb25maWcudXJsID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVVJMIG5vdCBzcGVjaWZpZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmdldFBhcmFtcygpO1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RQYXJhbXMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmxhc3RQYXJhbXMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdFBhcmFtcyA9PT0gSlNPTi5zdHJpbmdpZnkocGFyYW1zKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdFBhcmFtcyA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XHJcbiAgICAgICAgY29uc3QgZGlzID0gdGhpcztcclxuICAgICAgICBkaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkaXMubG9hZENvdW50ZXIrKztcclxuICAgICAgICBpZiAodGhpcy5zZXJ2ZXJDb25maWcubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VydmVyQ29uZmlnLnVybCwgeyBwYXJhbXMgfSkuc3Vic2NyaWJlKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgY2FsbGJhY2sgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BbdGhpcy5zZXJ2ZXJDb25maWcucm93c0tleV0gPT09IHVuZGVmaW5lZCB8fCByZXNwW3RoaXMuc2VydmVyQ29uZmlnLnJvd3NLZXldID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKFtdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzLmxvYWRDb3VudGVyLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXMubG9hZENvdW50ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzLmxvYWRDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxSb3dzQ291bnQgPSByZXNwW3RoaXMuc2VydmVyQ29uZmlnLnRvdGFsUm93c0NvdW50S2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJlZFJvd3NDb3VudCA9IHJlc3BbdGhpcy5zZXJ2ZXJDb25maWcuZmlsdGVyZWRSb3dzQ291bnRLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJhd1JvdyBvZiByZXNwW3RoaXMuc2VydmVyQ29uZmlnLnJvd3NLZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdW5pcXVlVmFsID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlcnZlckNvbmZpZy5yb3dVbmlxdWVLZXkgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnNlcnZlckNvbmZpZy5yb3dVbmlxdWVLZXkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVWYWwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlVmFsID0gcmF3Um93W3RoaXMuc2VydmVyQ29uZmlnLnJvd1VuaXF1ZUtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBuZXcgVHJlZVRhYmxlUm93KHVuaXF1ZVZhbCwgcmF3Um93LCBmYWxzZSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5jbGlja2FibGVzQ29udGV4dCA9IHRoaXMuY29uZmlnLnJvd0NsaWNrYWJsZXNDb250ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmNsaWNrYWJsZXMgPSB0aGlzLmNvbmZpZy5yb3dDbGlja2FibGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdFJhd1JvdyA9IHJlc3BbdGhpcy5zZXJ2ZXJDb25maWcucm93c0tleV1bcmVzcFt0aGlzLnNlcnZlckNvbmZpZy5yb3dzS2V5XS5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RSYXdSb3cgIT09IHVuZGVmaW5lZCAmJiBsYXN0UmF3Um93ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJDb25maWcucm93VW5pcXVlS2V5ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5zZXJ2ZXJDb25maWcucm93VW5pcXVlS2V5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnNbdGhpcy5wYWdlXSA9IGxhc3RSYXdSb3dbdGhpcy5zZXJ2ZXJDb25maWcucm93VW5pcXVlS2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyb3dzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzLmxvYWRDb3VudGVyLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXMubG9hZENvdW50ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzLmxvYWRDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzLmxvYWRDb3VudGVyLS07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpcy5sb2FkQ291bnRlciA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzLmxvYWRDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXMubG9hZENvdW50ZXItLTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXMubG9hZENvdW50ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXMubG9hZENvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWxsUm93c0V4cGFuZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhbGxSb3dzQ29sbGFwc2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzcGxhc2hNZXNzYWdlKG1zZzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zcGxhc2hNZXNzYWdlQ29udGVudCA9IG1zZztcclxuICAgICAgICB0aGlzLnNwbGFzaE1lc3NhZ2VGbGFnID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBkaXMgPSB0aGlzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXMuc3BsYXNoTWVzc2FnZUZsYWcgID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbn1cclxuIl19