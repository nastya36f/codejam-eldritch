import cardsDataBlue from "../data/mythicCards/blue/index.js";
import cardsDataBrown from "../data/mythicCards/brown/index.js";
import cardsDataGreen from "../data/mythicCards/green/index.js";
import {mixArray} from "./mixArray.js";
import {shuffleBtn, currentDeckState} from "./getDeck.js";
import { shirt, flippedCard } from './showCard.js';

const levels = document.querySelectorAll('.difficulty-level button');
let reducedDeck;

function selectLevel (lev) {   // при нажатии на уровень
    highlightLevel(lev);        // -выделяем выбранный уровень
    reducedDeck = formStartDeck(lev);         // - создаем черновой маcсив маcсивов
    shuffleBtn.style.display = 'block';
    shirt.classList.toggle('deactivated');
    currentDeckState.classList.toggle('deactivated');
}

function highlightLevel(lev) {  // выделяем выбранный уровень
    for (let btn of levels) {
        btn.classList.remove('active');
    }
    levels[lev].classList.add('active');
}

function filterArray (arr, complexity) {
    return arr.filter(card => card.difficulty === complexity);
}

function formStartDeck (lev) {  // фоhмируем черновую колоду в зависимости от уровня
    let startArray =[];
    let startArrayBlue;
    let startArrayBrown;
    let startArrayGreen;

    switch (lev) {
        case 0:
            startArrayBlue = mixArray(filterArray(cardsDataBlue, 'easy'));
            startArrayBlue = startArrayBlue.concat(mixArray(filterArray(cardsDataBlue, 'normal')));
            startArrayBrown = mixArray(filterArray(cardsDataBrown, 'easy'));
            startArrayBrown = startArrayBrown.concat(mixArray(filterArray(cardsDataBrown, 'normal')));
            startArrayGreen = mixArray(filterArray(cardsDataGreen, 'easy'));
            startArrayGreen = startArrayGreen.concat(mixArray(filterArray(cardsDataGreen, 'normal')));
            break;
        case 1:
            startArrayBlue = mixArray((filterArray(cardsDataBlue, 'easy')).concat(filterArray(cardsDataBlue, 'normal')));
            startArrayBrown = mixArray((filterArray(cardsDataBrown, 'easy')).concat(filterArray(cardsDataBrown, 'normal')));
            startArrayGreen = mixArray((filterArray(cardsDataGreen, 'easy')).concat(filterArray(cardsDataGreen, 'normal')));
            break;
        case 2:
            startArrayBlue = mixArray((filterArray(cardsDataBlue, 'easy')).concat(filterArray(cardsDataBlue, 'normal'), filterArray(cardsDataBlue, 'hard')));
            startArrayBrown = mixArray((filterArray(cardsDataBrown, 'easy')).concat(filterArray(cardsDataBrown, 'normal'), filterArray(cardsDataBrown, 'hard')));
            startArrayGreen = mixArray((filterArray(cardsDataGreen, 'easy')).concat(filterArray(cardsDataGreen, 'normal'), filterArray(cardsDataGreen, 'hard')));
            break;
        case 3:
            startArrayBlue = mixArray((filterArray(cardsDataBlue, 'hard')).concat(filterArray(cardsDataBlue, 'normal')));
            startArrayBrown = mixArray((filterArray(cardsDataBrown, 'hard')).concat(filterArray(cardsDataBrown, 'normal')));
            startArrayGreen = mixArray((filterArray(cardsDataGreen, 'hard')).concat(filterArray(cardsDataGreen, 'normal')));
            break;
        case 4:
            startArrayBlue = mixArray(filterArray(cardsDataBlue, 'hard'));
            startArrayBlue = startArrayBlue.concat(mixArray(filterArray(cardsDataBlue, 'normal')));
            startArrayBrown = mixArray(filterArray(cardsDataBrown, 'hard'));
            startArrayBrown = startArrayBrown.concat(mixArray(filterArray(cardsDataBrown, 'normal')));
            startArrayGreen = mixArray(filterArray(cardsDataGreen, 'hard'));
            startArrayGreen = startArrayGreen.concat(mixArray(filterArray(cardsDataGreen, 'normal')));
            break;
    }
    startArray.splice(0, 0, startArrayGreen, startArrayBlue, startArrayBrown);

    return startArray;
}


export {levels, selectLevel, reducedDeck}