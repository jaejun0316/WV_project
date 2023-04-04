import React from "react";

//npm install react-router-dom --save
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
// import Home from "./view/home/Home";
// import Main from "./view/main/Main";
import Header from "./common/Header_Nav"

function App() {
  return (
    <BrowserRouter>
      <Header>
        
      </Header>
        <Routes>
        </Routes>
    </BrowserRouter>
  );
}

export default App;