export async function fetchTodoList() {
  try {
    const API_URL = 'http://localhost:3000/todo'
    const data = await fetch(API_URL);
    return data.json();
  } catch (error) {
    console.log(error);
  }
}