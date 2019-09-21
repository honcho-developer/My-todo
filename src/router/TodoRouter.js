import React,  {Component} from 'react';
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Todo from '../components/Todo';
import Likes from '../components/likes'

const ErrorPage = (props) =>{
    console.log(props)
    return (
    <div>
       This not a correct site so type a correct one Error 911 -  <Link to="/"> Go Home</Link>
    </div>
    )
     
}
const TodoRouter = ()=>(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Todo} exact={true}/>
                <Route path="/likes" component={Likes} exact={true}/>
                <Route component={ErrorPage} />
            </Switch>
        </div>
    </BrowserRouter>
)
export default TodoRouter;