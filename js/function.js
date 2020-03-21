function Generate(){
    var random = Math.random()*10;
    random = Math.floor(random)+1;

    if (random == 1)
    {document.querySelector(".motor").style.background = "coral";}
    else if (random == 2){document.querySelector(".motor").style.background = "#00d2d6";}
    else if (random == 3){document.querySelector(".motor").style.background = "#7134bf";}
    else if (random == 4){document.querySelector(".motor").style.background = "#ffa40b";}
    else if (random == 5){document.querySelector(".motor").style.background = "#a40033";}
    else if (random == 6){document.querySelector(".motor").style.background = "#28264c";}
    else if (random == 7){document.querySelector(".motor").style.background = "#66c3b1";}
    else if (random == 8){document.querySelector(".motor").style.background = "#71798E";}
    else if (random == 8){document.querySelector(".motor").style.background = "#B7D124";}
    else if (random == 8){document.querySelector(".motor").style.background = "#FF5345";}
    else if (random == 8){document.querySelector(".motor").style.background = "#008083";}
    else if (random == 8){document.querySelector(".motor").style.background = "#A07DA0";}
    else if (random == 8){document.querySelector(".motor").style.background = "#21277B";}
    else if (random == 8){document.querySelector(".motor").style.background = "#EBE8BF";}
    else
    {document.querySelector(".motor").style.background = "#604D3C";}
}


function Show()
{
    if (document.querySelector("#color").value == "Blue")
    {
        document.querySelector(".motor").style.background = "Blue";
    }
    else if(document.querySelector("#color").value == "Yellow")
    {
        document.querySelector(".motor").style.background = "Yellow";
    }
    else if(document.querySelector("#color").value == "Green")
    {
        document.querySelector(".motor").style.background = "Green";
    }
    else if(document.querySelector("#color").value == "Red")
    {
        document.querySelector(".motor").style.background = "Red";
    }
}
function Reset() 
{
    document.querySelector(".motor").style.background = "White";
}