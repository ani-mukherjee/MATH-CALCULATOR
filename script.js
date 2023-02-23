function Delete(){
    document.getElementById("myresult").value = "";
}
function back(){
    let x= document.getElementById("myresult").value;
    var str = x.toString();
    x = str.slice(0, str.length - 1);
    document.getElementById("myresult").value= x; 
}

function calculator(NewValue){
    document.getElementById("myresult").value += NewValue;
}
function submit(){
    let a = document.getElementById("myresult").value;
    let b = eval(a);
    document.getElementById("myresult").value= b;
}