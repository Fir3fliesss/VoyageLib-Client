<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import CreateBooks from "./pages/CreateBooks"
import CardDashboard from "./pages/AdminDashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUpForm from "./components/auth/RegisterForm"
import SignInForm from "./components/auth/LoginForm"
import SearchBooks from "./pages/SearchBooks"
>>>>>>> 4254c6f759639e37fc1cfe33ee510f44039551c6

import AdminDashboard from "./pages/AdminDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import CreateBooks from "./pages/CreateBooks";
import CardDashboard from "./pages/AdminDashboard"; // kalau ini salah, nanti kamu ubah
import SignUpForm from "./components/auth/RegisterForm";
import SignInForm from "./components/auth/LoginForm";

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>

        {/* Default halaman staff */}
        <Route path="/" element={<StaffDashboard />} />

        {/* Admin Dashboard */}
        <Route path="/dashboard" element={<AdminDashboard />} />

        {/* Halaman khusus pembuatan buku */}
        <Route path="/book/create" element={<CreateBooks />} />

        {/* Login & Register */}
        <Route path="/RegisterForm" element={<SignUpForm />} />
        <Route path="/LoginForm" element={<SignInForm />} />

        {/* CardDashboard (kalau ini memang diperlukan) */}
        <Route path="/card" element={<CardDashboard />} />

=======
  
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<CreateBooks />}/>
        <Route path="/dashboard" element={<CardDashboard />}/>
        <Route path="/register" element={<SignUpForm />}/>
        <Route path="/login" element={<SignInForm />}/>
        <Route path="/searchbooks" element={<SearchBooks />}/>
>>>>>>> 4254c6f759639e37fc1cfe33ee510f44039551c6
      </Routes>
    </BrowserRouter>
  );
}

export default App;
