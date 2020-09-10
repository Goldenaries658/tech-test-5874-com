import React from 'react';
import './css/main.css';
import Header from './sections/Header';
import SubHeader from './sections/Subheader';
import Services from './sections/Services';
import Blog from './sections/Blog';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="*">
            <SubHeader />
            <Services />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
