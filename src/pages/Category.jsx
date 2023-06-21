import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card/Card";

const Category = () => {
  const [info, setInfo] = useState([]);

  let { categoryId } = useParams();

  console.log("categoryId", categoryId);
  console.log("info", info);

  let filteredProducts = info.filter((info) => {
    return info.category=== categoryId;
  });

  console.log("filteredProducts", filteredProducts);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products`).then((json) =>
      setInfo(json.data)
    );
  }, []);

  return (
    <>
      {filteredProducts.map((info) => {
        return (
          <div key={info.id}>
            <Link to={`/detail/${info.id}`}>
            <Card info={info} />
            </Link> 
          </div>
        );
      })}
    </>
  );
};

export default Category;
