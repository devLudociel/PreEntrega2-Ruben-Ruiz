import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Card from '../components/Card/Card';

const Category = () => {
  const [info, setInfo] = useState([]);

  let { categoryId } = useParams();

  let filteredProducts = info.filter((data) => {
    return data.categoria.id === categoryId;
  });

  useEffect(() => {
    axios("../data.json").then((json) =>
    setInfo(json.data)
    );
  }, []);

  return (
    <>
    {filteredProducts.map((info) => {
      return (
        <div className="link" key={info.id}>
          <Link to="/">
            <Card info={info} />
          </Link>
        </div>
      );
    })}
    </>
  );
};

export default Category