import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { ContentWrapper } from "../../components/content-wrapper";
import { Input } from "../../components/input";
import { paths } from "../../paths";
import { createBook, resetBookErrors } from "../../store/book/bookSlice";
import styles from "./styles.module.css";

export const CreateBookPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.book);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [bookImage, setBookImage] = useState(null);

  const handleCreateBook = useCallback(() => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("bookImage", bookImage);

    dispatch(createBook(formData)).then((res) => {
      if (!res.error) {
        navigate(`${paths.book}/${res.payload._id}`, { replace: true });
      }
    });
  }, [description, dispatch, name, navigate, bookImage, author]);

  useEffect(() => () => dispatch(resetBookErrors()),[dispatch])

  return (
    <ContentWrapper className={styles.createBook}>
      <Button
        onClick={() => navigate(-1)}
        isBackButton={true}
        containerClassName={styles.backButtonContainer}
      >
        Назад
      </Button>
      <form className={styles.form}>
        <h1 className={styles.title}>Добавить книгу</h1>
        <Input
          name="name"
          placeholder="Название книги"
          error={errors && errors.name && errors.name.message}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="author"
          placeholder="Автор книги"
          error={errors && errors.author && errors.author.message}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Input
          name="description"
          placeholder="Описание"
          error={errors && errors.description && errors.description.message}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          name="bookImage"
          type="file"
          error={errors && errors.bookImage && errors.bookImage.message}
          onChange={(e) => setBookImage(e.target.files[0])}
        />
        <Button
          containerClassName={styles.buttonContainer}
          onClick={handleCreateBook}
        >
          Создать
        </Button>
      </form>
    </ContentWrapper>
  );
};
