import React from 'react'
import { Link } from 'react-router-dom'
import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import ListPage from "../pages/ListPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import UpdatePage from "../pages/UpdatePage";
import UploadPage from "../pages/UploadPage";

function Header(props) {
  return (
    <>
        <h1>Header</h1>
        <Router>
      <nav>
        <Link to="/">
          <button>ListPage</button>
        </Link>
        <Link to="/UpdatePage">
          <button>UpdatePage</button>
        </Link>
        <Link to="/UploadPage">
          <button>UploadPage</button>
        </Link>
        <Link to="/UploadPage">
          <button>UploadPage</button>
        </Link>
      </nav>
      <hr />
      <main>
        <Route exact path="/" component={ListPage} />
        <Route path="/UpdatePage" component={UpdatePage} />
        <Route path="/UploadPage" component={UploadPage} />
        <Route path="/err" component={NotFound} />
      </main>
    </Router>
    </>
  )
}

export default Header
