
function picoleteria() {

    console.log("Escolha um sabor");
    console.log("[1] Chocolate");
    console.log("[2] Morango");
    console.log("[3] Creme");
    console.log("[4] Manga");
    console.log("[5] Melancia");
    console.log("[6] Vanilla Ice");
    console.log("[7] Céu Azul");
    console.log("[8] Brownie");
    console.log("[9] Hawaiano");

    let sabor = Number(prompt("Informe o número referente ao sabor escolhido"));

    switch (sabor) {

        case 1:
            console.log("Chocolate - R$1,50");
            break;

        case 2:
            console.log("Morango - R$2,50");
            break;

        case 3:
            console.log("Creme - R$2,50");
            break;

        case 4:
            console.log("Manga - R$3,20");
            break;

        case 5:
            console.log("Melancia - R$3,40");
            break;

        case 6:
            console.log("Vanilla Ice - R$3,00");
            break;


        case 7:
            console.log("Céu Azul - R$3,60");
            break;

        case 8:
            console.log("Brownie - R$4,00");
            break;


        case 9:
            console.log("Hawaiano - R$5,00");
            break;

    };

};

picoleteria()