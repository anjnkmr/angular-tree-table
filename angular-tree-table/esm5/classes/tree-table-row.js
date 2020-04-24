/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TreeTableRow = /** @class */ (function () {
    function TreeTableRow(id, data, expandable, children) {
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
    return TreeTableRow;
}());
export { TreeTableRow };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS10YWJsZS1yb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXRyZWUtdGFibGUvIiwic291cmNlcyI6WyJjbGFzc2VzL3RyZWUtdGFibGUtcm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQTtJQWtCSSxzQkFBWSxFQUFVLEVBQUUsSUFBUSxFQUFFLFVBQW1CLEVBQUUsUUFBdUI7UUFqQjlFLE9BQUUsR0FBVyxJQUFJLENBQUM7UUFDbEIsU0FBSSxHQUFPLEVBQUUsQ0FBQztRQUNkLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFrQixJQUFJLENBQUM7UUFDL0IsYUFBUSxHQUFHLEtBQUssQ0FBQzs7UUFFakIsc0JBQWlCLEdBQVEsSUFBSSxDQUFDOztRQUU5QixlQUFVLEdBQU8sRUFBRSxDQUFDO1FBQ3BCLFdBQU0sR0FBTyxFQUFFLENBQUM7UUFDaEIsWUFBTyxHQUFhLEVBQUUsQ0FBQzs7UUFFdkIsWUFBTyxHQUF5QixFQUFFLENBQUM7O1FBRW5DLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsWUFBTyxHQUE0QyxFQUFFLENBQUM7UUFHbEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDOzs7O0lBdkJHLDBCQUFrQjs7SUFDbEIsNEJBQWM7O0lBQ2Qsa0NBQW1COztJQUNuQixnQ0FBK0I7O0lBQy9CLGdDQUFpQjs7SUFFakIseUNBQThCOztJQUU5QixrQ0FBb0I7O0lBQ3BCLDhCQUFnQjs7SUFDaEIsK0JBQXVCOztJQUV2QiwrQkFBbUM7O0lBRW5DLGdDQUEwQjs7SUFDMUIsK0JBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJlZVRhYmxlRGF0YSB9IGZyb20gJy4vdHJlZS10YWJsZS1kYXRhJztcclxuaW1wb3J0IHsgVHJlZVRhYmxlUm93QWN0aW9uIH0gZnJvbSAnLi90cmVlLXRhYmxlLXJvdy1hY3Rpb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVUYWJsZVJvdyB7XHJcbiAgICBpZDogc3RyaW5nID0gbnVsbDtcclxuICAgIGRhdGE6IHt9ID0ge307XHJcbiAgICBleHBhbmRhYmxlID0gZmFsc2U7XHJcbiAgICBjaGlsZHJlbjogVHJlZVRhYmxlRGF0YSA9IG51bGw7XHJcbiAgICBleHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgLy8gQ2xpY2thYmxlcyBDb250ZXh0IGZvciBBY3Rpb25zXHJcbiAgICBjbGlja2FibGVzQ29udGV4dDogYW55ID0gbnVsbDtcclxuICAgIC8vIENsaWNrYWJsZSBQcm9wZXJ0aWVzIGFuZCBBY3Rpb25zXHJcbiAgICBjbGlja2FibGVzOiB7fSA9IHt9O1xyXG4gICAgc3R5bGVzOiB7fSA9IHt9O1xyXG4gICAgY2xhc3Nlczogc3RyaW5nW10gPSBbXTtcclxuICAgIC8vIEFjdGlvbnMgSGVhZGVyIEJ1dHRvbnNcclxuICAgIGFjdGlvbnM6IFRyZWVUYWJsZVJvd0FjdGlvbltdID0gW107XHJcbiAgICAvLyBJcyByb3cgc2VsZWN0ZWRcclxuICAgIHNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBvcHRpb25zOiB7dmFsdWU6IHN0cmluZywgZGlzcGxheVRleHQ6IHN0cmluZ31bXSA9ICBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBkYXRhOiB7fSwgZXhwYW5kYWJsZTogYm9vbGVhbiwgY2hpbGRyZW46IFRyZWVUYWJsZURhdGEpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLmV4cGFuZGFibGUgPSBleHBhbmRhYmxlO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuICAgIH1cclxufVxyXG4iXX0=