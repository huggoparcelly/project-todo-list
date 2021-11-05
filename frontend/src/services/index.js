const HEADERS = {'Content-Type': 'application/json'};

export async function fetchTodoList() {
  try {
    const API_URL = 'http://localhost:3000/todo'
    const data = await fetch(API_URL);
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

// Fonts: 
// https://stackoverflow.com/questions/40284338/javascript-fetch-delete-and-put-requests
// https://pt.stackoverflow.com/questions/432506/enviando-par%C3%A2metro-body-via-fetch-api


export async function fetchSaveTodo(formData) {
  try {
    const API_URL = 'http://localhost:3000/todo'
    
    const data = await fetch(API_URL, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(formData),
    });
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchRemoveTodo(id) {
  try {
    const API_URL = `http://localhost:3000/todo/${id}`
    const data = await fetch(API_URL, 
      {method: 'DELETE'});
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchStatusTodo(id, status) {
  try {
    console.log(JSON.stringify({status}));
    const API_URL = `http://localhost:3000/todo/${id}/status`
    const data = await fetch(API_URL, {
        method: 'PUT',
        headers: HEADERS,
        body: JSON.stringify({status}),
    });
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUpdateTodo(id, formData) {
  try {
    const API_URL = `http://localhost:3000/todo/${id}`
    const data = await fetch(API_URL, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(formData),
    });
    return data.json();
  } catch (error) {
    console.log(error);
  }
}