console.log("Olá, Mundo!");

let nome = "Tiago";
let idade = 17;
let peso = 71.2;


console.log("Meu nome é: " + nome);
console.log("Eu tenho ");


function somarNumeros(){
    let soma = 0;
    let continuar = true;

    while(continuar) {

        let numero = parseFloat(prompt("Digite um número ou digite '0' para encerrar: "));

        if(isNaN(numero)){
            alert("Por favor, digite um número válido.");
        } else {

            soma += numero;

        };

        continuar = confirm("Deseja adicionar mais número?");

    };
    alert("A soma dos números é: " + soma);

};

somarNumeros()