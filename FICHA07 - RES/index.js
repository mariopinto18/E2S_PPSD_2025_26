
// JavaScript about Video resources



// MANIPULAÇÃO DE BOTÕES
// ---------------------------

const video = document.querySelector('video')

document.querySelector('#btnPlay').addEventListener('click', () => {
    video.play()
})

document.querySelector('#btnPause').addEventListener('click', () => {
    video.pause()
})


document.querySelector('#btnDuration').addEventListener('click', () => {
    duration.innerHTML = `Video duration: ${video.duration.toFixed(2)} seconds`  
})

document.querySelector('#btnStart').addEventListener('click', () => {
    video.currentTime = 0
    video.play()
})

document.querySelector('#btnEnd').addEventListener('click', () => {
    video.currentTime = video.duration - 1
})

document.querySelector('#btnFrame').addEventListener('click', () => {
    video.currentTime = +prompt("what is the frame??")
    //video.play()
})


document.getElementById('btnEditSource').addEventListener('click', () => {

    video.src="./videos/The Digital Transformation of Healthcare.mp4" 
})


