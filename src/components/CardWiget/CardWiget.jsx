import React from 'react'
import './CardWiget.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const CardWiget = () => {
  return (
    <div>
      <AiOutlineShoppingCart className="icon"/>
        <span className='smallText'>
          8
        </span>
    </div>
  )
}

export default CardWiget