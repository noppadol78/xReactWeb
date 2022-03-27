import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MsalProvider } from "@azure/msal-react";

import { b2cPolicies } from "./authConfig";
import { PageLayout } from "./components/PageLayout";
import { Hello } from "./pages/Hello";
import { HRH03 } from "./pages/HRH03";

import "./styles/App.css";

import React, { Component } from 'react';
import ThirdFloor from './HRH/HRH3Floor';
import EleventhFloor from './HRH/HRH11Floor';

const Pages = () => {

  return (
    <Switch>
      <Route path="/hello">
        <Hello />
      </Route>
	    <Route path='/buildings/hrh/11thfloor' exact component={EleventhFloor} />
      <Route path='/hrh/03'>
        <HRH03 />
      </Route> 
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