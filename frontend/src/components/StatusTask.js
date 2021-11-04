// Fonte de pesquisa: https://pt-br.reactjs.org/docs/forms.html

import { Component } from "react";
// import { fetchSaveTodo } from '../services';


class StatusTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      status: 'pendente',
    };

  }

  handleChangeStatus = (event) => {
    const formData = this.state;
    this.setState({ status: event.target.value })
  }

  render() {
    return (
      <form>
        <label>
          Status:
          <select value={this.state.status} onChange={this.handleChangeStatus}>
            <option value="pendente">Pendente</option>
            <option value="em andamento">Em andamento</option>
            <option value="pronto">Pronto</option>
          </select>
        </label>
      </form>
    );
  }
}

export default StatusTask;