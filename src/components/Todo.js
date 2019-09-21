import React,  {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Header from './Header';
import Todoitems from './Todoitems';
class Todo extends Component {
    state = 
    {
        todoItems : [ ],
        newTodo : " "
    }
    // handleFilterTodos = (newTodo, individualItem) =>{
  
    //     this.setState((prevState)=>{
    //         return {
    //             newTodo : prevState.todoItems.filter(todoItems => newTodo || individualItem)
               
    //         }
    //     })
    // }
    handleRemoveOneItem = (individualItem) =>{
        this.setState((prevState) =>{
            return {
                todoItems : prevState.todoItems.filter(item => item !== individualItem)
                
            }
        })
    }
    handleRemoveAllItem = (todoItems) =>{
        this.setState({todoItems: []})
    }
    
    handleChange = (e) =>{
        this.setState({newTodo: e.target.value})
    }
    handleSubmit = e =>{
        e.preventDefault()
        this.setState(prevState=>{
           
                if (prevState.todoItems.includes(prevState.newTodo)){}
                else{
                    return{
                todoItems: [...prevState.todoItems, this.state.newTodo],
                newTodo: (prevState.newTodo = " ")
            }
        }
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.todoItems.length !== this.state.todoItems.length) {
          const jsonState = JSON.stringify(this.state.todoItems);
          localStorage.setItem("todoItems", jsonState);
        }
      }
      componentDidMount() {
        const itemsFromLocalStorage = localStorage.getItem("todoItems");
        const todoItems = JSON.parse(itemsFromLocalStorage);
        if(todoItems){
            this.setState(() => ({
                todoItems
              }));
            }
        }
        
    render (){
       
        
        return (
            <div>
                <NavLink to="/likes">Go To Like Page</NavLink>
                <Header title="My Todo App"/>
                <h3>Welcome to my Todo app </h3>
                <input type="text" placeholder ="Search for your todos" onChange={this.handleFilterTodos}  />
                <form onSubmit={this.handleSubmit}>
                    <label  htmlFor="">Todoitems</label>
                        <input  type="text" value={this.state.newTodo} onChange={this.handleChange}/>
                        <button>Submit</button>
                </form>
                {
                    this.state.todoItems.map(item =>
                         <Todoitems individualItem={item} handleRemoveOneItem = {this.handleRemoveOneItem}/>  )                    
                }    
                <br/>
                <hr/>
                <button onClick={this.handleRemoveAllItem}>Remove All</button>
            </div>
        )
    }
};


  
export default Todo;