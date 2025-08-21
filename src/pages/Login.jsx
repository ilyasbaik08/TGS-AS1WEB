// Import useState untuk mengelola input email & password
import { useState } from "react";

function Login() {
  // State untuk menyimpan nilai input
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");

  // Fungsi ketika form disubmit
  const handleSubmit = (e) => {
    e.preventDefault(); // Cegah refresh halaman
    // Untuk saat ini hanya menampilkan alert
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    // Flexbox: form ada di tengah layar
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        {/* Judul form */}
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        {/* Input Email */}
        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={email} // nilai email diambil dari state
          onChange={(e) => setEmail(e.target.value)} // update state saat diketik
          className="w-full p-2 border rounded mb-4"
          required
        />

        {/* Input Password */}
        <label className="block mb-2">Password</label>
        <input
          type="password"
          value={password} // nilai password diambil dari state
          onChange={(e) => setPassword(e.target.value)} // update state saat diketik
          className="w-full p-2 border rounded mb-4"
          required
        />

        {/* Tombol Login */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

// Login.jsx punya form login sederhana dengan email & password.
// Data disimpan di state useState.
// Saat klik tombol "Login" → muncul alert berisi email & password.