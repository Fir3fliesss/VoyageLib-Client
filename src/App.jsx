<<<<<<< HEAD
import AdminDashboard from "./pages/AdminDashboard"
import StaffDashboard from "./pages/StaffDashboard"
=======
import CreateBooks from "./pages/CreateBooks"
import CardDashboard from "./pages/AdminDashboard"
>>>>>>> 22e2fc70149701b3fa8a7b88380c2c39e627f7a1
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUpForm from "./components/auth/RegisterForm"
import SignInForm from "./components/auth/LoginForm"


<<<<<<< HEAD
=======

>>>>>>> 22e2fc70149701b3fa8a7b88380c2c39e627f7a1
function App() {
  return (
  
    <BrowserRouter >
      <Routes >
<<<<<<< HEAD
        <Route path="/book/create" element={<AdminDashboard />}/>
        <Route path="/" element={<StaffDashboard />}/>
        <Route path="/RegisterForm" element={<SignUpForm />}/>
        <Route path="/LoginForm" element={<SignInForm />}/>
=======
        <Route path="/" element={<CreateBooks />}/>
        <Route path="/dashboard" element={<CardDashboard />}/>
>>>>>>> 22e2fc70149701b3fa8a7b88380c2c39e627f7a1
      </Routes>
    </BrowserRouter>
  )
}

export default App;
