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
