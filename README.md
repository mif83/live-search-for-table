Table
==================================================

This script can sort table and perform live data search
https://mif83.github.io/table/
--------------------------------------
### Sorting

To make table sorted click the table header

### Search

Insert search query into text field, search will be performed after each inserted symbol

### Clone

Clone a copy of the Table script:

```bash
git clone https://github.com/mif83/table.git
```

### Using

In section window.onload, function addEvent sends two arrays with id tables and search elements
```js
 addEvent(["table-phone", "table-verbs"], ["search", "search2"]);
```

Type in your id
 ```js
addEvent(["your-table"], ["your-search"]);
  ```


