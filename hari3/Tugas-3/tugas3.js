//Soal 1
var kataPertama = 'saya'
var kataKedua = 'senang'
var kataKetiga = 'belajar'
var kataKeempat = 'javascript'

console.log(
    kataPertama.concat(" ",
        kataKedua[0].toUpperCase(),
        kataKedua.substring(1)," ",
        kataKetiga.substr(0,kataKetiga.length-1),
        kataKetiga[6].toUpperCase()," ",
        kataKeempat.toUpperCase()
    )
)
//Soal2
var panjangPersegiPanjang = '8'
var lebarPersegiPanjang = '5'
var alasSegitiga= "6";
var tinggiSegitiga = "7";

var intpanjangPP=Number(panjangPersegiPanjang)
var intlebarPP=Number(lebarPersegiPanjang)
var intalasS=Number(alasSegitiga)
var inttinggiS=Number(tinggiSegitiga)

console.log(intpanjangPP)
console.log(intlebarPP)
console.log(intalasS)
console.log(inttinggiS)

var kelilingPersegiPanjang = intpanjangPP*intlebarPP
var luasSegitiga = 0.5*intalasS*inttinggiS

console.log('Keliling Persegi Panjang = ' + kelilingPersegiPanjang)
console.log('Luas Segitiga = ' +luasSegitiga)

//Soal3
var sentences= 'wah javascript itu keren sekali'; 

var firstWord= sentences.substring(0, 3); 
var secondWord= sentences.substring(4,14); // do your own! 
var thirdWord= sentences.substring(15,18); // do your own! 
var fourthWord= sentences.substring(19,24);; // do your own! 
var fifthWord= sentences.substring(25,31);; // do your own! 

console.log('Kata Pertama: ' + firstWord); 
console.log('Kata Kedua: ' + secondWord); 
console.log('Kata Ketiga: ' + thirdWord); 
console.log('Kata Keempat: ' + fourthWord); 
console.log('Kata Kelima: ' + fifthWord);

//Soal4
var nilaiJohn = 80;
var nilaiDoe = 50;

/*
if nilai >= 80 indeksnya A
nilai >= 70 dan nilai < 80 indeksnya B
nilai >= 60 dan nilai < 70 indeksnya c
nilai >= 50 dan nilai < 60 indeksnya D
nilai < 50 indeksnya E*/

var nilai = nilaiJohn
if (nilai >= 80) {var indeks = 'A'}
else if (nilai >= 70 && nilai<80) {var indeks = 'B'}
else if (nilai >=60 && nilai<70) {var indeks = 'C'}
else if (nilai >=50 && nilai<60) {var indeks = 'D'}
else if (nilai <50) {var indeks = 'E'}
console.log('Indeks John '+ indeks)

var nilai = nilaiDoe
if (nilai >= 80) {var indeks = 'A'}
else if (nilai >= 70 && nilai<80) {var indeks = 'B'}
else if (nilai >=60 && nilai<70) {var indeks = 'C'}
else if (nilai >=50 && nilai<60) {var indeks = 'D'}
else if (nilai <50) {var indeks = 'E'}
console.log('Indeks Doe '+ indeks)


//Soal5
var tanggal = 08;
var bulan = 10;
var tahun = 1994;

switch(bulan) {
  case 1:   { var strbulan = 'Januari'; break}
  case 2:   { var strbulan = 'Februari'; break}
  case 3:   { var strbulan = 'Maret'; break}
  case 4:   { var strbulan = 'April'; break}
  case 5:   { var strbulan = 'Mei'; break}
  case 6:   { var strbulan = 'Juni'; break}
  case 7:   { var strbulan = 'Juli'; break}
  case 8:   { var strbulan = 'Agustus'; break}
  case 9:   { var strbulan = 'September'; break}
  case 10:  { var strbulan = 'Oktober'; break}
  case 11:  { var strbulan = 'November'; break}
  case 12:  { var strbulan = 'Desember'; break}
  default:  { var strbulan = 'bulan'; break}
}

console.log(
    tanggal.toString().concat(" ", strbulan," ", tahun))