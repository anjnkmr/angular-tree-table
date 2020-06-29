import { TreeTableRowActionType } from './tree-table-row-action-type';
export declare class TreeTableRowAction {
    label: string;
    title: string;
    classes: string;
    action: (rowData: any, rowAction: TreeTableRowAction) => void;
    type: TreeTableRowActionType;
    reference: any;
    context: any;
    constructor(label: string, title: string, classes: string, action: (rowData: any, rowAction: TreeTableRowAction) => void);
}
