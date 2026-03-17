
function balancoGeral() {

    let ganho = [];
    let gasto = [];
    let ganhoAno = 0;
    let gastoAno = 0;
    let total = 0;

    for (let i = 0; i < 12; i++) {

        ganho[i] = Number(prompt("Informe os ganhos do mês " + (i+1)));
        gasto[i] = Number(prompt("Informe os gastos do mês " + (i+1)));

        ganhoAno += ganho[i]; 
        gastoAno += gasto[i];
        
    };

    total = ganhoAno - gastoAno;



    if(total > 0) {
        alert("Lucro: " + total);
    } else {
        alert("Prejúizo: " + total);
    }


};

balancoGeral()