let anoNascimento = 1997
function idade(){
    return 2023 - anoNascimento;
}


function somar(valor1, valor2){
    return valor1 + valor2;
}


let esc = true
let resposta = (opcao)=>{
    if(opcao){
        return true;
    }else{
        return false
    }
}

console.log(resposta(esc));
