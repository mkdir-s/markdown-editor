import React from 'react';
import './index.scss';

function Welcome({ updateWelcomeState }) {

  const onClickStartButton = () => {
    updateWelcomeState();
  }

  return (
    <section className="welcome">
      <h1 className="welcome__title">Welcome to Markdown Editor!</h1>
      <p className='welcome__descr'>Here you can create and edit your Markdown text and get the result in real time.</p>
      <button className='welcome__button' onClick={onClickStartButton}>let's start</button>
    </section>
  )
}

export default Welcome