let APoint = 0
let GPoint = 0


function addHP() {
    APoint += 3
    let homePoint = document.getElementById("HPts")
    homePoint.innerText = APoint
    console.log(APoint)
}

function addGP() {
    GPoint += 3
    let guestPoint = document.getElementById("GPts")
    guestPoint.innerText = GPoint
    console.log(GPoint)
}

