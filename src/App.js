import "./App.css";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Context } from "./ContextApi";
import Navbar from "./component/Navbar";
import Register from "./component/Register";
import Login from "./component/Login";
import Home from "./component/Home";
import PostDetails from "./component/PostDetail";
import UserPost from "./component/UserPost";
import UserPostDetails from './component/UserPostDetails';
import PostCreate from './component/PostCreate';

import { useContext } from "react";

function App() {
  const context = useContext(Context);
  return (
    <div className="App">
      <Navbar />

      {context.message !== "" ? (
        <div className="container">
          <div className="mt-3 pt-2" id="message-div">
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <strong>{context.message}</strong>
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span
                  id="message-close"
                  aria-hidden="true"
                  onClick={() => context.hideMessage()}
                >
                  &times;
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="container">
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/register"
            render={(props) => <Register {...props} />}
          />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route exact path="/user_posts" render={(props) => <UserPost {...props} />} />
          <Route
            exact
            path="/user_posts/:id"
            render={(props) => <UserPostDetails {...props} />}
          />
          <Route
            exact
            path="/post/:id"
            render={(props) => <PostDetails {...props} />}
          />
          <Route
            exact
            path="/create_post"
            render={(props) => <PostCreate {...props} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
