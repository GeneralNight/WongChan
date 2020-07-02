var Cover = document.getElementsByClassName("cover-form")[0];
var FormNewOrder = document.getElementsByClassName("new-order")[0];

function AletraNumCaractere(){
	var numCarac = ContaCaracter();
	document.getElementsByClassName("num-carac")[0].innerHTML = numCarac+" / 450";
}

function ContaCaracter(){
	return document.getElementById("t_Msg").value.length;
}

function NewOrder(){
    Cover.style.zIndex="200";
    Cover.style.position="fixed";
    
    FormNewOrder.style.zIndex="201";
    FormNewOrder.style.position="absolute";
    

    Cover.animate([
        {opacity:"0"},
        {opacity:"0.7"}
    ],{
        duration:600,
        fill:"forwards"
    });

    FormNewOrder.animate([
        {opacity:"0"},
        {opacity:"1"}
    ],{
        duration:600,
        fill:"forwards"
    });
}

function CloseNewOrder(){

    Cover.animate([
        {opacity:"0.7"},
        {opacity:"0"}
    ],{
        duration:600,
        fill:"forwards"
    });

    FormNewOrder.animate([
        {opacity:"1"},
        {opacity:"0"}
    ],{
        duration:600,
        fill:"forwards"
    });

   setTimeout(()=>{
    Cover.style.zIndex="-1";
    Cover.style.position="absolute";
    
    FormNewOrder.style.zIndex="-1";
    FormNewOrder.style.position="absolute";
   },600);
}