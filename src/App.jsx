import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Category from "./components/Category/Category"
import Products from "./components/CategoryProducts/Products"
import Navbar from "./components/Navbar/Navbar"
import Search from "./components/Search/Search"
import ContextProvider from './context/ContextProvider'
import ProductDetails from "./components/ProductDetails/ProductDetails"
import SearchResult from "./components/SearchResults/SearchResult"

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <><Navbar /> <Search /> <SearchResult /> <Category /> </>
    },
    {
      path : "/product/:productName",
      element : <> <Navbar /> <Search /> <Products /> </>
    },
    {
      path : "/productdetails/:productid",
      element : <><Navbar /> <Search /> <ProductDetails /> <Category /> </>
    }
  ])
  return (
   <ContextProvider>
    {/* <Navbar />
    <Search /> 
    <Category />
    <Products /> */}
    <RouterProvider router={router} />
   </ContextProvider>
  )
}

export default App
