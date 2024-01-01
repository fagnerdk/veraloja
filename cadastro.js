import numero from "./js/index-pg1.js";

const rs = document.getElementsByClassName("RS")[0].innerHTML = "R$";
 document.getElementById("vt").innerHTML=numero[0] // valo do produto
 document.getElementById("pg1-a2").value=numero[0];
 const d = new Date()
 const dt = [d.getDate(), (d.getMonth() + 1 ),d.getFullYear() ]
 document.getElementById("data").value= dt[0]+'/'+dt[1]+'/'+dt[2];