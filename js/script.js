const playBtn = document.querySelector ('#playBtn')
const stopBtn = document.querySelector ('#stopBtn')
const volumeBtn = document.querySelector ('#volumeBtn')


let wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#dde5ec',
    progressColor: '#40cebf',
    barWidth: 1,
    height:90,
    responsive:true,
    hideScrollbar:true,
    barRadius: 2,
    

});

playBtn.addEventListener('click', () =>{
    wavesurfer.playPause();
    if(playBtn.src.includes('play.png')){
        playBtn.src = '/assets/pause.png';
    }
    else{
        playBtn.src = '/assets/play.png';
    }
});
stopBtn.addEventListener('click', () =>{
    wavesurfer.stop();
    playBtn.src = '/assets/play.png'
});
volumeBtn.addEventListener('click', () =>{
    wavesurfer.toggleMute();
    if(volumeBtn.src.includes('volume.png')){
        volumeBtn.src = '/assets/mute.png';
    }
    else{
        volumeBtn.src = '/assets/volume.png';
    }
});

wavesurfer.on('finish', function () {
    playBtn.src = '/assets/play.png';
    wavesurfer.stop()
});

wavesurfer.load('/audio/URL Melt - Unicorn Heads.mp3');