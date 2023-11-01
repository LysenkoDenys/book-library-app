import { v4 as uuidv4 } from "uuid";

const createBookWithID = (book, source) => {
  return {
    ...book,
    id: uuidv4(),
    source: source,
    isFavorite: false,
  };
};

export default createBookWithID;
