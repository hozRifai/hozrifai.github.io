import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Index from "./components/home/index";
// import SKILLS from './components/skills';
import NotFound from "./layout/404";
import Contact from './components/contact/contact';


const BaseRouter = () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route exact path="/home" component={Index} />
    {/* <Route exact path="/skills" component={SKILLS} /> */}
    <Route exact path="/contact" component={Contact} />
    <Route path="/404" component={NotFound} />
    <Redirect to="/404" />
  </Switch>
);

export default BaseRouter;
