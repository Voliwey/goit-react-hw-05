import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";


// import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";

import css from "./MovieList.module.css";

export default function MovieGallery({ items }) {
  const location = useLocation();
  return (
    <ul className={css.movList}>
      {items.map(({ id, title }, index) => (
        <li key={`${id}-${index}`}>
          <Link to={`/movies/${id}`} state={location}>
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}