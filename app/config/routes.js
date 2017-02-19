var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Layout = require("../components/layout");
var HomePage = require("../components/home_page");
var SwitchPage = require('../components/switch_page');
// var PromptContainer = require("../containers/PromptContainer");
// var ConfirmBattleContainer = require("../containers/ConfirmBattleContainer");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path='stars' header='lights' component={SwitchPage} />
    </Route>
  </Router>
);

module.exports = routes;
