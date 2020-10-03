import React, { lazy, Suspense } from "react";
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import appRoutes from '../constants/appRoutes'

import PageLoader from "../components/common/PageLoader";
import PageContainer from "../components/common/PageContainer";

const Home = lazy(() => import('../screens/home'))
const Categories = lazy(() => import('../screens/categories'))
const SubCategories = lazy(() => import('../screens/sub-categories'))
const NotFound = lazy(() => import('../screens/not-found'))

export const history = createBrowserHistory();
export default () => (
  <Router history={history}>
    <PageContainer>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route exact path={appRoutes.ROOT} component={Home} />
          <Route exact path={appRoutes.CATEGORIES} component={Categories} />
          <Route exact path={`${appRoutes.CATEGORIES}/:selectedLocation/:selectedBranch`} component={Categories} />
          <Route exact path={`${appRoutes.CATEGORIES}/:subcategory/:selectedLocation/:selectedBranch`} component={SubCategories} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </PageContainer>
  </Router>
);