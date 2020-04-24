/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class TreeTableRow {
    /**
     * @param {?} id
     * @param {?} data
     * @param {?} expandable
     * @param {?} children
     */
    constructor(id, data, expandable, children) {
        this.id = null;
        this.data = {};
        this.expandable = false;
        this.children = null;
        this.expanded = false;
        // Clickables Context for Actions
        this.clickablesContext = null;
        // Clickable Properties and Actions
        this.clickables = {};
        this.styles = {};
        this.classes = [];
        // Actions Header Buttons
        this.actions = [];
        // Is row selected
        this.selected = false;
        this.options = [];
        this.id = id;
        this.data = data;
        this.expandable = expandable;
        this.children = children;
    }
}
if (false) {
    /** @type {?} */
    TreeTableRow.prototype.id;
    /** @type {?} */
    TreeTableRow.prototype.data;
    /** @type {?} */
    TreeTableRow.prototype.expandable;
    /** @type {?} */
    TreeTableRow.prototype.children;
    /** @type {?} */
    TreeTableRow.prototype.expanded;
    /** @type {?} */
    TreeTableRow.prototype.clickablesContext;
    /** @type {?} */
    TreeTableRow.prototype.clickables;
    /** @type {?} */
    TreeTableRow.prototype.styles;
    /** @type {?} */
    TreeTableRow.prototype.classes;
    /** @type {?} */
    TreeTableRow.prototype.actions;
    /** @type {?} */
    TreeTableRow.prototype.selected;
    /** @type {?} */
    TreeTableRow.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS10YWJsZS1yb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXRyZWUtdGFibGUvIiwic291cmNlcyI6WyJjbGFzc2VzL3RyZWUtdGFibGUtcm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxNQUFNLE9BQU8sWUFBWTs7Ozs7OztJQWtCckIsWUFBWSxFQUFVLEVBQUUsSUFBUSxFQUFFLFVBQW1CLEVBQUUsUUFBdUI7UUFqQjlFLE9BQUUsR0FBVyxJQUFJLENBQUM7UUFDbEIsU0FBSSxHQUFPLEVBQUUsQ0FBQztRQUNkLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFrQixJQUFJLENBQUM7UUFDL0IsYUFBUSxHQUFHLEtBQUssQ0FBQzs7UUFFakIsc0JBQWlCLEdBQVEsSUFBSSxDQUFDOztRQUU5QixlQUFVLEdBQU8sRUFBRSxDQUFDO1FBQ3BCLFdBQU0sR0FBTyxFQUFFLENBQUM7UUFDaEIsWUFBTyxHQUFhLEVBQUUsQ0FBQzs7UUFFdkIsWUFBTyxHQUF5QixFQUFFLENBQUM7O1FBRW5DLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsWUFBTyxHQUE0QyxFQUFFLENBQUM7UUFHbEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0NBQ0o7OztJQXZCRywwQkFBa0I7O0lBQ2xCLDRCQUFjOztJQUNkLGtDQUFtQjs7SUFDbkIsZ0NBQStCOztJQUMvQixnQ0FBaUI7O0lBRWpCLHlDQUE4Qjs7SUFFOUIsa0NBQW9COztJQUNwQiw4QkFBZ0I7O0lBQ2hCLCtCQUF1Qjs7SUFFdkIsK0JBQW1DOztJQUVuQyxnQ0FBMEI7O0lBQzFCLCtCQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyZWVUYWJsZURhdGEgfSBmcm9tICcuL3RyZWUtdGFibGUtZGF0YSc7XHJcbmltcG9ydCB7IFRyZWVUYWJsZVJvd0FjdGlvbiB9IGZyb20gJy4vdHJlZS10YWJsZS1yb3ctYWN0aW9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlVGFibGVSb3cge1xyXG4gICAgaWQ6IHN0cmluZyA9IG51bGw7XHJcbiAgICBkYXRhOiB7fSA9IHt9O1xyXG4gICAgZXhwYW5kYWJsZSA9IGZhbHNlO1xyXG4gICAgY2hpbGRyZW46IFRyZWVUYWJsZURhdGEgPSBudWxsO1xyXG4gICAgZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIC8vIENsaWNrYWJsZXMgQ29udGV4dCBmb3IgQWN0aW9uc1xyXG4gICAgY2xpY2thYmxlc0NvbnRleHQ6IGFueSA9IG51bGw7XHJcbiAgICAvLyBDbGlja2FibGUgUHJvcGVydGllcyBhbmQgQWN0aW9uc1xyXG4gICAgY2xpY2thYmxlczoge30gPSB7fTtcclxuICAgIHN0eWxlczoge30gPSB7fTtcclxuICAgIGNsYXNzZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICAvLyBBY3Rpb25zIEhlYWRlciBCdXR0b25zXHJcbiAgICBhY3Rpb25zOiBUcmVlVGFibGVSb3dBY3Rpb25bXSA9IFtdO1xyXG4gICAgLy8gSXMgcm93IHNlbGVjdGVkXHJcbiAgICBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgb3B0aW9uczoge3ZhbHVlOiBzdHJpbmcsIGRpc3BsYXlUZXh0OiBzdHJpbmd9W10gPSAgW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgZGF0YToge30sIGV4cGFuZGFibGU6IGJvb2xlYW4sIGNoaWxkcmVuOiBUcmVlVGFibGVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5leHBhbmRhYmxlID0gZXhwYW5kYWJsZTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcbiAgICB9XHJcbn1cclxuIl19