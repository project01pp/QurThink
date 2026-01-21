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
  const ayatBerikutnya = JUZ1.find(
    a => a.surat === ayatSekarang.surat && a.ayat === ayatSekarang.ayat + 1
  );

  if (!input) {
    alert("Jawaban belum diisi");
    return;
  }

  if (normalize(input) === normalize(ayatBerikutnya.teks)) {
    salah = 0;
    index++;

    if (index < dataAktif.length) {
      tampilkanSoal();
    } else {
      document.getElementById("feedback").innerText =
        "🎉 TSA selesai";
    }
  } else {
    salah++;
    document.getElementById("feedback").innerText =
      `❌ Salah (${salah}/3)`;

    if (salah >= 3) {
      document.getElementById("ayatLengkap").innerText =
        ayatSekarang.teks + "\n\n" + ayatBerikutnya.teks;
    }
  }
}

function lanjut() {
  salah = 0;
  index++;
  tampilkanSoal();
}
