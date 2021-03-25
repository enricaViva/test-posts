import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Posts</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Posts />
            </Route>
            <Route exact path="/post/:id">
              <Post />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}
