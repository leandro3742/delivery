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
import Login from './pages/Login'

function App() {
  const [isLogged, setIsLogged] = useState(true)
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          <Provider store={store}>
            <Layout isLogged={isLogged}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ProtectedRoutes user='' />}>
                  <Route path="/pick-up" element={<PickUp />} />
                  <Route path="/mis-pedidos" element={<MisPedidos />} />
                  <Route path="/admin" element={<Admin />} />
                </Route>
              </Routes>
            </Layout>
          </Provider>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App