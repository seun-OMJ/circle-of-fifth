import './App.css';
import C from "./chord library/C major.wav";




export default function play_C_Chord() {
    return new Audio(C).play();
}


