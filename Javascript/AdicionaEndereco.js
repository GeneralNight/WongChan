window.onload=function(){
    clearCEP();
    addAction();
}

function clearCEP(){
    CEP = document.getElementsByClassName("t_CEP")[0];
    CEP.value="";
    document.getElementById("t_retirada").checked=false;
}

function VerifyCep(){
    var numCarac = ContaCaracter();
	if(numCarac>7){
        CEP = document.getElementsByClassName("t_CEP")[0].value;
        pesquisacep(CEP);
    }
    else{
        clearAll();
    }
}

function ContaCaracter(){
    return document.getElementsByClassName("t_CEP")[0].value.length;
}

function pesquisacep(valor) {
    var script = document.createElement('script');

                //Sincroniza com o callback.
    script.src = 'https://viacep.com.br/ws/'+ valor + '/json/?callback=meu_callback';

    //Insere script no documento e carrega o conteúdo.
    document.body.appendChild(script);
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('t_endereco').value=(conteudo.logradouro);
        document.getElementById('t_bairro').value=(conteudo.bairro);
        document.getElementById('t_cidade').value=(conteudo.localidade);
        document.getElementById('t_uf').value=(conteudo.uf);
    }else{
        errorMessage();
    }
}

function errorMessage(){
    var errorMessage = document.getElementsByClassName("error-message")[0];
    var errorSignal = document.getElementsByClassName("error-signal")[0];
    errorMessage.style.position="initial";
    errorMessage.style.zIndex="10";
    errorMessage.style.opacity="1";
    errorSignal.style.position="initial";
    errorSignal.style.zIndex="10";
    errorSignal.style.opacity="1";
    
}

function clearAll(){
    var errorMessage = document.getElementsByClassName("error-message")[0];
    var errorSignal = document.getElementsByClassName("error-signal")[0];
    errorMessage.style.position="absolute";
    errorMessage.style.zIndex="-1";
    errorMessage.style.opacity="0";
    errorSignal.style.position="absolute";
    errorSignal.style.zIndex="-1";
    errorSignal.style.opacity="0";
    document.getElementById('t_endereco').value="";
    document.getElementById('t_bairro').value="";
    document.getElementById('t_cidade').value="";
    document.getElementById('t_uf').value="";
}

function alterForm(){
    var checkBoxStatus = document.getElementById("t_retirada");
    if(checkBoxStatus.checked==true){
        disableForm();
        document.getElementsByClassName("text-retirada")[0].style.color="orangered";
    }
    else{
       enableForm();
       document.getElementsByClassName("text-retirada")[0].style.color="";
    }
}

function disableForm(){
    document.getElementById('t_endereco').disabled=true;
    document.getElementById('t_bairro').disabled=true;
    document.getElementById('t_cidade').disabled=true;
    document.getElementById('t_uf').disabled=true;
    document.getElementById('t_numero').disabled=true;
    document.getElementById('t_complemento').disabled=true;

    document.getElementById('t_endereco').style.filter="brightness(40%)";
    document.getElementById('t_bairro').style.filter="brightness(40%)";
    document.getElementById('t_cidade').style.filter="brightness(40%)";
    document.getElementById('t_uf').style.filter="brightness(40%)";
    document.getElementById('t_numero').style.filter="brightness(40%)";
    document.getElementById('t_complemento').style.filter="brightness(40%)";
}

function  enableForm(){
    document.getElementById('t_endereco').disabled=false;
    document.getElementById('t_bairro').disabled=false;
    document.getElementById('t_cidade').disabled=false;
    document.getElementById('t_uf').disabled=false;
    document.getElementById('t_numero').disabled=false;
    document.getElementById('t_complemento').disabled=false;

    document.getElementById('t_endereco').style.filter="brightness(100%)";
    document.getElementById('t_bairro').style.filter="brightness(100%)";
    document.getElementById('t_cidade').style.filter="brightness(100%)";
    document.getElementById('t_uf').style.filter="brightness(100%)";
    document.getElementById('t_numero').style.filter="brightness(100%)";
    document.getElementById('t_complemento').style.filter="brightness(100%)";
}

function confirmSubmit(){
    var bSubmit = document.getElementsByClassName("b_enviar")[0];
    bSubmit.setAttribute("onclick","");
    bSubmit.style.backgroundColor="rgb(0, 6, 85)";
    setTimeout(()=>{bSubmit.setAttribute("type","submit");},100);
    bSubmit.value="Confirmar Pedido";
}

function addAction(){
    var inputAdrress = document.getElementsByClassName("input-address");
    for(var i=0;inputAdrress.length;i++){
        inputAdrress[i].setAttribute("onchange","resetConfirm()");
    }
}

function resetConfirm(){
    var bSubmit = document.getElementsByClassName("b_enviar")[0];
    bSubmit.setAttribute("onclick","confirmSubmit()");
    bSubmit.style.backgroundColor="#326400";
    setTimeout(()=>{bSubmit.setAttribute("type","button");},0);
    bSubmit.value="Finalizar Pedido";
}

function editUrl(){
    var checkBoxStatus = document.getElementById("t_retirada");
    var formAddress = document.getElementsByClassName("add-address")[0];
    if(checkBoxStatus.checked==true){
        formAddress.setAttribute("action","./FinalizarPedido?Delivery=1");
    }
    else{
        formAddress.setAttribute("action","./FinalizarPedido?Delivery=0")
    }
}