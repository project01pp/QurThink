const ayat = document.getElementById("ayat");
const feedback = document.getElementById("feedback");
const jawabanInput = document.getElementById("jawaban");
const murajaah = document.getElementById("murajaah");
const ayatLengkap = document.getElementById("ayatLengkap");

let index = 0;

// TAMPILKAN POTONGAN AYAT
ayat.innerText = soaltsa[index].potongan;

function cekJawaban() {
  const jawabanUser = jawabanInput.value.trim();

  if (jawabanUser === soaltsa[index].jawaban) {
    feedback.innerText = "Jawaban benar!";
    ayatLengkap.innerText = soaltsa[index].lengkap;
    murajaah.style.display = "block";
  } else {
    feedback.innerText = "❌ Jawaban salah, coba lagi.";
  }
}

function lanjut() {
  index++;
  murajaah.style.display = "none";
  jawabanInput.value = "";
  feedback.innerText = "";

  if (index < soaltsa.length) {
    ayat.innerText = soaltsa[index].potongan;
  } else {
    ayat.innerText = "TSA selesai!";
  }
}
