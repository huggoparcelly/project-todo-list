import { useState } from 'react';
import { fetchStatusTodo } from '../services';

function StatusTask (infoTask) {
  const { id, status } = infoTask;
  const [state, setStatus] = useState(status);

  const handleChangeStatus = async (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    await fetchStatusTodo(id, newStatus);
    window.location.reload()
  }

  return (
    <form>
      <label>
        Status:
        <select value={state} onChange = {(e) => handleChangeStatus(e)}>
          <option value="pendente">Pendente</option>
          <option value="em andamento">Em andamento</option>
          <option value="pronto">Pronto</option>
        </select>
      </label>
    </form>
  );
}

export default StatusTask;