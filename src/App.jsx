// import modul dan komponen yang dibutuhkan
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Digunakan untuk routing halaman (pindah halaamn tanpa reload)

// import Navbar & Footer yang akan ditampilkan di semua halaman
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import halaman (pages) untuk routing
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quotes from "./pages/Quotes";

function App() {
  return (

    // Router membungkus seluruh aplikasi agar bisa berpindah halaman
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar selalu muncul dibagian atas */}
        <Navbar />

        {/* bagian utama yang berubah sesuai routing*/}
        <main className="flex-grow">
          <Routes>
            {/* menampilkan halaman Home */}
            <Route path="/" element={<Home />} />

            {/* menampilkan halaman Login */}
            <Route path="/login" element={<Login />} />

            {/* menampilakn halaman Qoutes */}
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </main>

        {/* Footer selalu muncul di bawah */}
        <Footer />
      </div>
    </Router>
  );
}

 export default App; //Ekspor supaya bisa dipakai di main.jsx


// PENJELASAN:
// File ini adalah pusat aplikasi
// mengatur semua routing antar halaman (Home, Login, Quotes).
// Navbar & Footer selalu tampil, sedangkan konten utama berganti sesuai route.
