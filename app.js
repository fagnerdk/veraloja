

function myide(){
    var nome = window.document.getElementById('nome').value;
    var id = window.document.getElementById('id').value;
    var fotourl = window.document.getElementById('foto').value;
    
    
    //var nomes=document.getElementById("kl").innerHTML= nome;
   // var id1=document.getElementById("kl1").innerHTML= id;
    //console.log(nomes)
   // console.log(id1)
   
   if (id == 1){
        
     var ts= document.getElementById("kl").innerHTML= nome;//id nome do produto
      document.getElementById("foty").src = fotourl;//id foto
        console.log("id esta coreto");
       
     
    }
    else if(id == 2){
        document.getElementById("kl").innerHTML= nome;
       
        console.log("id esta coreto");
    }
     else{
        document.getElementById("kl").innerHTML= "id esta errado";

          console.log("ide esta e rado");
    }

};
