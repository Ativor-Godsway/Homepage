import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const handleUnauthorized = (e) => {
    e.preventDefault();

    toast.error("Unauthorized route", {
      duration: 2500,
      style: {
        borderRadius: "12px",
        background: "#111",
        color: "#fff",
        padding: "12px 16px",
        fontWeight: "500",
      },
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/70 backdrop-blur-xl border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex flex-col leading-tight">
            <span className="text-2xl font-semibold">KORYIS</span>
            <span className="text-xs opacity-60">Intelligent Companion</span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-6 font-medium">
            <a href="#home" className="hover:opacity-70">
              Home
            </a>
            <a href="#why-ic" className="hover:opacity-70">
              Why IC
            </a>
            <a href="#how-it-works" className="hover:opacity-70">
              How it works
            </a>
            <a href="#dashboards" className="hover:opacity-70">
              Dashboards
            </a>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* Login */}
            <button
              onClick={handleUnauthorized}
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              Login
            </button>

            {/* 🔥 PREMIUM FREE TRIAL BUTTON */}
            <button
              onClick={handleUnauthorized}
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2 rounded-full 
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
              text-white font-semibold shadow-lg 
              hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Free Trial
            </button>

            {/* MOBILE MENU */}
            <div className="lg:hidden">
              <details className="dropdown dropdown-end">
                <summary className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </summary>

                <ul className="menu dropdown-content mt-3 p-4 shadow bg-base-100 rounded-2xl w-56">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#why-ic">Why IC</a>
                  </li>
                  <li>
                    <a href="#how-it-works">How it works</a>
                  </li>
                  <li>
                    <a href="#dashboards">Dashboards</a>
                  </li>
                  <li>
                    <button onClick={handleUnauthorized}>Free Trial</button>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
