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
import SendEmail from '../pages/SendEmail';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/global.css';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/home"  element={<Home/>}/>
            <Route exact path="/login"  element={<Login/>}/>
            <Route exact path="/recoverypassword"  element={<RecoveryPassword/>}/>
            <Route exact path="/sendemail"  element={<SendEmail/>}/>
            <Route exact path="/new-password"  element={<NewPassword/>}/>
            <Route exact path="/account"  element={<MyAccount/>}/>
            <Route exact path="/signup"  element={<CreateAccount/>}/>
            <Route exact path="/checkout"  element={<Checkout/>}/>
            <Route exact path="/orders"  element={<Orders/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;