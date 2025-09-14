import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"; // make sure you have a Navbar component

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Top Navigation always visible */}
      <header>
        <Navbar />
      </header>

      {/* Dynamic page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Optional footer */}
      <footer className="p-4 text-center text-sm text-gray-400">
        © 2025 Space Tourism Project
      </footer>
    </div>
  );
};

export default App;
