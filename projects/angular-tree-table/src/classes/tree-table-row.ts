import { TreeTableData } from './tree-table-data';
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
    options: {value: string, displayText: string}[] =  [];

    constructor(id: string, data: {}, expandable: boolean, children: TreeTableData) {
        this.id = id;
        this.data = data;
        this.expandable = expandable;
        this.children = children;
    }
}
