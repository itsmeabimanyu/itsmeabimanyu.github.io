function hitungDurasiKerja(startYear, startMonth) {
  const now = new Date();
  const start = new Date(startYear, startMonth - 1); // Bulan dimulai dari 0 di JavaScript

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  let hasil = "";
  if (years > 0) hasil += `${years} Tahun`;
  if (months > 0) hasil += (hasil ? ", " : "") + `${months} Bulan`;
  if (!hasil) hasil = "Baru mulai";

  return hasil;
}

// Panggil dan masukkan hasil perhitungan ke span
document.addEventListener("DOMContentLoaded", function () {
  const durasi = hitungDurasiKerja(2023, 5); // Mulai dari Mei 2023
  document.getElementById("durasiKerja").textContent = durasi;
});

function hitungUmur(tahunLahir, bulanLahir) {
  const today = new Date();
  let umur = today.getFullYear() - tahunLahir;
  if (today.getMonth() + 1 < bulanLahir) {
    umur--;
  }
  return umur;
}

// Ganti sesuai data kamu
const tahunLahirSaya = 1990;
const bulanLahirSaya = 6; 

const umur = hitungUmur(tahunLahirSaya, bulanLahirSaya);
document.getElementById('age').textContent = umur;


