function reverseString(parola) {
    parola = prompt('Inserisci parola');

    var splitString = parola.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");

    document.getElementById('p1').innerHTML = "La tua parola rovesciata é: " + joinArray;

    if(parola === joinArray) {
        document.getElementById('p2').innerHTML = "La tua parola é palindroma";
    } else {
        document.getElementById('p2').innerHTML = "La tua parola non é palindroma";
    }
}

let button = document.getElementById('button').addEventListener("click", reverseString);





let scelta;

let numeroInserito;

let esito;

document.getElementById('pari').addEventListener("click", pari);

function pari() {
    scelta = "pari";

    const min = 1;
    const max = 5;
    let numero = Math.floor(Math.random() * (max - min + 1)) + min;

    numeroInserito = parseInt(prompt('Inserisci numero'));
    
    let numeroFinale = (numero + numeroInserito);

    if(numeroFinale % 2 == 0) {
        esito = "pari";
    } else {
        esito = "dispari";
    }

    if(esito === scelta) {
        document.getElementById('tu').innerHTML = `Il numero risultante é ${esito}, hai vinto`;
    } else {
        document.getElementById('tu').innerHTML = `Il numero risultante é ${esito}, hai perso`;
    }

    console.log(numero);
}

document.getElementById('dispari').addEventListener("click", dispari);

function dispari() {
    scelta = "dispari";

    const min = 1;
    const max = 5;
    let numero = Math.floor(Math.random() * (max - min + 1)) + min;

    numeroInserito = parseInt(prompt('Inserisci numero'));
    
    let numeroFinale = (numero + numeroInserito);

    if(numeroFinale % 2 == 0) {
        esito = "pari";
    } else {
        esito = "dispari";
    }

    if(esito === scelta) {
        document.getElementById('tu').innerHTML = `Il numero risultante é ${esito}, hai vinto`;
    } else {
        document.getElementById('tu').innerHTML = `Il numero risultante é ${esito}, hai perso`;
    }

    console.log(numero);
}