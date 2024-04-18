const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

document.addEventListener('keyup', (e) =>{
    if (e.code === 'Enter'){
        addTask();
    }
}

)
function addTask() {
    if (inputBox.value === ''){
        window.alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);

    }
    saveDate()
    inputBox.value = '';
}

listContainer.addEventListener("click", function (e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDate()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate()
    }

}, true)

function saveDate (){
        localStorage.setItem("data", listContainer.innerHTML); //whatever in our listContainer will be store in our browser with the name 'data'
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()