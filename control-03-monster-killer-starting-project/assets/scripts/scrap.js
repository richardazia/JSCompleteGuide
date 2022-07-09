let finished = false;
randomNumbers = [];

while (!finished) {
    const rndNumbers = Math.random();
    randomNumbers.push(rndNumbers);
    if (rndNumbers > 0.5) {
        finished = true;
        console.log(randomNumbers);
    }
}

let i = 0;
for (let i = 0; i < 3; i++) {
    console.log('--------');
}
// While loop
let j = 0
while (j < 3 ) {
    console.log(j);
    j++;
}

// The Do While Loop
console.log('Do While Loop');

let k = 0
do {
    console.log(k);
    k++;
} while (k < 3);

// let sum = 0;
// for (let i = 2; i <= 6; i++) {
//     sum = sum + 1;
// }
// console.log(sum);

// let sum = 0;
// for (const i = 2; i <= 6; i++) {
//     sum = sum + i;
// }
//
// console.log(sum);

// let sum = 0;

// for (let i = 0; i < 3; i++) {
//     for (let j = 5; j > 2; j--) {
//     sum = sum + j + i;
//     }
// }
//
// console.log(sum);

let sum = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 5; j > 2; j--) {
        sum = j + i;
    }
}
console.log(sum);
