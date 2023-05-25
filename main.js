document.title = 'Web diubah oleh DOM'


// styling
const btn1 = document.getElementById('btn-1') // spesifik memanggil ID
const btn2 = document.querySelector('.btn-2') // memanggil elemen secara universal (menggunakan titik seperti css untuk class)
const body = document.body

//default text
const defaultText = 'Button 1'
btn1.textContent = defaultText

// styling sedikit mengambil dari css
btn1.style.border = 'none' 
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'aqua'

function onClick(){
    btn1.style.background = 'tomato'
    // memunculkan text ketika button diclick
    const textBaru = document.createElement('h1')
    textBaru.textContent = 'Kamu udah click button itu'
    body.append(textBaru)
}

function ubahText(){
    btn1.textContent = 'hehe haha'
}

function oriText(){
    btn1.textContent = defaultText
}

// latihan
const text = document.createElement('p')
text.textContent = 'INI ADALAH TEXT DARI BUTTON 2'

function munculText(){
    body.append(text)
}

function gantiText(){
    const gantiWarna = text
    text.style.color = 'tomato'
    body.append(text)
}