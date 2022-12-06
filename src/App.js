
import React from 'react';
import Board from './board';
import './App.css';
import Timer from './timer';
import './timer.css';

function App() {
  return (
    <div>
      <div className="heading">
        
      <h1>🎁 Gift Finder 🎁</h1>

      </div>

      <div className="container">  
      <div className="aligned">   
       <Board/>
       <div class="textbox">
              <div >Oh no!
      The elves have mixed all the gifts with coal!
      Luckly the elves have left clues behind. 
      Right click to identifying all the gifts with a red flag.
      Left click to eliminate the coal and unlock more clues
      If Santa identifies all the gifts correctly, the elves will return the gifts in time to save Christmas!
      <Timer/></div></div>
        
      </div>
     </div>
    

    <footer className="footer">
      <div>Made By: Teena Ortega</div>
      <div>Merry Christmas!</div>
    </footer>
    </div >
    );
}


export default App;