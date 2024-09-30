import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Registerp } from './page/Register'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Registerp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
