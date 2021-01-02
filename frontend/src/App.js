import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FlightsList from "./components/FlightsList";
import EditFlight from "./components/EditFlight";
import CreateFlight from "./components/CreateFlight";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Route exact path="/" component={FlightsList} />
      <Route path="/edit/:id" component={EditFlight} />
      <Route path="/create" component={CreateFlight} />
    </BrowserRouter>
  );
}

export default App;
