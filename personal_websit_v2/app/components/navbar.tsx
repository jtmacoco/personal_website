export default function Navbar() {
  return (
    <nav className="bg-black sticky top-0 z-50 h-14 flex items-center">
      <ul className="flex flex-row gap-4 justify-center">
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Experience</li>
      </ul>
    </nav>
  );
}
