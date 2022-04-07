import './App.css';

import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';



function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <TodoList />
        <TodoInput />
      </div>      
    </div>
  );
}

export default App;
