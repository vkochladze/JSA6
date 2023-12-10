let container = document.querySelector(".todo__list");
let form = document.querySelector(".create_input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = form.title.value;
  let newTodo = createTodoSchema(title);
  form.title.value = "";
  todoList.push(newTodo);
  renderTodoItems();
});

let todoList = [
  {
    id: 0,
    title: "text...",
    completed: false,
  },
  {
    id: 1,
    title: "text 2...",
    completed: false,
  },
  {
    id: 2,
    title: "text 3...",
    completed: false,
  },
];

function createTodoSchema(title) {
  return {
    id: todoList.length,
    title,
    completed: false,
  };
}

function createTodoItem(todo) {
  let div = document.createElement("div");
  let p = document.createElement("p");
  let btn = document.createElement("button");

  div.classList.add("todo__item");
  p.textContent = todo.title;

  btn.textContent = "X";

  div.appendChild(p);
  div.appendChild(btn);

  div.addEventListener("click", () => {
    let result = todoList.find((t) => {
      if (t.id === todo.id) {
        return t;
      }
    });
    if (result) {
      result.completed = !result.completed;
      p.classList.toggle("completed");
    }
  });

  btn.addEventListener("click", () => {
    // let result = todoList.find((t) => {
    //   if (t.id === todo.id) {
    //     return t;
    //   }
    // });

    // if (result) {
    //   console.log(result.id);
    //   todoList.forEach((e) => {
    //     if (e.id === result.id) {
    //       todoList.splice(result.id, 1); // აქ სავარაუდოდ მასივის ID-ები რო არ აფდეითდება წაშლის დროს, ურევს
    //     }
    //   });
    // }

    todoList = todoList.filter((t) => {
      if (t.id !== todo.id) {
        return t;
      }
    });
    renderTodoItems();
  });

  return div;
}

function deleteTodoItem(todo) {}

function renderTodoItems() {
  container.innerHTML = "";

  todoList.forEach((todo) => {
    let todoCard = createTodoItem(todo);
    container.appendChild(todoCard);
  });
}

renderTodoItems();
