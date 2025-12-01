// import Navbar from "../common/Navbar"
// import Sidebar from "../common/Sidebar"
import Sidebar from "../components/common/Sidebar"
import Navbar from "../components/common/Navbar"

function MainLayout({children}) {
  return (
    <>
      <div className="flex w-screen ">
        <Sidebar />
        <div className="w-full flex flex-col">
        <Navbar />
          { children }
        </div>
      </div>
    </>
  )
}

export default MainLayout