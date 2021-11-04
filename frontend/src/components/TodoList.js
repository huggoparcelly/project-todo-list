import { useEffect, useState } from 'react';
import { fetchTodoList, fetchEditTodo } from '../services';

function TodoList() {
  
  const [list, setList] = useState([]);
  
  useEffect(() => {
    async function getList() {
      const result = await fetchTodoList();
      if (result) setList(result);
    }
    getList();
  }, []);
  
  
  // Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // const sortedList = list.sort(function (a, b) {
  //   if (a.task > b.task) {
  //     return 1;
  //   }
  //   if (a.task < b.task) {
  //     return -1;
  //   }
  //   return 0;
  // });

  async function handleRemove(id) {
    await fetchEditTodo(id);
    window.location.reload()
  }

  return(
    <div>
      <ul>
         {list.map((todo, index) => 
          (<li key={index}> {todo.task} {todo.status} {todo.createDate} 
            {/* <button>editar</button> */}
            <button
              type='submit'
              key = { index }
              onClick = {() => handleRemove(todo._id)}
            >excluir</button>
          </li>)
        )}
      </ul>
      
    </div>
  );
}

export default TodoList;
