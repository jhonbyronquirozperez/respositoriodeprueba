const audio = document.getElementById('audio');
const fileInput = document.getElementById('fileInput');
const playBtn = document.getElementById('playBtn');
const progressBar = document.getElementById('progressBar');
const time = document.getElementById('time');


let isPlaying = false

//cargar el archivo de audio seleccionado

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    const url = URL.createObjectURL(file);
    audio.src = url;
});



//play y pause del audio
playBtn.addEventListener('click', function() {


if(isPlaying){
    audio.pause();
    playBtn.textContent = 'Play';
}else{
    audio.play();
    playBtn.textContent = 'Pause';
}

isPlaying = !isPlaying;


});



//actualizar la barra de progreso y el tiempo transcurrido





//Mover cancion


