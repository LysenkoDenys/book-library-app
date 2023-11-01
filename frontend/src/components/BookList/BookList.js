import { useSelector, useDispatch } from "react-redux";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
// import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import {
  setDeleteBook,
  setToggleFavoriteBook,
  selectBooks,
} from "../../redux/slices/booksSlice";
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from "../../redux/slices/filterSlice";
import "./BookList.css";

const BookList = () => {
  const books = useSelector(selectBooks);
  //subscribe on state:
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => dispatch(setDeleteBook(id));
  const handleToggleFavoriteBook = (id) => dispatch(setToggleFavoriteBook(id));

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase());
    //my solution:
    // if (matchesTitle && !matchesAuthor) {
    //   return matchesAuthor;
    // }
    // return matchesTitle;
    // const matchesFavorite = !book.isFavorite ? !onlyFavoriteFilter : true;
    //Bogdan`s solution:
    const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true;
    //Bogdan`s solution:
    return matchesTitle && matchesAuthor && matchesFavorite;
  });

  const highlightMatch = (text, filter) => {
    if (!filter) return text;

    const regex = new RegExp(`(${filter})`, "gi");
    return text.split(regex).map((substring, index) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={index} className="highlight">
            {substring}
          </span>
        );
      }
      return substring;
    });
  };

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, index) => {
            return (
              <li key={book.id}>
                <div className="book-nfo">
                  {++index}. {highlightMatch(book.title, titleFilter)} by{" "}
                  <strong>{highlightMatch(book.author, authorFilter)}</strong> (
                  {book.source})
                </div>
                <div className="book-actions">
                  <span onClick={() => handleToggleFavoriteBook(book.id)}>
                    {book.isFavorite ? (
                      <BsBookmarkStarFill className="star-icon" />
                    ) : (
                      <BsBookmarkStar className="star-icon" />
                    )}
                  </span>
                  <button onClick={() => handleDeleteBook(book.id)}>
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BookList;
