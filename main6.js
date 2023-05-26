// function
// setiap function harus direturn. return disini adalah console.log

// passing data
function addName(firstname, lastname){
    console.log('nama kamu: ',firstname)
    console.log('nama keluarga: ',lastname)
}
addName('asep sutardi', 'sutono')

// cara lain menggunakan arguments
function nama(){
    console.log('namamu : ',arguments[0])
    console.log('keluarga : ',arguments[1])
}
nama('asep sutardi', 'sutono')

// keyword new function
const sum1 = new Function('x','y','console.log(x+y)')

// standar function
function sum2(x,y){
    console.log(x+y)
}

// arrow function
const sum3 = (x,y) => {
    console.log(x+y)
}

//penggunaan if dalam function
function randomize(){
    const randomNumber = ~~(Math.random() * 1000)
    if(randomNumber > 100){
        console.log('angka lebih dari 100',randomNumber)
    }else{
        console.log(randomNumber)
    }
}

randomize()

sum1(1,1)
sum2(5,2)
sum3(5,5)