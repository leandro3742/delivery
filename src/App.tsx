// React
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
// Pages
import Home from './pages/Home'
import Layout from './components/Layout'

import './index.css'
import PickUp from './pages/PickUp'
// Redux
import { Provider } from "react-redux";
import store from './redux/store'
import MisPedidos from './pages/MisPedidos'
import Admin from './pages/Admin'
import ProtectedRoutes from './components/ProtectedRoutes'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import WebSocketClient from './pages/Websocket'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />

          <BrowserRouter>
            <Provider store={store}>
              <Layout>
                <Routes>
                  <Route path='/iniciar-sesion' element={<SignIn />} />
                  <Route path='/registrarse' element={<SignUp />} />
                  <Route path="/" element={<ProtectedRoutes />}>
                    <Route path="/pick-up" element={<PickUp />} />
                    <Route path="/mis-pedidos" element={<MisPedidos />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path='/websocket' element={<WebSocketClient />} />
                  </Route>
                </Routes>
              </Layout>
            </Provider>
          </BrowserRouter>
        </ThemeProvider>
      </SnackbarProvider>

    </div >
  )
}

export default App