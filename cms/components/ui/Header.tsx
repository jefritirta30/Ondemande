import { FaSearch, FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-end">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Cari kamera..."
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaBell className="text-gray-600 text-xl hover:text-indigo-600 cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </div>
          <div className="relative group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white cursor-pointer">
              <span className="font-bold">A</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
