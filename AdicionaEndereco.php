<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wong Chan | Comida Japonesa</title>
    <link rel="stylesheet" href="CSS/Global.css">
    <link rel="stylesheet" href="CSS/AdicionaEndereco.css">
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
                <li class="menu-items"><a href="Cardapio.php" class="menu-link">Cardápio</a></li>
                <li class="menu-items"><a href="SobreNos.html" class="menu-link">Sobre nós</a></li>
                <li class="menu-items"><a href="FaleConosco.html" class="menu-link">Fale conosco</a></li>
                <li class="menu-items"><a href="FazerPedido.php" class="menu-link actual-page">Fazer pedido</a></li>
            </ul>
        </nav>
        
    </header>

    <div class="cover" onclick="CloseMenu()"></div>
    
    <div class="container-all">
    <button class="b-back" onclick="window.history.back()">Voltar <i class="fas fa-share back-icon"></i></button>
        <div class="page-info">
            <p class="info-title">Você está quase lá</p>
            <p class="info-content">Estamos quase acabando, basta agora adicionar o endereço de entrega, algumas informações de contato e clicar em finalizar pedido.<br/><br/>
                Para adicionar o endereço, preencha os dados ao lado.<br/><br/>
                Se quiser agilidade, preencha grande parte dele apenas colocando seu CEP aqui. <t style="color:red">(Apenas números)*</t>
            </p>
            <div class="container-cep">
               <div class="container-input">CEP: <input onkeydown="VerifyCep()" onkeyup="VerifyCep()" type="text" name="" id="" maxlength="8" class="t_CEP" size="8"><t class="error-signal">*</t></div>
               <p class="error-message"><t class="error-signal">*</t> Cep não encontrado, verifique se contém apenas números e se corresponde a um cep válido.</p>
            </div>
            <div class="container-retirada">
                <input type="checkbox" name="txt_retirada" id="t_retirada" class="check-retirada" onchange="alterForm()">
                <label for="t_retirada" class="text-retirada">Retirar no estabelecimento</label>
               
            </div>
        </div>
        <form onsubmit="editUrl()" method="POST" class="add-address">
           
            <input type="text" name="txt_endereco" id="t_endereco" class="input-address" placeholder="Endereço" autocomplete="off" required>
        
            <input type="text" name="txt_bairro" id="t_bairro" class="input-address" placeholder="Bairro" autocomplete="off" required>

            <div class="container-cidade-uf">
               <input type="text" name="txt_cidade" id="t_cidade" class="input-address" placeholder="Cidade" autocomplete="off" required>
               <input type="text" name="txt_uf" id="t_uf" class="input-address" placeholder="UF" autocomplete="off" maxlength="2" size="2" required> 
            </div>

            <div class="container-num-comp">
                <input type="text" name="txt_numero" id="t_numero" class="input-address" placeholder="Número" autocomplete="off" maxlength="5" size="5" required>
                <input type="text" name="txt_complemento" id="t_complemento" class="input-address" placeholder="Complemento" autocomplete="off" required>
            </div>

            <div class="container-payment-method">
               <div class="container-cartao">
                    <input type="radio" name="txt_method" id="t_cartao" value="Cartão" class="input-address radio-payment" required checked>
                    <label for="t_cartao">Pagar com cartão</label>
               </div>
               <div class="container-dinehiro">
                    <input type="radio" name="txt_method" value="Dinheiro" id="t_dinheiro" class="input-address radio-payment" required>
                    <label for="t_dinheiro">Pagar com dinheiro</label>
               </div>
               
            </div>

            <div class="container-whatsapp">
                <input type="text" name="txt_whatsapp" id="t_whatsapp" class="input-address" placeholder="Whatsapp" autocomplete="off" maxlength="11" required>
                <t style="margin-left:8px;color:red">(Apenas números)*</t><br/>*Lembre-se que nunca pediremos informações do cartão.
            </div>
            
            <div class="container-b-actions">
                <button class="b_cancelar b-action">Cancelar</button>
                <input type="button" onclick="confirmSubmit()" value="Finalizar pedido" class="b_enviar b-action">
            </div>
            
        </form>
    </div>

   
    
    
</body>
<script type="text/JavaScript" src="JavaScript/controlMenu.js"></script>
<script type="text/JavaScript" src="JavaScript/AdicionaEndereco.js"></script>
</html>