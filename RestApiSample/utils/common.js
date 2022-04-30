export function getContent(todo) {
  return `id: ${todo.id}, content: ${todo.content}, completed: ${todo.completed} \n`;
}

export function renderTodos(element, response) {
  element.innerText = "";

  if (Array.isArray(response)) {
    response.forEach((todo) => {
      element.innerText += getContent(todo);
    });
  } else {
    element.innerText = getContent(response);
  }
}
