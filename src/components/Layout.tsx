import { useSelector } from "react-redux"
import { AppState } from "../redux/reducers"
import Modal from "./Modals/Modal"
import ModalController from "./Modals/ModalController"
import Navbar from "./Navbar"

interface props {
  children: any
}
function Layout(props: props) {
  const { children } = props
  const spinner = useSelector((state: AppState) => state.spinner)
  return (
    <div>
      {spinner && <div className="loader">Loading...</div>}
      <div className={`${spinner ? 'opacity-30 pointer-events-none' : ''}`}>
        <div style={{ position: 'absolute', top: '0', width: '100%' }}>
          <Navbar />
        </div>
        <div style={{ position: 'relative', top: '55px', width: '100%' }}>
          {children}
        </div>
        <ModalController />
      </div>
    </div>
  )
}

export default Layout