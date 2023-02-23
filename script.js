function DeleteMe(){
    document.getElementById("myresult").value = ""
}

function calculator(NewValue){
    document.getElementById("myresult").value += NewValue;
}
function Answer(){
    let a = document.getElementById("myresult").value;
    let b = eval(a);
    document.getElementById("myresult").value= b;
}