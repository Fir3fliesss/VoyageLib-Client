import AdminDashboard from "./components/dashboard/AdminDashboard"
import StaffDashboard from "./components/dashboard/StaffDashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"



function app() {
  return (
    // <>
    // <AdminDashboard />
    // </>
    <BrowserRouter >
      <Routes >
        <Route path="/book/create" element={<AdminDashboard />}/>
        <Route path="/" element={<StaffDashboard />}/>
        <Route path="/bo" element={<haghbxacbaDashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default app