import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import OrderItems from '../components/OrderItems';
import ProductItem from '../components/ProductItem';
import Order from '../components/Order';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/"  element={<Home/>}/>
          <Route exact path="/Login"  element={<Login/>}/>
          <Route exact path="/recovery-password"  element={<RecoveryPassword/>}/>
          <Route exact path="/order-items"  element={<OrderItems/>}/>
          <Route exact path="/product-items"  element={<ProductItem/>}/>
          <Route exact path="/order"  element={<Order/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;