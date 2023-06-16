function Verificar(){ //Funcao onclick que esta no html
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector ('div#resultado')
    if (fano == 0){
        window.alert ('Tem coisa errada ai mermão, verifica ai!')
    }else {
        var sex = document.getElementsByName ('radsex') // ira pegar a marca;ao do botao
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')//segundo jeito de adicionar imagem
        img.setAttribute ('id' , 'foto') 
        if(sex[0].checked){
            genero = 'Homem'
            if (idade <= 14){
                img.setAttribute ('src', 'criança-homem.png')//set.atribuite para adicionar a imagem
            }else if (idade <= 18){
                img.setAttribute ('src', 'jovem-homem.png')
            } else if (idade < 50){
                img.setAttribute ('src', 'homem.png')
            }else{
                img.setAttribute ('src', 'homem-idoso.png')
            }

        } else if (sex[1].checked){
            genero = 'Mulher'
            if (idade <= 14){
                img.setAttribute ('src', 'criança-menina.png')
            }else if (idade <= 18){
                img.setAttribute ('src', 'jovem-moça.png')
            } else if (idade < 50){
                img.setAttribute ('src', 'mulher.png')
            }else{
                img.setAttribute ('src', 'mulher-idosa.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Aqui esta seu Mozao:`
        res.appendChild(img) // mostrar a imagem apos as marcaçoes
    }
}