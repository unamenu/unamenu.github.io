import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from "./Menu";

export default function App() {

  return (
    <Router>
      <Route path="/" component={Menu} />
    </Router>
  );
}
