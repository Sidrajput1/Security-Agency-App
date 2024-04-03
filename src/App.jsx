import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/pages/Navbar'
import Herosection from './components/pages/Herosection'
import About from './components/pages/About'
import Service from './components/pages/Service'

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Herosection/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
      </Routes>

    </>
  )
}

export default App
