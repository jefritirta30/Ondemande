import React from "react";
import { FaCamera, FaDollarSign, FaClock } from "react-icons/fa";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow p-4 blur-bg stats-card transition-all duration-300">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500">Total Kamera</p>
            <h3 className="text-2xl font-bold">24</h3>
            <p className="text-sm text-green-500 mt-1 flex items-center">
              <span className="inline-flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  ></path>
                </svg>
                5% dari bulan lalu
              </span>
            </p>
          </div>
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <FaCamera className="text-xl" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 blur-bg stats-card transition-all duration-300">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500">Total Nilai</p>
            <h3 className="text-2xl font-bold">Rp 187.350.000</h3>
            <p className="text-sm text-green-500 mt-1 flex items-center">
              <span className="inline-flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  ></path>
                </svg>
                12% dari bulan lalu
              </span>
            </p>
          </div>
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <FaDollarSign className="text-xl" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 blur-bg stats-card transition-all duration-300">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500">Baru Ditambahkan</p>
            <h3 className="text-2xl font-bold">5</h3>
            <p className="text-sm text-green-500 mt-1 flex items-center">
              <span className="inline-flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  ></path>
                </svg>
                2 minggu ini
              </span>
            </p>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <FaClock className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
