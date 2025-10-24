import { useState } from "react";

const moviesData = [
  { id: 1, title: "Mirai", director: "Karthik Ghattamneni", year: 2025 },
  { id: 2, title: "Mission Impossible 8", director: "Christopher Mcquarrie", year: 2025 },
  { id: 3, title: "Jathiratnalu", director: "Anudeep KV", year: 2022 },
  { id: 4, title: "Devara", director: "Koratala Siva", year: 2024 },
  { id: 5, title: "DJ Tillu", director: "Vimal Krishna", year: 2023 },
];

const uniqueDirectors = [
  ...new Set(moviesData.map((movie) => movie.director))
];

const MoviePortal = () => {
  const [selectedDirector, setSelectedDirector] = useState("All");

  const filteredMovies =
    selectedDirector === "All"
      ? moviesData
      : moviesData.filter((movie) => movie.director === selectedDirector);

  return (
    <div>
      <h1>IMDB Movie Portal</h1>
      <label>Filter by Director: </label>
      <select
        value={selectedDirector}
        onChange={(e) => setSelectedDirector(e.target.value)}
      >
        <option value="All">All</option>
        {uniqueDirectors.map((director) => (
          <option key={director} value={director}>
            {director}
          </option>
        ))}
      </select>
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> ({movie.year}) - {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviePortal;