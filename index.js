function calcTip(){
    var bill = Number(document.getElementById("bill").value);
    var tip = Number(document.getElementById("percentage").value);

    var calculation = Math.floor(bill * (tip/100));
    
    document.getElementById("tip").innerHTML = "You should tip " + "$" + calculation;

}
document.getElementById("calc").onclick = function(){
    calcTip();
}

