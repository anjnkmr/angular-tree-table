[![NPM](https://nodei.co/npm/angular-tree-table.png)](https://nodei.co/npm/angular-tree-table/)

### Prerequisites
-------------

`Node JS` >= 9

`Angular` >= 8

`npm i jquery` — Dependency for Bootstrap

`npm i popper.js` —To show the Column Visibility popover

`npm i bootstrap` — To show the Column Visibility popover and design

`npm i file-saver` —To store the API exported or generated file

`npm i xlsx` —To generate Excel while not using server side processing

`npm i moment` —To sort date columns while not using server side processing

### Installation
------------

`npm i jquery popper.js bootstrap file-saver xlsx moment angular-tree-table --save`

### Updating `angular.json`
-----------------------

Adding jQuery, Popper JS, Bootstrap CSS and JS -
Add the following lines in scripts array under build section

```
"node_modules/jquery/dist/jquery.min.js",
"node_modules/popper.js/dist/umd/popper.min.js",
"node_modules/bootstrap/dist/js/bootstrap.min.js"
```

Add the following lines in styles array under build section

`”node_modules/bootstrap/dist/css/bootstrap.min.css”`

* * *

### Integrating in Angular Application
----------------------------------

import `AngularTreeTableModule` in `app.module.ts`.

### Configuration in Component
--------------------------

Declare the below variables for table initialization

```
tableData: TreeTableData = null; //Table Data Holder
tableConfig = new TreeTableDataConfig(); //Table Configuration
tableHeaders: TreeTableHeaderObject[] = []; //Table Headers and Property Binding
```

Declare the below methods to populate dummy data into the table

```
populateDummyData() {
    const data = [];
    for (let i = 0; i < 120; i++) {
      const row = new TreeTableRow(i + '', { sno: i+1, name: 'John '+(i+1), age: i+1. address: {dno: '1-23'}}, false, null);
      data.push(row);
    }
    this.tableData = new TreeTableData(this.tableConfig);
    this.populateHeaders();
    this.tableData.data = data;
  }
  populateHeaders() {
    this.tableHeaders.splice(0, this.tableHeaders.length);
    this.tableHeaders.push(new TreeTableHeaderObject('Sno', 'sno', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Name', 'name', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('Age', 'age', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('User Details', '=CONCAT(Name: |||name|||<br/>|||Age: |||age)', null, true));
    this.tableHeaders.push(new TreeTableHeaderObject('D.no', 'address.dno', null, true));
    this.tableData.headers = this.tableHeaders;
  }
```

### Adding View Element in Component View
-------------------------------------

Add the below tag in Component HTML View

`<angular-tree-table [tableData]=”tableData”></angular-tree-table>`

With this you will get the view of basic Table with given data


Basic Tree Table Screenshot

* * *
![Basic Tree Table](https://miro.medium.com/max/1400/1\*rF21qkfblc4QlutrC8Lomw.png)

### Expandable Table View
---------------------

To configure the row as an expandable, we need to configure the table as below

```
tableConfig = {
  showExpandArrows: true, // Showing Arrows each possible row
  showExpandAllArrows: true // Expand all button
};
```

Update the **populateDummyData** method as below to add Children to row

```
populateDummyData() {
    const data = [];
    for (let i = 0; i < 120; i++) {
      const row = new TreeTableRow(i + '', { sno: i+1, name: 'John '+(i+1), age: i+1}, false, null);
      if (i % 10 !== 0) {
        row.expandable = true;
        const subTableData = new TreeTableData(this.tableConfig); //We can add new config object if required
        const subData = [];
        for (let j = 0; j < (10 - i % 10); j++) {
          const subRow = new TreeTableRow(j + '', { sno: j + 1, name: 'Paul ' + (j + 1), age: j + 1}, false, null);
          subData.push(subRow);
        }
        subTableData.headers = this.tableHeaders; //Using the same headers as parent table, we can use separate if required
        subTableData.data = subData;
        row.children = subTableData;
      }
      data.push(row);
    }
    this.tableData = new TreeTableData(this.tableConfig);
    this.populateHeaders();
    this.tableData.data = data;
  }
```
Expandable Table Screenshot

* * *
![Expandable Table View](https://miro.medium.com/max/1400/1\*p5u3dTcECs\_2ibmDmtkUOQ.png)



### Column Visibility Options
-------------------------

```
columnVisibility: true, // To show columns visibility options on table
columnVisibilityDropDown: true // To show columns visibility options on table as a popover
```
Column Visibility Options Demo — Popover and Buttons
* * *
![Column Visibility](https://miro.medium.com/max/1400/1\*A3fdEYmcA2zFHNcIProwzw.png)




### Other Configuration Options
---------------------------

There are so many options, most of them are self explanatory

```
tableConfig = {
      context: null, // Context for click actions
      extraInfos: [], // Show data above the table
      showTableHeaders: true, // To show/ hide headers
      columnVisibility: false, // To show columns visibility options on table
      columnVisibilityDropDown: false, // To show columns visibility options on table as popover
      visibleColumnFiltersVisibility: false,
      visibleColumnFilters: {},
      showExpandArrows: false,
      fullClassName: 'stacktable table-bordered large-only table table-sm',
      sortAscClassName: 'col-sort col-sort-asc',
      sortDescClassName: 'col-sort col-sort-desc',
      sortNothingClassName: 'col-sort col-sort-nothing',
      customClassName: null,
      showExpandAllArrows: false,
      showExpandAllEmptyChildren: false,
      sortedColumn: {},
      showPageLengthDropdown: true,
      pageSizes: [10, 25, 50, 100],
      level: 0,
      columnFilters: {},
      rowClickablesContext: null,
      rowClickables: {},
      commonSearch: true,
      excelExportButton: false,
      excelExportFileName: 'ExportFile',
      excelExportButtonText: 'Excel Export',
      excelExportAllChildren: true,
      excelExportOnlyExpanded: false,
      events: {
          shouldRowExpand: null,
          rowExpanded: null,
          shouldRowCollapse: null,
          rowCollapsed: null
      }
  }
```

----
**DEMO:**
-----
https://anjnkmr.github.io/angular-tree-table

**dev.to Link**
----------------------
https://dev.to/anjnkmr/angular-tree-table-10jm

**Medium Link**
----------------------
https://medium.com/@anjnkmr/angular-tree-table-bb9312c9720
