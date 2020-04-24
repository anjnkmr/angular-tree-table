import { TtDataType } from './tt-data-type';

export class TreeTableHeaderObject {
    dataProperty: string;
    title: string;
    style: string;
    show: boolean;
    dataType: TtDataType = TtDataType.TEXT;
    enableColumnSearch = true; //It will take effect when column search is enabled in data
    constructor(title: string, dataProperty: string, style: string, show: boolean) {
        this.dataProperty = dataProperty;
        this.title = title;
        this.style = style;
        this.show = show;
    }
}
