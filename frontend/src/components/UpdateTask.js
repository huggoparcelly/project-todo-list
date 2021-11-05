// Fonte de pesquisa: https://pt-br.reactjs.org/docs/forms.html

import { Component } from "react";
import { fetchUpdateTodo, fetchRemoveTodo } from '../services';

import { Row, Col, Form, Button } from 'react-bootstrap';


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
  }

  handleClickUpdate = () => {
    this.setState(prevState => ({
      updated: !prevState.updated
    }) )
  }

  handleRemove = async () => {
    const id = this.props.id;
    await fetchRemoveTodo(id);
    window.location.reload()
  }

  renderUpdate = () => {
    return (
    <Form className="w-75 mb-3" onSubmit={this.handleSubmit}>
      <Row className="align-items-center">
        <Col>
          <Form.Control placeholder="Adicione sua tarefa aqui..." onChange={this.handleChangeTask}/>
        </Col>
        <Col>
        <Form.Select value={this.state.status} onChange={this.handleChangeStatus}>
          <option value="Pendente">Pendente</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Pronto">Pronto</option>
        </Form.Select>
        </Col>
        <Col>
          <Button type='submit' variant="success">Salvar</Button>
        </Col>
      </Row>
    </Form>
    )
  }

  render() {
    return (
      <div>
        {this.state.updated ? this.renderUpdate() : <span></span>}
        <Button
          type='submit'
          onClick = {this.handleClickUpdate}
          variant="warning"
        >Editar</Button>
        {' '}
        <Button
          type='submit'
          variant="danger"
          onClick = {this.handleRemove}
        >Excluir</Button>
      </div>
    );
  }
}

export default UpdateTask;