import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Users, ShoppingCart, Layers, Send, BarChart, LogOut, X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/signin'; 
  };

  const handleLinkClick = () => {
    // Close sidebar on mobile when a link is clicked
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <div className={`
      fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white flex flex-col justify-between z-40
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:translate-x-0
    `}>
      <div>
        <div className="py-6 ml-4 border-b border-gray-700 flex justify-between items-center pr-4">
          <h1 className="text-2xl font-bold">CRMApp</h1>
          {/* Close button - only visible on mobile */}
          <button 
            onClick={onClose}
            className="lg:hidden hover:bg-gray-700 p-1 rounded"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-2 p-4">
          <Link 
            to="/dashboard" 
            className="flex items-center hover:bg-gray-700 p-2 rounded text-sm md:text-base"
            onClick={handleLinkClick}
          >
            <Home className="mr-2" size={18} /> Dashboard
          </Link>
          <Link 
            to="/customers" 
            className="flex items-center hover:bg-gray-700 p-2 rounded text-sm md:text-base"
            onClick={handleLinkClick}
          >
            <Users className="mr-2" size={18} /> Customers
          </Link>
          <Link 
            to="/orders" 
            className="flex items-center hover:bg-gray-700 p-2 rounded text-sm md:text-base"
            onClick={handleLinkClick}
          >
            <ShoppingCart className="mr-2" size={18} /> Orders
          </Link>
          <Link 
            to="/segments" 
            className="flex items-center hover:bg-gray-700 p-2 rounded text-sm md:text-base"
            onClick={handleLinkClick}
          >
            <Layers className="mr-2" size={18} /> Segments
          </Link>
          <Link 
            to="/campaigns" 
            className="flex items-center hover:bg-gray-700 p-2 rounded text-sm md:text-base"
            onClick={handleLinkClick}
          >
            <Send className="mr-2" size={18} /> Campaigns
          </Link>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center mb-2">
          <span className="text-sm">Welcome, {userName}</span>
        </div>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded mt-2"
        >
          <LogOut className="inline mr-2" size={18} /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;