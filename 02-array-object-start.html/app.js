// const array = [1, 2, 3, 4, 5, 6]
// const notes = [
//     {
//         title: 'Вивчити блок про масиви',
//         complited: false,
//     },
//     {
//         title: 'Вивчити теорію об\'єктів',
//         complited: true,
//     }    
// ]
// // const array = new Array(1, 2, 3, 4, 5)

// // console.log(array.length)
// console.log(array[1])
// console.log(array[array.length-1])



// console.log(inputElement.value)

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = [
    {
        title: 'Вивчити блок про масиви',
        completed: false,
    },
    {
        title: 'Вивчити теорію об\'єктів',
        completed: true,
    }    
]

function render(){
    listElement.innerHTML = ''
    for(let i = 0; i < notes.length; i++){
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
}


render(notes)

createBtn.onclick = function () {
    if (inputElement.value == '') {
        return
    }
    let newNote = {
        title: inputElement.value,
        completed: false
    }
    // listElement.innerHTML = 
    // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(newNote))
    notes.push(newNote)
    render()
    inputElement.value=''
}

listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        // console.log(event.target.dataset.index)
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

    }
}

function getNoteTemplate(note, index){
    return `
            <li
            class="list-group-item d-flex justify-content-between align-items-center"
            >
            <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
            <span>
            <span class="btn btn-small btn-${note.completed ? 'warning' : 'success' }" data-index"${index}">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
            </span>
            </li>`
}