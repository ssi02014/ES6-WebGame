import { customFetch } from "../utils/fetch.js";
import { renderTodos } from "../utils/common.js";

const list = document.querySelector(".list");
const item = document.querySelector(".item");
const addButton = document.querySelector(".add");
const editButton = document.querySelector(".edit");

const API_URL = "http://localhost:3000/todos";

function init() {
  getTodos();
  getTodoItem(1);
}

init();

// GET /todos
async function getTodos() {
  const response = await customFetch({
    url: API_URL,
    method: "GET",
  });
  const parseResponse = await response.json();
  renderTodos(list, parseResponse);
}

// GET /todos/:item
async function getTodoItem(id) {
  const response = await customFetch({
    url: `${API_URL}/${id}`,
    method: "GET",
  });
  const parseResponse = await response.json();
  renderTodos(item, parseResponse);
}

// Post /todos
async function postTodoItem() {
  const response = await customFetch({
    url: API_URL,
    method: "POST",
    body: JSON.stringify({
      id: 4,
      content: "React",
      completed: false,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const parseResponse = await response.json();
  renderTodos(list, parseResponse);
}

// Put /todos/item
async function putTodoItem(id) {
  const response = await customFetch({
    url: `${API_URL}/${id}`,
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      content: "Vue",
      completed: true,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const parseResponse = await response.json();
  renderTodos(list, parseResponse);
}

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  postTodoItem();
});

editButton.addEventListener("click", (e) => {
  e.preventDefault();
  putTodoItem(1);
});
