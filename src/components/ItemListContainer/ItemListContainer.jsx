import { Link } from 'react-router-dom';
import Card from '../Card/Card'
import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import axios from 'axios'


const ItemListContainer = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products`).then((json) =>
      setInfo(json.data)
    );
  }, []);

  return (
    <>
    {info.map((info) => {
      return (
        <div className="link" key={info.id}>
          <Link to={`/detail/${info.id}`}>
            <Card info={info} />
          </Link>
        </div>
      );
    })}
    </>
  )
}

export default ItemListContainer