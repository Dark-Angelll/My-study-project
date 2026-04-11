import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Energy } from './components/Energy'
import { Pythagoras } from './components/Pythagoras'
import { Cilindre } from './components/Cilindre'
import { Title } from './components/Title'
import { Water } from './components/Water'
import { Square } from './components/Square'
import { Summ } from './components/Summ'
import { Logarifm } from './components/Logarifm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Dark + Angell</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="Formulas">
      <Title/>
      <Energy/>
      <Pythagoras/>
      <Cilindre/>
      <Square/>
      <Summ/>
      <Water/>
      <Logarifm/>
      </div>
      </>
  )
}

export default App
