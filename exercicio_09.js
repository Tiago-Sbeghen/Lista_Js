
function ordenacao(){

    let num_1 = 0;
    let num_2 = 0;

    num_1 = Number(prompt("Informe um valor"));
    num_2 = Number(prompt("Informe outro valor"));

    if(num_1 > num_2) {
        console.log(num_1);
        console.log(num_2);
    } else {
        console.log(num_2);
        console.log(num_1)
    };

};

ordenacao()