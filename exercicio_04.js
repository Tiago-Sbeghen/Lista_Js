
function ordenacao(){

    let valor = [];
    let temp = 0;


    for(let i = 0; i < 4; i++){

        valor[i] = Number(prompt("Informe um número: "));
        
    }

    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){

            if(valor[j] < valor[j + 1]){

            temp = valor[j];
            valor[j] = valor[j + 1];
            valor[j + 1] = temp;

            }
        }
    }

    for(let i = 0; i < 4; i++){

        console.log(valor[i]);

    }
}

ordenacao();