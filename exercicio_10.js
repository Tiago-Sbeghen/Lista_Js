
function folhaDePagamento(){

    let salario_liquido;
    let desconto;

    let nome = prompt("Informe o nome do Funcionário");
    let salario_bruto = parseFloat(prompt("Informe o salário bruto: "));
    
    desconto = salario_bruto * 0.08;
    salario_liquido = salario_bruto - desconto; 

    console.log("Nome: " + nome);
    console.log("Salário Bruto: " + salario_bruto);
    console.log("Desconto INSS: " + desconto);
    console.log("Salário Líquido: " + salario_liquido);

};

//folhaDePagamento()