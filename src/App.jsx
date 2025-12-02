import CreateBooks from "./pages/CreateBooks"
import CardDashboard from "./pages/AdminDashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  return (
  
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<CreateBooks />}/>
        <Route path="/dashboard" element={<CardDashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
