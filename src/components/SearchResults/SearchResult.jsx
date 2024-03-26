import { useContext, useEffect, useState } from "react";
import ApiContext from "../../context/context";
import "./SearchResult.css";
import { NavLink } from "react-router-dom";

const SearchResult = () => {
  const { searchvalue } = useContext(ApiContext);
  const [value, setValue] = useState([]);
  const Apicall = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchvalue}`)
      .then((Response) => Response.json())
      .then((Response) => setValue(Response.meals));
  };

  useEffect(() => {
    Apicall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchvalue]);
  return searchvalue != null ? (
    <div className="searchmeals">
      {value ? (
        <>
          <div className="meal">
            <h2>MEALS</h2>
            <hr />
          </div>
          <div className="products">
            {value.map((element) => (
              <NavLink
                to={`/productdetails/${element.idMeal}`}
                key={element.idMeal}
                id="Navlink"
              >
                <div className="product-cont">
                  <img src={element.strMealThumb} alt="image" />
                  <p className="area">{element.strArea}</p>
                  <p className="name">{element.strMeal}</p>
                  <p className="categoryname">{element.strCategory}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </>
      ) : (
        "No any food found."
      )}
    </div>
  ) : (
    ""
  );
};

export default SearchResult;


