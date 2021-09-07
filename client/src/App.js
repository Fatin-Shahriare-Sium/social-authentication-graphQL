
import React, { Suspense } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './component/signup/signup'
import Dasboard from './component/dasboard/dasboard'
import Login from './component/login/login'



function App() {

  let client = new ApolloClient({
    uri: 'http://localhost:5000/',
    cache: new InMemoryCache(),
    headers: {
      authorization: localStorage.getItem('__tokenx'),
      'client-name': 'WidgetX Ecom [web]',
      'client-version': '1.0.0'
    }
  })


  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <Switch>

            <Route exact path='/'>
              <Signup />
            </Route>

            <Route exact path='/dasboard'>
              <Dasboard />
            </Route>

            <Route exact path='/login'>
              <Login />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
