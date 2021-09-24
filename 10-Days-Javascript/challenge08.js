'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {

    let vogal = 'aeiou';
    let consoantes = '';

    for (let l of s) {
        if (vogal.includes(l)) {
            console.log(l);
        }
        else {
            consoantes += l;
        }
    }

    console.log(consoantes.trim());

}

