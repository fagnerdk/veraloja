
var nome =  function(){
   
    var b = document.getElementById('n').value ;
    localStorage.setItem("name",b);
   
    //var vl= document.getElementById('demo').innerHTML= localStorage.getItem("name");
           
    
    
   
   
   document.getElementById("v1").innerHTML= localStorage.getItem("name");//numero[0];
}