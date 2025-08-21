// Import Link dari react-router-dom untuk navigasi tanpa reload
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // Navbar dengan background biru, text putih, padding, shadow
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      
      {/* Nama / judul website */}
      <h1 className="font-bold text-xl">The Quotes</h1>

      {/* Menu navigasi */}
      <div className="space-x-6">
        {/* Link ke halaman Home */}
        <Link to="/" className="hover:underline">Home</Link>

        {/* Link ke halaman Quotes */}
        <Link to="/quotes" className="hover:underline">Quotes</Link>

        {/* Link ke halaman Login */}
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;

// Navbar.jsx adalah menu navigasi di bagian atas.
// Gunakan Link dari react-router-dom supaya bisa pindah halaman tanpa reload.
// Ada 3 menu → Home, Quotes, dan Login.
// Styling pakai Tailwind (warna biru, putih, ada shadow).