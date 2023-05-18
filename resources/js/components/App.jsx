import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import ShipmentPane from "./Shipment/ShipmentPane";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Layout from '@logikorinc/logikui';
import logo from './images/logikor-logo-standard.svg';
import '../../css/app.css';
import AppHeader from './AppHeader';

function App() {
  return (
      <React.Fragment>
          <BrowserRouter>
          <Layout 
          logo={logo}
          useSideBar={false}
          headerContent={AppHeader}>
              <Route path={'/app/login'}>
                  <Login/>
              </Route>
              <ProtectedRoute
                  exact path={'/app/dashboard'}
                  component={Dashboard}
              />
                <ProtectedRoute
                  exact path={'/shipment/:shipmentId'}
                  component={ShipmentPane}
              />
              </Layout>
          </BrowserRouter>
      </React.Fragment>
  );
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}