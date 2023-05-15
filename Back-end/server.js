const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
const port = 5000; // Choose any available port
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Define your server endpoints
app.get("/", (req, res) => {
  // Make the HTTP request to the API
  const apiUrl = "https://api.themoviedb.org/3/movie/550";
  const apiKey = "f7c60082eff916bf6b71057813e68f3c";

  axios
    .get(apiUrl, {
      params: {
        api_key: apiKey,
      },
    })
    .then((response) => {
      // Handle the API response data
      const data = response.data;
      res.json(data);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching data from the API." });
    });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
