import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>Hi, I'm Jorge 👋</h1>
        <hr/>
        <p>
          I'm an experienced full-stack engineer with a focus on backend and strong leadership skills.
          Adept in multiple programming languages and frameworks.
          Proven track record of delivering high-quality solutions and improving processes.
          Committed to ongoing education and mentorship.
        </p>
        <p>
          Today I work mainly with Ruby, Rails, Typescript and React on <a className='App-link' href='https://www.catawiki.com/en/'>Catawiki</a>.
        </p>
        <h2>Links</h2>
        <ul>
          <li>linkedin <a className='App-link' href='https://www.linkedin.com/in/jorge-modesto-neto/'>/in/jorge-modesto-neto</a></li>
          <li>github <a className='App-link' href='https://github.com/jorgemdnt'>@jorgemdnt</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
