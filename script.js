const params = new URLSearchParams(window.location.search);
const jumlahSoal = parseInt(params.get("jumlah"));
const target = params.get("target");

let dataAktif = [];
let index = 0;
let salah = 0;

if (target === "half") {
  dataAktif = JUZ1.slice(0, Math.floor(JUZ1.length / 2));
} else {
  dataAktif = [...JUZ1];
}

dataAktif = dataAktif
  .sort(() => Math.random() - 0.5)
  .slice(0, jumlahSoal);

tampilkanSoal();

function tampilkanSoal() {
  document.getElementById("ayat").innerText = dataAktif[index].teks;
  document.getElementById("jawaban").value = "";
  document.getElementById("feedback").innerText = "";
}

function normalize(teks) {
  return teks
    .replace(/[ًٌٍَُِّْ]/g, "")
    .replace(/\s+/g, "")
    .trim();
}

function cekJawaban() {
  const input = document.getElementById("jawaban").value;
  const ayatSekarang = dataAktif[index];

  // ambil 2–3 ayat setelahnya
  const ayat1 = JUZ1.find(
    a => a.surat === ayatSekarang.surat && a.ayat === ayatSekarang.ayat + 1
  );
  const ayat2 = JUZ1.find(
    a => a.surat === ayatSekarang.surat && a.ayat === ayatSekarang.ayat + 2
  );
  const ayat3 = JUZ1.find(
    a => a.surat === ayatSekarang.surat && a.ayat === ayatSekarang.ayat + 3
  );

  if (!input) {
    alert("Jawaban belum diisi");
    return;
  }

  // gabung jawaban
  let jawabanBenar = "";
  if (ayat1) jawabanBenar += ayat1.teks + " ";
  if (ayat2) jawabanBenar += ayat2.teks + " ";
  if (ayat3) jawabanBenar += ayat3.teks;

  if (normalize(input) === normalize(jawabanBenar)) {
    salah = 0;
    index++;

    if (index < dataAktif.length) {
      tampilkanSoal();
    } else {
      document.getElementById("feedback").innerText = "🎉 TSA selesai";
    }

  } else {
    salah++;
    document.getElementById("feedback").innerText = `❌ Salah (${salah}/3)`;

    if (salah >= 3) {
      document.getElementById("ayatLengkap").innerText =
        ayatSekarang.teks + "\n\n" + jawabanBenar;
    }
  }
}

function lanjut() {
  salah = 0;
  index++;
  tampilkanSoal();
}
