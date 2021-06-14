// function tampilkan(){console.log('halo!!!')}
// tampilkan()
// console.log('asdflasdfasdf')

// function ambil_angka_2(){
//     return 2
// }
// angka = ambil_angka_2
// console.log(ambil_angka_2())

// function fungsidgparameter(parameternya){
//     return parameternya*7
// }
// parameterkali7=fungsidgparameter(90)
// console.log(parameterkali7)
// console.log('penentuan nilai parameter selalu didalam kurung fungsi')

// //Fungsi dengan parameter lebih dari 1
// function fungsibykparameter (parameter_a, parameter_b, parameter_c, parameter_d){
// return parameter_a*parameter_b+parameter_c+parameter_d
// }
// hasilfungsi=fungsibykparameter(2,3,4,5)
// console.log(hasilfungsi)

//Coba fungsi dengan nilai default -- nilai default harus selalu dibelakang ?
function gayaberat(massa, grav=9.8, planet='di bumi'){
 console.log (grav*massa+planet)
}
gayaberat(10,9.9)//massa 10Kg, grav 9.9, planet default
gayaberat(10,undefined,'di mars')//massa 10Kg, grav default, planet di mars

// berat10kg=gayaberat(10)
// console.log(berat10kg)

// function test1(options) {
//     var arg1 = options.arg1 || "arg1";
//     var arg2 = options.arg2 || "arg2";
//     var arg3 = options.arg3 || "arg3";
//     var arg4 = options.arg4 || "arg4";

//     console.log(arg1, arg2, arg3, arg4)
// }

// test1({arg3: "notarg1", arg4: "notarg2"});

// function test2(arg1='arg1', arg2='arg2', arg3, arg4){
// var obj ={
//     keyarg1:arg1,
//     keyarg2:arg2,
//     keyarg3:arg3,
//     keyarg4:arg4
// }
// return obj
// }
// obj1=test2(undefined,undefined,'arg3','arg4')
// console.log(obj1)