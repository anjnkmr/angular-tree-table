/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TtDataType } from './tt-data-type';
export class TreeTableHeaderObject {
    /**
     * @param {?} title
     * @param {?} dataProperty
     * @param {?} style
     * @param {?} show
     * @param {?=} canChangeVisibilityOnRuntime
     */
    constructor(title, dataProperty, style, show, canChangeVisibilityOnRuntime = true) {
        this.dataType = TtDataType.TEXT;
        this.enableColumnSearch = true; //It will take effect when column search is enabled in data
        //It will take effect when column search is enabled in data
        this.canChangeVisbilityOnRuntime = true;
        this.dataProperty = dataProperty;
        this.title = title;
        this.style = style;
        this.show = show;
        this.canChangeVisbilityOnRuntime = canChangeVisibilityOnRuntime;
    }
}
if (false) {
    /** @type {?} */
    TreeTableHeaderObject.prototype.dataProperty;
    /** @type {?} */
    TreeTableHeaderObject.prototype.title;
    /** @type {?} */
    TreeTableHeaderObject.prototype.style;
    /** @type {?} */
    TreeTableHeaderObject.prototype.show;
    /** @type {?} */
    TreeTableHeaderObject.prototype.dataType;
    /** @type {?} */
    TreeTableHeaderObject.prototype.enableColumnSearch;
    /** @type {?} */
    TreeTableHeaderObject.prototype.canChangeVisbilityOnRuntime;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS10YWJsZS1oZWFkZXItb2JqZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci10cmVlLXRhYmxlLyIsInNvdXJjZXMiOlsiY2xhc3Nlcy90cmVlLXRhYmxlLWhlYWRlci1vYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7OztJQVE5QixZQUFZLEtBQWEsRUFBRSxZQUFvQixFQUFFLEtBQWEsRUFBRSxJQUFhLEVBQUUsK0JBQXdDLElBQUk7UUFIM0gsYUFBUSxHQUFlLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDdkMsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLENBQUMsMkRBQTJEOztRQUN0RixnQ0FBMkIsR0FBRyxJQUFJLENBQUM7UUFFL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLDJCQUEyQixHQUFHLDRCQUE0QixDQUFDO0lBQ3BFLENBQUM7Q0FDSjs7O0lBZEcsNkNBQXFCOztJQUNyQixzQ0FBYzs7SUFDZCxzQ0FBYzs7SUFDZCxxQ0FBYzs7SUFDZCx5Q0FBdUM7O0lBQ3ZDLG1EQUEwQjs7SUFDMUIsNERBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHREYXRhVHlwZSB9IGZyb20gJy4vdHQtZGF0YS10eXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlVGFibGVIZWFkZXJPYmplY3Qge1xyXG4gICAgZGF0YVByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgc3R5bGU6IHN0cmluZztcclxuICAgIHNob3c6IGJvb2xlYW47XHJcbiAgICBkYXRhVHlwZTogVHREYXRhVHlwZSA9IFR0RGF0YVR5cGUuVEVYVDtcclxuICAgIGVuYWJsZUNvbHVtblNlYXJjaCA9IHRydWU7IC8vSXQgd2lsbCB0YWtlIGVmZmVjdCB3aGVuIGNvbHVtbiBzZWFyY2ggaXMgZW5hYmxlZCBpbiBkYXRhXHJcbiAgICBjYW5DaGFuZ2VWaXNiaWxpdHlPblJ1bnRpbWUgPSB0cnVlO1xyXG4gICAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgZGF0YVByb3BlcnR5OiBzdHJpbmcsIHN0eWxlOiBzdHJpbmcsIHNob3c6IGJvb2xlYW4sIGNhbkNoYW5nZVZpc2liaWxpdHlPblJ1bnRpbWU6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhUHJvcGVydHkgPSBkYXRhUHJvcGVydHk7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcclxuICAgICAgICB0aGlzLnNob3cgPSBzaG93O1xyXG4gICAgICAgIHRoaXMuY2FuQ2hhbmdlVmlzYmlsaXR5T25SdW50aW1lID0gY2FuQ2hhbmdlVmlzaWJpbGl0eU9uUnVudGltZTtcclxuICAgIH1cclxufVxyXG4iXX0=