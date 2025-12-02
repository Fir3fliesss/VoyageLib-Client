import AdminDashboard from "./pages/AdminDashboard"
import StaffDashboard from "./pages/StaffDashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUpForm from "./components/auth/RegisterForm"
import SignInForm from "./components/auth/LoginForm"


function App() {
  return (
    // <>
    // <AdminDashboard />
    // </>
    <BrowserRouter >
      <Routes >
        <Route path="/book/create" element={<AdminDashboard />}/>
        <Route path="/" element={<StaffDashboard />}/>
        <Route path="/RegisterForm" element={<SignUpForm />}/>
        <Route path="/LoginForm" element={<SignInForm />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
