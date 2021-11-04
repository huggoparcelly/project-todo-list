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
// return fetch('http://example.com/api/v1/registration', {
//   method: 'POST',
//   body: formData
// })

export async function fetchSaveTodo(formData) {
  try {
    console.log(JSON.stringify(formData));
    const API_URL = 'http://localhost:3000/todo'
    
    const data = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    console.log(data);
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

export async function fetchStatusTodo(id) {
  try {
    const API_URL = `http://localhost:3000/todo/${id}`
    const data = await fetch(API_URL, 
      {method: 'DELETE'});
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

// export async function fetchUpdateTodo(id) {
//   try {
//     const API_URL = `http://localhost:3000/todo/${id}`
//     const data = await fetch(API_URL, 
//       {method: 'DELETE'});
//     return data.json();
//   } catch (error) {
//     console.log(error);
//   }
// }