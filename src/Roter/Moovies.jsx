import React, { useState, useEffect } from "react";
import AddMovieForm from "../component/formMoovies";
import MovieList from "../component/listMoovies";

const MoviesPage = () => {
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem("movies");
    return savedMovies ? JSON.parse(savedMovies) : [];
  });

  const [filterRating, setFilterRating] = useState(0);
  const [sortOption, setSortOption] = useState("date-desc");

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const handleAddMovie = (movie) => {
    setMovies([...movies, { ...movie, date: new Date() }]);
  };

  const handleEditMovie = (index, updatedMovie) => {
    const updatedMovies = movies.map((m, i) =>
      i === index ? updatedMovie : m
    );
    setMovies(updatedMovies);
  };

  const handleDeleteMovie = (index) => {
    const updatedMovies = movies.filter((_, i) => i !== index);
    setMovies(updatedMovies);
  };

  const filteredMovies = movies.filter((m) => m.rating >= filterRating);

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    switch (sortOption) {
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      case "rating-asc":
        return a.rating - b.rating;
      case "rating-desc":
        return b.rating - a.rating;
      case "date-asc":
        return new Date(a.date) - new Date(b.date);
      case "date-desc":
        return new Date(b.date) - new Date(a.date);
      default:
        return 0;
    }
  });

  return (
    <div className="container">
      <h2 className="text-center mb-4">Ma Cinémathèque</h2>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <div className="mt-4 mb-4">
        <label htmlFor="filter" className="mr-2">
          Filtrer par note :
        </label>
        <select
          id="filter"
          value={filterRating}
          onChange={(e) => setFilterRating(parseInt(e.target.value, 10))}
          className="form-select"
          style={{ width: "auto", display: "inline-block" }}
        >
          <option value={0}>Toutes les notes</option>
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>
              {star} étoile{star > 1 && "s"} et plus
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="sort" className="mr-2">
          Trier par :
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="form-select"
          style={{ width: "auto", display: "inline-block" }}
        >
          <option value="date-desc">Date d'ajout (récent → ancien)</option>
          <option value="date-asc">Date d'ajout (ancien → récent)</option>
          <option value="title-asc">Titre (A → Z)</option>
          <option value="title-desc">Titre (Z → A)</option>
          <option value="rating-desc">Note (élevée → basse)</option>
          <option value="rating-asc">Note (basse → élevée)</option>
        </select>
      </div>
      <MovieList
        movies={sortedMovies}
        onEditMovie={handleEditMovie}
        onDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
};

export default MoviesPage;
