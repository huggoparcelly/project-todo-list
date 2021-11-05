// Fonte de pesquisa: https://pt-br.reactjs.org/docs/forms.html

import { Component } from "react";
import { fetchSaveTodo } from '../services';

import { Row, Col, Form, Button } from 'react-bootstrap';


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
    );
  }
}

export default AddTask;