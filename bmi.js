function kiszamol(e)
{
    let suly = parseFloat(document.getElementById('suly').value);
    let hossz = parseFloat(document.getElementById('hossz').value);

    document.getElementById('eredmeny').value = suly + hossz;
}