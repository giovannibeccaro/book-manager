import React from "react";
import { ResultLS } from "../types";
import { useBooks } from "../BooksContext";
import { Link } from "react-router-dom";

type Props = {
  info: ResultLS;
};

const SingleToRead: React.FC<Props> = ({ info }) => {
  const { bookId, title, img } = info;
  const { handleDelete, isBookDeletedToRead, isDeleting } = useBooks();

  return (
    <div
      className={
        isBookDeletedToRead.includes(bookId)
          ? "book-collection-single removed"
          : "book-collection-single"
      }
    >
      <button
        className="delete-btn"
        onClick={() => {
          handleDelete(bookId, "To Read");
        }}
        disabled={isDeleting}
      >
        <p>DELETE</p>
      </button>

      <Link to={`/books/${bookId}`}>
        <img src={img ? img : "./images/questionMark.webp"} alt="cover" />
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default SingleToRead;
