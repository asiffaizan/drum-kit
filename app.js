// event listener for any key pressed

document.addEventListener('keypress', (event) => {
if(event !== null){
    console.log(event.key);
    switch (event.key) {
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
            break;
    }
}
});

// event listener for button click

document.querySelectorAll('.drum').forEach((button)=>{
    button.addEventListener('click', (e)=>{
        const sound = new Audio(`sounds/${e.target.id}.mp3`);
        sound.play();
    })
})

