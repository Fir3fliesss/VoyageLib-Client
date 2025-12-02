import React from "react";

 function CardDashboard() {
  return (
    <div className="w-full p-6 space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
      
        <div className="bg-[#6f4ff4] text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
          <div className="text-sm font-bold opacity-80">Total Books</div>
          <div className="text-4xl font-bold">20</div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#6f4ff4] text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
          <div className="text-sm font-bold opacity-80">Total Members</div>
          <div className="text-4xl font-bold">20</div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#6f4ff4] text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
          <div className="text-sm font-bold opacity-80">Borrowed</div>
          <div className="text-4xl font-bold">20</div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Most Popular Books */}
        <div className="bg-[#6f4ff4] text-white p-6 rounded-xl shadow-xl">
          <h2 className="font-bold text-lg mb-4">Most Popular Books</h2>
          <div className="grid grid-cols-2 font-semibold mb-2 text-sm opacity-90">
            <span>Book</span>
            <span className="text-right">Borrowed</span>
          </div>

          <div className="space-y-2 text-sm">
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="grid grid-cols-2 bg-[#836bff]/40 p-2 rounded-lg">
                <span>most popular books</span>
                <span className="text-right">3 kali</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-[#6f4ff4] text-white p-6 rounded-xl shadow-xl">
          <h2 className="font-bold text-lg mb-4">Recent Activities</h2>

          <div className="space-y-2 text-sm">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="flex justify-between items-center bg-[#836bff]/40 p-2 rounded-lg">
                <div>
                  <span className="font-semibold">aktor user</span> — judul buku
                </div>
                <span className="opacity-80">1 week ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDashboard