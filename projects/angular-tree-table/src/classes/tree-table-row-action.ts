import { TreeTableRowActionType } from './tree-table-row-action-type';

export class TreeTableRowAction {
    label: string;
    title: string;
    classes: string;
    action: (rowData: any, rowAction: TreeTableRowAction) => void;
    type: TreeTableRowActionType = TreeTableRowActionType.BUTTON;
    reference: any;
    context: any;

    constructor(label: string, title: string, classes: string, action: (rowData: any, rowAction: TreeTableRowAction) => void) {
        this.label = label;
        this.title = title;
        this.classes = classes;
        this.action = action;
    }
}
