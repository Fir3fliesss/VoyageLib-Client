import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            {/* Sidebar */}
            <div className="hidden h-screen md:flex flex-col w-64 bg-[#9CBBFF] ">
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav className="flex flex-col flex-1 overflow-y-auto bg-[#9CBBFF]px-2 py-4 gap-10 rounded-2xl">

                        <div>
                            <Link to="/" className="flex items-center px-4 py-2 text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <span className="text-lg font-semibold ">VoyageLib</span>
                            </Link>
                        </div>

                        <div className="flex flex-col flex-1 gap-3">
                            {/* Home */}
                            <Link to="/dashboard" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-[#340C9D]  hover:bg-opacity-25 rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" className="mr-2">
                                    <path fill="currentColor" fillRule="evenodd"
                                        d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6l2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2z"
                                        clipRule="evenodd" />
                                </svg>
                                Dashboard
                            </Link>

                            {/* Manajement account */}
                            <Link to="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-[#340C9D]  hover:bg-opacity-25 rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    className="mr-2" viewBox="0 0 32 32">
                                    <path fill="currentColor"
                                        d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zm0-26h10v2H22zm0 5h10v2H22zm0 5h7v2h-7z" />
                                </svg>
                                Manajement Account
                            </Link>

                            {/* manajement book*/}
                            <Link to="/searchbooks" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-[#340C9D]  hover:bg-opacity-25 rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    className="mr-2" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" strokeWidth="2"
                                        d="M16 7h3v4h-3zm-7 8h11M9 11h4M9 7h4M6 18.5a2.5 2.5 0 1 1-5 0V7h5.025M6 18.5V3h17v15.5a2.5 2.5 0 0 1-2.5 2.5h-17" />
                                </svg>
                                Manajement Book
                            </Link>

                            {/* create book */}

                            <Link to="/" className="flex items-center px-4 py-2 mt-2 text-white hover:bg-[#340C9D] hover:bg-opacity-25 rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    className="mr-2" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5h14v5h2V5c0-1.1-.9-2-2-2m-3 7h-4v4h-2v-4H6V8h4V4h2v4h4v2z" />
                                </svg>
                                Create Book
                            </Link>


                            {/* Users */}
                            <Link to="#" className="flex items-center px-4 py-2 mt-auto text-gray-100 bg-[#340C9D] hover:bg-opacity-25 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    className="mr-2" viewBox="0 0 32 32">
                                    <path fill="currentColor"
                                        d="M21.053 20.8c-1.132-.453-1.584-1.698-1.584-1.698s-.51.282-.51-.51s.51.51 1.02-2.548c0 0 1.413-.397 1.13-3.68h-.34s.85-3.51 0-4.7c-.85-1.188-1.188-1.98-3.057-2.547s-1.188-.454-2.547-.396c-1.36.058-2.492.793-2.492 1.19c0 0-.85.056-1.188.396c-.34.34-.906 1.924-.906 2.32s.283 3.06.566 3.625l-.337.114c-.284 3.283 1.13 3.68 1.13 3.68c.51 3.058 1.02 1.756 1.02 2.548s-.51.51-.51.51s-.452 1.245-1.584 1.698c-1.132.452-7.416 2.886-7.927 3.396c-.512.51-.454 2.888-.454 2.888H29.43s.06-2.377-.452-2.888c-.51-.51-6.795-2.944-7.927-3.396z" />
                                </svg>
                                Users
                            </Link>

                        </div>
                    </nav>
                </div>
            </div>
        </>
    );

}

export default Sidebar;