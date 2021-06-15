// //Deklarasi Class
// class MobilBagus {
//     constructor(merk, pabrik) {
//         this.merk = merk
//         this.pabrik = pabrik
//         this.bunyi = "teet teet"
//     }
// }

// //Ekspresi Class
// //Tidak dikasi nama
// var Motor = class {
//     constructor(merk, pabrik) {
//         this.merk = merk
//         this.pabrik = pabrik
//     }
// }
// console.log(Motor.name)//otomatis mendapatkan nama 
// //Dikasi nama
// var Motor = class Motor2{
//     constructor(merk, warna){
//         this.merk = merk
//         this.warna = warna
//     }
// }
// console.log(Motor.name)

// //Method : Didalam objek class ada method, ada method khusus consturctor untuk inisialisasi properties
// class MotorBebek{
//     constructor(merk){
//         this.namamotor=merk
//     }
//     //Bisa tambahkan method sendiri e.g. tampilkan
//     tampilkan(){
//         return 'Saya punya sebuah '+this.namamotor
//     }
// }
// motorbebekku = new MotorBebek('Honda')
// console.log(motorbebekku.tampilkan) //Hanya memanggil method tanpa menjalankannya
// console.log(motorbebekku.tampilkan()) //Gunakan method dgn memanggil nama class dan method tambah kurung buka tutup.
// //Bisa juga menambahkan parameter didalam tanda kurung
// class MotorBebek2 {
//     constructor(merk){
//         this.nama=merk
//     }
//     tampilkan(y){
//         return y + ', Saya punya sebuah '+this.nama
//     }
// }
// motorbebekku2 = new MotorBebek2('Astrea Motor')
// console.log(motorbebekku2.tampilkan('Hallooo'))

// //Static Method - hanya utk class itu sendiri, hanya bisa diakses melalui MotorBebek, tdk bs motorbebekku
// class MotorBebek3 {
//     constructor(namamotor){
//         this.namabebek=namamotor
//     }
//     static hello(){   //Deklarasi method menggunakan penulisan static
//         return 'Hello!! -> fungsi statik di class MotorBebek3'
//     }
// }
// Motorbebekku3 = new MotorBebek3('Supra-X')
// //panggil hello
// console.log(MotorBebek3.hello())
// //console.log(Motorbebekku3.hello()) //akan error, karena fungsi hello statik di class MotorBebek3

// //Inheritance -Dibuat dengan keyword extends, class yg dibuat akan punya method yg sama dgn class asalnya
// //class Model adalah inheritance class Mobil
// class Mobil {
//     constructor(merk) {
//         this.namamobil = merk
//     }
//     tampilkan() {
//         return 'Saya punya sebuah ' + this.namamobil
//     }
// }
// class Model extends Mobil {
//     constructor(parameter1, parameter2) { //apakah ini disebut derived constructor?
//         super(parameter1) //mengacu class asal, memanggil constructor asal & mengakses property & methodnya
//         this.modelmobil = parameter2
//     }
//     lihatkan() {
//         return this.tampilkan() + ', modelnya adalah ' + this.modelmobil
//     }
// }
// Mobilku = new Model('Ford', 'Mustang')
// console.log(Mobilku.tampilkan())
// console.log(Mobilku.lihatkan())
// console.log(Mobilku.namamobil)
// console.log(Mobilku.modelmobil)

// //Getter and Setter -> melakukan proses tertentu pada suatu properti, sebelum properti tsb digunakan
// class Car {
//     constructor(brand) {
//         this.carname = brand
//     }
//     methodbiasa(){
//         return `method biasa panggil nama ${this.carname}`
//     }
//     get cnam() {
//         let abc = this.carname.concat(this.carname) //tes tambah variabel baru dan concat di parameter
//         console.log('coba ada fungsi concat dalam get '+abc) //coba tambah console.log()
//         return this.carname =='abc'
//     }
//     set cnam(x) {
//         this.carname = x
//     }
// }
// mycar = new Car('Ford')
// console.log(mycar.methodbiasa()) //method biasa, perlu () utk menjalankannya
// console.log(`pakai getter -> `+mycar.cnam) //getter cnam, digunakan tanpa (), menjalankan perintah di dalam get cnam
// console.log(`panggil properti langsung -> `+mycar.carname) //memanggil properti secara langsung

//biasanya properti menggunakan "_"didepannya sedangkan method (termasuk getter & setter) tidak
class Mobil_{ //coba nama class menggunakan underscore
    constructor(merk){
        this._namamobil=merk  //coba nama properti menggunakan underscore
    }
    get namamobil(){
        return this._namamobil
    }
    set namamobil(x){
        this._namamobil=x
    }
}
mymobil = new Mobil_('BMW')

console.log(mymobil._namamobil) //panggil properti
console.log(mymobil.namamobil) //panggil get

mymobil.namamobil = 'Volvo'     // memanggil setter, mengubah BMW menjadi Volvo
console.log(mymobil._namamobil) //panggil properti
console.log(mymobil.namamobil) //panggil get -> ternyata hasil get ikut berubah jadi Volvo
