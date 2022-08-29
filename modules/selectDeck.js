import ancientsData from "../data/ancients.js";
import { shirt, flippedCard } from './showCard.js';
import { currentDeckState } from './getDeck.js';


const ancientCards = document.querySelectorAll('.ancient_card');
//let ancient;
let cardNumber;

const difficultyLevel = document.querySelector('.difficulty-level');

function selectDeck (n) {   // при нажатии на карту Древнего
    //setAncient (n);
    cardNumber = n;
    highlightAncient(n);
    setAncientData(n);
    difficultyLevel.style.display = 'block';
    flippedCard.style.display = 'none';
    shirt.style.display = 'none';
    currentDeckState.style.display = 'none';
}

function setAncient (n) {   // назначаем Древнего
    ancient = (ancientCards[n].alt).toLowerCase();
}

function highlightAncient (n) {     // выделяем карту Древнего
    for (let card of ancientCards) {
        card.classList.remove('active');
    }
    ancientCards[n].classList.add('active');
}

function setAncientData (n) {//     получаем карточку-счетчик Древнего из массива
    let ancientData = ancientsData[n]
    let counter = [];
    let sumStage = [];
    let stage1 = Object.values(ancientData['firstStage']);
    let stage2 = Object.values(ancientData['secondStage']);
    let stage3 = Object.values(ancientData['thirdStage']);
    sumStage.push(stage1[0] + stage2[0] + stage3[0]);// суммирует green
    sumStage.push(stage1[1] + stage2[1] + stage3[1]);// суммирует blue
    sumStage.push(stage1[2] + stage2[2] + stage3[2]);// суммирует broun
    counter.push(sumStage);
    counter.push(stage1);
    counter.push(stage2);
    counter.push(stage3);
    return counter;
}


export {ancientCards, selectDeck, cardNumber, setAncientData}
