/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TtDataType } from './tt-data-type';
var TreeTableHeaderObject = /** @class */ (function () {
    function TreeTableHeaderObject(title, dataProperty, style, show, canChangeVisibilityOnRuntime) {
        if (canChangeVisibilityOnRuntime === void 0) { canChangeVisibilityOnRuntime = true; }
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
    return TreeTableHeaderObject;
}());
export { TreeTableHeaderObject };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS10YWJsZS1oZWFkZXItb2JqZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci10cmVlLXRhYmxlLyIsInNvdXJjZXMiOlsiY2xhc3Nlcy90cmVlLXRhYmxlLWhlYWRlci1vYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QztJQVFJLCtCQUFZLEtBQWEsRUFBRSxZQUFvQixFQUFFLEtBQWEsRUFBRSxJQUFhLEVBQUUsNEJBQTRDO1FBQTVDLDZDQUFBLEVBQUEsbUNBQTRDO1FBSDNILGFBQVEsR0FBZSxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLHVCQUFrQixHQUFHLElBQUksQ0FBQyxDQUFDLDJEQUEyRDs7UUFDdEYsZ0NBQTJCLEdBQUcsSUFBSSxDQUFDO1FBRS9CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQywyQkFBMkIsR0FBRyw0QkFBNEIsQ0FBQztJQUNwRSxDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQzs7OztJQWRHLDZDQUFxQjs7SUFDckIsc0NBQWM7O0lBQ2Qsc0NBQWM7O0lBQ2QscUNBQWM7O0lBQ2QseUNBQXVDOztJQUN2QyxtREFBMEI7O0lBQzFCLDREQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR0RGF0YVR5cGUgfSBmcm9tICcuL3R0LWRhdGEtdHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZVRhYmxlSGVhZGVyT2JqZWN0IHtcclxuICAgIGRhdGFQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHN0eWxlOiBzdHJpbmc7XHJcbiAgICBzaG93OiBib29sZWFuO1xyXG4gICAgZGF0YVR5cGU6IFR0RGF0YVR5cGUgPSBUdERhdGFUeXBlLlRFWFQ7XHJcbiAgICBlbmFibGVDb2x1bW5TZWFyY2ggPSB0cnVlOyAvL0l0IHdpbGwgdGFrZSBlZmZlY3Qgd2hlbiBjb2x1bW4gc2VhcmNoIGlzIGVuYWJsZWQgaW4gZGF0YVxyXG4gICAgY2FuQ2hhbmdlVmlzYmlsaXR5T25SdW50aW1lID0gdHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGRhdGFQcm9wZXJ0eTogc3RyaW5nLCBzdHlsZTogc3RyaW5nLCBzaG93OiBib29sZWFuLCBjYW5DaGFuZ2VWaXNpYmlsaXR5T25SdW50aW1lOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YVByb3BlcnR5ID0gZGF0YVByb3BlcnR5O1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XHJcbiAgICAgICAgdGhpcy5zaG93ID0gc2hvdztcclxuICAgICAgICB0aGlzLmNhbkNoYW5nZVZpc2JpbGl0eU9uUnVudGltZSA9IGNhbkNoYW5nZVZpc2liaWxpdHlPblJ1bnRpbWU7XHJcbiAgICB9XHJcbn1cclxuIl19