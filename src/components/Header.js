import React from "react";
import { navigate } from "@reach/router";

const Header = ({ leftText }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login", { state: "logout" });
  };
  return (
    <div>
      <nav className="flex items-center justify-between w-full bg-neutral-600 px-10 py-5">
        <h1 className="text-2xl text-white font-semibold">{leftText}</h1>
        <button
          className="bg-white hover:bg-white text-neutral-700 font-semibold hover:text-blue-700 py-2 px-4 border hover:border-transparent rounded"
          onClick={handleLogout}
        >
          Logout
        </button>

      </nav>
    </div>
  );
};

export default Header;
