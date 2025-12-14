import { useState } from 'react'
import Main_page from './Main_page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main_page/>
    </>
  )
}

export default App
