import {cardNumber, setAncientData} from './selectDeck.js';
import {reducedDeck} from './selectLevel.js';
import {mixArray} from "./mixArray.js";
import { shirt } from './showCard.js';
import {getCurrentCounter} from './showCard.js';

let shuffleBtn = document.querySelector('.shuffle');
let counter;
let finalDeckStack;
let cards = document.querySelector('.cards');
let currentDeckState = document.querySelector('.current_deck_state');

function getDeck() {
    counter = setAncientData(cardNumber);
    let deck = finishDeck(counter, reducedDeck);
   
    let stack1 = [].concat(deck[0].splice(0, counter[1][0]), deck[1].splice(0, counter[1][1]), deck[2].splice(0, counter[1][2]));
    let stack2 = [].concat(deck[0].splice(0, counter[2][0]), deck[1].splice(0, counter[2][1]), deck[2].splice(0, counter[2][2]));
    let stack3 = [].concat(deck[0].splice(0, counter[3][0]), deck[1].splice(0, counter[3][1]), deck[2].splice(0, counter[3][2]));

    finalDeckStack = [].concat(mixArray(stack3), mixArray(stack2), mixArray(stack1));
    
    getCurrentCounter ();
    currentDeckState.style.display = 'block';
    shirt.style.display = 'block';
}

function finishDeck(count, redDeck) {
    let finishDeck = [];
    finishDeck.push(mixArray(redDeck[0].slice(0, count[0][0])));           
    finishDeck.push(mixArray(redDeck[1].slice(0, count[0][1])));
    finishDeck.push(mixArray(redDeck[2].slice(0, count[0][2])));
    return finishDeck; 
}

export {shuffleBtn, getDeck, finalDeckStack, cards, currentDeckState, counter}