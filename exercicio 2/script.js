function carregar(){
    var msg = document.getElementById('mensagem');/* Aqui, ele procura o id mensagem, peram ele não achava e dava erro */
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12){
        // bom dia
        img.src = './manha.png';
        document.body.style.background ='white';
    } else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = './tarde.png';
        document.body.style.background ='yellow';
    } else {
        //boa noite
        img.src = './noite.png';
        document.body.style.background ='black';
    }
}