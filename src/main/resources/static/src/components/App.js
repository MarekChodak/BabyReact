import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DashboardPage from './home/DashboardPage';
import AddBabyPage from './addBaby/AddBabyPage';
import SideMenu from './sideMenu/SideMenu';
import MeasuresPage from "./measures/MeasuresPage";
import VaccinationsPage from "./vaccination/VaccinationsPage";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <SideMenu/>
            <div className="container-fluid">
              <div className="mainView">
                <Route exact path="/" component={DashboardPage}/>
                <Route exact path="/addBaby" component={AddBabyPage}/>
                <Route exact path="/measures" component={MeasuresPage}/>
                <Route exact path="/vaccination" component={VaccinationsPage}/>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
