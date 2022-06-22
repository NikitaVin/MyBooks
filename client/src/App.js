import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookPage } from "./pages/book-page";
import { CreateBookPage } from "./pages/create-book-page";
import { HomePage } from "./pages/home-page";
import { paths } from "./paths";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={`${paths.book}/:id`} element={<BookPage />} />
        <Route path={paths.createBook} element={<CreateBookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
