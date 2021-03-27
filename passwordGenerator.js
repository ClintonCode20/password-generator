
let button = document.getElementById('btn')
let result = document.getElementById('passwordContainer')
button.addEventListener('click', generatePassword)
function generatePassword(){
    let smallLetter = ['a', 'b', 'c', 'x', 'y', 'z']
    let capitalLetter = ['A', 'B', 'C', 'X', 'Y', 'Z']
    let signs = ['#', '%', '?', '/', '&', '*']
    let figure = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let arr = []
    
    let allDigits = [...smallLetter, ...capitalLetter, ...signs, ...figure]
    console.log(allDigits.length)

    for(let i = 0; i < allDigits.length; i++){

        let picker = Math.floor(Math.random() * allDigits.length)
        arr.push(allDigits[picker])
    }
    arr.length = 10
    result.innerText = arr.join('')
    

}
