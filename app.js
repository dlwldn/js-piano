const pianoItem1 = document.querySelector('.item1');
const pianoItem2 = document.querySelector('.item2');
const pianoItem3 = document.querySelector('.item3');
const pianoItem4 = document.querySelector('.item4');
const pianoItem5 = document.querySelector('.item5');
const pianoItem6 = document.querySelector('.item6');
const pianoItem7 = document.querySelector('.item7');
const pianoItem8 = document.querySelector('.item8');

const audio1 = new Audio('assets/media/sound1.mp3');
const audio2 = new Audio('assets/media/sound2.mp3');
const audio3 = new Audio('assets/media/sound3.mp3');
const audio4 = new Audio('assets/media/sound4.mp3');
const audio5 = new Audio('assets/media/sound5.mp3');
const audio6 = new Audio('assets/media/sound6.mp3');
const audio7 = new Audio('assets/media/sound7.mp3');
const audio8 = new Audio('assets/media/sound8.mp3');



document.addEventListener("keydown", (e) => {
    const keyCode = e.keyCode;
    if (keyCode === 65) {
        pianoItem1.setAttribute('class', 'item active');
        audio1.load();
        audio1.play();
    } else if (keyCode === 83) {
        pianoItem2.setAttribute('class', 'item active');
        audio2.load();
        audio2.play();
    } else if (keyCode === 68) {
        pianoItem3.setAttribute('class', 'item active');
        audio3.load();
        audio3.play();
    } else if (keyCode === 70) {
        pianoItem4.setAttribute('class', 'item active');
        audio4.load();
        audio4.play();
    } else if (keyCode === 74) {
        pianoItem5.setAttribute('class', 'item active');
        audio5.load();
        audio5.play();
    } else if (keyCode === 75) {
        pianoItem6.setAttribute('class', 'item active');
        audio6.load();
        audio6.play();
    } else if (keyCode === 76) {
        pianoItem7.setAttribute('class', 'item active');
        audio7.load();
        audio7.play();
    } else if (keyCode === 186) {
        pianoItem8.setAttribute('class', 'item active');
        audio8.load();
        audio8.play();
    }
})

document.addEventListener("keyup", (e) => {
    const keyCode = e.keyCode;

    if (keyCode === 65) {
        pianoItem1.setAttribute('class', 'item item1');
    } else if (keyCode === 83) {
        pianoItem2.setAttribute('class', 'item item2');
    } else if (keyCode === 68) {
        pianoItem3.setAttribute('class', 'item item3');
    } else if (keyCode === 70) {
        pianoItem4.setAttribute('class', 'item item4');
    } else if (keyCode === 74) {
        pianoItem5.setAttribute('class', 'item item5');
    } else if (keyCode === 75) {
        pianoItem6.setAttribute('class', 'item item6');
    } else if (keyCode === 76) {
        pianoItem7.setAttribute('class', 'item item7');
    } else if (keyCode === 186) {
        pianoItem8.setAttribute('class', 'item item8');
    }
})