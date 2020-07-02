<?php
session_start();
include 'config.php';
mysqli_set_charset($con,"utf8");


$items = $_SESSION['itemsOrder'];

$json = file_get_contents('http://localhost/wongchan/JavaScript/cardapio.json');
$cardapio = json_decode($json);

$itemsOrder = implode("", $_SESSION['itemsOrder']);
$whatsapp = $_POST['txt_whatsapp'];
$payment = $_POST['txt_method'];
$totalOrder =0;
for($i=0;$i<(count($items)*3);$i+=3){
    $totalOrder+=$cardapio[$items[$i/3][0]]->flavors[$items[$i/3][1]]->price * $items[$i/3][2];
}

echo $totalOrder;
$Retirada =  $_GET['Delivery'];
if($Retirada==0){
    $entrega=1;
    $endereco = $_POST['txt_endereco'];
    $bairro =  $_POST['txt_bairro'];
    $cidade = $_POST['txt_cidade'];
    $estado = $_POST['txt_uf'];
    $numero = $_POST['txt_numero'];
    $complemento = $_POST['txt_complemento'];

    $sql ="INSERT INTO Pedidos(Itens_Pedido,Total_Pedido,Entrega,Endereco,Bairro,Cidade,Estado,Numero,Complemento,Pagamento,Whatsapp) VALUES('".$itemsOrder."','".$totalOrder."','".$entrega."','".$endereco."','".$bairro."','".$cidade."','".$estado."','".$numero."','".$complemento."','".$payment."','".$whatsapp."')";
    if($con->query($sql)){
		header('location: ./FazerPedido.php?Message=1');
    }
    else{
        header('location: ./FazerPedido.php?Message=0');
    }
}
else{
    $entrega=0;
    $sql = "INSERT INTO Pedidos(Itens_Pedido,Total_Pedido,Entrega,Pagamento,Whatsapp) VALUES('".$itemsOrder."','".$totalOrder."','".$entrega."','".$payment."','".$whatsapp."')";
    if($con->query($sql)){
		header('location: ./FazerPedido.php?Message=1');
    }
    else{
        header('location: ./FazerPedido.php?Message=0');
    }
}

$_SESSION['itemsOrder'] = "";


?>