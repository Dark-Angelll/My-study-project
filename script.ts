import { LibraryBook } from "./types/LibraryBook";

const book1 = new LibraryBook({
    title: "Война и мир",
    author: "Л. Н. Толстой",
    year: 1869,
});
book1.borrow("Петр Разумовский");