
import './App.css'
import AddTodo from './components/AddTodo'
import Filter from './components/Filter'
import TodoList from './components/TodoList'
import { TodoContext } from './context/TodoContextProvider'

function App() {

  return (
    <div className='todo-app'>
      <h1>Todo list</h1>
      <TodoContext>
      <AddTodo/>
      <TodoList/>
      <Filter/>
      </TodoContext>
    </div>
  )
}

export default App