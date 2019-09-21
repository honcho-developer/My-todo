import React,  {Component} from 'react';
import {NavLink } from 'react-router-dom'
class Likes extends Component {
    state = {
        likes: 0,
        name: "Honcho"
    }
    // Hello = () => {
    //     alert('Hello World')  
    // }
    increaseLike = ()=> {
        this.setState ( (prevState, prevprops) =>{
            return{
                likes: prevState.likes < 5 ? prevState.likes + 1 : prevState.likes = 5
            }
        })
    }
    unLike = ()=> {
        this.setState ( (prevState, prevprops) =>{
            return{
                likes: prevState.likes > 0 ? prevState.likes - 1 : prevState.likes = 0
            }
        })
    }
    reset = ()=> {
        this.setState ( (prevState, prevprops) =>{
            return{
                likes: prevState.likes = 0
            }
        })
    }
    
  
    render ( ){
        return(
            <div className = "body">
                <NavLink to="/">Go To Home page</NavLink>

                <div>
                        <h1>This is my likes App</h1>
                    <h3>likes: {this.state.likes}</h3>
                    <h3>name: {this.state.name}</h3>
                    <button onClick = {this.increaseLike} >Like</button>
                    <button onClick = {this.unLike} >UnLike</button>
                    <button onClick = {this.reset} >Reset</button>
                </div>
                
            </div>
        )
    }
}

export default Likes;