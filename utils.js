const input = document.getElementById('input')
const submitBtn = document.getElementById('submitButton');
const tasksContainer = document.getElementById('tasksContainer');
const clearBtn = document.getElementById('clearButton');

function getItem(key) {
    return JSON.parse(localStorage.getItem(key));
}

function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function print() {
    const toDoList = getItem('tasks');
    const source = getElementById('source').innerHTML;
    const content = document.getElementById('tasksContainer');
    const template = Handlebars.compile(source);
    const html = template(toDoList);

    content.innerHTML = html;

    if (toDoList.length > 0) {
        clearBtn.style.display = 'block';
    } else {
        clearBtn.style.display = 'none';
    }
}