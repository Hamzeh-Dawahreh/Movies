import React, { useEffect, useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  useEffect(() => {
    // Filter movies based on search query
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [movies, searchQuery]);

  useEffect(() => {
    // Make the HTTP request to the server when the component mounts or searchQuery changes
    axios
      .get("http://localhost:5000", {
        params: {
          search: searchQuery, // Pass the search query as a parameter to the API
        },
      })
      .then((response) => {
        // Handle the response data
        setMovies(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [searchQuery]);
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <br />
      <br />
      <br />

      <div className="container mx-auto py-8">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch(e.target.value);
            }}
          />
        </div>
        <br />
        <br />
        <br />
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg">
          <div className="wrapper">
            {filteredMovies.map((movie) => (
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
