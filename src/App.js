import React, { useRef, useEffect } from 'react';
import { useLocation, Switch, Link } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Report from './views/Report'
import Auth from './views/Auth'

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className='bgbgbg'>
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>   
          <AppRoute exact path="/api/report/list/:ownerTel" component={Report} layout={LayoutDefault} />
          <AppRoute exact path="/auth" component={Auth} layout={LayoutDefault} />
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
        </Switch>
      )} />
      </div>
  );
}

export default App;