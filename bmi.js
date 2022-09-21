/*function kiszamol(e)
{
    let suly = parseFloat(document.getElementById('suly').value);
    let hossz = parseFloat(document.getElementById('hossz').value);

    document.getElementById('eredmeny').value = suly + hossz;
}*/
/*function kiszamol()
{
    


  var listaElem = document.getElementById("sovany");
  listaElem.classList.remove("tabla");
  var listaElem = document.getElementById("normal");
  listaElem.classList.remove("tabla");
  var listaElem = document.getElementById("tulsuly");
  listaElem.classList.remove("tabla");
  var listaElem = document.getElementById("elsotulsuly");
  listaElem.classList.remove("tabla");
  var listaElem = document.getElementById("masodiktulsuly");
  listaElem.classList.remove("tabla");
  var listaElem = document.getElementById("harmadiktulsuly");
  listaElem.classList.remove("tabla")
  
  */



function kiszamol(){
 
    let magassag = parseFloat(document.getElementById("hossz").value);
    let suly = parseFloat(document.getElementById("tomeg").value);
   
    let eredmeny = suly / (magassag / 100) ** 2;
   
    document.getElementById("eredmeny").textContent = eredmeny.toFixed(2);
   

    let alacsony = parseFloat((18.5*(magassag/100)**2).toFixed(1));
    let magas = parseFloat((24.9*(magassag/100)**2).toFixed(1));
    let atlaga = parseFloat(((alacsony + magas)/2));
    document.getElementById("idealisErtek").innerHTML = atlaga.toFixed(2) + "kg";
   document.getElementById("szelsoErtek").innerHTML = alacsony + " - " + magas + " kg";



  if(eredmeny.toFixed(2) <= 18.5){
    
    $(".sovany").css("background-color", "rgb(239, 130, 41)")
    }

    else if(eredmeny.toFixed(2) <= 24.9)
    {
     $(".normal").css("background-color", "rgb(239, 130, 41)")
    }
    else if (eredmeny.toFixed(2) <= 29.9)
    {
        $(".tulsuly").css("background-color", "rgb(239, 130, 41)")
    }
    else if (eredmeny.toFixed(2) <= 34.9)
    {
        $(".elsotulsuly").css("background-color", "rgb(239, 130, 41)")
    }
    else if (eredmeny.toFixed(2) <= 39.9)
    {
        $(".masodiktulsuly").css("background-color", "rgb(239, 130, 41)")
    }
    else if (eredmeny.toFixed(2) <= 40)
    {
        $(".harmadiktulsuly").css("background-color", "rgb(239, 130, 41)")
    }


    
}
