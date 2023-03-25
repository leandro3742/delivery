import Modal from "./Modal"
import Navbar from "./Navbar"

interface props {
  isLogged: boolean,
  children: JSX.Element
}
function Layout(props: props) {
  const { isLogged, children } = props
  return (
    <div>
      <Navbar />
      <div style={{ position: 'fixed', top: '55px', width: '100%' }}>
        {children}
      </div>
      <Modal />
    </div>
  )
}

export default Layout