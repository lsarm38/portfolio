export default function Navbar() {
  const links = ["About", "Experience", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-lg tracking-tight text-white">
          Luis Sarmiento
        </span>
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
