// event listener for any key pressed

document.addEventListener('keypress', (event) => {
if(event !== null){
    playSound(event.key);
}
});




// event listener for button click

document.querySelectorAll('.drum').forEach((button)=>{
    button.addEventListener('click', (e)=>{
        const key = e.target.innerHTML;
        playSound(key);
    })
})




// root function

function playSound(key){
    switch (key) {
        case 'w':
            const soundW = new Audio('sounds/tom-1.mp3');
            soundW.play();
            break;
        case 'a':
            const soundA = new Audio('sounds/tom-2.mp3');
            soundA.play();
            break;
        case 's':
            const soundS = new Audio('sounds/tom-3.mp3');
            soundS.play();
            break;
        case 'd':
            const soundD = new Audio('sounds/tom-4.mp3');
            soundD.play();
            break;
        case 'j':
            const soundJ = new Audio('sounds/snare.mp3');
            soundJ.play();
            break;
        case 'k':
            const soundK = new Audio('sounds/crash.mp3');
            soundK.play();
            break;
        case 'l':
            const soundL = new Audio('sounds/kick-bass.mp3');
            soundL.play();
            break;
        default:
            console.log(key);
            break;
    }
}
