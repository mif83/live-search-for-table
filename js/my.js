/**
 * Created by dima on 28.07.2016.
 */
function sortTable(table, x, elem){
    var fragment = document.createDocumentFragment(),
        trList = table.querySelectorAll("tr");

    trList = [].slice.apply(trList, [1]);

    if (elem.direction){
        trList.sort(sortArrUp);
        elem.direction = false;
        elem.classList.remove("down");
        elem.classList.add("up");
    } else {
        trList.sort(sortArrDown);
        elem.direction = true;
        elem.classList.remove("up");
        elem.classList.add("down");
    }

    for (var i = 0; i < trList.length; i++){
        fragment.appendChild(trList[i]);
    }
   return table.appendChild(fragment);

    function sortArrUp(a , b){
        var a = a.children[x].textContent,
            b = b.children[x].textContent;
        if (isNumeric(a)){
            a = +a;
            b = +b;
        }
        if(a > b) {
            return +1;
        }
        return -1;
    }
    function sortArrDown(a ,b){
        var a = a.children[x].textContent,
            b = b.children[x].textContent;
        if (isNumeric(a)){
            a = +a;
            b = +b;
        }
        if(a < b) {
            return +1;
        }
        return -1;
    }
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
}
function search(searchElem, table){
    var reg = new RegExp(searchElem.value, "gim"),
        trList = [].slice.apply(table.querySelectorAll("tr"), [1]);

    for (var i = 0; i < trList.length; i++){
        if(trList[i].textContent.search(reg) == -1){
           trList[i].hidden = true;
        } else {
            trList[i].hidden = false;
        }
    }
}
function addEvent(arrTableId, arrSearchElem){

    for(var i = 0; i < arrTableId.length; i++){
        var curentTable = document.getElementById(arrTableId[i]),
            thList = curentTable.querySelectorAll("th"),
            searchElem = document.getElementById(arrSearchElem[i]);
        for (var j = 0; j < thList.length; j++){
            thList[j].addEventListener("click", (function(j, curentTable){
                var elem = thList[j];
                elem.direction = true;
                return function(){
                    sortTable(curentTable, j, elem );
                }
            }(j, curentTable)));
        }

        searchElem.addEventListener("keyup", (function(searchElem, curentTable){
            return function(){
                search(searchElem, curentTable);
            }
        })(searchElem, curentTable));
    }

}
window.onload = function (){
    addEvent(["table-phone", "table-verbs"], ["search", "search2"]);
};