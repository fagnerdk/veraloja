var pagina1=['a','b','c','d','f','g','h','i','g','l'];

let pga0 = pagina1[0]
let pgb1 = pagina1[1]
let pgc2 = pagina1[2]
let pgd3 = pagina1[3]
let pgf4 = pagina1[4]
let pgg5 = pagina1[5]
let pgh6 = pagina1[6]
let pgi7 = pagina1[7]
let pgg8 = pagina1[8]
let pgl9 = pagina1[9]

pga0 = ["a1","c2","c3"]
pgb1 = ["a1","b2","c3"]
pgc2 = ["a1","b2","c3"]
pgd3 = ["a1","b2","c3"]
pgf4 = ["a1","b2","c3"]
pgg5 = ["a1","b2","c3"]
pgh6 = ["a1","b2","c3"]
pgi7 = ["a1","b2","c3"]
pgg8 = ["a1","b2","c3"]
pgl9 = ["a1","b2","c3"]
 
// id
const idpga0a1 = 44 ;
const id_pga0a1 = pga0[0]= "idpga0a1:" + "" + idpga0a1;
console.log(id_pga0a1);


const rs = document.getElementsByClassName("RS")[0].innerHTML = "R$";
var produto = document.getElementById("vt").innerHTML =idpga0a1;
 
// ide do produto pagina1
var pg1 = document.getElementById("pg1-a1");
// pg1 =pga0[1];


 function myFunction(){
var nume = document.getElementById("QTD").value;
var valo = produto ;
var x =  nume * valo  ;
document.getElementById("preço").innerHTML = x;
console.log(x);
};

var pga1 = '../dados do zs/KWAI.jpg';
document.getElementById("fota1").src = pga1;
var pga2= pga1;
document.getElementById("fota2").src = pga2

/*var somab = function(a,b){
    return a+b
};


module.exports = somab;*/







