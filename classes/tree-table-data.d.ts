import { TreeTableHeaderObject } from './tree-table-header-object';
import { HttpClient } from '@angular/common/http';
import { TreeTableDataConfig, TreeTableDataServerConfig } from './tree-table-data-config';
import { TreeTableRowAction } from './tree-table-row-action';
export declare class TreeTableRow {
    id: string;
    data: {};
    expandable: boolean;
    children: TreeTableData;
    expanded: boolean;
    clickablesContext: any;
    clickables: {};
    styles: {};
    classes: string[];
    actions: TreeTableRowAction[];
    selected: boolean;
    options: {
        value: string;
        displayText: string;
    }[];
    constructor(id: string, data: {}, expandable: boolean, children: TreeTableData);
}
export declare class TreeTableData {
    headers: TreeTableHeaderObject[];
    data: TreeTableRow[];
    isLoading: boolean;
    keyword: string;
    page: number;
    pageSize: number;
    lastParams: any;
    totalRowsCount: number;
    filteredRowsCount: number;
    splashMessageFlag: boolean;
    splashMessageContent: string;
    tokens: any[];
    isAllRowsExpanded: boolean;
    serverConfig: TreeTableDataServerConfig;
    config: TreeTableDataConfig;
    loadCounter: number;
    private http;
    constructor(config?: TreeTableDataConfig, serverConfig?: TreeTableDataServerConfig, http?: HttpClient);
    totalPagesCount(): number;
    getParams(): {};
    loadExcelData(callback?: any): void;
    loadData(callback?: any): void;
    allRowsExpanded(): boolean;
    allRowsCollapsed(): boolean;
    splashMessage(msg: string): void;
}
