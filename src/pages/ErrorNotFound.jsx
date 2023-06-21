import React from 'react'
import { useRouteError, Link } from "react-router-dom";
import './Error.css'

const ErrorNotFound = () => {
  const error = useRouteError();

  return (
    <div className='containerError'>
      <div>
        <img src="../../src/assets/img/error404.png" alt="Error 404" />
      </div>
      <div className='msjError'>
        <p>CREO QUE TE HAS PERDIDO, ESTA NO ES LA RUTA QUE DESEAS</p>
        <Link className="btnError" to="/">
          <span>Volver al Inicio</span>
        </Link>
      </div>
    </div>
  )
}

export default ErrorNotFound