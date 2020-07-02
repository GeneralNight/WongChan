var actualVideo=0;
var Settings;
var time, time2;
window.onload=function(){
    getVideoSettings();
    defineVideoHeight();
    DefineCoverSize();
    DefineOpeningHour();
    //initMap();
}

function defineVideoHeight(){
    var hea = document.getElementsByClassName("cabecalho")[0];
    var alt = screen.height - hea.offsetHeight*2+15;
    document.getElementsByClassName("container-video")[0].style.height = alt+"px";
    
}

function getVideoSettings(){
	$.getJSON( "http://localhost/wongchan/JavaScript/VideoSettings.json", function( data ) {
        for(var i=0;i<data.length;i++){
            var container_dots = document.getElementsByClassName("container-dots")[0];
            var dot = document.createElement("div");
            dot.setAttribute("class","dot");
            dot.setAttribute("onClick","goToVideo("+i+")");
            container_dots.appendChild(dot);
        }
        Settings = data;
        defineSettings();
    });	
}

function defineSettings(){
   
    clearTimeout(time);
    clearTimeout(time2);
    var dot = document.getElementsByClassName("dot");
    var Video = document.getElementsByClassName("video")[0];

    
    Video.setAttribute("src","src/videos/"+Settings[actualVideo].video_name);
    Video.style.marginTop=Settings[actualVideo].margin_top;
    document.getElementsByClassName("main-phrase")[0].innerHTML=Settings[actualVideo].main_phrase;
    document.getElementsByClassName("sub-phrase")[0].innerHTML=Settings[actualVideo].sub_phrase;
    
    for(var j=0;j<dot.length;j++){
        dot[j].style.backgroundColor="white";
    }
    dot[actualVideo].style.backgroundColor="rgb(221, 188, 0)";

    animeteItems();
    
    time = setTimeout(()=>{nextVideo()},15000);
    time2 = setTimeout(()=>{clearVideo()},13000);
}

function nextVideo(){
    actualVideo != Settings.length -1 ? actualVideo++ :actualVideo=0;
    clearVideo();
    setTimeout(()=>{defineSettings();},1000);
}

function previousVideo(){
    actualVideo != 0 ? actualVideo-- :actualVideo=Settings.length -1;
    clearVideo();
    setTimeout(()=>{defineSettings();},1000);
}


function clearVideo(){
    document.getElementsByClassName("main-phrase")[0].animate([
        {opacity:'1'},
        {opacity:'0'}
    ],{duration:800,fill:"forwards"});

    document.getElementsByClassName("div-line")[0].animate([
        {width:'80%'},
        {width:'0%'}
    ],{duration:800,fill:"forwards",delay:500});

    document.getElementsByClassName("sub-phrase")[0].animate([
        {opacity:'1'},
        {opacity:'0'}
    ],{duration:800,fill:"forwards"});
}

function goToVideo(video){
    clearVideo();
    actualVideo = video;
    setTimeout(()=>{defineSettings();},1000);
}

function animeteItems(){
    
    document.getElementsByClassName("main-phrase")[0].animate([
        {opacity:'0'},
        {opacity:'1'}
    ],{duration:1500,delay:300,fill:"forwards"});

    document.getElementsByClassName("div-line")[0].animate([
        {width:'0%'},
        {width:'80%'}
    ],{duration:3000,fill:"forwards",delay:1000});

    document.getElementsByClassName("sub-phrase")[0].animate([
        {opacity:'0'},
        {opacity:'1'}
    ],{duration:1000,delay:3000,fill:"forwards"});

    document.getElementsByClassName("line")[0].animate([
        {width:'0%'},
        {width:'100%'}
    ],{duration:15000});
}

function initMap() {
    // The location of Uluru
        var uluru = {lat: -21.184211, lng: -47.811951};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementsByClassName('map')[0], {zoom: 14, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
    }

function DefineCoverSize(){

    var divInfo = document.getElementsByClassName("about-info")[0];
    var divImg= document.getElementsByClassName("about-img")[0];
    if(headerWidth.offsetWidth<1300){
        

        divImg.style.height = divInfo.offsetHeight+"px";
        divImg.style.width = (divInfo.offsetWidth)+"px";

    }
    else{

        divImg.style.height ="300px";
        divImg.style.width ="30%";
        
    }
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