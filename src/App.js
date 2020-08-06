import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom'
import './temp.css'


function App() {
  return (
    <div className="App">
      <ul class="tilesWrap">
        <li>
          <h2>N</h2>
          <h3>Discord</h3>
          <p>
            Our place to chat and meme with eachother
          </p>
          <form action="https://discord.gg/tJE8u3r">
              <button type="submit">Join Discord</button>
          </form>
        </li>
        <li>
          <h2>O</h2>
          <h3>Twitter</h3>
          <p>
            We write stuff sometimes
          </p>
          <form action="https://twitter.com/ironsgrotto">
              <button type="submit">Tweets</button>
          </form>
        </li>
        <li>
          <h2>O</h2>
          <h3>Forums</h3>
          <p>
            Our section in the official RuneScape forums
          </p>
          <form action="https://tinyurl.com/y65odt3x">
            <button type="submit">Bump</button>
          </form>
        </li>
        <li>
          <h2>B</h2>
          <h3>Temple</h3>
          <p>
            A place to track clan gains and competitions
          </p>
          <form action="https://tinyurl.com/yypyakk3">
            <button type="submit">XP</button>
          </form>
        </li>
      </ul>
    </div>
  );
}

export default App;
