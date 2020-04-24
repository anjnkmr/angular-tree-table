import { TtDataType } from './tt-data-type';
export declare class TreeTableHeaderObject {
    dataProperty: string;
    title: string;
    style: string;
    show: boolean;
    dataType: TtDataType;
    enableColumnSearch: boolean;
    constructor(title: string, dataProperty: string, style: string, show: boolean);
}
