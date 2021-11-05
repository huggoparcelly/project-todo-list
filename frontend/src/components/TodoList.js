import { useEffect, useState } from 'react';
import { fetchTodoList, fetchRemoveTodo } from '../services';
import StatusTask from './StatusTask';
import UpdateTask from './UpdateTask';

function TodoList() {
  
  const [list, setList] = useState([]);
  const [toggle, setToggle] = useState(true);

  
  useEffect(() => {
    async function getList() {
      const result = await fetchTodoList();
      if (result) setList(result);
    }
    getList();
  }, []);
  
  // Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  const handleOrderByName = () => {
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
    setToggle(!toggle);
  }

  const handleOrderByDate = () => {
    const sortedList = list.sort(function (a, b) {
      if (a.createDate > b.createDate) {
        return 1;
      }
      if (a.createDate < b.createDate) {
        return -1;
      }
      return 0;
    });
    setList(sortedList);
    setToggle(!toggle);
  }

    const handleOrderByStatus = () => {
    const sortedList = list.sort(function (a, b) {
      if (a.status > b.status) {
        return 1;
      }
      if (a.status < b.status) {
        return -1;
      }
      return 0;
    });
    setList(sortedList);
    setToggle(!toggle);
  }

  const handleRemove = async (id) => {
    await fetchRemoveTodo(id);
    window.location.reload()
  }

  const renderButtons = () => {
    return (
      <div>
        <button 
          type='botton'
          onClick = {() => handleOrderByName()}
        >Ordenar por nome</button>
        <button 
          type='botton'
          onClick = {() => handleOrderByDate()}
        >Ordenar por data</button>

        <button 
          type='botton'
          onClick = {() => handleOrderByStatus()}
        >Ordenar por status</button>
      </div>
    )
  }
  
  return(
    <div>
      {renderButtons()}
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
