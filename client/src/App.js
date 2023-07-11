//import components here.
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  { Homepage } from './components/homepage/Homepage';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ApolloProvider } from '@apollo/client';
import { Footer } from './components/footer/Footer';
import { SignUp } from './components/signup/Signup'
import { Navbar } from './components/navbar/Navbar';
import '../src/index.css';
import { Login } from './components/login/Login';
import { Example } from './components/results-page/Results'
import { ListingForm } from './components/create-listing-form/ListingForm';
import { ViewUser } from './components/view-user/ViewUser';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Wrap page elements in Router component to keep track of location state */}
      <Navbar />
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            {/* Wrap Route elements in a Routes component */}
            <Routes>
              {/* Define routes using the Route component to render different page components at different paths */}
              {/* Define a default route that will render the Home component */}
              <Route
                path="/" 
                element={<Homepage />} 
              />
              {/* Define a route that will take in variable data */}
              <Route 
                path="/signup" 
                element={<SignUp />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route
                path="/results"
                element={<Example />}
              />
              <Route
                path="/create-listing"
                element={<ListingForm />}
              />
              <Route
                path="/view-user"
                element={<ViewUser />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
