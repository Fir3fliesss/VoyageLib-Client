import CreateBooks from "./pages/CreateBooks"
import CardDashboard from "./pages/AdminDashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUpForm from "./components/auth/RegisterForm"
import SignInForm from "./components/auth/LoginForm"
import SearchBooks from "./pages/SearchBooks"


function App() {
  return (
  
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<CreateBooks />}/>
        <Route path="/dashboard" element={<CardDashboard />}/>
        <Route path="/register" element={<SignUpForm />}/>
        <Route path="/login" element={<SignInForm />}/>
        <Route path="/searchbooks" element={<SearchBooks />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
