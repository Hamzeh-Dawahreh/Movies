import React, { useEffect, useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Make the HTTP request to the server when the component mounts
    axios
      .get("http://localhost:5000")
      .then((response) => {
        // Handle the response data
        setMovie(response.data);
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
          <div className="p-6">
            {movie ? (
              <div className="movie-card">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="mb-4 rounded"
                />
                <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
                <p className="text-gray-600">{movie.overview}</p>
                <p className="text-gray-600">
                  Release Date: {movie.release_date}
                </p>
                <p className="text-gray-600">
                  Genres: {movie.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p className="text-gray-600">
                  Runtime: {movie.runtime} minutes
                </p>
                <p className="text-gray-600">Rating: {movie.vote_average}</p>
                <p className="text-gray-600">Revenue: ${movie.revenue}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyComponent;
