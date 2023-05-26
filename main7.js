// latihan 1
function luasLingkaran(phi, r,r){
    console.log('Luas lingkaran adalah: ',phi*r*r)
}
luasLingkaran(3.14, 5,5)

function luasSegitiga(half, a, t){
    console.log('Luas segitiga adalah: ',half * a * t)
}
luasSegitiga(1/2, 5, 10)

function luasPersegipanjang(p, l){
    console.log('Luas persegi panjang adalah: ',p*l)
}
luasPersegipanjang(10,5)

function luasJajargenjang(a, t){
    console.log('Luas jajargenjang adalah: ',a*t)
}
const alas = prompt('Masukkan alas')
const tinggi = prompt('Masukkan tinggi')
luasJajargenjang(alas,tinggi)

// latihan 2
let nama = prompt('Siapa namamu ?')
console.log(`nama kamu ${nama}`)

const gaji = prompt('Berapa gajimu ?')
console.log(`gaji kamu : ${gaji}`)

const hari = prompt('Berapa hari kamu masuk kerja ?')
console.log(`kamu masuk kerja ${hari} hari`)

function totalGaji(gaji,hari){
    console.log(`total gaji kamu adalah: `,gaji*hari)
}
totalGaji(gaji,hari)