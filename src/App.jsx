import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MsalProvider } from "@azure/msal-react";

import { b2cPolicies } from "./authConfig";
import { PageLayout } from "./components/PageLayout";
import { Hello } from "./pages/Hello";

import "./styles/App.css";

import React, { Component } from 'react';
import thirdFloor from './HRH/HRH3Floor';

const Pages = () => {

  return (
    <Switch>
      <Route path="/hello">
        <Hello />
      </Route>
	  <Route path='/buildings/hrh/3rdfloor' exact component={thirdFloor} />
    </Switch>
  )
}

const App = ({ instance }) => {
  return (
    <Router>
      <MsalProvider instance={instance}>
        <PageLayout>
          <Pages />
        </PageLayout>
      </MsalProvider>
    </Router>
  );
}

export default App;