const topLeft = document.querySelector("#top .left")
const topLeftSymbol = document.querySelector("#top .left p")
let TL
const topMid = document.querySelector("#top .mid")
const topMidSymbol = document.querySelector("#top .mid p")
let TM
const topRight = document.querySelector("#top .right")
const topRightSymbol = document.querySelector("#top .right p")
let TR

const midLeft = document.querySelector("#mid .left")
const midLeftSymbol = document.querySelector("#mid .left p")
let ML
const midMid = document.querySelector("#mid .mid")
const midMidSymbol = document.querySelector("#mid .mid p")
let MM
const midRight = document.querySelector("#mid .right")
const midRightSymbol = document.querySelector("#mid .right p")
let MR

const bottomLeft = document.querySelector("#bottom .left")
const bottomLeftSymbol = document.querySelector("#bottom .left p")
let BL
const bottomMid = document.querySelector("#bottom .mid")
const bottomMidSymbol = document.querySelector("#bottom .mid p")
let BM
const bottomRight = document.querySelector("#bottom .right")
const bottomRightSymbol = document.querySelector("#bottom .right p")
let BR

let x = 0
let o = 0
let blue = 0
let red = 0
let random

const blueScore = document.querySelector("#blue-score")
const redScore = document.querySelector("#red-score")

const blackBar = document.querySelector("#black")
const playAgain = document.querySelector("button")
const DRAW = document.querySelector("#draw")
const victoryO = document.querySelector("#wino")
const victoryX = document.querySelector("#winx")

// events
topLeft.addEventListener("click", () => {
    if (TL != undefined) return
    if (x != o) return
    topLeftSymbol.textContent = "X"
    topLeftSymbol.style.color = "blue"
    TL = "X"
    x++;
    if (o === 0) {
        setTimeout(() => {
            while (o === 0) {
                getRandom()
            }
        }, 300)
        return
    }
    if (TM === "X" && TR === "X" || ML === "X" && BL === "X" || MM === "X" && BR === "X") {
        winX()
        return
    }
    else if (x === 5) {
        draw()
        return
    }
    if (pcChecksIfCanWin() === 1) {
        setTimeout(winO, 500)
        return
    }
    if (pcChecksPlayerVictory() === 1) {     
    }
    else if (pcConstructVictory() === 1) {
    }
    setTimeout(verifyComputerWin, 500)
})

topMid.addEventListener("click", () => {
    if (TM != undefined) return
    if (x != o) return
    topMidSymbol.textContent = "X"
    topMidSymbol.style.color = "blue"
    TM = "X"
    x++;
    if (o === 0) {
        setTimeout(() => {
            while (o === 0) {
                getRandom()
            }
        }, 300)
        return
    }
    if (TL === "X" && TR === "X" || MM === "X" && BM === "X") {
        winX()
        return
    }
    else if (x === 5) {
        draw()
        return
    }
    if (pcChecksIfCanWin() === 1) {
        setTimeout(winO, 500)
        return
    }
    if (pcChecksPlayerVictory() === 1) {     
    }
    else if (pcConstructVictory() === 1) {
    }
    setTimeout(verifyComputerWin, 500)
})

topRight.addEventListener("click", () => {
    if (TR != undefined) return
    if (x != o) return
    topRightSymbol.textContent = "X"
    topRightSymbol.style.color = "blue"
    TR = "X"
    x++;
    if (o === 0) {
        setTimeout(() => {
            while (o === 0) {
                getRandom()
            }
        }, 300)
        return
    }
    if (TL === "X" && TM === "X" || MR === "X" && BR === "X" || MM === "X" && BL === "X") {
        winX()
        return
    }
    else if (x === 5) {
        draw()
        return
    }
    if (pcChecksIfCanWin() === 1) {
        setTimeout(winO, 500)
        return
    }
    if (pcChecksPlayerVictory() === 1) {     
    }
    else if (pcConstructVictory() === 1) {
    }
    setTimeout(verifyComputerWin, 500)
})

midLeft.addEventListener("click", () => {
    if (ML != undefined) return
    if (x != o) return
    midLeftSymbol.textContent = "X"
    midLeftSymbol.style.color = "blue"
    ML = "X"
    x++;
    if (o === 0) {
        setTimeout(() => {
            while (o === 0) {
                getRandom()
            }
        }, 500)
        return
    }
    if (MM === "X" && MR === "X" || TL === "X" && BL === "X") {
        winX()
        return
    }
    else if (x === 5) {
        draw()
        return
    }
    if (pcChecksIfCanWin() === 1) {
        setTimeout(winO, 500)
        return
    }
    if (pcChecksPlayerVictory() === 1) {     
    }
    else if (pcConstructVictory() === 1) {
    }
    setTimeout(verifyComputerWin, 500)
})

midMid.addEventListener("click", () => {
    if (MM != undefined) return
    if (x != o) return
    midMidSymbol.textContent = "X"
    midMidSymbol.style.color = "blue"
    MM = "X"
    x++;
    if (o === 0) {
        setTimeout(() => {
            while (o === 0) {
                getRandom()
            }
        }, 300)
        return
    }
    if (ML === "X" && MR === "X" || TM === "X" && BM === "X" || TL === "X" && BR === "X" || TR === "X" && BL === "X") {
        winX()
        return
    }
    else if (x === 5) {
        draw()
        return
    }
    if (pcChecksIfCanWin() === 1) {
        setTimeout(winO, 500)
        return
    }
    if (pcChecksPlayerVictory() === 1) {     
    }
    else if (pcConstructVictory() === 1) {
    }
    setTimeout(verifyComputerWin, 500)
})

midRight.addEventListener("click", () => {
    if (MR != undefined) return
    if (x != o) return
    midRightSymbol.textContent = "X"
    midRightSymbol.style.color = "blue"
    MR = "X"
    x++;
    if (o === 0) {
        setTimeout(() => {
            while (o === 0) {
                getRandom()
            }
        }, 300)
        return
    }
    if (ML === "X" && MM === "X" || TR === "X" && BR === "X") {
        winX()
        return
    }
    else if (x === 5) {
        draw()
        return
    }
    if (pcChecksIfCanWin() === 1) {
        setTimeout(winO, 500)
        return
    }
    if (pcChecksPlayerVictory() === 1) {     
    }
    else if (pcConstructVictory() === 1) {
    }
    setTimeout(verifyComputerWin, 500)
})

bottomLeft.addEventListener("click", () => {
    if (BL != undefined) return
    if (x != o) return
    bottomLeftSymbol.textContent = "X"
    bottomLeftSymbol.style.color = "blue"
    BL = "X"
    x++;
    if (o === 0) {
        setTimeout(() => {
            while (o === 0) {
                getRandom()
            }
        }, 300)
        return
    }
    if (BM === "X" && BR === "X" || TL === "X" && ML === "X" || MM === "X" && TR === "X") {
        winX()
        return
    }
    else if (x === 5) {
        draw()
        return
    }
    if (pcChecksIfCanWin() === 1) {
        setTimeout(winO, 500)
        return
    }
    if (pcChecksPlayerVictory() === 1) {     
    }
    else if (pcConstructVictory() === 1) {
    }
    setTimeout(verifyComputerWin, 500)
})

bottomMid.addEventListener("click", () => {
    if (BM != undefined) return
    if (x != o) return
    bottomMidSymbol.textContent = "X"
    bottomMidSymbol.style.color = "blue"
    BM = "X"
    x++;
    if (o === 0) {
        setTimeout(() => {
            while (o === 0) {
                getRandom()
            }
        }, 300)
        return
    }
    if (BL === "X" && BR === "X" || TM === "X" && MM === "X") {
        winX()
        return
    }
    else if (x === 5) {
        draw()
        return
    }
    if (pcChecksIfCanWin() === 1) {
        setTimeout(winO, 500)
        return
    }
    if (pcChecksPlayerVictory() === 1) {     
    }
    else if (pcConstructVictory() === 1) {
    }
    setTimeout(verifyComputerWin, 500)
})

bottomRight.addEventListener("click", () => {
    if (BR != undefined) return
    if (x != o) return
    bottomRightSymbol.textContent = "X"
    bottomRightSymbol.style.color = "blue"
    BR = "X"
    x++;
    if (o === 0) {
        setTimeout(() => {
            while (o === 0) {
                getRandom()
            }
        }, 300)
        return
    }
    if (BL === "X" && BM === "X" || TR === "X" && MR === "X" || MM === "X" && TL === "X") {
        winX()
        return
    }
    else if (x === 5) {
        draw()
        return
    }
    if (pcChecksIfCanWin() === 1) {
        setTimeout(winO, 500)
        return
    }
    if (pcChecksPlayerVictory() === 1) {     
    }
    else if (pcConstructVictory() === 1) {
    }
    setTimeout(verifyComputerWin, 500)
})

playAgain.addEventListener("click", play)

// functions
function winX () {
    blue++;
    setTimeout (() => {
        blackBar.style.visibility = "visible"
        blackBar.style.backgroundColor = "#2146C7"
        victoryX.style.visibility = "visible"
        blueScore.innerText = blue
    }, 500)
    setTimeout(() => {
        blackBar.style.visibility = "hidden"
        victoryX.style.visibility = "hidden"
    }, 1500)
}

function winO () {
    red++;
    setTimeout (() => {
        blackBar.style.visibility = "visible"
        blackBar.style.backgroundColor = "#CF0A0A"
        victoryO.style.visibility = "visible"
        redScore.innerText = red
    }, 500)
    setTimeout(() => {
        blackBar.style.visibility = "hidden"
        victoryO.style.visibility = "hidden"
    }, 1500)
}

function draw () {
    setTimeout (() => {
        blackBar.style.visibility = "visible"
        blackBar.style.backgroundColor = "#b99155"
        DRAW.style.visibility = "visible"
    }, 500)
    setTimeout(() => {
        blackBar.style.visibility = "hidden"
        DRAW.style.visibility = "hidden"
    }, 1500)
}

function play() {
    x = 0;
    o = 0;
    blackBar.style.visibility = "hidden"
    DRAW.style.visibility = "hidden"
    victoryO.style.visibility = "hidden"
    victoryX.style.visibility = "hidden"
    topLeftSymbol.textContent = ""
    topMidSymbol.textContent = ""
    topRightSymbol.textContent = ""
    midLeftSymbol.textContent = ""
    midMidSymbol.textContent = ""
    midRightSymbol.textContent = ""
    bottomLeftSymbol.textContent = ""
    bottomMidSymbol.textContent = ""
    bottomRightSymbol.textContent = ""
    TL = undefined
    TM = undefined
    TR = undefined
    ML = undefined
    MM = undefined
    MR = undefined
    BL = undefined
    BM = undefined
    BR = undefined
}

function getRandom() {
    while (1) {
        random = Math.floor(Math.random() * 9)
        if (random === 0 && TL != "X" && TL != "O") {
            topLeftSymbol.textContent = "O"
            topLeftSymbol.style.color = "red"
            o++;
            TL = "O"
            return
        }
        else if (random === 1 && TM != "X" && TM != "O") {
            topMidSymbol.textContent = "O"
            topMidSymbol.style.color = "red"
            o++;
            TM = "O"
            return
        }
        else if (random === 2 && TR != "X" && TR != "O") {
            topRightSymbol.textContent = "O"
            topRightSymbol.style.color = "red"
            o++;
            TR = "O"
            return
        }
        else if (random === 3 && ML != "X" && ML != "O") {
            midLeftSymbol.textContent = "O"
            midLeftSymbol.style.color = "red"
            o++;
            ML = "O"
            return
        }
        else if (random === 4 && MM != "X" && MM != "O") {
            midMidSymbol.textContent = "O"
            midMidSymbol.style.color = "red"
            o++;
            MM = "O"
            return
        }
        else if (random === 5 && MR != "X" && MR != "O") {
            midRightSymbol.textContent = "O"
            midRightSymbol.style.color = "red"
            o++;
            MR = "O"
            return
        }
        else if (random === 6 && BL != "X" && BL != "O") {
            bottomLeftSymbol.textContent = "O"
            bottomLeftSymbol.style.color = "red"
            o++;
            BL = "O"
            return
        }
        else if (random === 7 && BM != "X" && BM != "O") {
            bottomMidSymbol.textContent = "O"
            bottomMidSymbol.style.color = "red"
            o++;
            BM = "O"
            return
        }
        else if (random === 8 && BR != "X" && BR != "O") {
            bottomRightSymbol.textContent = "O"
            bottomRightSymbol.style.color = "red"
            o++;
            BR = "O"
            return
        }
    }
    
}

function verifyComputerWin() {
    if (TL === "O" && TM === "O" && TR === "O") winO()
    else if (ML === "O" && MM === "O" && MR === "O") winO()
    else if (BL === "O" && BM === "O" && BR === "O") winO()
    else if (TL === "O" && ML === "O" && BL === "O") winO()
    else if (TM === "O" && MM === "O" && BM === "O") winO()
    else if (TR === "O" && MR === "O" && BR === "O") winO()
    else if (TL === "O" && MM === "O" && BR === "O") winO()
    else if (TR === "O" && MM === "O" && BL === "O") winO()
}

function pcChecksIfCanWin() {
    if (TM === "O" && TR === "O" && TL != "X") {
        setTimeout(() => {
            topLeftSymbol.textContent = "O"
            topLeftSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (ML === "O" && BL === "O" && TL != "X") {
        setTimeout(() => {
            topLeftSymbol.textContent = "O"
            topLeftSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (MM === "O" && BR === "O" && TL != "X") {
        setTimeout(() => {
            topLeftSymbol.textContent = "O"
            topLeftSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (TL === "O" && TR === "O" && TM != "X") {
        setTimeout(() => {
            topMidSymbol.textContent = "O"
            topMidSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (BM === "O" && MM === "O" && TM != "X") {
        setTimeout(() => {
            topMidSymbol.textContent = "O"
            topMidSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (TL === "O" && TM === "O" && TR != "X") {
        setTimeout(() => {
            topRightSymbol.textContent = "O"
            topRightSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (MR === "O" && BR === "O" && TR != "X") {
        setTimeout(() => {
            topRightSymbol.textContent = "O"
            topRightSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (MM === "O" && BL === "O" && TR != "X") {
        setTimeout(() => {
            topRightSymbol.textContent = "O"
            topRightSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (MM === "O" && MR === "O" && ML != "X") {
        setTimeout(() => {
            midLeftSymbol.textContent = "O"
            midLeftSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (TL === "O" && BL === "O" && ML != "X") {
        setTimeout(() => {
            midLeftSymbol.textContent = "O"
            midLeftSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (ML === "O" && MR === "O" && MM != "X") {
        setTimeout(() => {
            midMidSymbol.textContent = "O"
            midMidSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (TM === "O" && BM === "O" && MM != "X") {
        setTimeout(() => {
            midMidSymbol.textContent = "O"
            midMidSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (BL === "O" && TR === "O" && MM != "X") {
        setTimeout(() => {
            midMidSymbol.textContent = "O"
            midMidSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (BR === "O" && TL === "O" && MM != "X") {
        setTimeout(() => {
            midMidSymbol.textContent = "O"
            midMidSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (ML === "O" && MM === "O" && MR != "X") {
        setTimeout(() => {
            midRightSymbol.textContent = "O"
            midRightSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (TR === "O" && BR === "O" && MR != "X") {
        setTimeout(() => {
            midRightSymbol.textContent = "O"
            midRightSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (BM === "O" && BR === "O" && BL != "X") {
        setTimeout(() => {
            bottomLeftSymbol.textContent = "O"
            bottomLeftSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (TL === "O" && ML === "O" && BL != "X") {
        setTimeout(() => {
            bottomLeftSymbol.textContent = "O"
            bottomLeftSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (MM === "O" && TR === "O" && BL != "X") {
        setTimeout(() => {
            bottomLeftSymbol.textContent = "O"
            bottomLeftSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (BL === "O" && BR === "O" && BM != "X") {
        setTimeout(() => {
            bottomMidSymbol.textContent = "O"
            bottomMidSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (TM === "O" && MM === "O" && BM != "X") {
        setTimeout(() => {
            bottomMidSymbol.textContent = "O"
            bottomMidSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (BL === "O" && BM === "O" && BR != "X") {
        setTimeout(() => {
            bottomRightSymbol.textContent = "O"
            bottomRightSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (TR === "O" && MR === "O" && BR != "X") {
        setTimeout(() => {
            bottomRightSymbol.textContent = "O"
            bottomRightSymbol.style.color = "red"
        }, 500)
        return 1;
    }
    else if (TL === "O" && MM === "O" && BR != "X") {
        setTimeout(() => {
            bottomRightSymbol.textContent = "O"
            bottomRightSymbol.style.color = "red"
        }, 500)
        return 1;
    }
}

function pcConstructVictory() {
    if (TL === "O" && ML != "X" && BL != "X") {
        setTimeout(() => {
            midLeftSymbol.textContent = "O"
            midLeftSymbol.style.color = "red"
            ML = "O"
            o++;
        }, 500)
    }
    else if (TL === "O" && TM != "X" && TR != "X") {
        setTimeout(() => {
            topMidSymbol.textContent = "O"
            topMidSymbol.style.color = "red"
            TM = "O"
            o++;
        }, 500)
    }
    else if (TL === "O" && MM != "X" && BR != "X") {
        setTimeout(() => {
            midMidSymbol.textContent = "O"
            midMidSymbol.style.color = "red"
            MM = "O"
            o++;
        }, 500)
    }
    else if (TM === "O" && TL != "X" && TR != "X") {
        setTimeout(() => {
            topLeftSymbol.textContent = "O"
            topLeftSymbol.style.color = "red"
            TL = "O"
            o++;
        }, 500)
    }
    else if (TM === "O" && MM != "X" && BM != "X") {
        setTimeout(() => {
            bottomMidSymbol.textContent = "O"
            bottomMidSymbol.style.color = "red"
            BM = "O"
            o++;
        }, 500)
    }
    else if (TR === "O" && TL != "X" && TM != "X") {
        setTimeout(() => {
            topMidSymbol.textContent = "O"
            topMidSymbol.style.color = "red"
            TM = "O"
            o++;
        }, 500)
    }
    else if (TR === "O" && MM != "X" && BL != "X") {
        setTimeout(() => {
            midMidSymbol.textContent = "O"
            midMidSymbol.style.color = "red"
            MM = "O"
            o++;
        }, 500)
    }
    else if (TR === "O" && MR != "X" && BR != "X") {
        setTimeout(() => {
            bottomRightSymbol.textContent = "O"
            bottomRightSymbol.style.color = "red"
            BR = "O"
            o++;
        }, 500)
    }
    else if (ML === "O" && TL != "X" && BL != "X") {
        setTimeout(() => {
            bottomLeftSymbol.textContent = "O"
            bottomLeftSymbol.style.color = "red"
            BL = "O"
            o++;
        }, 500)
    }
    else if (ML === "O" && MM !="X" && MR != "X") {
        setTimeout(() => {
            midMidSymbol.textContent = "O"
            midMidSymbol.style.color = "red"
            MM = "O"
            o++;
        }, 500)
    }
    else if (MM === "O" && TM != "X" && BM != "X") {
        setTimeout(() => {
            topMidSymbol.textContent = "O"
            topMidSymbol.style.color = "red"
            TM = "O"
            o++;
        }, 500)
    }
    else if (MM === "O" && ML != "X" && MR != "X") {
        setTimeout(() => {
            midRightSymbol.textContent = "O"
            midRightSymbol.style.color = "red"
            MR = "O"
            o++;
        }, 500)
    }
    else if (MM === "O" && TL != "X" && BR != "X") {
        setTimeout(() => {
            bottomRightSymbol.textContent = "O"
            bottomRightSymbol.style.color = "red"
            BR = "O"
            o++;
        }, 500)
    }
    else if (MM === "O" && TR != "X" && BL != "X") {
        setTimeout(() => {
            topRightSymbol.textContent = "O"
            topRightSymbol.style.color = "red"
            TR = "O"
            o++;
        }, 500)
    }
    else if (MR === "O" && ML != "X" && MM != "X") {
        setTimeout(() => {
            midMidSymbol.textContent = "O"
            midMidSymbol.style.color = "red"
            MM = "O"
            o++;
        }, 500)
    }
    else if (MR === "O" && TR != "X" && BR != "X") {
        setTimeout(() => {
            bottomRightSymbol.textContent = "O"
            bottomRightSymbol.style.color = "red"
            BR = "O"
            o++;
        }, 500)
    }
    else if (BL === "O" && ML != "X" && TL != "X") {
        setTimeout(() => {
            midLeftSymbol.textContent = "O"
            midLeftSymbol.style.color = "red"
            ML = "O"
            o++;
        }, 500)
    }
    else if (BL === "O" && MM != "X" && TR != "X") {
        setTimeout(() => {
            midMidSymbol.textContent = "O"
            midMidSymbol.style.color = "red"
            MM = "O"
            o++;
        }, 500)
    }
    else if (BL === "O" && BM != "X" && BR != "X") {
        setTimeout(() => {
            bottomMidSymbol.textContent = "O"
            bottomMidSymbol.style.color = "red"
            BM = "O"
            o++;
        }, 500)
    }
    else if (BM === "O" && BL != "X" && BR != "X") {
        setTimeout(() => {
            bottomLeftSymbol.textContent = "O"
            bottomLeftSymbol.style.color = "red"
            BL = "O"
            o++;
        }, 500)
    }
    else if (BM === "O" && MM != "X" && TM != "X") {
        setTimeout(() => {
            midMidSymbol.textContent = "O"
            midMidSymbol.style.color = "red"
            MM = "O"
            o++;
        }, 500)
    }
    else if (BR === "O" && MM != "X" && TL != "X") {
        setTimeout(() => {
            topLeftSymbol.textContent = "O"
            topLeftSymbol.style.color = "red"
            TL = "O"
            o++;
        }, 500)
    }
    else if (BR === "O" && TR != "X" && MR != "X") {
        setTimeout(() => {
            topRightSymbol.textContent = "O"
            topRightSymbol.style.color = "red"
            TR = "O"
            o++;
        }, 500)
    }
    else if (BR === "O" && BL != "X" && BM != "X") {
        setTimeout(() => {
            bottomLeftSymbol.textContent = "O"
            bottomLeftSymbol.style.color = "red"
            BL = "O"
            o++;
        }, 500)
    }
    else {
        setTimeout(getRandom, 500)
    }
}

function pcChecksPlayerVictory() {
    if (TM === "X" && TR === "X" && TL != "O") {
        setTimeout(() => {
            topLeftSymbol.textContent = "O"
            topLeftSymbol.style.color = "red"
            o++;
            TL = "O"
        }, 500)
        return 1;
    }
    else if (ML === "X" && BL === "X" && TL != "O") {
        setTimeout(() => {
            topLeftSymbol.textContent = "O"
            topLeftSymbol.style.color = "red"
            o++;
            TL = "O"
        }, 500)
        return 1;
    }
    else if (MM === "X" && BR === "X" && TL != "O") {
        setTimeout(() => {
            topLeftSymbol.textContent = "O"
            topLeftSymbol.style.color = "red"
            o++;
            TL = "O"
        }, 500)
        return 1;
    }
    else if (TL === "X" && TR === "X" && TM != "O") {
        setTimeout(() => {
            topMidSymbol.textContent = "O"
            topMidSymbol.style.color = "red"
            o++;
            TM = "O"
        }, 500)
        return 1;
    }
    else if (BM === "X" && MM === "X" && TM != "O") {
        setTimeout(() => {
            topMidSymbol.textContent = "O"
            topMidSymbol.style.color = "red"
            o++;
            TM = "O"
        }, 500)
        return 1;
    }
    else if (TL === "X" && TM === "X" && TR != "O") {
        setTimeout(() => {
            topRightSymbol.textContent = "O"
            topRightSymbol.style.color = "red"
            o++;
            TR = "O"
        }, 500)
        return 1;
    }
    else if (MR === "X" && BR === "X" && TR != "O") {
        setTimeout(() => {
            topRightSymbol.textContent = "O"
            topRightSymbol.style.color = "red"
            o++;
            TR = "O"
        }, 500)
        return 1;
    }
    else if (MM === "X" && BL === "X" && TR != "O") {
        setTimeout(() => {
            topRightSymbol.textContent = "O"
            topRightSymbol.style.color = "red"
            o++;
            TR = "O"
        }, 500)
        return 1;
    }
    else if (MM === "X" && MR === "X" && ML != "O") {
        setTimeout(() => {
            midLeftSymbol.textContent = "O"
            midLeftSymbol.style.color = "red"
            o++;
            ML = "O"
        }, 500)
        return 1;
    }
    else if (TL === "X" && BL === "X" && ML != "O") {
        setTimeout(() => {
            midLeftSymbol.textContent = "O"
            midLeftSymbol.style.color = "red"
            o++;
            ML = "O"
        }, 500)
        return 1;
    }
    else if (ML === "X" && MR === "X" && MM != "O") {
        setTimeout(() => {
            midMidSymbol.textContent = "O"
            midMidSymbol.style.color = "red"
            o++;
            MM = "O"
        }, 500)
        return 1;
    }
    else if (TM === "X" && BM === "X" && MM != "O") {
        setTimeout(() => {
            midMidSymbol.textContent = "O"
            midMidSymbol.style.color = "red"
            o++;
            MM = "O"
        }, 500)
        return 1;
    }
    else if (BL === "X" && TR === "X" && MM != "O") {
        setTimeout(() => {
            midMidSymbol.textContent = "O"
            midMidSymbol.style.color = "red"
            o++;
            MM = "O"
        }, 500)
        return 1;
    }
    else if (BR === "X" && TL === "X" && MM != "O") {
        setTimeout(() => {
            midMidSymbol.textContent = "O"
            midMidSymbol.style.color = "red"
            o++;
            MM = "O"
        }, 500)
        return 1;
    }
    else if (ML === "X" && MM === "X" && MR != "O") {
        setTimeout(() => {
            midRightSymbol.textContent = "O"
            midRightSymbol.style.color = "red"
            o++;
            MR = "O"
        }, 500)
        return 1;
    }
    else if (TR === "X" && BR === "X" && MR != "O") {
        setTimeout(() => {
            midRightSymbol.textContent = "O"
            midRightSymbol.style.color = "red"
            o++;
            MR = "O"
        }, 500)
        return 1;
    }
    else if (BM === "X" && BR === "X" && BL != "O") {
        setTimeout(() => {
            bottomLeftSymbol.textContent = "O"
            bottomLeftSymbol.style.color = "red"
            o++;
            BL = "O"
        }, 500)
        return 1;
    }
    else if (TL === "X" && ML === "X" && BL != "O") {
        setTimeout(() => {
            bottomLeftSymbol.textContent = "O"
            bottomLeftSymbol.style.color = "red"
            o++;
            BL = "O"
        }, 500)
        return 1;
    }
    else if (MM === "X" && TR === "X" && BL != "O") {
        setTimeout(() => {
            bottomLeftSymbol.textContent = "O"
            bottomLeftSymbol.style.color = "red"
            o++;
            BL = "O"
        }, 500)
        return 1;
    }
    else if (BL === "X" && BR === "X" && BM != "O") {
        setTimeout(() => {
            bottomMidSymbol.textContent = "O"
            bottomMidSymbol.style.color = "red"
            o++;
            BM = "O"
        }, 500)
        return 1;
    }
    else if (TM === "X" && MM === "X" && BM != "O") {
        setTimeout(() => {
            bottomMidSymbol.textContent = "O"
            bottomMidSymbol.style.color = "red"
            o++;
            BM = "O"
        }, 500)
        return 1;
    }
    else if (BL === "X" && BM === "X" && BR != "O") {
        setTimeout(() => {
            bottomRightSymbol.textContent = "O"
            bottomRightSymbol.style.color = "red"
            o++;
            BR = "O"
        }, 500)
        return 1;
    }
    else if (TR === "X" && MR === "X" && BR != "O") {
        setTimeout(() => {
            bottomRightSymbol.textContent = "O"
            bottomRightSymbol.style.color = "red"
            o++;
            BR = "O"
        }, 500)
        return 1;
    }
    else if (TL === "X" && MM === "X" && BR != "O") {
        setTimeout(() => {
            bottomRightSymbol.textContent = "O"
            bottomRightSymbol.style.color = "red"
            o++;
            BR = "O"
        }, 500)
        return 1;
    }
}