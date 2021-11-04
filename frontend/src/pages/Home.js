import AddTask from '../components/AddTask';
import TodoList from '../components/TodoList';

function Home() {
  
  return(
    <div>
      <h1>Minha lista de tarefas</h1>
      <AddTask />
      <TodoList />
    </div>
  );
}

export default Home;