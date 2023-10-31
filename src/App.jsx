import { useState } from 'react'
import { Sidebar } from './components/sidebar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Sidebar />
    </>
  )
}

export default App
