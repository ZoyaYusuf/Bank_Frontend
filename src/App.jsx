import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import InterestCalculatorPage from './pages/InterestCalculatorPage'

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<InterestCalculatorPage />} />
      </Routes>
    </BrowserRouter>
  )
}
