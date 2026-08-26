import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import BarcaDetail from './pages/project-detail/BarcaDetail'
import MessiDetail from './pages/project-detail/MessiDetail'
import PulperiaDetail from './pages/project-detail/PulperiaDetail'

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos/barca" element={<BarcaDetail />} />
          <Route path="/proyectos/messi" element={<MessiDetail />} />
          <Route path="/proyectos/pulperia" element={<PulperiaDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
