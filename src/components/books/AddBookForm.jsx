function AddBookForm() {
    return (
        <>
            <div className="flex items-center justify-center p-6 space-y-6 ">
                <div className="w-full max-w-sm bg-[#9CBBFF] p-6 rounded-xl shadow-lg">

                    <form>
                        <div className="space-y-4">

                            <h1 className="text-center">
                                <span className="text-2xl font-bold text-[#340C9D]">
                                    New Book
                                </span>
                            </h1>

                            {/* 2 KOLOM */}
                            <div className="flex gap-7 items-start">

                                {/* KOLOM KIRI */}
                                <div className="w-40 space-y-3">

                                    {/* Title Book */}
                                    <div>
                                        <label className="block mb-1 font-medium text-[#340C9D]">Title Book :</label>
                                        <input
                                            type="text"
                                            className="w-full pl-3 pr-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm
                         focus:ring-[#340C9D] focus:border-[#340C9D]"
                                        />
                                    </div>

                                    {/* Total Stock */}
                                    <div>
                                        <label className="block mb-1 font-medium text-[#340C9D]">Total Stock :</label>
                                        <input
                                            type="text"
                                            className="w-full pl-3 pr-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm
                         focus:ring-[#340C9D] focus:border-[#340C9D]"
                                        />
                                    </div>

                                    {/* Kategori */}
                                    <div>
                                        <label className="block mb-1 font-medium text-[#340C9D]">Kategori :</label>
                                        <input
                                            type="text"
                                            className="w-full pl-3 pr-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm
                         focus:ring-[#340C9D] focus:border-[#340C9D]"
                                        />
                                    </div>

                                    {/* Deskripsi */}
                                    <div>
                                        <label className="block mb-1 font-medium text-[#340C9D]">Deskripsi :</label>
                                        <input
                                            type="text-area"
                                            className="w-85 h-16 pl-3 pr-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm
                         focus:ring-[#340C9D] focus:border-[#340C9D]"
                                        />
                                    </div>

                                </div>

                                {/* KOLOM KANAN */}
                                <div className="w-40 space-y-3">

                                    {/* Upload Image */}
                                    <div>
                                        <label className="block mb-1 font-medium text-[#340C9D]">Upload Image :</label>

                                        <div className="relative">
                                            <svg
                                                className="h-5 w-5 absolute left-2 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>

                                            <input
                                                type="file"
                                                className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm
                           focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Penerbit */}
                                    <div>
                                        <label className="block mb-1 font-medium text-[#340C9D]">Penerbit :</label>
                                        <input
                                            type="text"
                                            className="w-full pl-3 pr-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm
                         focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    {/* ISBN */}
                                    <div>
                                        <label className="block mb-1 font-medium text-[#340C9D]">ISBN :</label>
                                        <input
                                            type="text"
                                            className="w-full pl-3 pr-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm
                         focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                </div>

                            </div>

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-[#340C9D] text-white rounded-md hover:bg-[#2c0a8a]
                   focus:ring-2 focus:ring-offset-2 focus:ring-[#340C9D]"
                            >
                                submit
                            </button>

                        </div>
                    </form>

                </div>
            </div>
        </>

    );
}

export default AddBookForm;
