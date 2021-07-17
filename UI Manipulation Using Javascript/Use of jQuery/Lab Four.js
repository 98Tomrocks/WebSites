$(document).ready(function()
{  
    $("a").click(function()
    {
        $(".MainBodPart").hide();       
        $($(this).attr("href")).show();
    })
})
