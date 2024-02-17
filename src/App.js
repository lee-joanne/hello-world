import './App.css';
import Counter from './components/Counter';
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
      {/* <Message/> */}
      <Counter />
    </div>
  );
}

export default App;

// next video: 12 Destructuring
// . venv/bin/activate