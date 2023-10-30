import { TodoItem }  from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import './App.css';

function App() {
  return (
    <div className="App">

    <TodoCounter />
    <TodoSearch />

    <TodoList>
      <TodoItem />
      <TodoItem />
      <TodoItem />  
    </TodoList>

    <CreateTodoButton />    
    </div>
  );
}

export default App;
