import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from "./Component/Menu"
import Hero from "./Component/Hero"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Menu/>
      <Hero/>
      {/* <Content/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default App
