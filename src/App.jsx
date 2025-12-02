import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminDashboard from "./pages/AdminDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import CreateBooks from "./pages/CreateBooks";
import CardDashboard from "./pages/AdminDashboard"; // kalau ini salah, nanti kamu ubah
import SignUpForm from "./components/auth/RegisterForm";
import SignInForm from "./components/auth/LoginForm";

function App() {
  return (
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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
