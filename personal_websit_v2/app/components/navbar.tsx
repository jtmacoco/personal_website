import { navLinks } from "../constants/info"; 
export default function Navbar() {
  return (
    <nav className="bg-black sticky top-0 z-50 h-14 flex items-center justify-center">
      <ul className="pl-4 flex flex-row gap-4">
        {navLinks.map((link) => (
            <li key={link.id}>{link.title}</li>
        ))}
      </ul>
    </nav>
  );
}
