import './App.css'
import {Route, Routes}  from 'react-router-dom'
import LobbyScreen from './Pages/LobbyScreen'

function App() {
  return (
   <Routes>
      <Route path='/' element={ <LobbyScreen/>}/>
    
   </Routes>
  )
}

export default App
