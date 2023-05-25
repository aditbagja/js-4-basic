// ARRAY

const hari1 = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']

// const hari2 = []
// hari2[0] = 'Rabu'
// hari2[1] = 'Kamis'
// hari2[2] = 'Jumat'

// console.log(hari2)

// const hari3 = new Array('Sabtu','Minggu')
// console.log(hari3)

// const kamis = hari1.includes('Kamis') //variable untuk cek apakah kamis ada di array hari1
// console.log(kamis) // hasilnya true

// if(kamis){ //jika kamis bernilai true
//     const posisiKamis = hari1.indexOf('Kamis') //untuk mengetahui kamis berada di index ke berapa dari hari1
//     // mencari posisi index array
//     const indexBefore = posisiKamis - 1
//     const indexAfter = posisiKamis + 1
//     const before = hari1[indexBefore]
//     const after = hari1[indexAfter]
//     console.log(`hari sebelum hari kamis adalah hari ${before}`)
//     console.log(`hari setelah hari kamis adalah hari ${after}`)
//     console.log(`hari kamis itu berada di posisi index ke-${posisiKamis}`)
//     //menentukan index awal dan akhir
//     const hariPertama = hari1.shift()
//     console.log(`hari pertama adalah hari ${hariPertama}`)
//     const hariTerakhir = hari1.pop()
//     console.log(`hari terakhir adalah hari ${hariTerakhir}`)
// } else{
//     console.log('saya tidak tau posisinya dimana')
// }

const arrayBaru = [900, 'senin', {tomat:function(){console.log('ini tomat')}}, ['pisang','jeruk']]
console.log(arrayBaru)
console.log(arrayBaru[3][1]) // array 2 dimensi
console.log(arrayBaru[2].tomat) //memanggil objek/function pada array

//menggabungkan 2 array
const hariBiasa = ['Senin','Selasa','Rabu']
const hariLibur = ['Sabtu','Minggu']

const mergeArray = hariBiasa.concat(hariLibur) // concat untuk menggabungkan array
console.log(mergeArray)

//mengurutkan array
mergeArray.map((value, index) => console.log(index,value))

//data dari backend/API
const datas = [
    {
        name: 'asep',
        pekerjaan: 'kuli',
        umur: 25
    },
    {
        name: 'aldo',
        pekerjaan: 'artis',
        umur: 28
    },
    {
        name: 'rusdi',
        pekerjaan: 'barber',
        umur: 23
    },
    {
        name: 'budi',
        pekerjaan: 'guru',
        umur: 35
    }
]

// munculkan semua data
datas.map((values,index)=>{
    console.log(values)
})
//memunculkan list namanya saja
datas.map((values,index)=>{
        console.log(values.name)
    })
//sorting data
datas.sort((a,b) => a.umur - b.umur).map((values)=>console.log(values))
//filter data
datas.filter((x) => x.umur > 30).map((values)=>console.log(values))