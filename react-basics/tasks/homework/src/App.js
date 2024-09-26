import logo from './logo.svg';
import './App.css';
import CounterApp from './components/counter';
import TodoApp from './components/todoApp';

function App() {
  return (
    <div className="App">
      <CounterApp/>
      {/* <TodoApp/> */}
    </div>
  );
}

export default App;
