window.onload=function(){
    getMenu();
    defineExpandTop();
}

function getMenu(){
	$.getJSON( "http://localhost/wongchan/JavaScript/cardapio.json", function( data ) { 
    /*alert(data[0].flavors[5].name);*/
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
     
            Flavor.setAttribute("class","flavor");
            Flavor_Name.setAttribute("class","flavor-name");
            Line.setAttribute("class","line");
            Flavor_Price.setAttribute("class","flavor-price");
     
            Flavor_Name.innerHTML=Menu[i].flavors[j].name;
            Flavor_Price.innerHTML=Menu[i].flavors[j].price;
            Flavor.appendChild(Flavor_Name);
            Flavor.appendChild(Line);
            Flavor.appendChild(Flavor_Price);
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

function createFlavors(Flavors){
   
}