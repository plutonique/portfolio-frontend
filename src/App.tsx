import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App text-3xl font-bold underline text-green-400">
      <h1>VITE + Tailwind</h1>
    </div>
  )
}

export default App
