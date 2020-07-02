<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wong Chan | Comida Japonesa</title>
    <link rel="stylesheet" href="CSS/Global.css">
    <link rel="stylesheet" href="CSS/ConfirmaPedido.css">
    <script src="https://kit.fontawesome.com/3b5310efad.js" crossorigin="anonymous"></script>
    <link rel="shortcut icon" href="src/Icon.jpg" type="image/x-icon">
    <script
        src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous">
    </script>
</head>

<?php
    session_start();
    $SeparateItems = array();
    if(isset($_GET['Items'])){
        $items = $_GET['Items'];
        for($i=0;$i<strlen($items);$i+=3){
            $item = $items[$i].$items[$i+1].$items[$i+2];
            array_push($SeparateItems,$item);
        }
    }
    $_SESSION['itemsOrder'] = $SeparateItems;
?>

<script>
    var SeparateItems = <?php echo json_encode($SeparateItems)?>;
</script>

<body>
    
    <header class="cabecalho">
        <i class="fas fa-bars menuIcon" onclick="ChangeMenuState()"></i>
        <a href="Index.html"><img src="src/Logo.png" alt="" class="img-logo"></a>
        <nav class="menu">
            <div class="header-info">
                <a href="https://www.google.com.br/maps/place/Av.+Nove+de+Julho,+615+-+Centro,+Ribeir%C3%A3o+Preto+-+SP,+14015-170/@-21.1843883,-47.8141505,17z/data=!4m5!3m4!1s0x94b9bee595bf2e6b:0x660abd727141c400!8m2!3d-21.1843883!4d-47.8119618" target="_blank">
                    <p>Av. Nove de Julho, 615 - Centro, Ribeirão Preto - SP</p>
                </a>
               <div class="social-media">
                <i class="fab fa-instagram"></i>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-whatsapp"></i>
               </div>
            </div>
            <ul class="menu-list">
                <li class="menu-items"><a href="Index.html" class="menu-link">Início</a></li>
                <li class="menu-items"><a href="Cardapio.php" class="menu-link">Cardápio</a></li>
                <li class="menu-items"><a href="SobreNos.html" class="menu-link">Sobre nós</a></li>
                <li class="menu-items"><a href="FaleConosco.html" class="menu-link">Fale conosco</a></li>
                <li class="menu-items"><a href="FazerPedido.php" class="menu-link  actual-page">Fazer pedido</a></li>
            </ul>
        </nav>
        
    </header>

    <div class="cover" onclick="CloseMenu()"></div>

   
        <p class="page-title title">Resumo do pedido</p>
        <button class="b-back" onclick="window.history.back()">Voltar e editar itens <i class="fas fa-share back-icon"></i></button>
    

    <div class="container-all">


    </div>

    <div class="container-total-order">
        <p class="total-order title"></p>
       
        <button class="cancel-order" title="Cancelar pedido e voltar a página inicial">Cancelar</button>
        <button class="send-order" onclick="nextStep()" >Próximo</button>
    </div>
    
    
</body>
<script type="text/JavaScript" src="JavaScript/controlMenu.js"></script>
<script type="text/JavaScript" src="JavaScript/ConfirmaPedido.js"></script>
</html>