import { useState, useEffect } from "react";
import "./assets/scss/main.scss";
import Navbar from "./components/layout/NavBar/NavBar";
import Landing from "../src/components/Landing/Landing";
import { loadUser } from "./redux/actions/auth";
import Temp from "./components/pages/Temp";
import store from "./redux/store";
import { Provider } from "react-redux";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Installation from "./components/installation/Installation";

function App () {
  useEffect(() => {
    console.log("sdddddddddddddddddS");
  }, []);

  return (

    // <div className="App">
    // <div style={{ backgroundColor: "#E2E4F0", height: "100vh" }}>
    <Provider store={store}>
     
      <div style={{ height: "100vh", overflowX: "hidden" }}>
        <Router>
          <>
          
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/temp" component={Temp} />
              {/* <Route component={Routes} /> */}
            </Switch>
          </>
        </Router>
     <Installation />

        {/* <header className="App-header">hey</header> */}
      </div>
    </Provider>
    
  );
}

export default App;
