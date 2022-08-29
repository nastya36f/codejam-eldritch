import {selectDeck, ancientCards } from "./modules/selectDeck.js";
import {levels, selectLevel} from "./modules/selectLevel.js";
import {shuffleBtn, getDeck} from "./modules/getDeck.js";
import {shirt, showCard} from "./modules/showCard.js"



for (let i = 0; i < ancientCards.length; i++) { // клик по карте Древнего
    ancientCards[i].addEventListener ("click", () => selectDeck(i));
}

for (let j = 0; j < levels.length; j++) { // клик выбор уровня игры
    levels[j].addEventListener ("click", () => selectLevel(j));
}

shuffleBtn.addEventListener ('click', () => getDeck());

shirt.addEventListener('click', () => showCard());
