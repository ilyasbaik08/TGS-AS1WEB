function Home() {
  return (
    // Flexbox: konten ditaruh di tengah (horizontal & vertical)
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md bg-white rounded-2xl shadow-md p-6 text-center">
        {/* Judul halaman utama */}
        <h2 className="text-3xl font-bold mb-4">Welcome to The Quotes</h2>

        {/* Deskripsi singkat */}
        <p className="text-lg text-gray-600">
          Ini adalah website quotes. Silakan jelajahi menu di atas.
        </p>
      </div>
    </div>
  );
}

export default Home; // diekspor agar bisa dipanggil di App.jsx

// Home.jsx adalah halaman pertama (/).
// Kontennya sederhana → ada judul & deskripsi.
// Posisi konten ada di tengah layar (pakai flex justify-center items-center h-screen).