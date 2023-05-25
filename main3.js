// DOM (Document Object Model)
console.log(document.title)

document.title = 'Web diubah oleh DOM' // mengubah isi tag title di HTML
console.log(document.title)

const body = document.body
body.append("Hallo masbro") // menambah isi atau konten ke dalam tag body di HTML
console.log(document.body)

// menambah tag dalam js untuk HTML
const h1 = document.createElement('h1')
h1.textContent = 'INI TAG H1 DARI JS NYA MASBRO' // bisa dengan textContent, bisa dengan InnerText atau InnerHTML

const namaSaya = document.createElement('p')
namaSaya.innerHTML = '<marquee direction="right">NAMA SAYA ADIT</marquee>' // kelebihan inner html bisa memasukkan fungsi/tag html lain kedalamnya

const namaKamu = document.createElement('b')
namaKamu.innerText = 'NAMA KAMU SAMSUL'

body.append(h1)
body.append(namaSaya)
body.append(namaKamu)