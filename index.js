function getElemens() {
    let but = document.querySelectorAll("button");
    for (let i = 0; i < but.length; i++) {
        document.querySelectorAll(".drum")[i].addEventListener('click', function() {
            console.log(this.innerText);
            playEachSound(this.innerText);

        });
    }

}

document.getElementById("drum").addEventListener("keypress", (e) => {
    console.log(e.key);
    playEachSound(e.key)
})


function playSound(sound) {
    let audio = new Audio(sound);
    audio.play();
}

function playEachSound(letter) {
    let sound = '';
    switch (letter) {
        case 'w':
            sound = "./sounds/tom-1.mp3";
            playSound(sound);
            break;
        case 'a':
            sound = "./sounds/tom-2.mp3";
            playSound(sound);
            break;
        case 's':
            sound = "./sounds/tom-3.mp3";
            playSound(sound);
            break;
        case 'd':
            sound = "./sounds/tom-4.mp3";
            playSound(sound);
            break;
        case 'j':
            sound = "./sounds/snare.mp3";
            playSound(sound);
            break;
        case 'k':
            sound = "./sounds/crash.mp3";
            playSound(sound);
            break;
        case 'l':
            sound = "./sounds/kick-bass.mp3";
            playSound(sound);
            break;

        default:
            break;
    }

}


getElemens();