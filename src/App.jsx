import React from 'react';
import './App.css';

function App() {
  // 1. Variabel Perkenalan Diri
  const nama = "Roy Elisa";
  const pekerjaan = "Informatics Student of Universitas Teknologi Bandung";
  const tanggalLahir = "1992-09-10"; // Format: YYYY-MM-DD (Contoh: 25 Agustus)

  // 2. Function untuk mengecek Zodiac
  const cekZodiac = () => {
    const dateObj = new Date(tanggalLahir);
    const bulan = dateObj.getMonth() + 1; // getMonth() dimulai dari 0
    const tanggal = dateObj.getDate();

    let zodiac = "";

    if ((bulan === 3 && tanggal >= 21) || (bulan === 4 && tanggal <= 19)) zodiac = "Aries";
    else if ((bulan === 4 && tanggal >= 20) || (bulan === 5 && tanggal <= 20)) zodiac = "Taurus";
    else if ((bulan === 5 && tanggal >= 21) || (bulan === 6 && tanggal <= 20)) zodiac = "Gemini";
    else if ((bulan === 6 && tanggal >= 21) || (bulan === 7 && tanggal <= 22)) zodiac = "Cancer";
    else if ((bulan === 7 && tanggal >= 23) || (bulan === 8 && tanggal <= 22)) zodiac = "Leo";
    else if ((bulan === 8 && tanggal >= 23) || (bulan === 9 && tanggal <= 22)) zodiac = "Virgo";
    else if ((bulan === 9 && tanggal >= 23) || (bulan === 10 && tanggal <= 22)) zodiac = "Libra";
    else if ((bulan === 10 && tanggal >= 23) || (bulan === 11 && tanggal <= 21)) zodiac = "Scorpio";
    else if ((bulan === 11 && tanggal >= 22) || (bulan === 12 && tanggal <= 21)) zodiac = "Sagittarius";
    else if ((bulan === 12 && tanggal >= 22) || (bulan === 1 && tanggal <= 19)) zodiac = "Capricorn";
    else if ((bulan === 1 && tanggal >= 20) || (bulan === 2 && tanggal <= 18)) zodiac = "Aquarius";
    else if ((bulan === 2 && tanggal >= 19) || (bulan === 3 && tanggal <= 20)) zodiac = "Pisces";
    else zodiac = "Tanggal Lahir Tidak Valid";

    alert(`Halo ${nama}, berdasarkan tanggal lahirmu (${tanggal}-${bulan}), Zodiac kamu adalah: ${zodiac} 🌟`);
  };

  // 3. Dummy Data 5 Film Favorit (Menggunakan URL gambar publik dari Unsplash/Wikipedia)
  const filmFavorit = [
    {
      id: 1,
      judul: "The Dark Knight",
      genre: "Action, Crime",
      gambar: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=400"
    },
    {
      id: 2,
      judul: "Inception",
      genre: "Sci-Fi, Thriller",
      gambar: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400"
    },
    {
      id: 3,
      judul: "Interstellar",
      genre: "Sci-Fi, Adventure",
      gambar: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400"
    },
    {
      id: 4,
      judul: "Spirited Away",
      genre: "Animation, Fantasy",
      gambar: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400"
    },
    {
      id: 5,
      judul: "The Matrix",
      genre: "Sci-Fi, Action",
      gambar: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400"
    }
  ];

  // Format tanggal untuk tampilan UI
  const opsiTanggal = { year: 'numeric', month: 'long', day: 'numeric' };
  const tanggalFormatIndo = new Date(tanggalLahir).toLocaleDateString('id-ID', opsiTanggal);

  return (
    <div className="container">
      {/* Kartu Profil */}
      <div className="profile-card">
        <div className="profile-header">
          <h2>Personal Profile</h2>
        </div>
        <div className="profile-body">
          <p><strong>Nama:</strong> {nama}</p>
          <p><strong>Pekerjaan:</strong> {pekerjaan}</p>
          <p><strong>Tanggal Lahir:</strong> {tanggalFormatIndo}</p>
          
          <button className="btn-zodiac" onClick={cekZodiac}>
            🔮 Cek Zodiac Saya
          </button>
        </div>
      </div>

      {/* Bagian Film Favorit */}
      <div className="movies-section">
        <h2 className="section-title">🎬 Top 5 Favorite Movies</h2>
        <div className="movies-grid">
          {filmFavorit.map((film) => (
            <div key={film.id} className="movie-card">
              <img src={film.gambar} alt={film.judul} className="movie-img" />
              <div className="movie-info">
                <h3>{film.judul}</h3>
                <p>{film.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;