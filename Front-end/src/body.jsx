import React, { useEffect, useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Make the HTTP request to the server when the component mounts
    axios
      .get("http://localhost:5000")
      .then((response) => {
        // Handle the response data
        setMovies(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <div className="container mx-auto py-8">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg">
          <div className="wrapper">
            {movies.map((movie) => (
              <div className="card" style={{ width: "18rem" }} key={movie.id}>
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="card-body">
                  <h4 className="card-title">{movie.title}</h4>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-4 metadata">
                        <i className="fa fa-star" aria-hidden="true" />
                        <p>{movie.rating}/10</p>
                      </div>
                      <div className="col-sm-8 metadata">{movie.genre}</div>
                    </div>
                  </div>
                  <p className="card-text">{movie.overview}</p>
                  <a
                    className="trailer-preview"
                    href={movie.trailerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-play" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyComponent;
