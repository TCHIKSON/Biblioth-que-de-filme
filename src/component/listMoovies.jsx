import React, { useState } from "react";
import EditMovieForm from "./modifMoovies";

const MovieList = ({ movies, onEditMovie, onDeleteMovie }) => {
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEditClick = (index) => {
    setEditingIndex(index);
  };

  const handleEditSubmit = (index, updatedMovie) => {
    onEditMovie(index, updatedMovie);
    setEditingIndex(null);
  };

  return (
    <div>
      {movies.length === 0 ? (
        <p>Aucun film ajouté pour le moment.</p>
      ) : (
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <EditMovieForm
                  movie={movie}
                  onSubmit={(updatedMovie) => handleEditSubmit(index, updatedMovie)}
                  onCancel={() => setEditingIndex(null)}
                />
              ) : (
                <>
                  <h3>{movie.title}</h3>
                  <p>
                    Note :{" "}
                    {"★".repeat(movie.rating) + "☆".repeat(5 - movie.rating)}
                  </p>
                  {movie.comment && <p>Commentaire : {movie.comment}</p>}
                  <button onClick={() => handleEditClick(index)}>Modifier</button>
                  <button onClick={() => onDeleteMovie(index)}>Supprimer</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
