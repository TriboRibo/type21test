const peopleShopButton = document.getElementById("peopleShopButton");
const upgradeShop = document.getElementById("upgradeShop");
const playerShownMoney = document.getElementById("money");
const playerShownPeople = document.getElementById("people");
const playerShownItems = document.getElementById("items");


export function goToPeopleShop() {
    peopleShopButton.addEventListener("click", () => {
        window.location.href = "PeopleShop.html"
    });
}

export function goToUpgradeShop() {
    upgradeShop.addEventListener("click", () => {
        window.location.href = "UpgradeShop.html"
    })
}
