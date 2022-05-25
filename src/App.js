import productApi from 'api/productApi';
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Link, Switch, Redirect, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import NotFound from './components/NotFound/index'

const Photo = React.lazy(() => import("./features/Photo"))
function App() {
  const [productsList, useProductsList] = useState([]);

  useEffect(() => {
    const fetchProductsList = async () => {
      try {
        const response = productApi.getAll();
        console.log(response)
      } catch (error) {
        console.log('Failed to get list', error)
      }
    }
    fetchProductsList();
  }, [])
  return (
    <div className="photo-app">

      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
