import logo from './logo.svg';
import './App.css';
import React from 'react';
import WordCard from './WordCard';
import CharacterCard from './CharacterCard';
const word = ["cat", "monkey", "mole", "wolf", "sheep", "whale", "bison", "rabbit"];
const randomElement = word[Math.floor(Math.random() * word.length)];
function App() {
    return (
        <div>
            <h1 align = "center"> สุ่มชื่อสัตว์
        <WordCard value= {randomElement}/>   
        </h1>    
        </div>
        );      
}
export default App;

