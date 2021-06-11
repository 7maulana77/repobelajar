//Soal 1
console.log('-----soal 1-----')
function luasPersegiPanjang(panjang, lebar) {
return panjang*lebar
}
function kelilingPersegiPanjang(panjang, lebar) {
return 2*(panjang+lebar)
}
function volumeBalok(panjang, lebar, tinggi) {
return panjang*lebar*tinggi
}

var panjang= 12
var lebar= 4
var tinggi = 8

var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
var volumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log(luasPersegiPanjang) 
console.log(kelilingPersegiPanjang)
console.log(volumeBalok)


//Soal 2
console.log('-----soal 2-----')
function introduce(name, age, address, hobby) {
return  '“Nama saya '+[name]+', umur saya '+[age]+' tahun, alamat saya di '+[address]+', dan saya punya hobby yaitu '+[hobby]+'!”'
}
var name = "John"
var age = 30
var address = "jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan belum jadi, dan saya punya hobby yaitu Gaming!" 


//Soal 3
console.log('----SOAL 3----')
var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
ObjDaftarPeserta =
{nama : arrayDaftarPeserta[0] ,
jenisKelamin : arrayDaftarPeserta[1] ,
hobi : arrayDaftarPeserta[2] ,
tahunLahir : arrayDaftarPeserta[3] ,
}
arrayDaftarPeserta=ObjDaftarPeserta
console.log(arrayDaftarPeserta)


//Soal 4
console.log('----SOAL 4----')
//Membuat array of object
buah =[
    {nama: 'Nanas',
     warna: 'Kuning',
     'ada bijinya': 'tidak',
     harga: 9000},
    {nama: 'Jeruk',
     warna: 'Oranye',
     'ada bijinya': 'ada',
     harga: 8000},
    {nama: 'Semangka',
     warna: 'Hijau & Merah',
     'ada bijinya': 'ada',
     harga: 10000},
    {nama: 'Pisang',
     warna: 'Kuning',
     'ada bijinya': 'tidak',
     harga: 5000}
    ]
//memunculkan hasil filter data yang tidak memiliki biji
buahfilter = buah.filter(function(item){
    return item['ada bijinya'] == "tidak";
 })
console.log(buahfilter)


//Soal 5
console.log('----SOAL 5----')

function tambahDataFilm(nama,durasi,genre,tahun){
    objdatafilm={
        nama:nama,durasi:durasi,genre:genre,tahun:tahun
    }
    dataFilm.push(objdatafilm)
}

var dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")

console.log(dataFilm)