const itemsCanFound = [
    {
        "icon": "🍔",
        "price": 7
    },
    {
        "icon": "🎮",
        "price": 4
    },
    {
        "icon": "🕶️",
        "price": 9
    },
    {
        "icon": "📱",
        "price": 6
    },
    {
        "icon": "🎸",
        "price": 8
    },
    {
        "icon": "👟",
        "price": 5
    },
    {
        "icon": "💼",
        "price": 2
    },
    {
        "icon": "🛋️",
        "price": 10
    },
    {
        "icon": "⌚",
        "price": 3
    },
    {
        "icon": "🧸",
        "price": 1
    },
    {
        "icon": "👒",
        "price": 6
    },
    {
        "icon": "🎩",
        "price": 8
    },
    {
        "icon": "👜",
        "price": 3
    },
    {
        "icon": "👓",
        "price": 5
    },
    {
        "icon": "👗",
        "price": 9
    },
    {
        "icon": "👠",
        "price": 2
    },
    {
        "icon": "🧣",
        "price": 7
    },
    {
        "icon": "🧤",
        "price": 4
    },
    {
        "icon": "👕",
        "price": 10
    },
    {
        "icon": "👚",
        "price": 1
    },
    {
        "icon": "👔",
        "price": 9
    },
    {
        "icon": "👖",
        "price": 4
    },
    {
        "icon": "🧥",
        "price": 7
    },
    {
        "icon": "🩳",
        "price": 2
    },
    {
        "icon": "🩱",
        "price": 5
    },
    {
        "icon": "👙",
        "price": 6
    },
    {
        "icon": "🩲",
        "price": 3
    },
    {
        "icon": "🧦",
        "price": 8
    },
    {
        "icon": "🥾",
        "price": 1
    },
    {
        "icon": "🧢",
        "price": 10
    }
]

import {goToPeopleShop, goToUpgradeShop} from "./mainGame.js";
import {appendPeople, boughtArray, goBackFromPeople, peopleArray} from "./peopleShop.js";
import {goBackFromUpgrade} from "./upgradeShop.js";

goToPeopleShop();
appendPeople(peopleArray, boughtArray);
goBackFromPeople();


goToUpgradeShop();
goBackFromUpgrade();


console.log(peopleArray);
console.log(boughtArray)





