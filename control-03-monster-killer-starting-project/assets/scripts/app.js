const ATTACK_VALUE = 10; // use caps to show that this is a constant global value
const MONSTER_ATTACK_VALUE = 15;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        console.log('You won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        console.log('You lost!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        console.log("You're both dead, no one wins. ;-)")
    }
}

attackBtn.addEventListener('click', attackHandler);