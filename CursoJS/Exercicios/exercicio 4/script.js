function contar(){
    var inicio = document.getElementById ('inicio')
    var fim = document.getElementById ('fim')
    var pular = document.getElementById ('pulo')
    var res = document.getElementById ('res')
    if (inicio.value.legth == 0 || fim.value.legth == 0 || pular.value.legth == 0){
        window.alert ('ERRO, faltou alguma coisa ai') 
    } else {
        res.innerHTML = 'Contando: '
        var ini = Number(inicio.value)//converter para number
        var end = Number(fim.value)//converter para number
        var pulo = Number(pular.value)//converter para number

        for(var contador = ini; contador <= end ; contador += pulo){
            res.innerHTML += `${contador}=>`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}