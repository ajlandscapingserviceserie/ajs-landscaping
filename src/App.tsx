import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Investment from './pages/Investment'
import Portfolio from './pages/Portfolio'
import FullDetailDescription from './pages/FullDetailDescription'
import SeasonalProperyCareSubscription from './pages/SeasonalProperyCareSubscription'



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog/full-detail-description" element={<FullDetailDescription />} />
          <Route path="/blog/seasonal-property-care-subscription" element={<SeasonalProperyCareSubscription />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App