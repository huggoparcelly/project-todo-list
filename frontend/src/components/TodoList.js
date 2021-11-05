import { useEffect, useState } from 'react';
import { fetchTodoList, fetchRemoveTodo } from '../services';
import StatusTask from './StatusTask';
import UpdateTask from './UpdateTask';

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
  const handleOrder = () => {
    const sortedList = list.sort(function (a, b) {
      if (a.task > b.task) {
        return 1;
      }
      if (a.task < b.task) {
        return -1;
      }
      return 0;
    });

    setList(sortedList);
  }

  const handleRemove = async (id) => {
    await fetchRemoveTodo(id);
    window.location.reload()
  }

  
  return(
    <div>
      <button 
        type='submit'
        onClick = {() => handleOrder()}
      >Ordenar por nome</button>
      <ul>
         {list.map((todo, index) => 
          (<li key={index}>{todo.createDate} {todo.task}: {todo.status}  
            <StatusTask id ={todo._id} status = {todo.status}/>
            <UpdateTask id={todo._id}/> 
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
