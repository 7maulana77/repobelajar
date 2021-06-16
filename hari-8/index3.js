var filterBooksPromise = require('./promise2.js')
 
// Lanjutkan code untuk menjalankan function filterBookPromise

filterBooksPromise(colorful = true, amountOfPage = 40).then((hasil) => {
    console.log(hasil)
}).catch((er) => console.log(er))

async function filterBooks() {
    var hasil = await filterBooksPromise(colorful = false, amountOfPage = 250)
    console.log(hasil)
}
filterBooks()

async function filterBooks() {
    try {
        var hasil = await filterBooksPromise(colorful = true, amountOfPage = 30)
        console.log(hasil)
    } catch (err) { console.log(err.message) }
}