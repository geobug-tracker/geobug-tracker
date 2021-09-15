import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./views/Home'));
const Signup = lazy(() => import('./views/Signin'));

import './global.scss';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
            <Footer className="footer" />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
