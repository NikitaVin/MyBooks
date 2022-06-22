import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../paths";
import styles from "./styles.module.css";

export const BookItem = ({
  name = '',
  author = '',
  bookImage = '',
  _id = '',
}) => {
  return (
    <Link to={`${paths.book}/${_id}`} className={styles.bookItem}>
      { bookImage && <img className={styles.image} src={bookImage} alt=""/> }
      <div className={styles.info}>
        <h2 className={styles.title}>{ name }</h2>
        <span className={styles.author}>{ author }</span>
      </div>
    </Link>
  );
};
