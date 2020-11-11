import './App.css';
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import Navbar from './component/Navbar';
import Register from './component/Register';
import Login from './component/Login';
import Home from './component/Home';
import PostDetails from './component/PostDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' render={(porps) => <Home {...porps} />} />
        <Route exact path='/register' render={(porps) => <Register />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route exact path='/:id' render={(props) => <PostDetails />} />
      </Switch>
    </div>
  );
}

export default App;
