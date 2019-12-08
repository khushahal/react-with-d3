import React from 'react';

import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import { Switch, Route,  NavLink } from 'react-router-dom';



function App() {
  return (
    <div className="App">
     
     <header className="App-header">
        <nav className="navbar">
          <h2 className="navbar-brand">React D3 Chart Examples</h2>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink exact className="nav" activeClassName="active-nav" to="/">Bar Chart</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav" activeClassName="active-nav" to="/pieChart">Pie Chart</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>


      <Switch>
        <Route exact path="/" >
          <BarChart />
        </Route>
        <Route path="/pieChart" >
          <PieChart />
        </Route>
        <Route><BarChart /></Route>
      </Switch>
    </div>
  );
}

export default App;
