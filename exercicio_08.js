
function opVar(){

    let num_1 = 0;
    let num_2 = 0;
    let dif = 0;
    let mult = 0;
    let opr = 0;


    num_1 = Number(prompt("Informe um valor: "));
    num_2 = Number(prompt("Informe outro valor: "));

    dif = num_1 - num_2;
    mult = num_1 * num_2;

    opr = ((num_1 * 2) + (num_2 * 3));

    console.log("A diferença entre as duas variáveis é: " + dif);
    console.log("O dobro da primeira variável somado ao triplo da segunda é: " + opr);
    console.log("A multiplicação das duas variáveis é: " + mult);

}

opVar()