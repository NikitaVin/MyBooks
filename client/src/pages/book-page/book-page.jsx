import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { ContentWrapper } from "../../components/content-wrapper";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../../components/spinner";
import { Button } from "../../components/button";
import { getBook } from "../../store/book/bookSlice";

export const BookPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { book, isLoading } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBook(id));
  }, [dispatch, id]);

  if (isLoading) return <Spinner />;

  return (
    book && (
      <ContentWrapper className={styles.book}>
        <div className={styles.descContent}>
          <Button onClick={() => navigate(-1)} isBackButton={true}>
            Назад
          </Button>
          <h1 className={styles.title}>{book.name}</h1>
          <div className={styles.author}>{book.author}</div>
          <p className={styles.desc}>{book.description}</p>
        </div>
        <div className={styles.imageContent}>
          <img className={styles.image} src={book.bookImage} alt="" />
        </div>
      </ContentWrapper>
    )
  );
};
