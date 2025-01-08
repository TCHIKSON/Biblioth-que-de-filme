import React, { useState } from "react";

const EditMovieForm = ({ movie, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(movie.title);
  const [rating, setRating] = useState(movie.rating);
  const [comment, setComment] = useState(movie.comment);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Le titre est obligatoire");
      return;
    }
    onSubmit({ title, rating, comment });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titre du film :</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="rating">Note :</label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value, 10))}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>
              {star} étoile{star > 1 && "s"}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="comment">Commentaire :</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>

      <button type="submit">Sauvegarder</button>
      <button type="button" onClick={onCancel}>
        Annuler
      </button>
    </form>
  );
};

export default EditMovieForm;
