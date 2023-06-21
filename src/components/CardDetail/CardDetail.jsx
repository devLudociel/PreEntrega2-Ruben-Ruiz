import React from 'react'
import './CardDetail.css'

const CardDetail = ({info}) => {
  const {price, image, title, description } = info


  return (
    <>
        <div className="cardDetailContainer">

          <div className="productInfo">
            <img src={image} alt="Imagen de producto" />
            <div className="btnBuy">
            <button className='secondary'>Añadir a Deseos</button>
            <button className='primary'>Comprar Ahora</button>
            </div> 
          </div>

          <div className="productDetails">
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>$ {price}</h3>
            <ul>
              <li>Color</li>
              <li>Talla</li>
              <li>Stock</li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default CardDetail




