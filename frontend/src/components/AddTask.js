// Fonte de pesquisa: https://pt-br.reactjs.org/docs/forms.html

import { Component } from "react";
import { fetchSaveTodo } from '../services';


class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      status: 'pendente',
    };

  }

  handleChangeTask = (event) => {
    this.setState({ task: event.target.value });
  }

  handleChangeStatus = (event) => {
    this.setState({ status: event.target.value })
  }

  handleSubmit = async (event) => {
    const formData = this.state;
    await fetchSaveTodo(formData);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Tarefa:
          <input type="text" value={this.state.task} onChange={this.handleChangeTask} />
        </label>
        <label>
          Status:
          <select value={this.state.status} onChange={this.handleChangeStatus}>
            <option value="pendente">Pendente</option>
            <option value="em andamento">Em andamento</option>
            <option value="pronto">Pronto</option>
          </select>
        </label>
        <input type="submit" value="Salvar" />
      </form>
    );
  }
}

export default AddTask;