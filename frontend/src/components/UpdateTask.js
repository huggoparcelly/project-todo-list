// Fonte de pesquisa: https://pt-br.reactjs.org/docs/forms.html

import { Component } from "react";
import { fetchUpdateTodo } from '../services';


class UpdateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      status: 'pendente',
      updated: false,
    };

  }

  handleChangeTask = (event) => {
    this.setState({ task: event.target.value });
  }

  handleChangeStatus = (event) => {
    this.setState({ status: event.target.value })
  }

  handleSubmit = async (event) => {
    const { task, status } = this.state;
    const id = this.props.id;
    await fetchUpdateTodo(id, {task, status});
    // event.preventDefault();
  }

  handleClickUpdate = () => {
    this.setState(prevState => ({
      updated: !prevState.updated
    }) )
  }

  renderUpdate = () => {
    return (<form onSubmit={this.handleSubmit}>
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
    </form>)
  }

  render() {
    return (
      <div>
        {this.state.updated ? this.renderUpdate() : <span></span>}
        <button
          type='submit'
          onClick = {this.handleClickUpdate}
        >editar</button>
      </div>
    );
  }
}

export default UpdateTask;