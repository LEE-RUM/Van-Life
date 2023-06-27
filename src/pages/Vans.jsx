import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
    const [vans, setVans] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/vans")
            .then((res) => res.json())
            .then((data) => setVans(data.vans));
    }, []);

    const vanElements = vans.map((van) => (
        <div key={van.id} className="bg-white p-4 rounded-md shadow-md hover:scale-105">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} className="w-full" alt={van.name} />
                <div className="mt-2">
                    <h3 className="text-xl font-bold text-truncate">{van.name}</h3>
                    <p className="text-gray-700">${van.price}<span className="font-normal">/day</span></p>
                </div>
                <i className={`text-sm ${van.type}`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <section className="flex flex-col items-center">
            <div className="sm:min-w-[650px] md:min-w-[700px] max-w-[850px] mt-8 p-3">
                <h1 className="text-center text-2xl font-bold pt-4 pb-6">Explore our van options</h1>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 pb-4">{vanElements}</div>
            </div>
        </section>
    )
}
