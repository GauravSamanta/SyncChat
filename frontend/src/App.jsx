import './App.css'
import { WavyBackground } from './components/wavy'
import Home from './pages/home/Home'
import Login from './pages/login/Login'

function App() {


  return (
  <div className='p-4 h-screen flex items-center justify-center'>
    <WavyBackground>
<Login/>
    </WavyBackground>
    
    
    
    
  </div>
  )
}

export default App
