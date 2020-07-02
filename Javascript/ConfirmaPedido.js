var totalOrder=0;
window.onload = function(){
    getMenu();
}

function getMenu(){
	$.getJSON( "http://localhost/wongchan/JavaScript/cardapio.json", function( data ) { 
    /*alert(data[0].flavors[5].name);*/
        createItems(data);
    });	
}

function createItems(cardapio){
    for(var i=0;i<SeparateItems.length;i++){
        var item = SeparateItems[i][0];
        var sabor =  SeparateItems[i][1];
        var amount =  SeparateItems[i][2];
        var containerAll = document.getElementsByClassName("container-all")[0];
        var containerItem = document.createElement("div");
        var itemImg = document.createElement("div");
        var columnItem = document.createElement("div");
        var itemName = document.createElement("p")
        var containerAmount = document.createElement("p");
        var itemPrice = document.createElement("p");

        containerItem.setAttribute("class","container-item");
        itemImg.setAttribute("class","item-img");
        columnItem.setAttribute("class","column-item");
        itemName.setAttribute("class","item-name");
        containerAmount.setAttribute("class","container-amount");
        itemPrice.setAttribute("class","item-price");

        
        var photoName = cardapio[item].name.toLowerCase();
        photoName = photoName.replace(" ","");
        itemImg.style.backgroundImage="url(src/"+photoName+".jpg)";

        itemName.innerHTML=cardapio[item].name+" sabor <t style='color:rgb(221, 188, 0)'>"+cardapio[item].flavors[sabor].name+"</t> - "+ cardapio[item].amount+" Un";
        containerAmount.innerHTML="Unidades: "+amount;
        itemPrice.innerHTML="Total: R$"+(cardapio[item].flavors[sabor].price*amount).toFixed(2);

        columnItem.appendChild(itemName);
        columnItem.appendChild(containerAmount);
        columnItem.appendChild(itemPrice);
        containerItem.appendChild(itemImg);
        containerItem.appendChild(columnItem);
        containerAll.appendChild(containerItem);

        totalOrder+=parseFloat((cardapio[item].flavors[sabor].price*amount).toFixed(2));
    }

    var TotalOrder = document.getElementsByClassName("total-order")[0];
    TotalOrder.innerHTML="Total do pedido: R$ "+totalOrder.toFixed(2);
}

function nextStep(){
    window.location.href="AdicionaEndereco.php";
}



