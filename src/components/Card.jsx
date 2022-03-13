import React from "react";

function Card(props) {
  const {id, title, year, type, poster} = props;

  return (
    <div className="col">
          <div className="card shadow-sm">
            {
              poster === "N/A" ?
              <img src={`https://via.placeholder.com/300x400?text=${title}`} alt={`Sorry poster not available`} /> :
              <img src={poster} alt={title + ` poster`} />
            }
            
            <div className="card-body">
              <h4 className="card-text">{title}</h4>
              <div className="d-flex justify-content-between align-items-center">
                <a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${id}`}>IMDB page</a>
                <span className="text-muted">{type}</span>
                <span className="text-muted">{year}</span>
              </div>
            </div>
          </div>
    </div>
  )
}

export { Card }