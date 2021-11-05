import { useState } from 'react';
import { fetchStatusTodo } from '../services';

import { Form } from 'react-bootstrap';

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
    <Form.Select className="w-25 mb-2 mt-2" value={state} onChange={(e) => handleChangeStatus(e)}>
      <option value="Pendente">Pendente</option>
      <option value="Em andamento">Em andamento</option>
      <option value="Pronto">Pronto</option>
    </Form.Select>
  );
}

export default StatusTask;