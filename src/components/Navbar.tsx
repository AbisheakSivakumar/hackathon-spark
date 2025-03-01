
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS } from '@/lib/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled ? 'py-3 bg-hackathon-darker/95 backdrop-blur shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-section flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 relative z-50"
          aria-label="Home"
        >
          <span className="text-hackathon-primary">Hacka</span>
          <span>storm</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-4 lg:gap-8">
            {NAVIGATION_ITEMS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-white/90 hover:text-hackathon-primary transition-colors hover-underline text-sm font-medium py-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="/register" className="btn-primary">
            Register Now
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white p-2 focus:outline-none z-50"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-hackathon-darker/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col items-center gap-8 w-full px-8">
            <ul className="flex flex-col items-center gap-6 mb-8 w-full">
              {NAVIGATION_ITEMS.map((item, index) => (
                <li key={index} className="w-full text-center">
                  <a
                    href={item.href}
                    className="text-white/90 hover:text-hackathon-primary transition-colors text-lg font-medium py-3 block"
                    onClick={handleItemClick}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="/register" 
              className="btn-primary w-full text-center"
              onClick={handleItemClick}
            >
              Register Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
