import { useState, useMemo } from "react";

export const useSortBooks = (books = []) => {
  const [isDescSort, setIsDescSort] = useState(false);

  const sortedBooks = useMemo(() => {
    const sortableBooks = [...books];

    sortableBooks.sort((a, b) => {
      if (a.author < b.author) return isDescSort ? 1 : -1;
      if (a.author > b.author) return isDescSort ? -1 : 1;

      return 0;
    });

    return sortableBooks;
  }, [isDescSort, books]);

  return {
    sortedBooks,
    isDescSort,
    setIsDescSort,
  };
};
