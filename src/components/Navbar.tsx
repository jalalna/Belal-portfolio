import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data";
import logo from "../img/b.jpg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-coffee-900/90 py-3 shadow-soft backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container-px flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 text-white">
          <img
            src={logo}
            alt="بلال النابلسي"
            className="h-12 w-12 rounded-full object-cover"
          />

          <span className="text-lg font-extrabold tracking-tight">
            بلال النابلسي
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-semibold text-white/85 transition-colors hover:text-gold-300 after:absolute after:-bottom-1.5 after:right-0 after:h-0.5 after:w-0 after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
    

        {/* Mobile Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur lg:hidden"
          aria-label="القائمة"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="container-px mt-3 flex flex-col gap-1 rounded-3xl bg-coffee-900/95 p-4 shadow-card backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-gold-300"
              >
                {link.label}
              </a>
            </li>
          ))}

        </ul>
      </div>
    </header>
  );
}