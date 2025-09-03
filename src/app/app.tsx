import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import CardNav from './components/NavCard'

export function App() {
  return (
    <>
      <Router>
        <CardNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}
