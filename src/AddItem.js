
import React from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      Id: '',
      Task: '',
      TaskDate: '',
      IsFinished: ''
    }

    if(props.item){
      this.state = props.item
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {

    let pageTitle;
    if(this.state.id) {
      pageTitle = <h2>Edit Product</h2>
    } else {
      pageTitle = <h2>Add Product</h2>
    }

    return(
      <div>
        {pageTitle}
        <Row>
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
              <div controlId="productName">
                <label>Task Name</label>
                <input
                  type="text"
                  name="productName"
                  value={this.state.Task}
                  onChange={this.handleChange}
                  placeholder="Task Name"/>
              </div>
              <Form.Group>
                <Form.Control type="hidden" name="id" value={this.state.id} />
                <Button variant="success" type="submit">Save</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AddTask;
