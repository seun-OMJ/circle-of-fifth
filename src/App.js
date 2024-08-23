import React from 'react';
import './App.css';
import C from "./chord library/C major.wav";
import G from "./chord library/G major.wav";
import D from "./chord library/D major.wav";
import A from "./chord library/A major.wav";
import E from "./chord library/E major.wav";
import B from "./chord library/B major.wav";
import Db from "./chord library/Db major.wav";
import Gb from "./chord library/Gb major.wav";
import Ab from "./chord library/Ab major.wav";
import Eb from "./chord library/Eb major.wav";
import Bb from "./chord library/Bb major.wav";
import F from "./chord library/F major.wav";
import Am from "./chord library/Am chord.wav";
import Bm from "./chord library/Bm chord.wav";
import Em from "./chord library/Em chord.wav";
import Dbm from "./chord library/Dbm chord.wav";
import Gbm from "./chord library/Gbm chord.wav";
import Ebm from "./chord library/Ebm chord.wav";
import Abm from "./chord library/Abm chord.wav";
import Bbm from "./chord library/Bbm chord.wav";
import Fm from "./chord library/Fm chord.wav";
import Cm from "./chord library/Cm chord.wav";
import Gm from "./chord library/Gm chord.wav";
import Dm from "./chord library/Dm chord.wav";


const audioFiles = {
  'C':C,
  'G':G,
  'D':D,
  'A':A,
  'E':E,
  'B':B,
  'Db':Db,
  'Gb':Gb,
  'Ab':Ab,
  'Eb':Eb,
  'Bb':Bb,
  'F':F,
  'Am':Am,
  'Bm':Bm,
  'Em':Em,
  'Dbm':Dbm,
  'Gbm':Gbm,
  'Ebm':Ebm,
  'Abm':Abm,
  'Bbm':Bbm,
  'Fm':Fm,
  'Cm':Cm,
  'Gm':Gm,
  'Dm':Dm,
};

const playAudio = (className) => {
  const audio = new Audio(audioFiles[className]);
  audio.play();
};

function App() {
  return (
    <div className="circle-of-fifths">
      <div className='outerCircle'>
        <button className='C' onClick={() => playAudio('C')}>C</button>
        <button className='G' onClick={() => playAudio('G')}>G</button>
        <button className='D' onClick={() => playAudio('D')}>D</button>
        <button className='A' onClick={() => playAudio('A')}>A</button>
        <button className='E' onClick={() => playAudio('E')}>E</button>
        <button className='B' onClick={() => playAudio('B')}>B</button>
        <button className='Gb' onClick={() => playAudio('Gb')}>F#<br></br>Gb</button>
        <button className='Db' onClick={() => playAudio('Db')}>C#<br></br>Db</button>
        <button className='Ab' onClick={() => playAudio('Ab')}>Ab</button>
        <button className='Eb' onClick={() => playAudio('Eb')}>Eb</button>
        <button className='Bb' onClick={() => playAudio('Bb')}>Bb</button>
        <button className='F' onClick={() => playAudio('F')}>F</button>
        <div className='innerCircle'>
          <button className='Am' onClick={() => playAudio('Am')}>Am</button>
          <button className='Em' onClick={() => playAudio('Em')}>Em</button>
          <button className='Bm' onClick={() => playAudio('Bm')}>Bm</button>
          <button className='Gbm' onClick={() => playAudio('Gbm')}>F#m<br></br>Gbm</button>
          <button className='Dbm' onClick={() => playAudio('Dbm')}>C#m<br></br>Dbm</button>
          <button className='Abm' onClick={() => playAudio('Abm')}>G#m</button>
          <button className='Ebm' onClick={() => playAudio('Ebm')}>D#m<br></br>Ebm</button>
          <button className='Bbm' onClick={() => playAudio('Bbm')}>A#m<br></br>Bbm</button>
          <button className='Fm' onClick={() => playAudio('Fm')}>Fm</button>
          <button className='Cm' onClick={() => playAudio('Cm')}>Cm</button>
          <button className='Gm' onClick={() => playAudio('Gm')}>Gm</button>
          <button className='Dm' onClick={() => playAudio('Dm')}>Dm</button>
        </div>
      </div>



      {/* <svg viewBox='29 29 192 192'>
        <circle className='major' cx={125} cy={125} r={76} stroke='#72ac51' strokeWidth={28} fill='none'><button>F</button></circle>
        <circle className='minor' cx={125} cy={125} r={48} stroke='#cfcc41' strokeWidth={28} fill='none'></circle>
        <g transform="translate(60.2728431244298, 57.87356956603959)"><path transform="scale(0.405) rotate(-29)" fill="transparent" d="M0.0569563 8.53484C37.2854 -2.42786 78.3054 -1.64365 110.954 6.59911L94.6218 73.6459C71.1872 68.4288 42.3917 68.4821 19.0453 74.9651L0.0569563 8.53484Z"></path></g>
      </svg> */}
    </div>
  );
}



export default App;
