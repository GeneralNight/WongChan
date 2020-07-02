window.onload = function(){
    DefineCoverSize();
    DefinePromotionDay();
    DefineOpeningHour();
}

function DefineCoverSize(){

    var divInfo = document.getElementsByClassName("about-info")[0];
    var divImg= document.getElementsByClassName("about-img")[0];
    var divInfo2 = document.getElementsByClassName("opening-hours")[0];
    var divImg2= document.getElementsByClassName("opening-img")[0];
    if(headerWidth.offsetWidth<1300){
        

        divImg.style.height = divInfo.offsetHeight+"px";
        divImg.style.width = (divInfo.offsetWidth)+"px";
        divImg2.style.height = divInfo2.offsetHeight+"px";
        divImg2.style.width = (divInfo2.offsetWidth)+"px";
    }
    else{

        divImg.style.height ="300px";
        divImg.style.width ="30%";
        divImg2.style.height ="300px";
        divImg2.style.width ="30%";
    }
}

function DefinePromotionDay(){
    var today = new Date();
    var DayofWeek = today.getDay();
    var cards = document.getElementsByClassName("card")[DayofWeek].style.filter="brightness(100%)";
}

function DefineOpeningHour(){
    var today = new Date();
    var DayofWeek = today.getDay();
    var cards = document.getElementsByClassName("row-hour")[DayofWeek];
    cards.style.backgroundColor="rgb(221, 188, 0)";
    cards.style.color="black";
    cards.style.padding="10px";
    cards.style.boxShadow="0 0 20px rgba(0,0,0,0.4)";
}

