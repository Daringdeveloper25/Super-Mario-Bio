let marioImg = document.querySelector("#mario img");
let button = document.getElementById("changeMario");

button.addEventListener("click", function () {

    let randomPicture = Math.floor(Math.random() * 3) + 1;

    if (randomPicture === 1) {
        marioImg.src = "https://www.bing.com/th?id=OPHS.aW%2bgBd%2fsk5c%2fMg474C474&o=5&pid=21.1&w=128&h=188&qlt=100&dpr=1&bw=6&bc=FFFFFF";
    }
    else if (randomPicture === 2) {
        marioImg.src = "https://thf.bing.com/th/id/OIP.j5CJ5FiGYYk56NS2jAAQpgHaHZ?w=205&h=204&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.9&pid=1.7&rm=3";
    }
    else if (randomPicture === 3) {
        marioImg.src = "https://thf.bing.com/th/id/OIP.3HHAe1BFXr1Ci2XHZt4bxwHaJK?w=157&h=195&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.9&pid=1.7&rm=3";
    }

});

let newMarioText = document.getElementById("mariotext");
let marioButton = document.getElementById("changeMarioText");

marioButton.addEventListener("click", function () {
    let randomText = Math.floor(Math.random() * 3) + 1;

    if (randomText === 1) {
        newMarioText.innerHTML = "Mario is Cool";
    }
    else if (randomText === 2) {
        newMarioText.innerHTML = "Mario is a Superstar";
    }
    else if (randomText === 3) {
        newMarioText.innerHTML = "Mario is awesome"
    }
});
let mario = document.getElementById("mario");
let marioBackgroundButton = document.getElementById("changeMarioBackground");

marioBackgroundButton.addEventListener("click", function () {
    let randomColor = Math.floor(Math.random() * 5) + 1;

    if (randomColor === 1) {
        mario.style.backgroundColor = "red";
        mario.style.transition = "ease-in-out 1s"
    }
    else if (randomColor === 2) {
        mario.style.backgroundColor = "blue";
        mario.style.transition = "ease-in-out 1s"
    }
    else if (randomColor === 3) {
        mario.style.backgroundColor = "yellow";
        mario.style.transition = "ease-in-out 1s"
    }
    else if (randomColor === 4) {
        mario.style.backgroundColor = "green";
        mario.style.transition = "ease-in-out 1s"
    }
    else if (randomColor === 5) {
        mario.style.backgroundColor = "purple";
        mario.style.transition = "ease-in-out 1s"
    }
})


let newLuigiImage = document.getElementById("luigipic");
let luigiButton = document.getElementById("changeLuigi");

luigiButton.addEventListener("click", function () {
    let randomPicture = Math.floor(Math.random() * 5) + 1;

    if (randomPicture === 1) {
        newLuigiImage.src = "https://th.bing.com/th/id/OIP.W36iSNoqCXnaaXZCfv4_VQHaKw?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3";
    }
    else if (randomPicture === 2) {
        newLuigiImage.src = "https://thf.bing.com/th/id/OIP.PcWF51QO6iGvBsDCI9hqOAHaMi?w=192&h=325&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.9&pid=1.7&rm=3";
    }
    else if (randomPicture === 3) {
        newLuigiImage.src = "https://thf.bing.com/th/id/OIP.wuoQrRatHiIyrN3cfeIZFwHaHa?w=194&h=195&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.9&pid=1.7&rm=3";
    }
    else if (randomPicture === 4) {
        newLuigiImage.src = "https://thf.bing.com/th/id/OIP.DyvUqytjXPpDiBKOXzu6RAAAAA?w=194&h=318&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.9&pid=1.7&rm=3"
    }
    else if (randomPicture === 5) {
        newLuigiImage.src = "https://thf.bing.com/th/id/OIP.HctOOMakdEkQNS3zQ5HQ-gHaMf?w=192&h=324&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.9&pid=1.7&rm=3";
    }
});
let newLuigiText = document.getElementById("luigiText");
let luigiTextButton = document.getElementById("changeLuigiText");
luigiTextButton.addEventListener("click", function () {
    let randomText = Math.floor(Math.random() * 5) + 1

    if (randomText === 1) {
        newLuigiText.innerHTML = "Luigi is cool";
    }
    else if (randomText === 2) {
        newLuigiText.innerHTML = "Luigi is clever";
    }
    else if (randomText === 3) {
        newLuigiText.innerHTML = "Luigi is brave";
    }
    else if (randomText === 4) {
        newLuigiText.innerHTML = "Luigi is good at Smash Bros";
    }
    else if (randomText === 5) {
        newLuigiText.innerHTML = "Luigi is wearing a green outfit";
    }
})

let peachButton = document.getElementById("changePeach");
let newPeachImage = document.getElementById("peachPic");

peachButton.addEventListener("click", function () {
    
    let randomPicture = Math.floor(Math.random() * 5) + 1;

    if (randomPicture === 1) {
        newPeachImage.src = "https://th.bing.com/th/id/OIP.Nl1lTk_FN3YjXUyTzhVjEAHaOz?w=203&h=370&c=7&r=0&o=7&pid=1.7&rm=3";
    }
    else if (randomPicture === 2) {
        newPeachImage.src = "https://thf.bing.com/th/id/OIP.uQSmHpomTGggtcpE2Cc8HQHaHk?w=181&h=185&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.9&pid=1.7&rm=3";
    }
    else if (randomPicture === 3) {
        newPeachImage.src = "https://thf.bing.com/th/id/OIP.II-0fYvuQq7PyQymQLKf-AHaDt?w=350&h=175&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.9&pid=1.7&rm=3";
    }
    else if (randomPicture === 4) {
        newPeachImage.src = "https://thf.bing.com/th/id/OIP.Qcv3t4jBDzR32s9aJtDjWAHaEK?w=321&h=180&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.9&pid=1.7&rm=3";
    }
    else if (randomPicture === 5) {
        newPeachImage.src = "https://thf.bing.com/th/id/OIP.8UwLbrWcnSMvdt4FNAiN6QHaHb?w=209&h=210&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.9&pid=1.7&rm=3";
    }
});

let bowserButton = document.getElementById("changeBowser");
let newBowserPic = document.getElementById("bowserPic");

bowserButton.addEventListener("click", function () {
    let randomPicture = Math.floor(Math.random() * 5) + 1;

    if (randomPicture === 1) {
        newBowserPic.src = "https://th.bing.com/th/id/OIP.h-q-DzN0dK1Gb2Zq_9WhMgHaDt?w=350&h=175&c=7&r=0&o=7&pid=1.7&rm=3"
    }
    else if (randomPicture === 2) {
        newBowserPic.src = "data:image/webp;base64,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"
    }
    else if (randomPicture === 3) {
        newBowserPic.src = "https://th.bing.com/th/id/OIP.yUkcr1oW3px-VTJWTLV9ZgHaGz?w=205&h=188&c=7&r=0&o=7&pid=1.7&rm=3"
    }
    else if (randomPicture === 4) {
        newBowserPic.src = "data:image/webp;base64,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"
    }
    else if (randomPicture === 5) {
        newBowserPic.src = "https://th.bing.com/th/id/OIP.cKqRua1dzHiNUIgvB0b7BwHaHa?w=192&h=186&c=7&r=0&o=7&pid=1.7&rm=3"
    }
})
let bowserJrButton = document.getElementById("changeBowserJr")
let newBowserJrPic = document.getElementById("bowserJrPic");

bowserJrButton.addEventListener("click", function () {
    let randomPicture = Math.floor(Math.random() * 5) + 1;

    if (randomPicture === 1) {
        newBowserJrPic.src = "https://www.ssbwiki.com/images/thumb/2/2b/Bowser_Jr._SSBU.png/1200px-Bowser_Jr._SSBU.png"
    } 
    else if (randomPicture === 2) {
        newBowserJrPic.src = "https://mario.wiki.gallery/images/thumb/6/6c/MP9_Bowser_Jr_Artwork.png/1200px-MP9_Bowser_Jr_Artwork.png"
    }
    else if (randomPicture === 3) {
        newBowserJrPic.src = "https://tse1.mm.bing.net/th/id/OIP.2xvJ1PmHjwr7R3F7sAbSrgHaGb?rs=1&pid=ImgDetMain&o=7&rm=3"
    }
    else if (randomPicture === 4) {
        newBowserJrPic.src = "https://www.vhv.rs/dpng/d/452-4529955_bowser-jr-png-transparent-png.png"
    }
    else if (randomPicture === 5) {
        newBowserJrPic.src = "https://tl.vhv.rs/dpng/s/452-4526550_bowser-jr-plush-png-bowser-jr-in-clown.png"
    }
})

