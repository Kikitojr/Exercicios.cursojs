let num = [ 5, 6, 3, 8, 2]
num.push(1)
console.log(num.sort())
console.log (`o vetor tem ${num.length} posicoes `)
console.log (`o primeiro valor e ${num[0]}`)
for ( let pos = 0; pos < num.length; pos++){
    console.log(`a posicao ${pos} tem valor ${num[pos]}`)
}
console.log(`------------------`)
for ( let pos in num){ //para cada posicao em numero 
    console.log (`a posicao ${pos} tem valor ${num[pos]}`) //mostra posicao
}

console.log(num.indexOf(5)) // esta mostrando 3 por conta do comando console.log(num.sort())