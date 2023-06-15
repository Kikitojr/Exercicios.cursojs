var agora = new Date()
var diasem = agora.getDay()

/*
 0 = DOMINGO
 1 = SEGUNDA
 2 = TERCAC
 3 = QUARTA
 4 = QUINTA
 5 = SEXTA
 6 = SABADO
*/
//console.log(diasem)
switch(diasem) {
    case 0:
        console.log(`Domningo`)
        break
    case 1:
        console.log(`Segunda`)
        break
    case 2:
        console.log(`Terca`)
        break
    case 3:
        console.log(`Quarta`)
        break
    case 4:
        console.log(`Quinta`)
        break
    case 5:
        console.log(`Sexta`)
        break
    case 6:
        console.log(`Sabado`)
        break
        default:
            console.log(`[Erro]`)
            break
}