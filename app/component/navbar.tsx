import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 text-white">
      <div>
        <Link href="/">SHRIJAL TAMRAKAR</Link>
      </div>

      <div className="space-x-4">
        <Link href="/" className="hover:text-gray-400">
          Uses
        </Link>
        <Link href="/work" className="hover:text-gray-400">
          Work
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
