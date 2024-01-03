import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <Greet otherName="Other Name" name="Joanne">
        <p>This is children props</p>
      </Greet>
      <Hello /> */}
      <Message/>
    </div>
  );
}

export default App;

// next video: 11
// . venv/bin/activate