import { OnInit, KeyValueDiffers, KeyValueChanges, EventEmitter, DoCheck } from '@angular/core';
import { TreeTableData, TreeTableRow } from '../classes/tree-table-data';
import { TreeTableRowAction } from '../classes/tree-table-row-action';
import { TreeTableHeaderObject } from '../classes/tree-table-header-object';
export declare class AngularTreeTableComponent implements OnInit, DoCheck {
    private differs;
    componentClass: string;
    private dataDiffers;
    tableData: TreeTableData;
    filteredData: TreeTableRow[];
    className: string;
    randomInstance: any;
    dropdownHideListenerAdded: boolean;
    currentPageData: TreeTableData;
    private columnFiltersDiffers;
    json: any;
    extraInfoItemWidthPercent: number;
    rowSelectionChanged: EventEmitter<any[]>;
    inputRowSelectChanged: EventEmitter<{
        event: any;
        rowData: any;
        headerKey: string;
        value: any;
        level: number;
    }>;
    inputRowTextChanged: EventEmitter<{
        event: any;
        rowData: any;
        headerKey: string;
        value: any;
        level: number;
    }>;
    constructor(differs: KeyValueDiffers);
    ngOnInit(): void;
    redefineTableDataFunctions(): void;
    dataChanged(changes: KeyValueChanges<string, any>): void;
    evaluateExpressionsInTableData(): void;
    executeExpression(expression: string, data: any): any;
    evaluateConcat(expression: string, data: any): any;
    /**
     * {
     *    "PO_NUMBER": "123456",
     *    "PO_TAX": [{
     *        "SGST": 15
     *    }]
     * }
     *
     * PO_TAX.SGST
     * PO_TAX[0].SGST
     * PO_TAX[0].SGST + PO_TAX[0].CGST
     * =CONCAT('SGST: '|||PO_TAX[0].SGST + PO_TAX[0].CGST|||'\r\n')
     */
    getValueWithPathFromObject(path: string, data: any): any;
    refreshTable(): void;
    ngDoCheck(): void;
    expandRow(row: TreeTableRow): void;
    collapseRow(row: TreeTableRow): void;
    expandAllRows(): void;
    expandAllRowsInData(data: TreeTableRow[]): void;
    collapseAllRows(): void;
    collapseAllRowsInData(data: TreeTableRow[]): void;
    toggleRow(row: TreeTableRow): void;
    rowAction(row: TreeTableRow, action: TreeTableRowAction): void;
    changePage(page: number): void;
    setPageData(pageNumber: number): void;
    clickableClicked(row: TreeTableRow, dataProperty: string): void;
    validateData(): void;
    columnSearchChanged(dataProperty: string): void;
    pageNumbers(): any[];
    exportExcelLocal(): void;
    sortColumn(header: TreeTableHeaderObject): void;
    sortAscend(header: TreeTableHeaderObject): void;
    sortDescend(header: TreeTableHeaderObject): void;
    search(): void;
    pageSizeChanged(): void;
    excelExportClicked(): void;
    getPageTo(): number;
    isAllRowsSelected(header: TreeTableHeaderObject): boolean;
    toggleSelectAllRows(header: TreeTableHeaderObject): void;
    private selectAllRows;
    private deselectAllRows;
    toggleSelectRow(row: TreeTableRow): void;
    getRowClass(row: TreeTableRow): {
        'expanded-row': boolean;
        'collapsed-row': boolean;
        'selected': string;
        'unselected': string;
    };
    getSelectedRows(): {}[];
    childRowSelectionChanged(data: TreeTableRow[]): void;
    updateHost(): void;
    inputRowSelectChangedInternal(event: any, rowData: any, headerKey: string, value: any, level: number): void;
    inputRowTextChangedInternal(event: any, rowData: any, headerKey: string, value: any, level: number): void;
    inputRowSelectChangedChild(data: {
        event: any;
        rowData: any;
        headerKey: string;
        value: any;
        level: number;
    }): void;
    inputRowTextChangedChild(data: {
        event: any;
        rowData: any;
        headerKey: string;
        value: any;
        level: number;
    }): void;
}
