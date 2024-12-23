import React from 'react';
import { useLocation } from 'react-router-dom';
import Navebar from '../Combonents/Navebar';
import { Link } from 'react-router-dom';

function Detailse() {
  const location = useLocation();
  const { cart } = location.state || {};

  return (
    <div className="flex flex-col min-h-screen">
      <Navebar />
      <div className="flex-grow flex items-center justify-center mt-[85px] md:mt-2 bg-gray-100">
        {cart ? (
          <div className="max-w-sm w-full bg-white p-4 rounded shadow hover:shadow-lg transition flex flex-col justify-between">
            <div className="flex items-center flex-col">
              <img
                src={cart.url}
                alt={cart.PlantName}
                className="h-64 w-full object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold">{cart.PlantName}</h2>
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-gray-600">Planting Day: {cart.plantingDay}</h2>
              <h2 className="text-gray-600">Height: {cart.Height}</h2>
            </div>
            <div className="flex justify-around gap-5 mt-4">
              <button className="w-[150px] text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Order
              </button>
              <Link to="/chating" className="w-[150px] text-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5">
                Comment
              </Link>
            </div>
          </div>
        ) : (
          <p>No details available</p>
        )}
      </div>
    </div>
  );
}

export default Detailse;
