import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSortBooks } from "../../hooks/useSortBooks";
import { paths } from "../../paths";
import { getBooks } from "../../store/books/booksSlice";
import { Button } from "../button";
import { ContentWrapper } from "../content-wrapper";
import { BookItem } from "../book-item";
import { Spinner } from "../spinner";
import styles from "./styles.module.css";

export const Books = () => {
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((state) => state.books);
  const { isDescSort, setIsDescSort, sortedBooks } = useSortBooks(
    books || []
  );

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <div className={styles.sort}>
        <ContentWrapper className={styles.booksHeader}>
          <Button
            className={styles.sortBtn}
            onClick={() => setIsDescSort(!isDescSort)}
          >
            Сортировать по автору {`${isDescSort ? "<Я - А>" : "<А - Я>"}`}
          </Button>
          <Link to={ paths.createBook } className={styles.createBookBtn}>
            Добавить книгу
          </Link>
        </ContentWrapper>
      </div>
      <ContentWrapper className={styles.booksGrid}>
        {sortedBooks &&
          sortedBooks.map((book) => <BookItem key={book._id} {...book} />)}
      </ContentWrapper>
    </div>
  );
};
