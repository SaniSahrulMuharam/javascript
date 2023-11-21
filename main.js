var belanja = parseInt(prompt("masukan total belanja"));
document.write(`anda belanja: ${belanja}`);
document.write("\n");

if (belanja < 100000) {
  document.write(`tidak mendapatkan diskon`);
} else if (belanja >= 100000 && belanja <= 200000) {
  let diskon = (belanja * 10) / 100;
  document.write(`anda mendapatkan diskon 10% total menjadi ${belanja - diskon}`);
} else if (belanja > 200000) {
  let diskon = (belanja * 25) / 100;
  document.write(`anda mendapatkan diskon 25% total menjadi ${belanja - diskon}`);
}
