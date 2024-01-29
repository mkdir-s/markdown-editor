import React from 'react';
import { useState } from 'react';
import './index.scss';

function Welcome({ updateWelcomeState }) {
  const [showAgain, setShowAgain] = useState(true);

  const onClickStartButton = () => {
    updateWelcomeState(showAgain);
  }

  return (
    <section className="welcome">
      <h1 className="welcome__title">Welcome to Markdown Editor!</h1>
      <p className='welcome__descr'>Here you can create and edit your Markdown text and get the result in real time.</p>
      <button className='welcome__button' onClick={() => onClickStartButton()}>let's start</button>
      <div className="welcome__agreement">
        <input id='show' type="checkbox" onChange={() => setShowAgain(!showAgain)} /> <label htmlFor="show">doesn't show again</label>
      </div>
    </section>
  )
}

export default Welcome