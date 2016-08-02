Table
==================================================

This script can sort table and perform live data search
--------------------------------------
### Sorting

To make table sorted click the table header

### Search

Insert search query into text field,search will be performed after each inserted symbol


### Using

In section window.onload, put id your table
 table = document.getElementById("your-table-id")

 and put in id your serch element
searchElem = document.getElementById("your-search-id");

If You use this script with many tables, you will create another variables (table1, table2... and searchElem1, searchElem2)and put another bit of code
 thList = **table**.querySelectorAll("th");
 for (var i = 0; i < thList.length; i++){
            thList[i].addEventListener("click", (function(i){
                 var elem = thList[i];
                 elem.direction = true;
                return function(){
                    sortTable(**table**, i, elem );
                }
            }(i)));
        }
        searchElem.addEventListener("keyup", function(){
            search(**searchElem**, **table**);
        });