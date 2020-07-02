<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wong Chan | Comida Japonesa</title>
    <link rel="stylesheet" href="CSS/Global.css">
    <link rel="stylesheet" href="CSS/Cardapio.css">
    <link rel="stylesheet" href="CSS/FazerPedido.css">
    
    <script src="https://kit.fontawesome.com/3b5310efad.js" crossorigin="anonymous"></script>
    <link rel="shortcut icon" href="src/Icon.jpg" type="image/x-icon">
    <script
        src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous">
    </script>
</head>
<?php

    if(isset($_GET['Message']) && $_GET['Message']==1){
        $Message = true;
    }

?>
<script>
    var Message = <?php echo json_encode($Message);?>;
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
                <li class="menu-items"><a href="FazerPedido.php" class="menu-link actual-page">Fazer pedido</a></li>
            </ul>
        </nav>
        
    </header>
    <div class="cover-all">
        <div class="check-success"></div>
        <p class="success-title title">Pedido realizado com sucesso!</p>
        <p class="success-content">Fique de olho no número de celular que colocou no formulário, iremos mandar atualizações por lá.</p>
        <div class="container-success-buttons">
            <button onclick="window.location.href='./Index.html'" class="b-action"><i class="fas fa-home"></i>Página inicial</button>
            <button onclick="window.location.href='./FazerPedido.php'" class="b-action"><i class="fas fa-clipboard-check"></i>Fazer outro pedido</button>
        </div>
    </div>
    <div class="cover" onclick="CloseMenu();noRemove();"></div>
    

   <div class="container-all">
       
        <div class="container-order">
            
            <p class="title-order title">Sua comanda</p>
            
            
                <div class="container-items">
                    
                </div>
                <div class="container-price-info">
                    
                        <p class="total-price">Total: R$ 00.00</p>
                        
                   
                    <button class="b-action-delivery" onclick="sendOrder()">Próximo</button>                    
                </div>
                
            
        </div>
        
        <div class="cover-menu"></div>

        <div class="container-menu"></div>

        <div class="confirm-item-remove">
            <p class="message-remove"></p>
            <div class="container-b-remove">
                <button class="b-action-remove no-remove"  onclick="noRemove()">Não</button>
            </div>
        </div>
   </div>

</body>
<script type="text/JavaScript" src="JavaScript/controlMenu.js"></script>
<script type="text/JavaScript" src="JavaScript/FazerPedido.js"></script>


</html>
