
// //Soal1
// console.log('---Soal 1---')
// const luaslingkaran = (jari2) => {
//     return pi*jari2*jari2
// }
// const kelilinglingkaran = (jari2) => {
//     return 2*pi*jari2
// }
// const pi = 22/7
// let jari2=7
// console.log(luaslingkaran(jari2))
// console.log(kelilinglingkaran(jari2))

// //Soal2
// console.log(`
// ---Soal 2---`)
// const introduce = (...rest) => {
//     let [nama,umur,jk,pekerjaan]=rest
//     jk=='Laki-Laki'? sapaan='Pak':sapaan='Bu'
//     return `${sapaan} ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`
    
// }
// //kode di bawah ini jangan dirubah atau dihapus
// const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
// console.log(perkenalan) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

// //Soal3
// console.log(`
// ---Soal 3---`)
// const newFunction = (firstName, lastName) => {
//     return {firstName, lastName, 
//         fullName:()=>{
//         console.log(`${firstName} ${lastName}`)
//         }
//     }
// }
    
// // kode di bawah ini jangan diubah atau dihapus sama sekali
// console.log(newFunction("John", "Doe").firstName)
// console.log(newFunction("Richard", "Roe").lastName)
// newFunction("William", "Imoh").fullName()

// //Soal4
// console.log(`
// ---Soal 4---`)
// let phone = {
//     name: "Galaxy Note 20",
//     brand: "Samsung",
//     year: 2020,
//     colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
//  }
//  // kode diatas ini jangan di rubah atau di hapus sama sekali
 
//  const {name:phoneName, brand:phoneBrand, year, colors} = phone
 
//  const [colorBronze, , colorBlack] = colors
 
//  // kode di bawah ini jangan dirubah atau dihapus
//  console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)
 

 //Soal5
 console.log(`
---Soal 5---`)

let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

let {warnaSampul, ...sisa}=buku
warnaSampul = [...warnaSampul, ...warna]
buku = {...sisa, warnaSampul, ...dataBukuTambahan}
console.log(buku)

