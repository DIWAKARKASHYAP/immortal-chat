import "./App.css";
// import { ethers } from "ethers";
// import { useState } from 'react';
// import Button from '@mui/material/Button';

import Navbar from "./components/navbar";
import Main from "./components/main";
import All from "./pages/all";
import CreateChat from "./pages/createChat"
import ReadChat from "./pages/readChat";
import JoinChat from "./pages/joinChat";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* {address} */}
        <Navbar />



        <Switch>
          <Route path="/all">
            <All />
          </Route>

          <Route path="/JoinChat">
            <JoinChat />
          </Route>
          
          <Route path="/createchat">
            <CreateChat />
          </Route>

          <Route path="/ReadChat">
            <ReadChat />
          </Route>

          <Route path="/">
          <Main />
           
          </Route>


        </Switch>

      </Router>

    </div>
  );
}

export default App;
