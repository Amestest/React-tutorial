 import UserList from "./UserList";
 import TodoList from "./TodoList";
 import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

 const App = () => {
    return(
        <>
        <Router>
            <Routes>
                <Route path="/userlist" element = {<UserList/>}/>
                <Route path="/todolist" element = {<TodoList/>}/>

                {/*<Link to ="/userlist"/>*/}
                </Route>
            </Routes>
        </Router>
        </>
    )

}