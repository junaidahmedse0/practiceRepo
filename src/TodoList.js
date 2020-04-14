import React, { Component } from 'react'
// import { Button } from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class TodoList extends Component {
        
  
  
    constructor(props) {
          super(props);
          this.state = {
            error: null,
            todolist: [],
            response: {}
          }
        }


  componentDidMount() {
    const apiUrl = 'https://localhost:44373/api/TodoListApi';

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {

          console.log(JSON.stringify(result))
          this.setState({
            todolist: result
          });
        },
        (error) => {
          console.log(JSON.stringify(error))

          this.setState({ error });
        }
      )
  }
  deleteItem(Id) {
    const { todolist } = this.state;

    const apiUrl = 'https://localhost:44373/api/TodoListApi/'+Id;
    
      fetch(apiUrl, {  
          method: 'delete'  
      }).then(data => {  
          this.setState(  
              {  
                  todolist: this.state.todolist.filter((rec) => {  
                      return (rec.id != Id);  
                  })  
              });  
      });  

  }


  // getButton(id)
  // {
  //     var button="";
  //     if(id==true)
  //     {
  //       button+="<button class='btn btn-success'>Completed</button>"; 
  //     }
  //     else{
  //       button+="<button class='btn btn-danger'>InComplete</button>";  
  //     }
  //     return button;

  // }
     render() {
      const { error, todolist} = this.state;
      if(error)
      {
        return (
          <div>Error: {error.message}</div>
        )
      }
      else
      {

      return (
      <div>
        <div class="row mt-5 text-center">
          
        

          Task List
          
          
          </div>

        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">

            <table className="table">
              <thead>
                  <tr>
                    <th>No.</th>
                    <th>Task</th>
                    <th>TaskDate</th>
                    <th>Action</th>

                  </tr>
              </thead>
              <tbody>
              {
              
                todolist.map(todo => (
                 

                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.task}</td>
                  <td>{todo.taskDate}</td>
                  <td>{todo.isFinished}</td>
                  <td> 
                    
                    
                  <button className="btn btn-danger" onClick={() => this.deleteItem(todo.id)}>Delete</button>
                         
                    
                      
                   
                  </td>
                </tr>
              ))
              
              
              }
              </tbody>


        </table>


            </div>

            <div className="col-2"></div>


        </div>
        
        
        </div>
       
      )
      }
    }
  }
  
  

export default TodoList;