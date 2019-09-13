var terimamasukan_dari_keyboard = require("readline-sync");

var sisi = terimamasukan_dari_keyboard.question("masukkan nilai s : ");
var isi = sisi * sisi * sisi;

console.log("isi kubus :"+isi);