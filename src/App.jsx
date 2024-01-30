import { useState } from 'react';
import './app.scss';
import Welcome from './components/welcome/Welcome';
import Editor from './components/editor/Editor';

function App() {
  const storedShowWelcome = localStorage.getItem('show-welcome');
  const [showWelcome, setShowWelcome] = useState(storedShowWelcome ? storedShowWelcome === 'true' : true);

  const updateWelcomeState = (showAgain) => {
    localStorage.setItem('show-welcome', showAgain);
    setShowWelcome(false);
  };

  
  return (
    <div className="wrapper">
      {showWelcome ? <Welcome updateWelcomeState={updateWelcomeState} /> : <Editor />}
    </div>
  )
}

export default App
