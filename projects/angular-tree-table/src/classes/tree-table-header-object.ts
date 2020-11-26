import { TtDataType } from './tt-data-type';

export class TreeTableHeaderObject {
    dataProperty: string;
    title: string;
    style: string;
    show: boolean;
    dataType: TtDataType = TtDataType.TEXT;
    dataTypeArgs: {[key: string]: any} = {};
    enableColumnSearch = true; //It will take effect when column search is enabled in data
    canChangeVisbilityOnRuntime = true;
    constructor(title: string, dataProperty: string, style: string, show: boolean, canChangeVisibilityOnRuntime: boolean = true) {
        this.dataProperty = dataProperty;
        this.title = title;
        this.style = style;
        this.show = show;
        this.canChangeVisbilityOnRuntime = canChangeVisibilityOnRuntime;
    }
}
