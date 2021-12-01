function carregar(){
  var msg = document.getElementById('msg')
  let img = document.getElementById('imagem')
  var fundo = document.querySelector('body')
  var data = new Date()
  var hora = 18
 
  msg.innerHTML = `Agora são ${hora} horas`
  
  if(hora >= 0 && hora < 12){
    img.src = 'imagens/fotomanha.png'
    //fundo.style.background = '#EAC0AA'
    document.body.style.background = "#EAC0AA"
  }else if( hora >= 12 && hora < 18){
    img.src = 'imagens/fototarde.png'
   // fundo.style.background = '#E48F4C'
    document.body.style.background = "#C99C7B"

  }else{
    img.src = 'imagens/fotonoite.png'
    //fundo.style.background = '#0E52A7'
    document.body.style.background = '#0647AB'
  }
}
  

function arredondar() {
  var bola = document.getElementById('imagem')
  bola.style.borderRadius = '50%'
  bola.style.transition = '1.5s'

}

function enquadrar(){
   var bola = document.getElementById('imagem')
  bola.style.borderRadius = '0'
}
