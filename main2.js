//array

// let namaMurid = ['agus','dimas','sasalawati']
// namaMurid.push('rusdi', 'rudi') // menambah data ke variabel namaMurid
// namaMurid.shift() //menghapus index pertama pada array
// namaMurid.pop() //menghapus index terakhir pada array
// alert(namaMurid)

// for looping

// 3 statement
// for (let i = 1; i <= 10; i = i + 1){
//     console.log('adit bagja')
// }

//looping array

// const namaMurid = ['agus','dimas','sasalawati','samsul','dewa']
// console.log(namaMurid.length) // mengetahui jumlah atau panjang data sebuah array
// for(let i = 0; i < namaMurid.length; i++){
//     console.log(namaMurid[i])
// }

//while (mencari kondisi terlebih dahulu)
// let i = 0
// while (i < 20){
//     i++
//     console.log('adid')
// }

// Latihan 1
let saldoAkhir = prompt('Saldo akhir kamu berapa ?')
console.log(`saldo akhir kamu adalah Rp. ${saldoAkhir}`)

// Latihan 2
const hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']
if(getHari = new Date().getDay()){
    console.log("Hari ini adalah hari " + hari[getHari])
}
