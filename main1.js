//alert('halo masbro') // alert popup
// console.log('testing') // memunculkan log console di inspect element - console
//prompt('masukkan umur anda :') // popup form

//penggunaan variable js
//var umur = 22 // nilainya bisa diubah
//let umur = 22 // sama seperti var
//const umur = 22 // konstanta berarti nilainya tetap tidak bisa diubah
//umur = 23
//console.log('halo, umur kamu adalah : '+ umur)

//memasukkan prompt menjadi variabel
// let umur = prompt('berapa umur kamu ?')
// alert('Umur kamu adalah ' + umur)

let nama = 'adit bagja'
let umur = 22
let tinggiBadan = 160.1 // float atau double
let beratBadan
let pacar = 1
beratBadan = 50

// pengkondisian
if(pacar == null){
    pacar = 'belum punya'
}else{
    pacar = 'udah punya'
}

// switch(pacar){
//     case 1:
//         pacar = 'punya 1 aja'
//     break
//     case 2:
//         pacar = 'punya 2 pacar'
//     break
//     default:
//         pacar = 'belum punya pacar'
//     break
// }

//operator
saldoAwal = 50000
saldoTambahan = 80000
const saldoTotal = saldoAwal + saldoTambahan

// memanggil variabel tanpa menggunakan +
alert(`nama saya adalah ${nama} umur saya ${umur} tahun, tinggi badan saya ${tinggiBadan}cm, berat badan saya ${beratBadan}kg, pacar saya ${pacar}`)
alert(`saldo awal saya sebesar Rp. ${saldoAwal} & saldo tambahan saya sebesar Rp. ${saldoTambahan}, jadi total saldo saya adalah Rp. ${saldoTotal}`)
