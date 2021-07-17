function calculate() {
    
    //Variable Declarations
    var images = document.getElementsByTagName('img');
    var l = images.length;
    var ele =document.getElementsByName('Coins');
    var coin;
    var coinValue;
    var coinName;
    var number= document.getElementById('numbers').value;
    var num=parseInt(number);
    
    var src;
    


    for (var i = 0; i < l; i++) //Remove any images from last time
    {
        images[0].parentNode.removeChild(images[0]);
    }
    for(i = 0; i < ele.length; i++)//Find which coin is selected
    { 
        if(ele[i].checked) 
        {
            coin= ele[i].value;
        }
    } 

    //Assign Coin Value and Image
    if(coin=='quarter')
    {
        coinValue=.25;
        src="quarter.gif";
        coinName="Quarters";
    }
    else if(coin=='dime')
    {
        coinValue=.10;
        src="dime.gif";
        coinName="Dimes";
    }
    else if(coin=='nickel')
    {
        coinValue=.05;
        src="nickel.gif";
        coinName="Nickels";
    }
    else
    {
        coinValue=.01;
        src="penny.gif";
        coinName="Pennies";
    }
    var total=num*coinValue;
    document.getElementById('out').innerHTML=num+" "+coinName+" is $"+total.toFixed(2);//Display Total Amount

    //Show Images
    for (i=0;i<num;i++)
    {
        var x = document.createElement("img");
        x.src=src;
        x.id="image";
        var frm=document.getElementById('form');

        frm.appendChild(x);
    }
    
}