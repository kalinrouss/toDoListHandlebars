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