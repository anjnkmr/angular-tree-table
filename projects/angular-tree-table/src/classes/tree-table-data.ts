import { TreeTableHeaderObject } from './tree-table-header-object';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { TreeTableDataConfig, TreeTableDataServerConfig } from './tree-table-data-config';
import { TreeTableRowAction } from './tree-table-row-action';

export class TreeTableRow {
    id: string = null;
    data: {} = {};
    expandable = false;
    children: TreeTableData = null;
    expanded = false;
    // Clickables Context for Actions
    clickablesContext: any = null;
    // Clickable Properties and Actions
    clickables: {} = {};
    styles: {} = {};
    classes: string[] = [];
    // Actions Header Buttons
    actions: TreeTableRowAction[] = [];
    // Is row selected
    selected: boolean = false;
    options: { value: string, displayText: string }[] = [];

    defaultExpand = false;

    constructor(id: string, data: {}, expandable: boolean, children: TreeTableData) {
        this.id = id;
        this.data = data;
        this.expandable = expandable;
        this.children = children;
    }
}


export class TreeTableData {
    headers: TreeTableHeaderObject[] = [];
    data: TreeTableRow[] = [];

    isLoading = false;
    keyword: string = null;
    page = 1;
    pageSize = 10;
    lastParams = null;
    totalRowsCount = 0;
    filteredRowsCount = 0;
    splashMessageFlag = false;
    splashMessageContent = '';
    tokens = [null];
    isAllRowsExpanded = false;

    serverConfig = new TreeTableDataServerConfig();
    config = new TreeTableDataConfig();
    loadCounter = 0;

    private http: HttpClient = null;

    constructor(config?: TreeTableDataConfig, serverConfig?: TreeTableDataServerConfig, http?: HttpClient) {
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
        } else {
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
            } else {
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
            if (config.locale !== undefined && config.locale !== null) {
                this.config.locale = config.locale;
            }
            if (config.currencyCode !== undefined && config.currencyCode !== null) {
                this.config.currencyCode = config.currencyCode;
            }
        } else {
            // console.log('No Properties');
        }
        // console.log('Properties', config);
    }

    totalPagesCount() {
        const pages = this.filteredRowsCount / this.pageSize;
        return Math.ceil(pages);
    }

    getParams() {
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

    loadExcelData(callback?: any) {
        if (this.serverConfig.excelExportUrl === null) {
            console.warn('ExcelExportUrl not specified');
            return;
        }
        const params = this.getParams();
        // delete params[this.serverConfig.paramNames.limit];
        const dis = this;
        dis.isLoading = true;
        if (this.serverConfig.method === 'GET') {
            this.http.get(this.serverConfig.excelExportUrl, { params, responseType: 'blob' }).subscribe(resp => {
                dis.isLoading = false;
                const blob = new Blob([resp], { type: 'application/vnd.ms-excel' });
                saveAs(blob, this.config.excelExportFileName + '.xlsx');
            });
        } else if (this.serverConfig.method === 'POST') {
            this.http.post(this.serverConfig.excelExportUrl, { tableHeaders: this.headers }, { params, responseType: 'blob' }).subscribe(resp => {
                dis.isLoading = false;
                const blob = new Blob([resp], { type: 'application/vnd.ms-excel' });
                saveAs(blob, this.config.excelExportFileName + '.xlsx');
            });
        }
    }

    loadData(callback?: any) {
        if (this.serverConfig.url === null) {
            console.warn('URL not specified');
            return;
        }
        const params = this.getParams();
        if (this.lastParams !== undefined && this.lastParams !== null) {
            if (this.lastParams === JSON.stringify(params)) {
                return;
            }
        }
        this.lastParams = JSON.stringify(params);
        const dis = this;
        dis.isLoading = true;
        dis.loadCounter++;
        let req = undefined;
        if (this.serverConfig.method === 'GET') {
            req = this.http.get(this.serverConfig.url, { params })
        } else if (this.serverConfig.method === 'POST') {
            req = this.http.post(this.serverConfig.url, { tableHeaders: this.headers }, { params })
        }
        if (req !== undefined) {
            req.subscribe(resp => {
                if (callback !== undefined && callback !== null) {
                    const rows = [];
                    if (resp[this.serverConfig.rowsKey] === undefined || resp[this.serverConfig.rowsKey] === null) {
                        callback([]);
                        dis.loadCounter--;
                        if (dis.loadCounter <= 0) {
                            dis.isLoading = false;
                            dis.loadCounter = 0;
                        }
                    } else {
                        this.totalRowsCount = resp[this.serverConfig.totalRowsCountKey];
                        this.filteredRowsCount = resp[this.serverConfig.filteredRowsCountKey];
                        for (const rawRow of resp[this.serverConfig.rowsKey]) {
                            let uniqueVal = null;
                            if (this.serverConfig.rowUniqueKey === undefined || this.serverConfig.rowUniqueKey === null) {
                                uniqueVal = new Date().getTime();
                            } else {
                                uniqueVal = rawRow[this.serverConfig.rowUniqueKey];
                            }
                            const row = new TreeTableRow(uniqueVal, rawRow, false, undefined);
                            row.clickablesContext = this.config.rowClickablesContext;
                            row.clickables = this.config.rowClickables;
                            rows.push(row);
                        }
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
                } else {
                    dis.loadCounter--;
                    if (dis.loadCounter <= 0) {
                        dis.isLoading = false;
                        dis.loadCounter = 0;
                    }
                }
            }, err => {
                dis.loadCounter--;
                if (dis.loadCounter <= 0) {
                    dis.isLoading = false;
                    dis.loadCounter = 0;
                }
            });
        } else {
            console.warn('Invalid request method');
        }
    }

    allRowsExpanded(): boolean {
        return false;
    }

    allRowsCollapsed(): boolean {
        return false;
    }

    splashMessage(msg: string) {
        this.splashMessageContent = msg;
        this.splashMessageFlag = true;
        const dis = this;
        setTimeout(() => {
            dis.splashMessageFlag = false;
        }, 2000);
    }
}
