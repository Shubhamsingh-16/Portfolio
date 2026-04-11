import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Code2 } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const navLinks = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-700/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 font-mono font-bold text-lg text-gray-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
        >
          <Code2 className="w-5 h-5 text-cyan-500" />
          <span>Shubham</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              {link}
            </button>
          ))}

          <a
            href="/resume.pdf"
            download
            className="text-sm font-medium px-4 py-1.5 rounded-md border border-cyan-500 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-200"
          >
            Resume
          </a>

          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={onToggleTheme} className="p-2 text-gray-500 dark:text-gray-400">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button onClick={() => setMenuOpen((v) => !v)} className="p-2 text-gray-500 dark:text-gray-400">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left py-2.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              {link}
            </button>
          ))}

          <a
            href="/resume.pdf"
            download
            className="block mt-2 w-full text-sm font-medium px-4 py-2 rounded-md border border-cyan-500 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all text-center"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
