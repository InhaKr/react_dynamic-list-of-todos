
export function getUsers() {
  return fetch('http://localhost:5174/api/users.json').then(response => {
    if (!response.ok) {
    }
    return response.json();
  });
}
