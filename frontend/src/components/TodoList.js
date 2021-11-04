import { useEffect, useState } from 'react';
import { fetchTodoList, fetchRemoveTodo } from '../services';

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

  const handleRemove = async (id) => {
    await fetchRemoveTodo(id);
    window.location.reload()
  }

  // const selectButton = () => {
  //   return (<label>
  //         Status:
  //         <select>
  //         {status.map((stat) => (
  //           <option value={stat}>{stat}</option>
  //         ))}
  //           {/* <option value="em andamento">Em andamento</option>
  //           <option value="pronto">Pronto</option> */}
  //         </select>
  //   </label>);
  // }

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
            {/* {selectButton()} */}
          </li>)
        )}
      </ul>
      
    </div>
  );
}

export default TodoList;
