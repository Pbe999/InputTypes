const readLine = require('readline-sync');

//single roll
let diceRolled = [];
let character1 = {
    //empty to start
}

createChar(character1, diceRolled);



function rolld6(){
    return Math.ceil(Math.random()*6);
}

//multiple rolls
function rollDice(amount, list){ //amount of dice we want to roll and makes a list
    for(let i = 0; i<amount; i++){
        let roll = rolld6();
        console.log(`you rolled a ${roll}!`);
        list.push(roll);
    }
}

//total up rolls
function sum(list){
    let sum = 0;
    for (let i=0; i<list.length; i++){
        sum += list[i]
    }
    return sum;
}

function rollStat(list){
    list = [];
    rollDice(4,list);
    return sum(list);
}

function createChar(character1,list){
    character1.name = readLine.question('Enter character name:');
    console.log('Rolling STR');
    character1.strength = rollStat(diceRolled);
    console.log('Rolling DEX');
    character1.dexterity = rollStat(diceRolled);
    console.log('Rolling CON');
    character1.constitution = rollStat(diceRolled);
    console.log('Rolling INT');
    character1.intellegence = rollStat(diceRolled);
    console.log('Rolling WIS');
    character1.wisdom = rollStat(diceRolled);
    console.log('Rolling CHA');
    character1.charisma = rollStat(diceRolled);
    displayChar(character1);
}

function displayChar(char){
    console.log('----------------');
    console.log(`Name: ${char.name}`);

    console.log(`STR: ${char.strength}`);

    console.log(`Name: ${char.dexterity}`);

    console.log(`Name: ${char.constitution}`);

    console.log(`Name: ${char.intellegence}`);

    console.log(`Name: ${char.wisdom}`);

    console.log(`Name: ${char.charisma}`);

}