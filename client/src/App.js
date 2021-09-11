
import React, { Suspense, useEffect } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter, Switch, Route, useHistory, Redirect } from 'react-router-dom'
import Signup from './component/signup/signup'
import Dasboard from './component/dasboard/dasboard'
import Login from './component/login/login'
import createHistory from 'history/createBrowserHistory'


function App() {
  // const history = useHistory()
  const history = createHistory();
  let client = new ApolloClient({
    uri: 'http://localhost:5000/',
    cache: new InMemoryCache(),
    headers: {
      authorization: localStorage.getItem('__tokenx'),
      'client-name': 'WidgetX Ecom [web]',
      'client-version': '1.0.0'
    }
  })


  useEffect(() => {
    <Redirect to='/dasboard' />
    if (localStorage.getItem('__tokenx')) {

      history.push('/dasboard')
      // return window.location.reload()


    }
  }, [])

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>

        <div>
          <Switch>

            <Route exact path='/'>

            </Route>


            <Route exact path='/dasboard'>
              <Dasboard />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path='/login'>
              <Login />
            </Route>
          </Switch>
        </div>
      </ApolloProvider >
    </BrowserRouter>

  );
}

export default App;
