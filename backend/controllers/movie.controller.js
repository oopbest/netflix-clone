import { fetchFromTMDB } from "../services/tmdb.service.js";

export const getTrendingMovies = async (req, res) => {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    );
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results.length)];

    res.status(200).json({ success: true, content: randomMovie });
  } catch (error) {
    console.log("Error fetching trending movies: " + error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getMovieTrailers = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    );
    res.status(200).json({
      success: true,
      trailers: data.results,
    });
  } catch (error) {
    console.log("Error fetching trailers: " + error);

    if (error.message.includes("404")) {
      res.status(404).send(null);
    }
    res.status(500).json({ success: false, message: error.message });
  }
};
