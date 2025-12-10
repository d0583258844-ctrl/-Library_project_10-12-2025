export function addNewBook(id, title, author, category, year, copies) {
  const newBook = {
    id,
    title,
    author,
    category,
    year,
    totalCopies: copies,
    availableCopies: true,
    timesLoaned: 0,
    rating: "null",
  };
  return newBook;
}

export function isBookAvailable(book) {
  return book.availableCopies;
}

export function borrowBook(book) {
  if (isBookAvailable(book)) {
    book.timesLoaned++;
    book.totalCopies -= 1;
    if (!book.totalCopies) {
      book.availableCopies = false;
    }
    return book;
  } else {
    throw new Error("Book is not available");
  }
}

export function returnBook(book) {
  book.availableCopies = true;
  book.totalCopies++;
}

export function getBookInfo(book) {
  return `id book: ${book.id}
title: ${book.title}
author: ${book.author}
category: ${book.category}
year: ${book.year}
available: ${book.availableCopies}`;
}

