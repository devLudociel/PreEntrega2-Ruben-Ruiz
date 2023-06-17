import { Link, useLoaderData, useParams } from "react-router-dom";
import Card from "../components/Card/Card";

const ItemDetails = () => {
    const { Details } = useLoaderData();

    let { id } = useParams();
    let filteredDetails = Details.filter((data) => {
      return data.id === id;
    });
  
    return (
        <>
        {filteredDetails.map((info) => {
          return (
            <div className="link" key={info.id}>
              <Link to="/">
              <Card info={info}/>  
              </Link>
            </div>
          );
        })}
        </>
      );
};
export default ItemDetails;

export const Details = async ({}) => {
    const data = await fetch(`./data.json/`);
    const Details = await data.json();
    return { Details };
}

