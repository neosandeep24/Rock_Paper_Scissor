import React from 'react';
import { useState } from 'react';
import full from './images/rock-paper-scissors.png'
import rock from './images/rock1.png';
import paper from './images/paper1.png';
import sciss from './images/scissors1.png';

import './App.css';

function App() {
  const [UserInput,SetUserInput]=useState(null);
  const [suggest,Setsuggest]=useState('');
  const [Bot,SetBot]=useState(full);
  const [start,SetStart]=useState('Click on any button to start');

  function Output(event){
    event.preventDefault(); 
    SetStart('');
    const rand = Math.floor(Math.random()*(3))+1;
    //console.log(rand);
    
    if(rand===1)
    {
      SetBot(rock);
      //console.log("Rock");
    }
    else if(rand===2)
    {
      SetBot(paper);
      //console.log("Paper");
    }
    else
    {
      SetBot(sciss);
      //console.log("Scissor");
    }

    if(UserInput===1)
    {
      if(rand===3)
      {
        Setsuggest("You won");
      }
      else if(rand===2)
      {
        Setsuggest("You lose");
      }
      else
      {
        Setsuggest("Draw");
      }
    }
      else if (UserInput===2)
      {
        if(rand===1)
        {
          Setsuggest("You won");
        }
        else if(rand===3)
        {
          Setsuggest("You lose");
        }
        else
      {
        Setsuggest("Draw");
      }
      }
      else if (UserInput===3)
      {
        if(rand===2)
        {
          Setsuggest("You won");
        }
        else if(rand===1)
        {
          Setsuggest("You lose");
        }
        else
      {
        Setsuggest("Draw");
      }
      }
    }
   
  return(
    <div className='App'>
    <br/>
    <br/>
    <br/>
    <h1>Rock Paper Scissor</h1>
    <h3>{start}</h3>
    <form onSubmit={Output} className='card'>
    <img src={Bot} className='imgOut' alt="Bot"/>
    
    <div className='Buttons'>
     <button id='1'
             type='submit'
             value={1}
             className='button'
             onClick={() => SetUserInput(1)} 
      ><img src={rock} alt='rock' className='img'/></button>

      <button id='2'
             type='submit'
             value={2}
             className='button'
             onClick={() => SetUserInput(2)} 
      ><img src={paper} alt='paper'className='img'/></button>

      <button id='3'
             type='submit'
             value={3}
             className='button'
             onClick={() => SetUserInput(3)} 
      ><img src={sciss} alt='scissor' 
                         className='img'/></button>
      

                         </div>
                         <h1>{suggest}</h1>

    </form>
    </div>
  );
  }

export default App;

