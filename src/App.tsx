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

function App() {
  const [isLogged, setIsLogged] = useState(true)
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          <Provider store={store}>
            <Layout isLogged={isLogged}>
              <Routes>
                <Route path='/iniciar-sesion' element={<SignIn />} />
                <Route path='/registrarse' element={<SignUp />} />
                <Route path="/" element={<ProtectedRoutes />}>
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