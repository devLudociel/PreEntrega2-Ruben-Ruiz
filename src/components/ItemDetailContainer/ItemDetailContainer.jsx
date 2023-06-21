import { useState, useEffect } from "react";
import axios from "axios";
import CardDetail from "../CardDetail/CardDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [info, setInfo] = useState({});

  let { id } = useParams();

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((json) =>
      setInfo(json.data)
    );
  }, [id]);

  return (
    <>
      {info.id ? <CardDetail info={info} /> : null}
    </>
  );
};

export default ItemDetailContainer;
