import logo from './logo.svg';
import './App.css';
import React from 'react';
import WordCard from './WordCard';
import CharacterCard from './CharacterCard';
const  word = ["cat", "monkey", "mole", "wolf", "sheep", "whale", "bison", "rabbit"];
const randomword = word[Math.floor(Math.random() * word.length)];
function delay(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
 }
function App() {
    return (
        <div>
            <h1 align = "center" > Random name of animal
        <WordCard value= {randomword}/>   
        </h1>    
        </div>
        );      
}

export default App;

