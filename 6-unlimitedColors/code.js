// generate random colors

const randomColor = function () {
    const hexList = "0123456789ABCDEF" 
    let color ='#'
    for (let i = 0; i < 6; i++) { 
        color += hexList[Math.floor(Math.random() * 16)];
    }
    return color;
}

let check;
const startEvent = function(){
    if (!check){
    check = setInterval(changeBG,1000)
    }

    function changeBG(){
        document.body.style.backgroundColor = randomColor()
    }

}

const stopEvent = function(){
    clearInterval(check)
    check = null;
}

document.querySelector('#start').addEventListener('click',startEvent)
document.querySelector('#stop').addEventListener('click',stopEvent)