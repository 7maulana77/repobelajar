var deret = 5;
var jumlah = 0;
while(deret > 0) { // Loop akan terus berjalan selama nilai deret masih di atas 0
  jumlah += deret; // Menambahkan nilai variable jumlah dengan angka deret
  deret--; // Mengubah nilai deret dengan mengurangi 1
  console.log('Jumlah saat ini: ' + jumlah)
}
console.log(jumlah);
for(var deret = 0; deret < 10; deret += 2) {
    console.log('Iterasi dengan Increment counter 2: ' + deret);
  }
   
  console.log('-------------------------------');
   
  for(var deret = 15; deret > 0; deret -= 3) {
    console.log('Iterasi dengan Decrement counter : ' + deret);
  }

  var feeling = ["dag", "dig"]
feeling.push("dug"); console.log(feeling)// menambahkan nilai "dug" ke index paling belakang
feeling.pop() ;console.log(feeling)// menghapus nilai pada elemen terakhir array