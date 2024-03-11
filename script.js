const val= document.getElementById('h1');

function increment(){
    let value=parseInt(val.innerText);
    value = value + 1;
    val.innerText = value;
}
function decrement(){
    let value=parseInt(val.innerText);
    value = value - 1;
    val.innerText = value;
}
