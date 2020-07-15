import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import NewsPage from '../pages/news/news-page';
import NewsAdd from '../pages/news/news-add';
import NewsDetails from '../pages/news/news-details';
import NavBar from '../components/nav-bar';
import NavMenu from '../components/nav-menu';
import SnackbarItem from '../components/snackbar';
import DialogWindow from '../components/dialog-window';

import { config } from '../configs';
import { history } from '../store/store';

const { routes } = config.app;

const Routes = () => (
  <ConnectedRouter history={history}>
    <NavBar />
    <NavMenu />
    <Switch>
      <Route path={routes.pathToNews} exact component={NewsPage} />
      <Route path={routes.pathToAddNews} exact component={NewsAdd} />
      <Route path={routes.pathToNewsDetails} exact component={NewsDetails} />
    </Switch>
    <DialogWindow />
    <SnackbarItem />
  </ConnectedRouter>
);

export default Routes;