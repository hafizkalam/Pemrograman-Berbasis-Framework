<<<<<<< HEAD
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../Actions/actionsCreator'
import {bindActionCreators} from 'redux'

class CreateTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            todotext: '',
        }
        this.onChangeTodoText = this.onChangeTodoText.bind(this)
    }

    onChangeTodoText(e){
        this.setState({
            todotext: e.target.value
        })
    }

    render(){
        return (
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <input onChange={this.onChangeTodoText} value={this.state.todotext}
type="text" className="form-control" id="inputEmail3" placeholder="add todo here"/>
                      <button type="button" onClick={ () => this.setState({ todotext: '' }) }
style={{marginTop: "25px", marginRight: "15px"}} className="btn btndanger">Cancel</button>
<button type="button" onClick={() => {

this.props.addTodo(this.state.todotext);this.setState({todotext:''}) } }
style={{marginTop:"25px"}} className="btn btn-success">Add Todo</button>
                </div>
            </div>
        );
   }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
    addTodo
    },dispatch)
}

export default connect(null, mapDispatchToProps)(CreateTodo)
=======
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Actions/actionsCreator';
import { bindActionCreators } from "redux";
import { AwesomeButton } from "react-awesome-button";

class CreateTodo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todotext: "",
      };
      this.onChangeTodoText = this.onChangeTodoText.bind(this);
    }
  
    onChangeTodoText(e) {
      this.setState({
        todotext: e.target.value,
      });
    }
  
    render() {
      return (
        <div className="container">
          <div className="form-group row">
            <div className="col-sm-10">
              <div className="input-group mt-5">
                <span className="input-group-text">📋 Add todo here</span>
                <input
                  type="text"
                  onChange={this.onChangeTodoText}
                  value={this.state.todotext}
                  className="form-control"
                  aria-label="Add todo here"
                />
              </div>
              <AwesomeButton
                type="link"
                style={{ marginTop: "25px", marginRight: "15px" }}
                ripple
                onPress={() => this.setState({ todotext: "" })}
              >
                ⚠ Cancel
              </AwesomeButton>
              <AwesomeButton
                type="primary"
                style={{ marginTop: "25px" }}
                ripple
                onPress={() => {
                  this.props.addTodo(this.state.todotext);
                  this.setState({ todotext: "" });
                }}
              >
                ☑ Add Todo
              </AwesomeButton>
            </div>
          </div>
        </div>
      );
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        addTodo,
      },
      dispatch
    );
  };
  
  export default connect(null, mapDispatchToProps)(CreateTodo);
>>>>>>> db7e801a7f9db56c2d8f2b82dffbe2286b6a8568
