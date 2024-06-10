import { useState } from 'react'
import Master from './components/master'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Master/>
   </>
  )
}

export default App
