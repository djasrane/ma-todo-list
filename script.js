let inputField = document.getElementById("inputField");
let tasks = document.getElementById("tasks");
console.log(tasks);

const addTask = () => {
    let task = inputField.value.trim()
    const li = document.createElement("li");
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
    //console.log(checkBox);
    checkBox.addEventListener("click", () => {
        let span1 = li.querySelector("span");
        span1.classList.toggle("checked");
    });
}
