
export function getTodos() {
  return fetch('http://localhost:5174/api/todos.json').then(response => {
    if (!response.ok) {
    }
    return response.json();
  });
}
