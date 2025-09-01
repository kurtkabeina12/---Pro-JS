function DNDCube(dice) {
    const num = dice.slice(1, dice.length);
    const randomCube = Math.floor(Math.random() * (num - 1 + 1) + 1);
    return randomCube
}

console.log(DNDCube('d4'))
console.log(DNDCube('d20'))