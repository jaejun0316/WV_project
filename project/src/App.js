import React from "react";

//npm install react-router-dom --save
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Main from "./pages/Main"
import ListPage from "./pages/ListPage";
import UpdatePage from "./pages/UpdatePage";
import UploadPage from "./pages/UploadPage";


function App() {
  return (
    <BrowserRouter>
        <header>
          <h1>출석부</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/ListPage">ListPage</Link>
            </li>
            <li>
              <Link to="/UpdatePage">UpdatePage</Link>
            </li>
            <li>
              <Link to="/UploadPage">UploadPage</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ListPage" element={<ListPage />} />
          <Route path="/UpdatePage" element={<UpdatePage />} />
          <Route path="/UploadPage" element={<UploadPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;