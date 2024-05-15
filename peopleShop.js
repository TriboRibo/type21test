const goBackFromPeopleShop = document.getElementById("goBackFromPeopleShop");
const peopleContainer = document.getElementById("peopleContainer");
const boughtPeopleContainer = document.getElementById('boughtPeopleContainer');

export function goBackFromPeople() {
    goBackFromPeopleShop.onclick = () => {
        window.location.href = "index.html"
    }
}

export const peopleArray = []
export const boughtArray = []

const people = [
    {
        "icon": "👷",
        "name": "John",
        "searchTime": 6,
        "inventoryCapacity": 3,
        "price": 300
    },
    {
        "icon": "👮",
        "name": "Emma",
        "searchTime": 7,
        "inventoryCapacity": 5,
        "price": 500
    },
    {
        "icon": "👩‍🌾",
        "name": "Michael",
        "searchTime": 4,
        "inventoryCapacity": 2,
        "price": 200
    },
    {
        "icon": "👨‍🍳",
        "name": "Sophia",
        "searchTime": 8,
        "inventoryCapacity": 6,
        "price": 600
    },
    {
        "icon": "👩‍⚕️",
        "name": "David",
        "searchTime": 5,
        "inventoryCapacity": 4,
        "price": 400
    },
    {
        "icon": "👩‍🔧",
        "name": "Olivia",
        "searchTime": 9,
        "inventoryCapacity": 7,
        "price": 700
    },
    {
        "icon": "👨‍💼",
        "name": "Isabella",
        "searchTime": 5,
        "inventoryCapacity": 1,
        "price": 100
    },
    {
        "icon": "👩‍🚒",
        "name": "James",
        "searchTime": 10,
        "inventoryCapacity": 8,
        "price": 800
    }
]
for (let i = 0; i < people.length; i++) {
    peopleArray.push(people[i]);
    peopleArray.sort((a, b) => a.price - b.price);
}
//FUNCTION FOR APPEND PEOPLE FROM ARRAY TO HTML
export function appendPeople(array1, array2){
    peopleContainer.innerHTML = ''

    array1.forEach(element => {
        peopleContainer.innerHTML +=`
            <div class="">
                <div class="upgradeCard" id="peopleContainer">
                    <div class="d-flex justify-content-center">${element.icon}</div>
                    <div>Name: ${element.name} </div>
                    <div>Search time: ${element.searchTime}</div>
                    <div>Inventory: ${element.inventoryCapacity}</div>
                    <div>Price: ${element.price}</div>
                    <div class="buyButton btn btn-outline-dark">Buy</div>
                </div>
            </div>         
        `
    })

    const cardDiv = document.querySelectorAll(".upgradeCard")
    const removeSelected = () => {
        cardDiv.forEach(el => el.classList.remove("selected"))
    }
    cardDiv.forEach(el => {
        el.onclick = () => {
            removeSelected()
            el.classList.add("selected")
        }
    })

    const buyPeople = document.querySelectorAll('.buyButton')
    buyPeople.forEach((item, index) => {
        item.onclick = () => {
            boughtArray.push(peopleArray[index])
            peopleArray.splice(index, 1)
            appendPeople(peopleArray, boughtArray)
            appendBought(boughtArray)
        }
    })
}

export function appendBought (array){

    boughtPeopleContainer.innerHTML = ''

    array.forEach(element => {
        boughtPeopleContainer.innerHTML +=`
            <div class="">
                <div class="upgradeCard" id="boughtPeopleContainer">
                    <div class="d-flex justify-content-center">${element.icon}</div>
                    <div>Name: ${element.name} </div>
                    <div>Search time: ${element.searchTime}</div>
                    <div>Inventory: ${element.inventoryCapacity}</div>             
                </div>
            </div>         
        `
    })
}
