import { useState } from "react"
import { TextField, Button } from "@mui/material"
import { Link } from "react-router-dom"
import '../styles/login.css'

const Login = () => {
  const [type, setType] = useState('login')
  console.log(type)
  return (
    <div className="login-container">

      <div className="login-div bg-red-300 rounded shadow-2xl p-10">
        {type === 'login' &&
          <>
            <h1 className="font-bold text-3xl text-center mx-20">Iniciar sesion</h1>

            <TextField sx={{ margin: '20px 0 10px 0' }} label="Correo" variant="filled" />
            <TextField sx={{ marginY: '10px' }} label="Contraseña" variant="filled" />

            <div className="flex justify-center mt-6">
              <Button variant='contained'>Iniciar sesion</Button>
            </div>
            <div className="mt-4 cursor-pointer" >
              <span className="text-lg">Si aun no tienes cuenta</span><span onClick={() => setType('registry')} className="cursor-pointer mx-2 text-lg text-sky-700 underline underline-offset-1 decoration-sky-500">Registate aqui</span>
            </div>
          </>
        }

        {type === 'registry' &&
          <>
            <h1 className="font-bold text-3xl text-center mx-20">Registro</h1>
            <TextField sx={{ margin: '20px 0 10px 0' }} label="Nombre" variant="filled" />
            <TextField sx={{ marginY: '10px' }} label="Apellido" variant="filled" />
            <TextField sx={{ marginY: '10px' }} label="Correo" variant="filled" />
            <TextField sx={{ marginY: '10px' }} label="Telefono" variant="filled" />
            <TextField sx={{ marginY: '10px' }} label="Contraseña" variant="filled" />
            <TextField sx={{ marginY: '10px' }} label="Repetir contraseña" variant="filled" />

            <div className="flex justify-center mt-6">
              <Button variant='contained'>Registarme</Button>
            </div>
            <div className="mt-4 cursor-pointer" >
              <span className="text-lg">Si ya tienes cuenta</span><span onClick={() => setType('login')} className="cursor-pointer mx-2 text-lg text-sky-700 underline underline-offset-1 decoration-sky-500">Iniciar sesion</span>
            </div>
          </>

        }
      </div>
    </div>
  )
}

export default Login