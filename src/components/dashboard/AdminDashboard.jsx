import Navbar from "../common/Navbar"
import Sidebar from "../common/Sidebar"
import AddBookForm from "../books/AddBookForm"
import MainLayout from "../../layouts/main.layout"

function AdminDashboard() {
  return (
    <MainLayout >
      <AddBookForm />
    </MainLayout>
  )
}

export default AdminDashboard