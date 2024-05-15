const goBackFromUpgradeShop = document.getElementById("goBackFromUpgradeShop");

export function goBackFromUpgrade() {
    goBackFromUpgradeShop.onclick = () => {
        window.location.href = "index.html"
    }
}