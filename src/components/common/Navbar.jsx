function Navbar() {
    return (
        <>
            {/* Main content */}
            <div className="flex w-full">

                <div className="flex items-center justify-between w-full h-20 bg-[#9CBBFF] border-b border-white" >
                    <div className="flex items-center px-4">

                        <div className="relative mx-auto text-gray-600">
                            <input
                                className="border border-gray-300 h-10 w-96 px-5 pr-16 bg-white rounded-lg text-sm placeholder-current focus:outline-none dark:white-500 dark:border-gray-50 dark:text-gray-200"
                                type="search"
                                name="search"
                                placeholder="Search here..."
                            />


                            <button type="submit" className="absolute left-0 top-0 mt-3 mr-4">
                                <svg className="text-white dark:text-gray-200 h-4 w-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144..." />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Navbar;
