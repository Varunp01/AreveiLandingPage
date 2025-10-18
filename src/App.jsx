import { useState } from 'react'
import './App.css'
import LandingPageBody from './LandingPageComponents/LandingpageBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LandingPageBody></LandingPageBody>
    </>
  )
}

export default App
