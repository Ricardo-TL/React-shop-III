import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import RecoveryPassword from '../pages/RecoveryPassword';
import Home from '../pages/Home';
import NewPassword from '../pages/NewPassword';
import CreateAccount from '../pages/CreateAccount';
import Orders from '../pages/Orders';
import MyAccount from '../pages/MyAccount';
import Checkout from '../pages/Checkout';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/home"  element={<Home/>}/>
          <Route exact path="/Login"  element={<Login/>}/>
          <Route exact path="/recovery-password"  element={<RecoveryPassword/>}/>
          <Route exact path="/product-info"  element={<ProductInfo/>}/>
          <Route exact path="/product-info"  element={<ProductInfo/>}/>
          <Route exact path="/new-password"  element={<NewPassword/>}/>
          <Route exact path="/create-account"  element={<CreateAccount/>}/>
          <Route exact path="/orders"  element={<Orders/>}/>
          <Route exact path="/my-account"  element={<MyAccount/>}/>
          <Route exact path="/checkout"  element={<Checkout/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;