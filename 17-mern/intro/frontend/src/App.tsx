import {BrowserRouter,Route,Routes} from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import CreateTask from './pages/CreateTask'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/newPratimas' element={<CreateTask/>}/>
          </Routes>
        </div>
      </BrowserRouter>


    </div>
  )
}

export default App
