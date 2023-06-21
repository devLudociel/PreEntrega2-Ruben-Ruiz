
import React from 'react'

const Card = ({info}) => {
  const {price, image, title } = info


  return (
    <>
        <div className="card">
        <div className="imge">
          <div className="Usericon"></div>
          <p className="title">{title}</p>
          <p className="price">{`${price}$`}</p>
        </div>

        <img src={image} alt="img" className='img'/>
        <button className='btnCard'>Comprar</button>
      </div>
    </>
  )
}

export default Card