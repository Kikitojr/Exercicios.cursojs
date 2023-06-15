function fatorial(f){
    let fat = 1
    for (let c = f;c > 1; c--){
        fat *= c

    }
    return fat
}
console.log (fatorial(5))
//5! = 5 x 4, 5 x 3, 5 x 2, 5 x 1