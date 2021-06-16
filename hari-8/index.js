// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
var wktdmlki=10000
var i=0
readBooks (wktdmlki, books[i], function(sisaWaktu){
    i++
    readBooks(sisaWaktu,books[i],function(sisaWaktu){
        i++
        readBooks(sisaWaktu,books[i],function(sisaWaktu){
            i++
            readBooks(sisaWaktu,books[i],function(){
                i++
            })
        })
    })
})

