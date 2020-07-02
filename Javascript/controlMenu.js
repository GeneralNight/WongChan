var State = 1;
var menu = document.getElementsByClassName("menu-list")[0];
var menuIcon = document.getElementsByClassName("menuIcon")[0];
var cover = document.getElementsByClassName("cover")[0];
var Logo = document.getElementsByClassName("img-logo")[0];
var headerWidth = document.getElementsByClassName("cabecalho")[0];
function ChangeMenuState(){
    if(State==0){//Aberto
        CloseMenu();
        State=1;
    }
    else{//Fechado
        OpenMenu();
        
    }
}

function OpenMenu(){
    menu.setAttribute("class","menu-list open");
    menuIcon.setAttribute("class","fas fa-times menuIcon");
    State=0;
    cover.style.opacity="0.5";
    cover.style.zIndex = "10";
    Logo.style.zIndex="100";
}

function CloseMenu(){
    menu.setAttribute("class","menu-list");
    menuIcon.setAttribute("class","fas fa-bars menuIcon");
    cover.style.opacity="0";
    cover.style.zIndex = "-1";
    Logo.style.zIndex="1";
    State=1;
}



window.onresize =  function(){
    

    if(headerWidth.offsetWidth>1200){
        menu.setAttribute("class","menu-list");
        State=1;
        menuIcon.setAttribute("class","fas fa-bars menuIcon");
        cover.style.opacity="0";
        cover.style.zIndex = "-1";
        Logo.style.zIndex="1";
    }

   try{
    DefineCoverSize();
   }catch{}
}

window.onscroll = function(){
    if(window.scrollY>300 && headerWidth.offsetWidth<1200){
        headerWidth.style.position="fixed";
        headerWidth.style.top="0";
        headerWidth.style.zIndex="100";
        headerWidth.style.boxShadow="0 0 15px black";
        menuIcon.style.position="fixed";
        Logo.style.marginLeft="100px";
    }
    else{
        headerWidth.style.position="";
        headerWidth.style.zIndex="100";
        headerWidth.style.boxShadow="none";
        menuIcon.style.position="";
        Logo.style.marginLeft="0px";
    }
}


