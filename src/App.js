import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet otherName="Other Name" name="Joanne">
        <p>This is children props</p>
      </Greet>
      <Hello />
    </div>
  );
}

export default App;

// next video: 10 - state
// . venv/bin/activate