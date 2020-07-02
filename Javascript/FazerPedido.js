var cardapio;
var totalPrice = 0;
var totalAmount = 0;
window.onload = function(){
    getMenu();
    if(Message==true){
        SuccessOrder();
    }
}

window.onscroll = function(){
    controlOrderHeight();
}

function controlOrderHeight(){
    var cabecalho = document.getElementsByClassName("cabecalho")[0];
    var order = document.getElementsByClassName("container-order")[0];
    
    
    if(window.scrollY > cabecalho.offsetHeight){
        
        order.style.position="fixed";
        order.style.top = '0px';
        order.style.height = '100vh';
        
        order.style.transition=".5s";
    }
    else{
        order.style.transition="0s";
        order.style.top = cabecalho.offsetHeight-window.scrollY+'px';
        order.style.height = (window.screen.height-cabecalho.offsetHeight)+'px';
        
       
    }
}

function getMenu(){
	$.getJSON( "http://localhost/wongchan/JavaScript/cardapio.json", function( data ) { 
    /*alert(data[0].flavors[5].name);*/
    cardapio = data;
    createItem(data);
    });	
}

function createItem(Menu){
    var Container_Menu = document.getElementsByClassName("container-menu")[0];
    for(var i=0;i<Menu.length;i++){
        var Item = document.createElement("div");
        var Info_Item = document.createElement("div");
        var Item_Name = document.createElement("p");
        var Item_Description = document.createElement("p");
        var Container_Item_Bottom = document.createElement("div");
        var Img_Item = document.createElement("div");
        var Flavors_Item = document.createElement("div");

        Item.setAttribute("class","item");
        Info_Item.setAttribute("class","info-item");
        Item_Name.setAttribute("class","item-name");
        Item_Description.setAttribute("class","item-description");
        Container_Item_Bottom.setAttribute("class","container-item-bottom");
        Img_Item.setAttribute("class","img-item");
        Flavors_Item.setAttribute("class","flavors-item");

        Item_Name.innerHTML = Menu[i].name + " - "+Menu[i].amount+" Un";
        Item_Description.innerHTML=Menu[i].description;
        var photoName = Menu[i].name.toLowerCase();
        photoName = photoName.replace(" ","");
        Img_Item.style.backgroundImage="url(src/"+photoName+".jpg)";
        
        
        for(var j=0;j<Menu[i].flavors.length;j++){
            var Flavor = document.createElement("div");
            var Flavor_Name = document.createElement("p");
            var Line = document.createElement("div");
            var Flavor_Price = document.createElement("p");
            var Add_Icon = document.createElement("i");
     
            Flavor.setAttribute("class","flavor");
            Flavor_Name.setAttribute("class","flavor-name");
            Line.setAttribute("class","line");
            Flavor_Price.setAttribute("class","flavor-price");
            Add_Icon.setAttribute("class","fas fa-plus-circle add-icon");
            Add_Icon.setAttribute("onclick","addIcon("+i+","+j+")");
            Add_Icon.setAttribute("title","Adicionar "+Menu[i].name+" sabor "+Menu[i].flavors[j].name+"");
     
            Flavor_Name.innerHTML=Menu[i].flavors[j].name;
            Flavor_Price.innerHTML=Menu[i].flavors[j].price;
            Flavor.appendChild(Flavor_Name);
            Flavor.appendChild(Line);
            Flavor.appendChild(Flavor_Price);
            Flavor.appendChild(Add_Icon);
            Flavors_Item.appendChild(Flavor);
        }

        if(i%2==0){
            Container_Item_Bottom.appendChild(Img_Item);
            Container_Item_Bottom.appendChild(Flavors_Item);
        }
        else{
            Container_Item_Bottom.appendChild(Flavors_Item);
            Container_Item_Bottom.appendChild(Img_Item);
        }
        Info_Item.appendChild(Item_Name);
        Info_Item.appendChild(Item_Description);
        Info_Item.appendChild(Container_Item_Bottom);
        Item.appendChild(Info_Item);
        Container_Menu.appendChild(Item);
        
    }
}

function addIcon(item,sabor){
    verifyItemExist(item,sabor);
}

function updateAmount(element,item,sabor){
    var amountOrder = document.getElementsByClassName("item-order-ammount")[element];
    var TotalOrderItem = document.getElementsByClassName("total-item-order")[element];
    var TotalItemPrice = document.getElementsByClassName("total-item-price")[element];
    var itemOrder = document.getElementsByClassName("item-order")[element];
    TotalOrderItem.innerHTML = "Total: "+cardapio[item].amount*amountOrder.value + " unidades";
    TotalItemPrice.innerHTML = "R$ "+(cardapio[item].flavors[sabor].price * amountOrder.value).toFixed(2);
    itemOrder.setAttribute("value",""+(cardapio[item].flavors[sabor].price * amountOrder.value).toFixed(2)+"");
    updateTotalPriceAmount();
}

function updateExistItem(element,item,sabor){
    var amountOrder = document.getElementsByClassName("item-order-ammount")[element];
    var TotalOrderItem = document.getElementsByClassName("total-item-order")[element];
    var TotalItemPrice = document.getElementsByClassName("total-item-price")[element];
    var itemOrder = document.getElementsByClassName("item-order")[element];
    amountOrder.stepUp(1);
    TotalOrderItem.innerHTML = "Total: "+cardapio[item].amount*amountOrder.value + " unidades";
    TotalItemPrice.innerHTML = "R$ "+(cardapio[item].flavors[sabor].price * amountOrder.value).toFixed(2);
    itemOrder.setAttribute("value",""+(cardapio[item].flavors[sabor].price * amountOrder.value).toFixed(2)+"");
    
    updateTotalPriceAmount();
}

function verifyItemExist(item,sabor){
    var exist =0;
    var items = document.getElementsByClassName("item-order");
    var actualItem = item+""+sabor;
    if(items.length>0){
        for(var i=0;i<items.length;i++){
            if(items[i].getAttribute("name")==actualItem){
                updateExistItem(i,item,sabor);
                exist=1;
            }
        }
        if(exist==0){
            createItemOrder(item,sabor,i);
        }
    }
    else{
        createRemoveAll();
        createItemOrder(item,sabor,0);
    }
}

function createRemoveAll(){
    var container = document.getElementsByClassName("container-items")[0];
    var btnRemoveAll = document.createElement("button");
    btnRemoveAll.setAttribute("class","b-removeAll");
    btnRemoveAll.setAttribute("onclick","removeAll()");
    btnRemoveAll.setAttribute("title","Remover todos os itens");
    btnRemoveAll.innerHTML="<i style='margin-right:15px' class='fas fa-trash-alt'></i>Remover tudo";
    container.appendChild(btnRemoveAll);
}

function removeAll(){
    var cover = document.getElementsByClassName("cover")[0];
    var message = document.getElementsByClassName("message-remove")[0];
    var messageContainer = document.getElementsByClassName("confirm-item-remove")[0];
    var buttonContainer = document.getElementsByClassName("container-b-remove")[0];
    var Remove = document.getElementsByClassName("yes-remove");
    if(Remove.length==0){
        var buttonYes = document.createElement("button");
        buttonYes.setAttribute("class","b-action-remove yes-remove");
        buttonYes.setAttribute("onClick","yesRemoveAll()");
        buttonYes.innerHTML="Sim";
    }
    else{
        Remove[0].setAttribute("onClick","yesRemoveAll()");
    }
    buttonContainer.style.opacity='1';
    cover.style.opacity="0.5";
    cover.style.zIndex = "10000";
    messageContainer.style.opacity="1";
    messageContainer.style.zIndex = "10001";
    message.innerHTML='Deseja realmente excluir <t style="color:rgb(221, 188, 0);">todos</t> os itens da comanda?';
    buttonContainer.appendChild(buttonYes);
}

function yesRemoveAll(){
    var message = "Todos os itens foram removidos com sucesso!";
    var container = document.getElementsByClassName("container-items")[0];
    container.innerHTML="";
    updateTotalPriceAmount();
    SucessMessage(message,2000);
}

function createItemOrder(item,sabor,element){
    var comanda = document.getElementsByClassName("container-items")[0];
    var itemOrder = document.createElement("div");
    var itemOrderRow = document.createElement("div");
    var itemOrderRow2 = document.createElement("div");
    var itemOrderName = document.createElement("p");
    var ammountItemOrder = document.createElement("input");
    var removeIcon = document.createElement("i");
    var Totalitem = document.createElement("p");
    var TotalItemPrice = document.createElement("p");

    itemOrder.setAttribute("class","item-order");
    itemOrder.setAttribute("value",""+(cardapio[item].flavors[sabor].price * 1).toFixed(2)+"");
    itemOrderRow.setAttribute("class","item-order-row");
    itemOrderRow2.setAttribute("class","item-order-row");
    itemOrder.setAttribute("name",""+item+""+sabor+"");

    itemOrderName.setAttribute("class","item-order-name");
    ammountItemOrder.setAttribute("class","item-order-ammount");
    ammountItemOrder.setAttribute("type","number");
    ammountItemOrder.setAttribute("min","1");
    ammountItemOrder.setAttribute("size","3");
    ammountItemOrder.setAttribute("value","1");
    ammountItemOrder.setAttribute("onchange","updateAmount("+element+","+item+","+sabor+")")
    removeIcon.setAttribute("class","fas fa-trash-alt remove-item-order");
    removeIcon.setAttribute("onclick","RemoveItem("+item+","+sabor+")");
    removeIcon.setAttribute("title","Remover "+cardapio[item].name+" sabor "+cardapio[item].flavors[sabor].name+" da comanda");
    Totalitem.setAttribute("class","total-item-order");
    TotalItemPrice.setAttribute("class","total-item-price");
    
    itemOrderName.innerHTML = cardapio[item].name + " sabor " + cardapio[item].flavors[sabor].name + " - "+cardapio[item].amount + " Un";
    Totalitem.innerHTML = "Total: "+cardapio[item].amount + " unidades";
    TotalItemPrice.innerHTML = "R$ "+cardapio[item].flavors[sabor].price;
    itemOrderRow.appendChild(itemOrderName);
    itemOrderRow.appendChild(ammountItemOrder);
    itemOrderRow.appendChild(removeIcon);
    itemOrderRow2.appendChild(Totalitem);
    itemOrderRow2.appendChild(TotalItemPrice);
    itemOrder.appendChild(itemOrderRow);
    itemOrder.appendChild(itemOrderRow2);
    comanda.appendChild(itemOrder);

    updateTotalPriceAmount();
}

function RemoveItem(item,sabor){
    var cover = document.getElementsByClassName("cover")[0];
    var message = document.getElementsByClassName("message-remove")[0];
    var messageContainer = document.getElementsByClassName("confirm-item-remove")[0];
    var buttonContainer = document.getElementsByClassName("container-b-remove")[0];
    var Remove = document.getElementsByClassName("yes-remove");
    if(Remove.length==0){
        var buttonYes = document.createElement("button");
        buttonYes.setAttribute("class","b-action-remove yes-remove");
        buttonYes.setAttribute("onClick","yesRemove("+item+","+sabor+")");
        buttonYes.innerHTML="Sim";
    }
    else{
        Remove[0].setAttribute("onClick","yesRemove("+item+","+sabor+")");
    }
    buttonContainer.style.opacity='1';
    cover.style.opacity="0.5";
    cover.style.zIndex = "10000";
    messageContainer.style.opacity="1";
    messageContainer.style.zIndex = "10001";
    message.innerHTML='Deseja realmente excluir o item <t style="color:rgb(221, 188, 0);">"'+cardapio[item].name+" sabor "+cardapio[item].flavors[sabor].name+'"</t> da comanda?';
    buttonContainer.appendChild(buttonYes);
    
}

function noRemove(){
    var messageContainer = document.getElementsByClassName("confirm-item-remove")[0];
    var cover = document.getElementsByClassName("cover")[0];
    cover.style.opacity="0";
    cover.style.zIndex = "-1";
    messageContainer.style.opacity="0";
    messageContainer.style.zIndex = "-1";
}

function yesRemove(item,sabor){
    var container=document.getElementsByClassName("container-items")[0];
    var items = document.getElementsByClassName("item-order");
    var ItemToRemove = item+""+sabor;
    var message = "Item removido com sucesso!";
    
    for(var i=0;i<items.length;i++){
        if(items[i].getAttribute("name")==ItemToRemove){
            items[i].remove();
            if(items.length==0){
                container.innerHTML="";
            }
            updateTotalPriceAmount();
            SucessMessage(message,1000);
        }
    }
    
}

function SucessMessage(message,time){
    var messageRemove = document.getElementsByClassName("message-remove")[0];
    var buttonContainer = document.getElementsByClassName("container-b-remove")[0];
    buttonContainer.style.opacity='0';
   
    messageRemove.innerHTML="<t style='color:white'>"+message+"</t>";
    setTimeout(()=>{noRemove();},time);
}

function updateTotalPriceAmount(){
    var TotalPrice=document.getElementsByClassName("total-price")[0];

    var itemPrice =document.getElementsByClassName("item-order");
    totalPrice=0;
    totalAmount=0;
    for(var i=0;i<itemPrice.length;i++){
               
        totalPrice+=parseFloat(itemPrice[i].getAttribute("value"));
        
    }

    TotalPrice.innerHTML="Total: R$ "+totalPrice.toFixed(2);
}

function sendOrder(){
    var item = document.getElementsByClassName("item-order");
    var itemAmount = document.getElementsByClassName("item-order-ammount");
    var itemsOrder="";
    for(var i=0;i<item.length;i++){
        itemsOrder+=item[i].getAttribute("name")+itemAmount[i].value;
    }
    window.location.href = "ConfirmaPedido.php?Items="+itemsOrder;
}

function SuccessOrder(){
    var cover = document.getElementsByClassName("cover-all")[0];
    cover.style.zIndex="1000000";
    cover.style.opacity = "1";
    setTimeout(()=>{
        var check = document.getElementsByClassName("check-success")[0];
        var titlecheck = document.getElementsByClassName("success-title")[0];
        var contentcheck = document.getElementsByClassName("success-content")[0];
        check.style.backgroundImage="url(./src/check.png)";
        check.style.width="200px";
        check.style.height="200px";
        check.style.marginTop="-100px";
        titlecheck.style.marginTop = "85px";
    },1400);
}