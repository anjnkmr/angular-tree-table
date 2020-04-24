import { TreeTableData } from './tree-table-data';
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
