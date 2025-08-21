// Import hook React dan axios untuk fetch data dari API
import { useEffect, useState } from "react";
import axios from "axios";

function Quotes() {
  // State untuk menyimpan data quotes & status loading
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect dijalankan saat pertama kali halaman dibuka
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        // Ambil data dari supabase
        const response = await axios.get(
          "https://rbeulorfzjfbbhizwuqf.supabase.co/functions/v1/get-quotes"
        );
        setQuotes(response.data); //simpan data ke state
      } catch (error) {
        console.error("Error fetching quotes:", error);
      } finally {
        setLoading(false); // Hentikan loading setelah data selesai di ambil
      }
    };

    fetchQuotes(); // Panggil fungsi fetch
  }, []); // [] -> hanya dijalankan sekali saat halaman load

  // Jika data masih loading maka tampilkan teks
  if (loading) {
    return <p className="text-center mt-10 text-lg">Loading quotes...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Quotes</h1>

      {/* Grid: tampilkan kartu (card) per quote */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quote) => (
          <div
            key={quote.id} // key unik agar React lebih cepat render
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Gambar */}
            <img
              src={quote.gambar}
              alt={quote.judul}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              {/* Judul quote */}
              <h2 className="text-xl font-semibold mb-2">{quote.judul}</h2>

              {/* isi /  deskripsi */}
              <p className="text-gray-700 mb-3">{quote.isi}</p>

              {/* tanggal dibuat */}
              <p className="text-xs text-gray-500">
                {new Date(quote.inserted_at).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quotes; // ekspor agar bisa dipanggil di App.jsx

// Quotes.jsx ambil data quotes dari API Supabase.
// Tampilan dalam bentuk card grid (gambar, judul, isi, tanggal).
// Jika data masih loading → tampilkan teks "Loading...".
