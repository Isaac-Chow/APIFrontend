import './App.css';
import Navbar from './components/Navbar';

import User from './components/User';
import Article from "./components/Article";
import Project from "./components/Project";
import ArticleList from "./components/ArticleList";
import ProjectList from "./components/ProjectList";
import UserList from "./components/UserList";
import Home from "./components/Home";
import Login from './components/Login';
import Signup from './components/Signup';
import { UserProvider } from './components/UserContext';

// IMport the browser router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <UserProvider value={{ user: {token: null, username: "anonymous"} }} >
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <h1>React Django API</h1>
            <hr className="mb-3" />
            <div className="d-flex justify-content-center">
              <div className="col-md-8 pt-4">
                <Routes>
                  {/* isaac.github.io */}
                  {/* <Route path="/" element={<Home />} /> */}
                  {/* isaac.github.io/projectName */}
                  <Route path="/APIFrontend" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/projects" element={<ProjectList />} />
                  <Route path="/projects/:id" element={<Project />} />

                  <Route path="/users/" element={<UserList />} />
                  <Route path="/users/:id" element={<User />} />

                  <Route path="/articles" element={<ArticleList />} />
                  <Route path="/articles/:id" element={<Article />} />

                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
