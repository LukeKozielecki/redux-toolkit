import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter'
import { TodoListBuilder } from './features/counter/TodoListBuilder'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TodoListBuilder />
      </header>
    </div>
  );
}

export default App;
