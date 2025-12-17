import { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, Menu, Search } from "lucide-react";
import { useAuthStore } from "../store/authUser";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const { user, logout } = useAuthStore();
  return (
    <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20">
      <div className="flex items-center gap-10 z-50">
        <Link to="/">
          <img
            src="/netflix-logo.png"
            alt="Logo"
            className="w-32 sm:w-40 cursor-pointer"
          />
        </Link>

        {/* desktop navigation */}
        <nav className="hidden md:flex gap-6 text-white font-semibold">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/tv-shows" className="hover:text-gray-400">
            TV Shows
          </Link>
          <Link to="/history" className="hover:text-gray-400">
            Search History
          </Link>
        </nav>
      </div>

      <div className="flex gap-2 items-center z-50">
        <Link to="/search">
          <Search className="size-6 cursor-pointer" />
        </Link>
        <img
          src={user.image}
          alt="Avatar"
          className="h-8 rounded cursor-pointer"
        />
        <LogOut className="size-6 cursor-pointer" onClick={logout} />

        <div className="sm:hidden">
          <Menu className="size-6 cursor-pointer" onClick={toggleMobileMenu} />
        </div>
      </div>

      {/* mobile menu button */}
      {isMobileMenuOpen && (
        <div className="w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800">
          <Link
            to="/"
            className="block hover:underline p2"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/tv-shows"
            className="block hover:underline p2"
            onClick={toggleMobileMenu}
          >
            TV Shows
          </Link>
          <Link
            to="/history"
            className="block hover:underline p2"
            onClick={toggleMobileMenu}
          >
            Search History
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
