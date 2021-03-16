import './App.css';
import {BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
function App() {
  return (
    <Router>
        <>
        <NavBar/>
            <Switch>
                <Route path='/panda'  />
                <Route path='/gorilla' />
                <Route path='/rhino' />
                <Route path='/seaTurtle'  />
                <Route path='/' />
            </Switch>
        </>
    </Router>
  );
}

export default App;
