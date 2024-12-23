import React from "react";
import { Link } from "react-router-dom";

const Item = ({ pokemon }) => {
  return (
            <div className="product">
                <h2>{pokemon.name}</h2>
                <p>${pokemon.precio}</p>
                <img src={pokemon.img} alt={pokemon.name} />
                <p>{pokemon.description}</p>
                <br />
                <Link className="ver-mas" to={`/item/${pokemon.id}`}>Ver más</Link>

            </div>
  );
};

export default Item;
