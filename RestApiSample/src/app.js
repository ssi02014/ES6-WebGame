import { customFetch } from "../utils/customAxios.js";

const list = document.querySelector(".list");
const item = document.querySelector(".item");

const API_URL = "http://localhost:3000/todos";

function init() {
  getTodos();
  getTodoItem(1);
}

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

function getContent(todo) {
  return `id: ${todo.id}, content: ${todo.content}, completed: ${todo.completed} \n`;
}

function renderTodos(element, response) {
  element.innerText = "";

  if (Array.isArray(response)) {
    response.forEach((todo) => {
      element.innerText += getContent(todo);
    });
  } else {
    element.innerText = getContent(response);
  }
}

init();
