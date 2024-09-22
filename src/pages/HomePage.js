import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const HomePage = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">
          Welcome to MelodyVerse
        </h1>
        <p className="text-center mb-4">Hello, {user.username}!</p>
        <button
          onClick={handleLogout}
          className="w-full bg-indigo-600 text-white rounded-lg py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
