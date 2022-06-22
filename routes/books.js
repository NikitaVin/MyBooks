const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const { getBooks, addBook, getBook } = require("../controllers/books");

const storage = multer.diskStorage({
  destination: "./assets/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

router.get("/", getBooks);
router.get("/:id", getBook);
router.post("/", upload.single("bookImage"), addBook);

module.exports = router;
