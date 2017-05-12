
//create audio context
const audioContext = new AudioContext();

//setup oscillator
const oscillator = audioContext.createOscillator();
oscillator.frequency.value = 440;
oscillator.type = "sawtooth";
oscillator.start();

const masterGain = audioContext.createGain();
masterGain.connect( audioContext.destination);
oscillator.connect( masterGain );

masterGain.gain.value = 0;

//setup LFO
const lfoOctaveRange = 4;
const maxLFOValue = 100 * 12 * lfoOctaveRange;//100 cents per piano key,
const maxLFORate = 8;

const lfo = audioContext.createOscillator();
lfo.frequency.value = maxLFORate;


const lfoGain = audioContext.createGain();
  lfoGain.gain.value = maxLFOValue;
  lfo.start();

  lfo.connect( lfoGain );
  //lfoGain.connect( oscillator.detune );

  let key = null;








function setup() {




  const oscWaveformElement = document.querySelector("#osc-waveform" );

  const lfoWaveformElement = document.querySelector("#lfo-waveform" );

  oscWaveformElement.addEventListener( "change",

    function( event ) {
      event.preventDefault();

      oscillator.type = event.target.value;
  });


  lfoWaveformElement.addEventListener( "change",

    function( event ) {
      event.preventDefault();

      oscillator.type = event.target.value;
  });

  createCanvas( window.innerWidth, window.innerHeight );
}


function draw() {

  if (keyIsPressed) {

    fill( 255,255, 255, 127);
    rect( 0, 0, window.innerWidth, window.innerHeight );

    lfo.frequency.value = ( mouseY / window.innerHeight ) * maxLFORate;
    lfoGain.gain.value = ( mouseX / window.innerWidth ) * maxLFOValue;

    masterGain.gain.value = 1;



    fill( 0 );

  } else {

    clear();

    fill ( 255 );

    masterGain.gain.value = 0;
   }

   ellipse( mouseX, mouseY, 80, 80);

//piano keys to keyboard keys




}


function keyPressed (event){
  console.log(event)
let k = event.key;
let now = audioContext.currentTime;
let time = 1;

oscillator.frequency.cancelScheduledValues(now);
  clear();
  fill(0);
  textSize(100);

  if (k === "a") {
    oscillator.frequency.linearRampToValueAtTime(261.63, now+time);
    text("C4", 100, 100, 100 , 100);//C4
  } else if (k === "s") {
    oscillator.frequency.linearRampToValueAtTime(293.66, now+time);
      text("D4", 200, 100, 100 , 100);//D4
  } else if (k === "d") {
    oscillator.frequency.linearRampToValueAtTime(329.63, now+time);
      text("E4", 300, 100, 100 , 100);//E4
  } else if (k === "f") {
    oscillator.frequency.linearRampToValueAtTime(349.23, now+time);
      text("F4", 400, 100, 100 , 100);//F4
  } else if (k === "g") {
    oscillator.frequency.linearRampToValueAtTime(392.00, now+time);
      text("G4", 500, 100, 100 , 100);//G4
  } else if (k === "h") {
    oscillator.frequency.linearRampToValueAtTime(440.00, now+time);
      text("A4", 600, 100, 100 , 100);//A4
  }else if (k === "j") {
    oscillator.frequency.linearRampToValueAtTime(493.88, now+time);
      text("B4", 700, 100, 100 , 100);//B4
  }else if (k === "k") {
    oscillator.frequency.linearRampToValueAtTime(523.25, now+time);
      text("C5", 800, 100, 100 , 100);//C5
  }


}
