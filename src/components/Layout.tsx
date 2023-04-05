import { useSelector } from "react-redux"
import { AppState } from "../redux/reducers"
import Modal from "./Modals/Modal"
import ModalController from "./Modals/ModalController"
import Navbar from "./Navbar"

interface props {
  isLogged: boolean,
  children: JSX.Element
}
function Layout(props: props) {
  const { isLogged, children } = props
  const spinner = useSelector((state: AppState) => state.spinner)
  return (
    <div>
      {spinner && <div className="loader">Loading...</div>}
      <div className={`${spinner ? 'opacity-30 pointer-events-none' : ''}`}>
        <Navbar />
        <div style={{ position: 'fixed', top: '55px', width: '100%' }}>
          {children}
        </div>
        <ModalController />
      </div>
    </div>
  )
}

export default Layout