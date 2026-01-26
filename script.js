let indexSoal = 0;
let salah = 0;

document.getElementById("ayat").innerText =
  soalTSA[indexSoal].potongan;

function cekJawaban() {
  const input = document.getElementById("jawaban").value.trim();
  const jawabanBenar = soalTSA[indexSoal].lanjutan.join(" ");

  if (input === jawabanBenar) {
    document.getElementById("feedback").innerText = "✅ Jawaban benar";
    document.getElementById("murajaah").style.display = "none";
  } else {
    salah++;
    document.getElementById("feedback").innerText =
      "❌ Salah (" + salah + "x)";

    if (salah >= 3) {
      tampilkanMurajaah();
    }
  }
}

function tampilkanMurajaah() {
  document.getElementById("murajaah").style.display = "block";
  document.getElementById("ayatLengkap").innerText =
    soalTSA[indexSoal].lengkap;
}

function lanjut() {
  indexSoal++;
  salah = 0;

  if (indexSoal < soalTSA.length) {
    document.getElementById("ayat").innerText =
      soalTSA[indexSoal].potongan;
    document.getElementById("jawaban").value = "";
    document.getElementById("feedback").innerText = "";
    document.getElementById("murajaah").style.display = "none";
  } else {
    alert("TSA selesai 🎉");
    window.location.href = "index.html";
  }
}
