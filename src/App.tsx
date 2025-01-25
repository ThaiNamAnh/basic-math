import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useNavigate } from "react-router";


function App() {
  const navigate = useNavigate();
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
      <button onClick={() => navigate('/basic-math/phep-cong')}>Phep Cong</button>
      <button onClick={() => navigate('/basic-math/phep-nhan')}>Phep Nhan</button>
      <button onClick={() => navigate('/basic-math/text-to-speech')}>Text To Speech</button>
      <button onClick={() => navigate('/basic-math/video-youtube')}>Video Youtube</button>
    </>
  )
}

export default App
