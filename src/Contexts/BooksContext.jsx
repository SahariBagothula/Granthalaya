import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BooksContext = createContext();

export const ContextProvider = ({ children }) => {
  const [booksData, setBooksData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [ratingFilter, setRatingFilter] = useState(1);

  // const initialState = {booksData: [], updatedBooksData: []};

  // const reducerFunction = (state, action) => {
  //     switch(action.type){
  //         case "FETCH_DATA" :
  //             return {...state, booksData: action.payload}
  //             case "ENTERED_INPUT" :
  //                 if(action.payload === " "){
  //                     return {...state, updatedBooksData: state.booksData}
  //                 }else {
  //                     return {...state, updatedBooksData: state.booksData.filter(({name}) => name.toLowerCase().includes(action.payload.toLowerCase()))}
  //                 }
  //       default :
  //             return state;
  //     }
  // }

  // const [state, dispatch] = useReducer(reducerFunction, initialState);

  useEffect(() => {
    fetchBooksData();
  }, []);

  const fetchBooksData = async () => {
    try {
      const { data } = await axios.get("/api/products");
      // console.log( data.products);
      setBooksData(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleToggleCategory = (event) => {
    const categoryName = event.target.value;
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(
        selectedCategories.filter((c) => c !== categoryName)
      );
    } else {
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  const filteredProducts = booksData.filter(
    (book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(book.category))
  );

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRatingFilter(parseInt(event.target.value));
  };

  const sortedProducts = filteredProducts
    .filter((p) => p.rating >= ratingFilter)
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSortOrder("");
    setRatingFilter(1);
    setSearchTerm("");
  };

  return (
    <BooksContext.Provider
      value={{
        sortedProducts,
        searchTerm,
        handleSearch,
        selectedCategories,
        handleToggleCategory,
        sortOrder,
        handleSortChange,
        ratingFilter,
        handleRatingChange,
        handleClearFilters,
        booksData,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
