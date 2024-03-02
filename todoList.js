// const BODY = document.querySelector("body");
// console.log(BODY)

// for (let i = 0; i < 10; i += 1) {
//     const HEADER = document.createElement("h3");
//     HEADER.textContent = "New Header!!"
//     document.body.appendChild(HEADER)
// }

const TODO = document.querySelector("#todo-list");
const INPUT = document.querySelector("input");
const ADD = document.querySelector("button");

function addTodo(text) {
        let wrapper = document.createElement("div");
        let item = document.createElement("p");
        let del = document.createElement("button");
        let done = document.createElement("button");
        let edit = document.createElement("button");
        done.textContent = "dunes"
        item.textContent = text
        del.textContent = "DEL"
        del.onclick = function () {
            TODO.removeChild(wrapper);
        }

        
        
        done.textContent = "done"
        done.onclick = function () {
            item.classList.toggle("checked");
        }
        edit.textContent = "EDit"
        edit.onclick = function () {
            item.textContent = window.prompt("Item: ")

        }
        wrapper.appendChild(item)
        wrapper.appendChild(del)
        wrapper.appendChild(done)
        wrapper.appendChild(edit)
        TODO.appendChild(wrapper)
    }

ADD.onclick = function () {
    addTodo(INPUT.value)
}