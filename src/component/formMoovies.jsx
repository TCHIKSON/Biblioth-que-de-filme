import React, { useState } from "react";

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Le titre est obligatoire");
      return;
    }

    onAddMovie({ title, rating, comment });
    setTitle("");
    setRating(1);
    setComment("");
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
          placeholder="Entrez le titre du film"
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
          placeholder="Ajoutez un commentaire (optionnel)"
        ></textarea>
      </div>

      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddMovieForm;
