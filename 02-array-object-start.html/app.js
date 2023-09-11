// const array = [1, 2, 3, 4, 5, 6]
const notes = ['a', 'b', '1', '3']
// // const array = new Array(1, 2, 3, 4, 5)

// // console.log(array.length)
// console.log(array[1])
// console.log(array[array.length-1])

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value)

function getNoteTemplate(title){
    return `
            <li
            class="list-group-item d-flex justify-content-between align-items-center"
            >
            <span>${title}</span>
            <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
            </span>
            </li>`
}

function render(notes){
    for(let i = 0; i < notes.length; i++){
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
    }

}

render(notes)

createBtn.onclick = function () {
    if (inputElement.value == '') {
        return
    }

    // listElement.innerHTML = 
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value))
    
    inputElement.value=''
}