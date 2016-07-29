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


window.onload = function (){
    var table = document.getElementById("table-phone"),
        thList = table.querySelectorAll("th");

         for (var i = 0; i < thList.length; i++){
            thList[i].addEventListener("click", (function(i){
                 var elem = thList[i];
                 elem.direction = true;
                return function(){
                    sortTable(table, i, elem );
                }
            }(i)));
        }

}