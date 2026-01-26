function tampilkanAyat() {
  const surat = document.getElementById("pilihSurat").value;
  const container = document.getElementById("daftarAyat");

  const ayatSurat = JUZ1.filter(a => a.surat === surat);

  container.innerHTML = "";

  ayatSurat.forEach(a => {
    const p = document.createElement("p");
    p.innerText = `${a.ayat}. ${a.teks}`;
    container.appendChild(p);
  });
}

// tampil pertama kali
tampilkanAyat();
