function TabSwap(divName, LISTName)
{
    var x= document.getElementsByClassName('listELE')[0];
    for (let index = 0; index < 3; index++) 
    {
        x= document.getElementsByClassName('listELE')[index];
        x.style.backgroundColor='#736F89';
    }
    for (let index = 0; index < 3; index++) 
    {
        x= document.getElementsByClassName('MainBodPart')[index];
        x.style.display='none';
    }
    document.getElementById(divName).style.display='block';
    document.getElementById(LISTName).style.backgroundColor='#a59fc4'; 
}
