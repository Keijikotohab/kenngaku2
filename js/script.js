var playlist = [
  'asset/1.mp3',
  'asset/2.mp3',
  'asset/3.mp3',
  'asset/4.mp3',
  'asset/5.mp3',
  'asset/6.mp3',
  'asset/7.mp3',
  'asset/8.mp3',
  'asset/9.mp3',
  'asset/10.mp3',
  'asset/11.mp3',
  'asset/12.mp3',
  'asset/13.mp3',
  'asset/14.mp3',
  'asset/15.mp3',
  'asset/16.mp3',
  'asset/17.mp3',
  'asset/18.mp3',
  'asset/19.mp3',
  'asset/20.mp3',
  'asset/31.mp3',
  'asset/32.mp3',
  'asset/33.mp3',
  'asset/34.mp3',
  'asset/35.mp3',
  'asset/36.mp3',
  'asset/37.mp3',
  'asset/38.mp3',
  'asset/39.mp3',
  'asset/40.mp3',
  'asset/41.mp3',
  'asset/42.mp3',
  'asset/43.mp3'
]

var count=0


function func(){
  var audio = document.createElement('audio');
  document.body.appendChild(audio);
  audio.style.width = '100%';
  audio.style.height = 'auto';
  audio.controls = true;
  audio.volume = 0.2;

  audio.src = playlist[0];
  audio.play();

  var index = 0;
  audio.addEventListener('ended', function(){
    index++;
    if (index < playlist.length) {
      audio.src = playlist[index];
      audio.play();
    }
    else {
      audio.src = playlist[0];
      audio.play();
      index = 0;
    }
  });
}
