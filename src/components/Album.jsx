import React from "react";
import { Card } from './Card';

function Album(props) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        {props.films.map((film) => (
          <Card key={film.imdbID} title={film.Title} year={film.Year} type={film.Type} poster={film.Poster} id={film.imdbID}/>
        ))}
    </div>
  )
}

export { Album }