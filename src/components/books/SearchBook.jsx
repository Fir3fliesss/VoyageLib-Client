import { Search } from "lucide-react";
import React from "react";
const books = [
    {
        title: "Laskar Pelangi",
        author: "dr.Yanto",
        category: "Fiksi",
        stock: "-",
        status: "Online",
    },
    {
        title: "Laskar Pelangi",
        author: "dr.Yanto",
        category: "Non Fiksi",
        stock: "10/10 Borrow",
        status: "Offline",
    },
    {
        title: "Laskar Pelangi",
        author: "dr.Yanto",
        category: "Non Fiksi",
        stock: "-",
        status: "Online",
    },
    {
        title: "Laskar Pelangi",
        author: "dr.Yanto",
        category: "Non Fiksi",
        stock: "10/10 Borrow",
        status: "Offline",
    },
];

function SearchBook() {
    return (
        <div className="space-y-8">
            {/* ================= SEARCH SECTION ================= */}
            <div className="p-4 bg-white rounded-xl shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input
                        className="p-2 rounded-lg border border-gray-300"
                        placeholder="Judul, pengarang, isbn"
                    />

                    <select className="p-2 rounded-lg border border-gray-300">
                        <option>Kategori</option>
                    </select>

                    <select className="p-2 rounded-lg border border-gray-300">
                        <option>Jenis Buku</option>
                    </select>

                    <button className="bg-[#4e21c9] text-white p-2 rounded-lg shadow">
                        Search
                    </button>
                </div>
            </div>

            {/* ================= TABLE SECTION ================= */}
            <div className="p-6 bg-white rounded-xl shadow-md">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-left text-[#340C9D] font-semibold border-b border-gray-300">
                            <th className="pb-3">Book</th>
                            <th className="pb-3">Kategori</th>
                            <th className="pb-3">Stok</th>
                            <th className="pb-3">Jenis Buku</th>
                            <th className="pb-3">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {books.map((book, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-300 hover:bg-gray-100 transition"
                            >
                                {/* Book */}
                                <td className="py-4 flex items-center gap-4">
                                    <div className="w-12 h-16 bg-[#340C9D] rounded-md" />
                                    <div>
                                        <div className="font-semibold text-[#340C9D]">
                                            {book.title}
                                        </div>
                                        <div className="text-gray-700 text-sm">{book.author}</div>
                                    </div>
                                </td>

                                {/* Category */}
                                <td>
                                    <span className="px-3 py-1 bg-[#4e21c9] text-white text-xs rounded-md">
                                        {book.category}
                                    </span>
                                </td>

                                {/* Stock */}
                                <td className="text-gray-800">{book.stock}</td>

                                {/* Status */}
                                <td>
                                    <span
                                        className={`px-3 py-1 text-xs rounded-md ${book.status === "Online"
                                                ? "bg-green-500 text-white"
                                                : "bg-red-500 text-white"
                                            }`}
                                    >
                                        {book.status}
                                    </span>
                                </td>

                                {/* Action */}
                                <td className="space-x-3">
                                    <button className="text-blue-600 hover:underline">Show</button>
                                    <button className="text-green-600 hover:underline">Edit</button>
                                    <button className="text-red-600 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchBook;
