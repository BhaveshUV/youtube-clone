import { createContext } from "react";

const SearchContext = createContext(() => console.log("handleSearch had not been stored in context variable")); 

export default SearchContext;