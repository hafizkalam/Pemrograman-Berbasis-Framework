import React, { useState } from "react";
import { ReactDOM } from "react";
import { 
  BrowserRouter as Router, 
  Routes,
  Route } 
  from "react-router-dom";
import routes from "./routes.js";
import Header from "./Header";
import "./styles.css";

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      Is Logged In? {JSON.stringify(isLoggedIn)}
      <div className="App">
        <Router>
          <Header />
          <Routes>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Routes>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);