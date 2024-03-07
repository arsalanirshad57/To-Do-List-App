const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const ul = document.querySelector('.ul')
const dateSpan = document.querySelector('.date')
const timeSpan = document.querySelector('.time')

const date = new Date()
dateSpan.innerHTML = date.toDateString()
setInterval(() => {
    var dateTime = new Date()
    timeSpan.innerHTML = dateTime.toLocaleTimeString()

}, 1000)

function AddTasks() {
    if (input.value === '') {
        console.log(input.value);
        alert('please write your tasks')

    } else {
        const li = document.createElement('li')
        li.innerHTML = input.value
        ul.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input.value = ''
    showData()
    ul.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked')
            showData()
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove()
            showData()
        }
    }, false)
}
function showData() {
    localStorage.setItem('data', ul.innerHTML)
}

function setData() {
    ul.innerHTML = localStorage.getItem('data')
}

setData()

