const containers = document.querySelectorAll('.flex1')
const moveBtn = document.querySelector("button")
const timeH = document.querySelector('h3')

let boxes = []
const boxesMoved = []
let selectedItem = -1
let trigger = false
let timeLeft = 0

for (let i = 0; i < 20; i++) {
    const rnd = Math.round(Math.random()*5)+1

    boxes.push({
        time: rnd,
        id: i
    })
}

function appendBoxes() {
    containers[0].innerHTML = ""
    containers[1].innerHTML = ""

    boxes.forEach(item => {
        containers[0].innerHTML += `
            <div class="box" id="${item.id}">${item.time}</div>
        `
    })

    boxesMoved.forEach(item => {
        containers[1].innerHTML += `
            <div class="box" id="${item.id}">${item.time}</div>
        `
    })

    const boxesDivs = document.querySelectorAll('.box')
    const removeSelected = () => {
        boxesDivs.forEach(el => el.classList.remove("selected"))
    }

    boxesDivs.forEach(el => {
        el.onclick = (event) => {
            const id = Number(event.target.id)
            removeSelected()
            el.classList.add("selected")
            selectedItem = id
        }
    })

}

appendBoxes()

function moveItem(item) {
    return new Promise(resolve => {
        setTimeout(() => {
            boxes = boxes.filter(x => x.id !== item.id)
            boxesMoved.push(item)
            resolve()
        }, item.time * 1000)
    })
}

moveBtn.onclick = () => {
    if(trigger) return
    const item = boxes.find(x => x.id === selectedItem)
    console.log(item)
    trigger = true
    timeLeft = item.time
    timeH.innerHTML = "Time: "+timeLeft

    const int = setInterval(() => {
        timeLeft--
        timeH.innerHTML = "Time: "+timeLeft
    }, 1000)


    moveItem(item).then(() => {
        trigger = false
        clearInterval(int)
        appendBoxes()
    })

}




