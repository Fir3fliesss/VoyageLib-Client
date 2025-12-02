import { useState } from 'react';

// Main Management Promotions Component
function ManagementPromotions() {
    const [promotions, setPromotions] = useState(Array(12).fill(null));
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        if (selectedImage) {
            const newPromotions = [...promotions];
            const emptyIndex = newPromotions.findIndex(p => p === null);
            if (emptyIndex !== -1) {
                newPromotions[emptyIndex] = selectedImage;
                setPromotions(newPromotions);
                setSelectedImage(null);
            }
        }
    };

    const handleDelete = (index) => {
        const newPromotions = [...promotions];
        newPromotions[index] = null;
        setPromotions(newPromotions);
    };

    const totalPromotions = promotions.filter(p => p !== null).length;

    return (
        <div className="flex h-screen bg-gray-100">
            { }
            {/* <Sidebar /> */}
            
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Navbar - panggil komponen Navbar Anda di sini */}
                {/* <Navbar /> */}
                
                <main className="flex-1 overflow-y-auto bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-3xl font-bold text-purple-900 mb-2">Manajement Promotions</h1>
                        <p className="text-gray-600 mb-6">Kelola koleksi buku perpustakaan</p>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                            {/* Create Promotions Card */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h2 className="text-purple-700 font-semibold mb-4">Create Promotions</h2>
                                <div className="border-2 border-dashed border-purple-300 rounded-xl p-8 text-center">
                                    <label htmlFor="image-upload" className="cursor-pointer">
                                        {selectedImage ? (
                                            <img src={selectedImage} alt="Preview" className="w-full h-32 object-cover rounded-lg mb-2" />
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-purple-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        )}
                                    </label>
                                    <input
                                        id="image-upload"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageUpload}
                                    />
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                                >
                                    Submit
                                </button>
                            </div>

                            {/* Total Promotions Card */}
                            <div className="lg:col-span-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl shadow-lg p-6 text-white">
                                <h2 className="text-xl font-semibold mb-2">Total Promotions</h2>
                                <p className="text-6xl font-bold">{totalPromotions}</p>
                            </div>
                        </div>

                        {/* Promotions Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {promotions.map((promo, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    <div className="bg-purple-300 h-32 flex items-center justify-center">
                                        {promo ? (
                                            <img src={promo} alt={`Promotion ${index + 1}`} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-purple-500 text-4xl">📷</span>
                                        )}
                                    </div>
                                    <div className="p-3">
                                        <button
                                            onClick={() => handleDelete(index)}
                                            disabled={!promo}
                                            className={`w-full py-2 rounded-lg font-semibold transition duration-200 ${
                                                promo
                                                    ? 'bg-red-500 hover:bg-red-600 text-white'
                                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                            }`}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>

                {/* Admin Footer */}
                <div className="bg-purple-700 text-white py-3 px-6 flex items-center">
                    <div className="flex items-center">
                        <div className="bg-white rounded-full p-2 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                        <span className="font-semibold">Admin</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManagementPromotions;