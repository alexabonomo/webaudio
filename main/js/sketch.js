
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


function setup() {


  const oscWaveformElement = document.querySelector("#osc-waveform" );

  oscWaveformElement.addEventListener( "change",

    function( event ) {
      event.preventDefault();

      oscillator.type = event.target.value;
  });

  createCanvas( window.innerWidth, window.innerHeight );
}


function draw() {

  if (mouseIsPressed) {

    masterGain.gain.value = 1;

  } else {

    masterGain.gain.value = 0;
   }

}
