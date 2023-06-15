var num = document.getElementById('txtn');
var anal = document.getElementById('anal');
var res = document.getElementById('res');
var valores = [];

function isNumero(n) {
  if (!isNaN(Number(n)) && Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inlist(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inlist(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement('option');
    item.text = `O valor ${num.value} foi adicionado.`;
    anal.appendChild(item);
  } else {
    alert('Valor inválido ou já adicionado');
  }
  num.value = ''
  num.focus()
}

function finalizar(){
    if(valores.legth == 0){
        window.alert ('Adicione valores antes de finalizar')
    }else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo tem ${tot} numeros  </p>`
        res.innerHTML += `<p>O Menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>o Maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media e ${media.toFixed(2)}</p>`
        

    }
}