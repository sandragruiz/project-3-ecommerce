//import components here.
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import { Footer, Login, Navbar, SignUp } from './components';

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
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={Login} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App();
