import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Galeria from './pages/Galeria'
import Contactos from './pages/Contacto'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/contacto' element={<Contactos />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
