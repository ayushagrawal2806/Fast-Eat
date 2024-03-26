import { useContext } from "react";
import "./Category.css";
import ApiContext from "../../context/context";
import { NavLink } from "react-router-dom";

const Category = () => {
  const { category } = useContext(ApiContext);
  return (
    <div className="category">
      <div className="heading">
        <h1>CATEGORIES</h1>
        <hr />
      </div>
      <div className="results">
        {category
          ? category.map((Element) => (
              <NavLink
                to={`/product/${Element.strCategory}`}
                key={Element.idCategory}
              >
                <div className="box">
                  <h3>{Element.strCategory.toUpperCase()}</h3>
                  <img src={Element.strCategoryThumb} alt="" />
                </div>
              </NavLink>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Category;
