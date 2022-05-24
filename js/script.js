var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

var contagemPalpites = 1;
var botaoRecomecar;

function verificaPalpite(){

   var palpiteUsuario = Number(campoPalpite.value);

   if(contagemPalpites === 1){

       palpites.textContent = 'Palpites anteriores: ';
   }

   palpites.textContent += palpiteUsuario + ' ';

    console.log(palpites);

   if(palpiteUsuario === numeroAleatorio){

       ultimoResultado.textContent = 'Parabéns! Você acertou!';
       ultimoResultado.style.backgroundColor = 'green';
       baixoOuAlto.textContent = '';
       configFimDeJogo();
   }else if(contagemPalpites === 10){

       ultimoResultado.textContent = 'FIM DO JOGO';
       baixoOuAlto.textContent = '';
       configFimDeJogo();
   }else{
       ultimoResultado.textContent = 'Errado!';
       ultimoResultado.style.backgroundColor = 'red';

       if(palpiteUsuario < numeroAleatorio){
           baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
       }else if(palpiteUsuario > numeroAleatorio){
            baixoOuAlto.textContent = 'Seu palpite está muito alto!';
       }
   }

   contagemPalpites++;
   campoPalpite.value = '';
   campoPalpite.focus();
}

envioPalpite.addEventListener('click', verificaPalpite);

function configFimDeJogo(){
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoRecomecar = document.createElement('button');
    botaoRecomecar.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoRecomecar);
    botaoRecomecar.addEventListener('click', recomecarJogo);
}

function recomecarJogo(){
    contagemPalpites = 1;

    var limparParagrafosInformativos = document.querySelectorAll('.paragrafosInformativos p');

    for(var i = 0; i < limparParagrafosInformativos.length; i++){
        limparParagrafosInformativos[i].textContent = '';
    }

    botaoRecomecar.parentNode.removeChild(botaoRecomecar);

    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();

    ultimoResultado.style.backgroundColor = 'white';

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}