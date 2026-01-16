import { useState } from 'react'
import Navbar from './navbar'
import './App.css'
import Home from './home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
     </div>
    </>
  )
}

export default App
