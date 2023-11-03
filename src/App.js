import './App.css';
import Player from './components/Player/Player';
import AllChallenges from './components/challenge/AllChallenges';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>THE <span>ALMOST</span> FINAL COUNTDOWN</h1>
          <p>Stop the timer once you estimate that time is (almost) up</p>
        </header>
        <Player />
        <AllChallenges />
      </div>
    </div>
  );
}

export default App;
