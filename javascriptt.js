myadd.addEventListener("click",addData);
function addData(){
    var row=document.createElement('tr');
    var d1=document.createElement('td');
    var d2=document.createElement('td');
    var d3=document.createElement('td');
    var d4=document.createElement('td');
    var d5 =document.createElement('td');

var t1=document.getElementById("name").value;
var t2=document.getElementById("email").value;
var t3=document.getElementById("phone").value;
var t4=document.getElementById("add").value;

var x=document.createTextNode(t1);
var y=document.createTextNode(t2);
var z=document.createTextNode(t3);
var m=document.createTextNode(t4);
 var btn=document.createElement("button");

btn.innerHTML="X";
btn.addEventListener("click",deletee);

d1.appendChild(x);
d2.appendChild(y);
d3.appendChild(z);
d4.appendChild(m);
d5.appendChild(btn);

var t=document.getElementById("table");
row.appendChild(d1);
row.appendChild(d2);
row.appendChild(d3);
row.appendChild(d4);
row.appendChild(d5);

t.appendChild(row);

 function deletee(event){
 t.removeChild(row);
}
}
