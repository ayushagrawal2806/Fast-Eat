import { useContext, useState } from "react";
import "./Products.css";
import { useEffect } from "react";
import ApiContext from "../../context/context";
import {  NavLink, useParams } from 'react-router-dom';

const Products = () => {
  const { category } = useContext(ApiContext);
  const [product, setProduct] = useState([]);
  let { productName } = useParams();
  
  let ProductApi = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${productName}`)
      .then((Response) => Response.json())
      .then((Response) => setProduct(Response.meals));
  };

  useEffect(() => {
    ProductApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  return (
    <div className="products-cont">
      <div className="name_description">
        {category
          ? category.map((element) => {
              if (productName == element.strCategory) {
                return (
                  <div key={element.idCategory}>
                    <h2>{element.strCategory}</h2>
                    <p>{element.strCategoryDescription}</p>
                  </div>
                );
              }
            })
          : "NotFound"}
      </div>

      <div className="meals">
        <div className="meal">
          <h2>MEALS</h2>
          <hr />
        </div>
        <div className="products">
          {product
            ? product.map((element) => (
                <NavLink to={`/productdetails/${element.idMeal}`} key={element.idMeal} id="Navlink">
                  <div className="product-cont" >
                  <img src={element.strMealThumb} alt="" />
                  <p>{element.strMeal}</p>
                </div>
                </NavLink>
              ))
            : "Not Found"}
        </div>
      </div>
    </div>
  );
};

export default Products;
