var terimamasukkan_dari_keyboard = require("readline-sync");

var alas = terimamasukkan_dari_keyboard.question("masukkan nilai a : ");
var tinggi = terimamasukkan_dari_keyboard.question("masukkan nilai t : ");
var luas = alas * tinggi * 1/2;

console.log("luas segitiga :"+luas);