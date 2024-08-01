import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import UserList from './UserList';

// react-router-dom 설치

// UserList /userlist   
///TodoList /todolist

const App = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/userlist" element = {<UserList />} />
                <Route path="/todolist" element = {<TodoList />} />

                {/* <Link to ="/userlist" /> */}
            </Routes>
        </Router>
        </>
    )
}

export default App;