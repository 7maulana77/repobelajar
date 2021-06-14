// var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
// parameterobject=['nama','jeniskel','hobi','tahun']
// objDaftarPeserta={}
// arrayDaftarPeserta.forEach(function(value,index){
//     objDaftarPeserta[parameterobject[index]]=value
// })
// // objDaftarPeserta[parameterobject[0]]=arrayDaftarPeserta[0]
// // objDaftarPeserta['JenisKelamin']=arrayDaftarPeserta[1]
// // objDaftarPeserta.hobi=arrayDaftarPeserta[2]
// // objDaftarPeserta.tahun=arrayDaftarPeserta[3]
// console.log(objDaftarPeserta)

// //Soal 4
// console.log('----SOAL 4----')
// //Membuat array of object
// buah =[
//     {nama: 'Nanas',
//      warna: 'Kuning',
//      'ada bijinya': 'tidak',
//      harga: 9000},
//     {nama: 'Jeruk',
//      warna: 'Oranye',
//      'ada bijinya': 'ada',
//      harga: 8000},
//     {nama: 'Semangka',
//      warna: 'Hijau & Merah',
//      'ada bijinya': 'ada',
//      harga: 10000},
//     {nama: 'Pisang',
//      warna: 'Kuning',
//      'ada bijinya': 'tidak',
//      harga: 5000}
//     ]
// //memunculkan hasil filter data yang tidak memiliki biji
// buahfilter = buah.filter(function(individuobject,indeks){
//     return individuobject['ada bijinya']=='tidak' && indeks != 0
// })
// console.log(buahfilter)

// var x = 1;
 
// if (x === 1) {
// var x = 2;
 
// console.log(x);
// // expected output: 2
// }
 
// console.log(x); // 2


//EcmaScript6 Ecma Script 2015
// let x = 1;
 
// if (x === 1) {
//   let x = 2;
 
//   console.log(x);
//   // expected output: 2
// }
 
// console.log(x); // 1

// const number = 42;
// number = 100; // Uncaught TypeError: Assignment to constant variable.

//Arrow Functions
// function myfunction(){
//     //isi function
// }
// myfunction()

//ES6
// const myfunction = () => {
//     //function
// }
// //panggil function
// myfunction()

// //Default Parameters
// const multiply=(a,b=1)=> {return a*b}
// console.log(multiply(7,2))
// console.log(multiply(7))

//Template Literals
// const kata1='Template Literals'
// const kata2='Menggunakan kutip terbalik dan dollar'
// const kata3='Bisa kombinasi variabel string lebih rapi'
// const kalimattotal=`${kata1} dilakukan dengan ${kata2}. 
// Manfaatnya:${kata3}, malah bisa enter baris baru`
// console.log(kalimattotal)

//Enhanced Object Literals

// const namaawal =`John`
// const namaakhir =`Doe`
// //Tanpa Enhanced Object Literals
// // const objek= {
// //     namaawal:namaawal,
// //     namaakhir:namaakhir
// // }
// //Dengan Enhanced Object Literals
// const objek = {namaawal,namaakhir}
// const array = [namaawal, namaakhir]
// console.log(objek)
// console.log(array)

//Destructuring
//array
// //tanpa destructuring
// var nomor=[10,20,30]
// var nomorpertama=nomor[0]
// var nomorkedua=nomor[1]
// var nomorketiga=nomor[2]
// console.log(nomorpertama, nomorkedua, nomorketiga)
// //dengan destructuring, variable baru disusun dalam bentuk array sesuai urutannya
// let nomorratus=[100,200,300]
// let [nomorratuspertama,nomorratuskedua,normorratusketiga]=nomorratus
// console.log(nomorratuspertama,nomorratuskedua,normorratusketiga)
//object
//tanpa destructuring
// var namamurid={
//     nmdpn:`Ben`,
//     nmblkg:`Joel`
// }
// // namadepan=namamurid.nmdpn
// // namabelakang=namamurid.nmblkg
// // console.log(namadepan, namabelakang)

// //dengan destructuring, ternyata nama variable baru harus sama dengan nama key dalam object
// let {nmdpn,nmblkg}=namamurid
// console.log(nmdpn, nmblkg)

//Rest Parameters
//contoh1 - variable dalam array, ...Arraysisa menjadikan sisa data menjadi Arraysisa
// let nilai=[60,70,80,90,100]
// let [pertama, kedua, ...sisanya]=nilai
// console.log(sisanya)
//contoh2 - fungsi

// const saring=(...sisa)=>{
//     return sisa.filter(function(item){
//         return item.nama=='Ben'}
//         )
//     }

//     arraycoba =[1,2,3,777,'abc', [1,2,3],{nama:'Ben',kelas:2,alamat:'Bumi'}]
//     arraycoba2=[1,2,3]
//     console.log(saring(1,2,3,777,'abc', [1,2,3],{nama:'Ben',kelas:2,alamat:'Bumi'}))
    
//    const saring = (sisa)=>{
//        return sisa.filter(datasisa => datasisa.nama !== undefined  )
//    }
// //    const saring = (sisa)=>{
// //     return sisa.filter(function(datasisa) {return datasisa.nama !== undefined} )
// // }

   
//    var arrcoba=[1, {nama:"Ben Joel"}, "but"]
//    //console.log(saring(1, {nama:"Ben Joel"}, "but"))
//    console.log(saring(arrcoba))


//    arrcoba.forEach(function(data){data.nama !== undefined})
// var nilaiTF=[]
//    arrcoba.forEach(data => nilaiTF.push(data.nama !== undefined))
// console.log(nilaiTF)

// const filter = (rest) =>{ 
//     return rest.filter(el => el.text !== undefined) 
//     } 
//     var ujicoba=[1, {text: "wonderful"}, "next"]
//     //ujicoba=[{text:'wonderful',lain:'lain'}]
//     console.log(filter(ujicoba)) // wonderful

// //third example 
// const fullName = (...rest) =>{ 
// let [firstName, lastName] = rest
// return `${firstName} ${lastName}`
// } 

// console.log(fullName("John", "Doe")) // John Doe

//Concat
// var string1 = 'good';
// var string2 = 'luck';
// var string3 = 'to u'
// console.log(string1.concat(string2).concat(string3));

// // spread operator
// let array1 = ['one', 'two']
// let array2 = ['three', 'four']
// let array3 = ['five', 'six']
 
// // ES5 Way / Normal Javascript
// /* 
// var combinedArray = array1.concat(array2).concat(array3)
// console.log(combinedArray) // ['one', 'two', 'three', 'four', 'five', 'six']
// */
// // ES6 Way 
 
// let combinedArray = [...array1, ...array2, ...array3]
// console.log(combinedArray) // ['one', 'two', 'three', 'four', 'five', 'six']
 

//DILEMA LET CONST
const  x=1
if(x===1){
    let x=2
   if(x===2){
       const x=3
       console.log(x)
    }
    console.log(x)
}
console.log(x)