import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <section className="flex items-center justify-center">
      <div className="min-w-[350px] max-w-[500px] p-4">
        {van ? (
          <div>
            <Link to="/vans"> ← <span className="underline decoration-black">Go back to Vans</span></Link >
            <img className="py-3" src={van.imageUrl} alt={van.name} />
            <i className={`${van.type}`}>{van.type}</i>
            <h2 className="text-2xl font-bold py-2">{van.name}</h2>
            <p>
              <span className="font-bold py-2">${van.price}</span>/day
            </p>
            <p className="py-2">{van.description}</p>
            <button className="bg-[#FF8C38] text-white w-full px-3 py-3 rounded-lg">Rent this van</button>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </section>
  )
}
