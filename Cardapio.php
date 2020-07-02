<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wong Chan | Comida Japonesa</title>
    <link rel="stylesheet" href="CSS/Global.css">
    <link rel="stylesheet" href="CSS/Cardapio.css">
    <script src="https://kit.fontawesome.com/3b5310efad.js" crossorigin="anonymous"></script>
    <link rel="shortcut icon" href="src/Icon.jpg" type="image/x-icon">
    <script
        src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous">
    </script>
</head>
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
                <li class="menu-items"><a href="Cardapio.php" class="menu-link actual-page">Cardápio</a></li>
                <li class="menu-items"><a href="SobreNos.html" class="menu-link">Sobre nós</a></li>
                <li class="menu-items"><a href="FaleConosco.html" class="menu-link">Fale conosco</a></li>
                <li class="menu-items"><a href="FazerPedido.php" class="menu-link">Fazer pedido</a></li>
            </ul>
        </nav>
        
    </header>

    <div class="cover" onclick="CloseMenu()"></div>

    <div class="cover-menu"></div>

    <div class="container-menu"></div>

    <footer style="z-index:1000;">
        <div class="part-up">
            <div class="up-left">
                <a href="Index.html"><img src="src/Logo2.png" alt="" class="img-logo-footer"></a>
            </div>

            <div class="up-right">
                <div class="social-medias-footer">
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-whatsapp"></i>
                </div>
                <div class="contact-medium">
                    <a href="https://www.google.com.br/maps/place/Av.+Nove+de+Julho,+615+-+Centro,+Ribeir%C3%A3o+Preto+-+SP,+14015-170/@-21.1843883,-47.8141505,17z/data=!4m5!3m4!1s0x94b9bee595bf2e6b:0x660abd727141c400!8m2!3d-21.1843883!4d-47.8119618" target="_blank">
                        <p class="contact"><i class="fas fa-map-marked-alt"></i>Av. Nove de Julho, 615 - Centro, Ribeirão Preto - SP</p>
                    </a>
                    <a href="mailto:contato@wongchan.com"><p class="contact"><i class="fas fa-envelope"></i>contato@wongchan.com</p></a>
                    <a href="tel:+551636524332"><p class="contact"><i class="fas fa-phone-alt"></i>(16) 3652-4232</p></a>
                </div>
            </div>
        </div>
        <div class="part-down">
            © Copyright / 2020 • Wong Chan • Todos os direitos reservados 
        </div>
    </footer>
   

</body>
<script type="text/JavaScript" src="JavaScript/controlMenu.js"></script>
<script type="text/JavaScript" src="JavaScript/cardapio.js"></script>
</html>
