
function folhaDescontoVariavel(){

    let salario_liquido;
    let desconto;
    let taxaDesconto;

    let nome = prompt("Informe o nome do Funcionário");
    let salario_bruto = parseFloat(prompt("Informe o salário bruto: "));

    if(salario_bruto < 1000.01) {
        desconto = salario_bruto * 0.08;
        taxaDesconto = 0.08;
    } else if(salario_bruto < 1500.01){
        desconto = salario_bruto * 0.085;
        taxaDesconto = 0.085;
    } else {
        desconto = salario_bruto * 0.09;
        taxaDesconto = 0.09;
    };

    salario_liquido = (salario_bruto - desconto);

    console.log("Nome: " + nome);
    console.log("Salário sem desconto: " + salario_bruto);
    console.log("Taxa de Desconto: " + taxaDesconto);
    console.log("Valor do Desconto: " + desconto);
    console.log("Salário Líquido: " + salario_liquido);

};

folhaDescontoVariavel()