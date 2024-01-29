import { useState, useEffect } from 'react';
import * as Marked from 'marked';
import './app.scss';
import Welcome from './components/welcome/Welcome';

function App() {
  const storedShowWelcome = localStorage.getItem('show-welcome');
  const [showWelcome, setShowWelcome] = useState(storedShowWelcome ? storedShowWelcome === 'true' : true);

  const updateWelcomeState = (showAgain) => {
    localStorage.setItem('show-welcome', showAgain);
    setShowWelcome(false);
  };

  // const [markdownText, setMarkdownText] = useState('# Введите свой текст здесь');

  // useEffect(() => {
  //   const htmlText = Marked.marked(markdownText, { sanitize: true });
  //   document.getElementById('preview').innerHTML = htmlText;
  // }, [markdownText]);

  // const handleInputChange = (event) => {
  //   setMarkdownText(event.target.value);
  // };

  return (
    <div className="wrapper">
      {showWelcome ? <Welcome updateWelcomeState={updateWelcomeState} /> : null}
      
    </div>
  )
}

export default App
