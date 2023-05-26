// for, for of, for in, foreach

const hari = ['senin','selasa','rabu','kamis']

// for of (hasil dari for of data akan termapping dengan rapi/mendapat value langsung)
for (let hariBiasa of hari){
    console.log(hariBiasa)
}
// for in (hasil nya mendapatkan nomor index dari indexnya)
for (let hariBiasa in hari){
    console.log(hariBiasa)
}

//foreach (hasilnya sama seperti for in namun kita bisa memunculkan nomor indexnya)
hari.forEach((hariBiasa, index) => {
    console.log(hariBiasa, index)
});