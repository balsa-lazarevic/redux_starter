export function selectBook(book) {
  //Treba da vrati akciju jet je ActionCreator
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
