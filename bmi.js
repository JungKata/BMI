
function kiszamol(){
 
    let magassag = parseFloat(document.getElementById("hossz").value);
    let suly = parseFloat(document.getElementById("tomeg").value);
   
    let eredmeny = suly / (magassag / 100) ** 2;
   
    document.getElementById("eredmeny").textContent = eredmeny.toFixed(2);
   
   }