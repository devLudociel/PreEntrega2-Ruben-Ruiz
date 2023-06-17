import React from 'react'

const Card = ({info}) => {
  const {titulo, precio, imagen } = info
  
  return (
    <>
        <div className="card">
        <div className="imge">
          <div className="Usericon"></div>
          <p className="title">{titulo}</p>
          <p className="price">{`${precio}$`}</p>
        </div>

        <img src={imagen} alt="img" className='Description'/>
        <button className='btnCard'>Comprar</button>
      </div>
    </>
  )
}

export default Card