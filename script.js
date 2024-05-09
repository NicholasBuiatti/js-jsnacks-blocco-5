const zucchine = [
    {
        varietà: 'boh',
        lunghezza: '12cm',
        peso: '12kg',
    },
    {
        varietà: 'beh',
        lunghezza: '9cm',
        peso: '10kg',
    },
    {
        varietà: 'sah',
        lunghezza: '18cm',
        peso: '9kg',
    },
    {
        varietà: 'boh',
        lunghezza: '25cm',
        peso: '5kg',
    },
    {
        varietà: 'boh',
        lunghezza: '5cm',
        peso: '2kg',
    },
    {
        varietà: 'boh',
        lunghezza: '7cm',
        peso: '4kg',
    },
    {
        varietà: 'boh',
        lunghezza: '19cm',
        peso: '8kg',
    },
    {
        varietà: 'boh',
        lunghezza: '19cm',
        peso: '5kg',
    },
];

//snack 1
let pesoTOT = 0;
zucchine.forEach(element => {
    // console.log(element.peso);
    pesoTOT += parseInt(element.peso)
});

console.log('Peso complessivo', pesoTOT);

//snack 2
const zucchineOver = []
const zucchineUnder = []

let separazioneUnder15 = separazione(zucchine, 15, 'lunghezza', zucchineUnder, zucchineOver);
console.log('zucchineOver: ', zucchineOver, 'zucchineUnder: ', zucchineUnder);

let pesoZucchineOver = sommaPeso(zucchineOver);
console.log('peso totale Over', pesoZucchineOver);

let pesoZucchineUnder = sommaPeso(zucchineUnder)
console.log('peso totale Under', pesoZucchineUnder);

////////////////////    SNACK 3

let parola = 'ciao';

console.log(reversWorld('ciao'))

///////////////// SNACK 4

let array1 = [1, 2, 3];
let array2 = ['a', 'b', 'c'];

console.log(rimescolamento(array1, array2))

///////////////// SNACK 5 

let a = 2
let b = 4
let arrayBoh = ['giallo', 'blu', 'verde', 'azzurro', 'rosso', 'arancione']

console.log(returnArray(a, b, arrayBoh));

////////////////////////// FUNZIONI /////////////////////////////////////////

function sommaPeso(array) {
    let pesoTOT = 0;
    array.forEach(element => {
        pesoTOT += parseInt(element.peso)
    });
    return pesoTOT
}

function separazione(array, misura, valoreOGG, array1push, array2push) {
    array.forEach(element => {
        if (parseInt(element[valoreOGG]) < misura) {
            array1push.push(element)
        } else {
            array2push.push(element)
        }
    });
}

function reversWorld(world) {
    let reverseWroldEx = '';

    for (let i = world.length - 1; i >= 0; i--) {
        let element = world[i]
        reverseWroldEx += element
    }

    return reverseWroldEx
}

function rimescolamento(FirstArray, SecondArray) {
    let arrayPlus = []
    for (let i = 0; i < 3; i++) {
        const element = FirstArray[i];
        const element2 = SecondArray[i]
        arrayPlus.push(element)
        arrayPlus.push(element2)
    }
    return arrayPlus
}

function returnArray(valMin, valMax, array) {
    let nuovoArray = []
    for (let i = 0; i < array.length; i++) {
        
        const element = array[i];

        if (i >= valMin && i <= valMax) {
            nuovoArray.push(element)
        }
    }
    return nuovoArray
}
