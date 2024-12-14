import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/pages/Navbar'
import Herosection from './components/pages/Herosection'
import About from './components/pages/About'
import Service from './components/pages/Service'
import Contact from './components/pages/Contact'
import Galary from './components/pages/Galary'
import Testimonial from './components/pages/Testimonial'
import Footer from './components/pages/Footer'
import Testimonia2 from './components/pages/Testimonial2'
import LearnMore from './components/pages/LearnMore'

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Herosection/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/galary' element={<Galary/>}></Route>
        <Route path='/testimonial' element={<Testimonia2/>}></Route>
        <Route path='/learn' element={<LearnMore/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
