let inputField = document.getElementById("inputField");
let tasks = document.getElementById("tasks");
//console.log(tasks);

const addTask = () => {
    let task = inputField.value.trim()
    const li = document.createElement("li");
    document.getElementById('inputField').value = "";
    li.innerHTML = `
     <label>
         <input type="checkbox">
         <span>${task}</span>
     </label>
     <span class="editeBtn"><i class="fa-solid fa-pen-to-square"></i></span>
     <span class="deleteBtn"><i class="fa-solid fa-trash"></i></span>
        `
    tasks.appendChild(li);
    inputField = ""
    //console.log(task);

    const checkBox = li.querySelector("input");
    let span1 = li.querySelector("span");
    const editBtn = li.querySelector(".editeBtn");
    console.log(span1.textContent)


    //console.log(checkBox);
    checkBox.addEventListener("click", () => {
        span1.classList.toggle("checked");
        counter();
    })
    editBtn.addEventListener("click", function () {
        const taskUpdate = prompt("Editer tâche:", span1.textContent);
        if (taskUpdate != null) {
            span1.textContent = taskUpdate;
            checkBox.checked = false;
            span1.classList.remove("checked");
        }
        counter();
    })
};

const counter = () => {
    let completedTask = document.querySelectorAll(".checked").length;
    document.getElementById("ccompletedAllcounter").innerText = completedTask;
}
counter();
