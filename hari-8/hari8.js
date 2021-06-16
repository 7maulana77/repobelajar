
// //Function and Arrow Function
// function myfunction2(p1,p2){    //1. Normal function declaration
//     return p1*p2
// }
// console.log(myfunction2) //myfunction2 is displayed in white like a method

// myfunction =function(p1,p1) {       //2. get function from statement
//     return p1*p2
// }
// console.log(myfunction) //myfunction is displayed in light blue like a variable

// myfunction3 = (p1, p2) => {         //3. get function from arrow function
//     return p1 * p2          
// }
// myfunction3 = (p1,p1) => p1*p2 //can also be typed like this because it only has one statement

// console.log(myfunction3)//myfunction3 is displayed in light blue like a variable

// myfunction4 = (p1) => "Nilai " + p1
// myfunction4 = p1 => "Nilai" + p1        //paraneter p1 can be typed without parentheses because the func only has 1 parameter

// //Pada fungsi normal this mewakili objek yang memanggil fungsi, misalnya window, document, atw button
// //Pada arrow function, this SELALU mewakili objek yang mendefinisikan arrow function tersebut.
// //Hal ini karna objek itu menjadi "pemilik" dari arrow function tersebut

//Contoh Asynchronous
// setTimeout(() => {                                   //menerima 2 parameter, yaitu callback & waktu
//     console.log('saya dijalankan belakangan')       //fungsi callback
// }, 3000)                                            //waktu jeda 
// console.log('saya dijalankan pertama')               //tanpa callback

//Deklarasi fungsi yg akan menjadi fungsi callback
// const periksaDokter =(nomerAntri, callback) => {  //periksaDokter menerima parameter nomerAntri dan fungsi callback
//     if(nomerAntri>50){
//         callback(false)                             //jalankan callback dengan parameter input false
//     } else if(nomerAntri<10){
//         callback(true)                              //jalankan callback dengan parameter input true
//     }
// }
// periksaDokter(
//     51,                                                          //nomerAntri
//     (check)=>{                                                   //fungsi callback 
//         if (check) console.log('sebentar lagi giliran saya')       //fungsi callback
//         else console.log('jalan-jalan dulu')                    //fungsi callback
//     }                                                            //fungsi callback
//     ) 


//Contoh lain
////FUNGSI PERIKSA DOKTER TANPA CALLBACK
//   function periksaAntrianDokter(nomerAntri) {
//     console.log(`sekarang antrian ke-${nomerAntri}`)
//     setTimeout(function () {
//       if(nomerAntri === 10 ) { 
//         console.log("saya masuk ruangan dokter")

//       } else {
//         console.log("saya masih menunggu")
//         periksaAntrianDokter(nomerAntri+1)
//       }    
//     }, 1000)
//   }
// periksaAntrianDokter(nomorAntriSekarang)

////dengan callback
// function periksaAntrianDokter(nomerAntri, callback) {
//     console.log(`sekarang antrian ke-${nomerAntri}`)
//     setTimeout(function () {
//       if(nomerAntri === 10 ) { 
//         console.log("saya masuk ruangan dokter")
//         callback(0)
//       } else {
//         console.log("saya masih menunggu")
//         callback(nomerAntri+1)
//       }    
//     }, 1000)
//   }

//   var nomorAntriSekarang = 7

//   //contoh menggunakan callback hell
// periksaAntrianDokter(nomorAntriSekarang, function(nomorAntriBaru){
//     ('nomorAntriBaru ='+nomorAntriBaru); periksaAntrianDokter(nomorAntriBaru, function(nomorAntriBaru1){
//       periksaAntrianDokter(nomorAntriBaru1, function(nomorAntriBaru2){
//         periksaAntrianDokter(nomorAntriBaru2, function(nomorAntriBaru3){
//           return nomorAntriBaru3
//         })
//       })
//     })
//   });
// //atau dengan function recursive
// function eksekusi(nomorAntri){
//     periksaAntrianDokter(nomorAntri, function(nomorAntriBaru){
//       if (nomorAntriBaru !== 0){
//         eksekusi(nomorAntriBaru)
//       }
//     })
//   }

//   eksekusi(nomorAntriSekarang)

////Promise -> class yg sudah disediakan di Javascript, utk menginstancenya dbutuhkan parameter function
////function tersebut menerima 2 parameter yakni resolve dan reject

// var isMomHappy = false;

// // Promise
// var willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled atau janji dipenuhi
//         } else {
//             var reason = new Error('mom is not happy');
//             reject(reason); // reject (ingkar)
//         }

//     }
// ); 
// //Menjalankan Promise
// function askMom() {
//     willIGetNewPhone
//         .then(function (parameterdiresolve) {
//             // yay, you got a new phone
//             console.log(parameterdiresolve);
//          // output: { brand: 'Samsung', color: 'black' }
//         })
//         .catch(function (parameterdireject) {
//             // oops, mom don't buy it
//             console.log(parameterdireject.message);
//          // output: 'mom is not happy'
//         });
// }

// // Tanya Mom untuk menagih janji
// askMom()
// // untuk memanggil promise, panggil fungsi ->  function askmom(){Promise.then().catch()}

////Contoh Promise Lainnya
// promise periksa antrian dokter
// function periksaAntrianDokterPromise(nomerAntri) {
//     console.log(`sekarang antrian ke-${nomerAntri}`)
//     return new Promise( function (resolve, reject){
//       setTimeout(function () {
//         if(nomerAntri === 10 ) { 
//           console.log("saya masuk ruangan dokter")
//           reject(0)
//         } else {
//           console.log("saya masih menunggu")
//           resolve(nomerAntri+1)
//         }    
//       }, 1000)
//     })
//   }

//   // promise periksa data pasien
//   function periksaDataPasien(nomorIdPasien) {
//     var dataPasien = [
//       {id: 1, nama: "John", jenisKelamin: "Laki-laki"},
//       {id: 2, nama: "Michael", jenisKelamin: "Laki-laki"},
//       {id: 3, nama: "Sarah", jenisKelamin: "Perempuan"},
//       {id: 4, nama: "Frank", jenisKelamin: "Laki-laki"}
//     ]
//     return new Promise( function (resolve, reject){
//       var pasien = dataPasien.find(x=> x.id === nomorIdPasien)
//       if (pasien === undefined){
//         reject("data pasien tidak ada")
//       }else{
//         resolve(pasien)
//       }
//     })
//   }
// untuk promise periksa antrian dokter
// var nomorAntriSekarang = 7
// function execute(nomorAntri){
//  periksaAntrianDokterPromise(nomorAntri).then(function(nomorAntriBaru){
//     if (nomorAntriBaru !== 0){
//       execute(nomorAntriBaru)
//     }
//   }).catch(function(err){
//     console.log(err)
//   })
// }

// execute(nomorAntriSekarang)


// // untuk promise periksa data pasien
// periksaDataPasien(5).then(function(data){
//   console.log(data)
// }).catch(function(err){
//   console.log(err)
// })

//Async/await - async dan await
// function doAsync() {
//     return new Promise( function (resolve, reject){
//       var check = false
//       if (check){
//         resolve("berhasil")
//       }else{
//         reject("gagal")
//       }
//     })
//   }

// //cara menggunakannya
//  async function hello(){
//     var result =  await doAsync()
//     console.log(result)
//  }
//  hello()


//promise pada async await
// promise periksa data pasien
// function periksaDataPasien(nomorIdPasien) {
//     var dataPasien = [
//         { id: 1, nama: "John", jenisKelamin: "Laki-laki" },
//         { id: 2, nama: "Michael", jenisKelamin: "Laki-laki" },
//         { id: 3, nama: "Sarah", jenisKelamin: "Perempuan" },
//         { id: 4, nama: "Frank", jenisKelamin: "Laki-laki" }
//     ]
//     return new Promise(function (resolve, reject) {
//         var pasien = dataPasien.find(x => x.id === nomorIdPasien)
//         if (pasien === undefined) {
//             reject("data pasien tidak ada")
//         } else {
//             resolve(pasien)
//         }
//     })
// }
// //dengan menggunakan async await pada promise, hasil promise bs lgsung masuk variabel, berbeda dgn .then dan .catch
// async function periksaPasien(){                 
//     const dataJohn = await periksaDataPasien(1)
//     console.log(dataJohn)
//   }
//   periksaPasien()


  //Error Handling - pada .then.catch -> .catch adalah error handling. 
  //pada async await digunakan try dan catch
// async function hello(){
//     try {
//         var result = await doAsync()
//         console.log(result)
//     } catch(err){
//         console.log(err)
//     }
// }
// hello()

// //Serial dan Paralel - fungsi async bisa berjalan bersamaan atau berurutan
// const firstPromise = () => {
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('First Promise')
//         },1000)
//     })
// }
// const secondPromise=()=>{
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//         resolve('Second Promise')
//         },1000)
//     })
// }
// const thirdPromise = ()=> {
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('Third Promise')
//         },1000)
//     })
// }

// //Paralel selama satu detik
// const asyncParalel = async ()=>{
//     firstPromise().then(res=>{
//         console.log(res)
//     })
//     secondPromise().then(res=>{
//         console.log(res)
//     })
//     thirdPromise().then(res=>{
//         console.log(res)
//     })
// }
// const asyncSerial = async()=>{
//     let a = await firstPromise()
//     console.log(a)
//     let b = await secondPromise()
//     console.log(b)
//     let c = await thirdPromise()
//     console.log(c)
// }

// //asyncParalel()
// asyncSerial()

//Soal1 Tugas8
//Coba recursive-Masih Gagal
// var sisaWaktu=10000
// var i=0
// function rekursif(){
      
//     readBooks (sisaWaktu, books[i], function(sisaWaktu){
//     i++
//     if (i < books.length){
//         rekursif()
//     }
//     })
// }
// rekursif()

//Soal2 COBA REKURSIF