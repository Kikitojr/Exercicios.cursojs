/*function gerar() {
    var num = document.getElementById('n');
    var tab = document.getElementById('seltab');

    if (num.value.length == 0) {
        window.alert('Falta preencher ai');
    } else {
        var c = 1;
        var num = Number(n.value)
        while (c <= 10) {
            var item = document.createElement('option');
            item.text = `${n.value} x ${c} = ${n.value * c}`;
            tab.appendChild(item);
            c++;
        }
    }
}*/

function gerar(){
    var num = document.getElementById ('txtn')
    var tab = document.getElementById ('seltab')
    if(num.value.length == 0){
        window.alert ('Falta preencher ai')
    }else{
        var num = Number(txtn.value)
        var c = 1
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${txtn.value} x ${c} = ${txtn.value*c}`
            tab.appendChild(item)
            c++
        }
            
    }
}
    
