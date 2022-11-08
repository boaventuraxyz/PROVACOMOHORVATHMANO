const readLine = require('prompt-sync')();
let certo = parseInt(Math.random() * 1000 );

function Sorteio(num){

let resposta = "";

    for(let i = 1; i <= 10; i++){
        if(num === certo) {
            resposta =  "Parabéns!! Você acertou!!!!";

        }
else if(num < certo){ 
            resposta = "é maior que o correto";
        }else if(num > certo){
            resposta = "é menor que o correto";
        }

    }
    return resposta;
}

function main(){

    try {
        console.log('sorteio jão')
        console.log('ve se consegue')
        console.log('Digita')
        let tent = 0;
        let i =10;
        while(i > 0){
            if(tent === certo){
                break
            }
            else{

                tent = Number(readLine());
            }
            console.log(Sorteio(tent))
            console.log("Número de tentativas:" + (i-1))
            i--

        }


    } catch (error) {

    }

}
main();