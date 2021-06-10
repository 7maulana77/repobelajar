// Soal 1
nomor=2
console.log("LOOPING Pertama")
while (nomor<=20){
    console.log(nomor+" - I love coding" )
    nomor = nomor+2
}
console.log("LOOPING Kedua")
while (nomor>2){
    nomor = nomor-2
    console.log(nomor+" - I will become a frontend developer" )
}

//Soal 2
for(int = 1; int<21; int++) {
   if (int%2 != 0) {
       int%3 ? str='Santai':str='I Love Coding'
    }
   else{str='Berkualitas'}
   console.log(int+" - "+str)
}

//Soal 3
strsegitiga=['#']
for(intsegitiga=1; intsegitiga<8; intsegitiga++){
    console.log(strsegitiga.join(''))
    strsegitiga.push('#')
}

//Soal 4
var kalimat=["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"]
kalimat.shift()
kalimat.splice(1,1)
console.log('"'+kalimat.join(' ')+'"')

//Soal 5
var sayuran=[]
sayuran.push('Kangkung')
sayuran.push('Bayam')
sayuran.push('Buncis')
sayuran.push('Kubis')
sayuran.push('Timun')
sayuran.push('Seledri')
sayuran.push('Tauge')
sayuran.sort()
for (intsayuran=1; intsayuran<=sayuran.length; intsayuran++){
    console.log(intsayuran+'. '+sayuran[intsayuran-1])
}