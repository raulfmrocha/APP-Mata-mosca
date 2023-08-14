var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    //1500
    var criaMosquitoTempo = 1500
}else if (nivel === 'dificil') {
    //1000
    var criaMosquitoTempo = 1000
}else if (nivel === 'chucknorris'){
    //700
    var criaMosquitoTempo = 700
}

function ajustarTamanhoPalco() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}
ajustarTamanhoPalco()

var cronometro = setInterval(function(){
    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else{
    document.getElementById('cronometro').innerHTML = tempo
    }
   
}, 1000)

function posicaoRandom() {

//remover o mosquito anterior (caso exista)

if(document.getElementById('mosca1')){
    document.getElementById('mosca1').remove()
    if(vidas > 3) {
       window.location.href = 'fim_de_jogo.html'
    } else {
    document.getElementById('v' + vidas).src = "/imagens/coracao_vazio.png"

    vidas++
    }
}

var posicaox = Math.floor(Math.random() * largura) - 90
var posicaoy =  Math.floor(Math.random() * altura) - 90

posicaox = posicaox < 0 ? 0 : posicaox
posicaoy = posicaoy < 0 ? 0 : posicaoy

console.log(posicaox, posicaoy)

//criar o elemento html

var mosca1 = document.createElement('img')
mosca1.src = '/imagens/mosca.png'
mosca1.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosca1.style.left = posicaox + 'px'
mosca1.style.topo = posicaoy + 'px'
mosca1.style.position = 'absolute'
mosca1.id = 'mosca1'
mosca1.onclick = function() {
    this.remove()
}

document.body.appendChild(mosca1)



}



function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosca1'
            
        case 1:
            return 'mosca2'

        case 2:
            return 'mosca3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'
            
        case 1:
            return 'ladoB'

    }
}
