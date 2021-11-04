import { useEffect, useState } from 'react';
import { fetchTodoList } from '../services';

function TodoList() {
  
  const [list, setList] = useState([]);
  
  useEffect(() => {
    async function getList() {
      const result = await fetchTodoList();
      // console.log(result);
      if (result) setList(result);
    }
    getList();
  }, []);
  
  
  // Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  const sortedList = list.sort(function (a, b) {
    if (a.task > b.task) {
      return 1;
    }
    if (a.task < b.task) {
      return -1;
    }
    return 0;
  });

  return(
    <div>
      
      <ul>
         {sortedList.map((todo, index) => 
          (<li key={index}> Tarefa: {todo.task} </li>)
        )}
      </ul>
    </div>
  );
}

export default TodoList;
