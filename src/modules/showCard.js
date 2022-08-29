import {finalDeckStack, cards} from "./getDeck.js";
import {counter} from "./getDeck.js";

let shirt = document.querySelector('.shirt');
let flippedCard = document.querySelector('.flipped_card img');
let green1 = document.querySelector('.first .green');
let blue1 = document.querySelector('.first .blue');
let brown1 = document.querySelector('.first .brown');

let green2 = document.querySelector('.second .green');
let blue2 = document.querySelector('.second .blue');
let brown2 = document.querySelector('.second .brown');

let green3 = document.querySelector('.third .green');
let blue3 = document.querySelector('.third .blue');
let brown3 = document.querySelector('.third .brown');

let firstStage = document.querySelector('.first h2');
let secondStage = document.querySelector('.second h2');
let thirdStage = document.querySelector('.third h2');



function showCard () {
    let upperCard = getHeadStack();
    getFlippedCard(upperCard);
    updateCounter(counter, upperCard['color']);
    getCurrentCounter ();
    flippedCard.style.display = 'block';
}

function getCurrentCounter () {
    green1.textContent = counter[1][0];
    blue1.textContent = counter[1][1];
    brown1.textContent = counter[1][2];

    green2.textContent = counter[2][0];
    blue2.textContent = counter[2][1];
    brown2.textContent = counter[2][2];

    green3.textContent = counter[3][0];
    blue3.textContent = counter[3][1];
    brown3.textContent = counter[3][2];   
}

function getHeadStack () {
    let lastIndex = finalDeckStack.length - 1;
    let head = finalDeckStack[lastIndex];
    return head;
}

function updateCounter (matrix, color) {
    let index;
    switch (color) {
        case 'green': 
            index = 0;
            break;
        case 'blue': 
            index = 1;
            break;
        case 'brown': 
            index = 2;
            break;
    }
    if (matrix[1][0] + matrix[1][1] + matrix[1][2] > 0) {
        if ((matrix[1][0] + matrix[1][1] + matrix[1][2]) === 1) {
            firstStage.classList.add('darken');
        }
        matrix[1][index] = matrix[1][index] - 1;
    } else {
        if (matrix[2][0] + matrix[2][1] + matrix[2][2] > 0) {
            if ((matrix[2][0] + matrix[2][1] + matrix[2][2]) === 1) {
                secondStage.classList.add('darken');
            }
            matrix[2][index] = matrix[2][index] - 1;
        }else {
            if (matrix[3][0] + matrix[3][1] + matrix[3][2] > 0) {
                if ((matrix[3][0] + matrix[3][1] + matrix[3][2]) === 1) {
                    thirdStage.classList.add('darken');
                }
                matrix[3][index] = matrix[3][index] - 1;
            }     
        }
    } 
}

function getFlippedCard(elem){
    let lastIndex = finalDeckStack.length - 1;
    if (lastIndex >= 0) {
        flippedCard.src = `assets/MythicCards/${elem['color']}/${elem['id']}.png`;
    finalDeckStack.length -= 1
    } else {
        noCards();
        return;
    }
    return;
}
    
function noCards() {
    cards.style.display = 'none';
}

export {shirt, showCard, getCurrentCounter, flippedCard}