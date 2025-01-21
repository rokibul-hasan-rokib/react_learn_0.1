import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">Shortlist</span>
        <div className="search-bar">
          <input
            type="text"
            placeholder="What Service you want?"
            className="search-input"
          />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="navbar-right">
        <a href="#">Find providers</a>
        <a href="#">Get Clients</a>
        <div className="profile">
          <Image
            src="/vercel.svg"
            alt="Profile Picture"
            width={35}
            height={35}
            className="profile-pic"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
