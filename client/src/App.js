//import components here.
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import { Navbar } from './components/Navbar';
import { SignUp } from './components/Signup';
import { Login } from './components/Login';
import { Footer } from './components/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
          <Switch>
            <Route exact path='/' Component={Homepage} />
            <Route exact path='/signup' Component={SignUp} />
            <Route exact path='/login' Component={Login} />
          </Switch>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
