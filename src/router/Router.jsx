import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom"
import { Top } from '../components/pages/Top';
import { Users } from '../components/pages/Users';
import { Page404 } from '../components/pages/Page404';
import { page1Routes } from './Page1Routes';
import { page2Routes } from './Page2Routes';
import { DefaultLayout } from '../components/templates/DefaultLayout';
import { HeaderOnly } from '../components/templates/HeaderOnly';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users/>
          </HeaderOnly>
        </Route>
        <Route path="/page1" render={({match:{ url }})=>(
          <DefaultLayout>
            <Switch>
              {page1Routes.map((route)=>(
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}>
                  {route.children}
                </Route>
              ))}
            </Switch>
          </DefaultLayout>
        )} />
        <Route path="/page2" render={({match:{ url }})=>(
          <DefaultLayout>
            <Switch>
              {page2Routes.map((route)=>(
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}>
                  {route.children}
                </Route>
              ))}
            </Switch>
          </DefaultLayout>
        )} />
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router