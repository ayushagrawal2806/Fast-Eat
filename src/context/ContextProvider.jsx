import {  useEffect, useState } from "react"
import ApiContext from "./context"

// eslint-disable-next-line react/prop-types
const ContextProvider = ({children}) => {
   const [category , setCategory] = useState([]);
   const [searchvalue , setSearchValue] = useState(null)
   let callCategoryApi = () => {
     fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((response) => response.json())
    .then((response) => setCategory(response.categories))
    
   }

   useEffect(() => {
    callCategoryApi();
   } , [])

   
  return (
    <ApiContext.Provider value={{category , searchvalue , setSearchValue}}>
        {children}
    </ApiContext.Provider>
  )
}

export default ContextProvider