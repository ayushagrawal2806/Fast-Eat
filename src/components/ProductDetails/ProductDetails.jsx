import { NavLink } from "react-router-dom";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { productid } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let Apicall = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productid}`)
      .then((response) => response.json())
      .then((response) => setProductDetails(response.meals[0]));
  };

  const instructions = productDetails
    ? productDetails.strInstructions.split(".")
    : "";

  const tags = productDetails ? productDetails.strTags : "";

  const WholeObjectkeys = productDetails ? Object.keys(productDetails) : null;
  const Ingredients = WholeObjectkeys
    ? WholeObjectkeys.filter((element) => element.includes("strIngredient"))
    : null;
  const measures = WholeObjectkeys
    ? WholeObjectkeys.filter((element) => element.includes("strMeasure"))
    : null;

  useEffect(() => {
    Apicall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="productDetails">
      <div className="home_productName">
        <NavLink to={"/"}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
          </svg>
        </NavLink>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="23"
          width="23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path>
          <path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path>
        </svg>
        <p>{productDetails ? productDetails.strMeal : ""}</p>
      </div>

      <div className="mealDetails">
        <h2>MEAL DETAILS</h2>
        <hr />
      </div>

      <div className="details">
        <div className="image-Ingredients">
          <img src={productDetails ? productDetails.strMealThumb : ""} alt="" />
          <div className="name_Ingredients">
            <div className="name">
              <h2>{productDetails ? productDetails.strMeal : ""}</h2>
              <hr />
            </div>
            <div className="category_source">
              <div className="categoryName">
                <span className="categoryn">CATEGORY : </span>
                <span className="name">
                  {productDetails
                    ? productDetails.strCategory.toUpperCase()
                    : ""}
                </span>
              </div>
              <div className="source">
                <span>Source : </span>
                <a
                  href={
                    productDetails
                      ? productDetails.strSource != ""
                        ? productDetails.strSource
                        : "#"
                      : "#"
                  }
                >
                  {productDetails && productDetails.strSource
                    ? productDetails.strSource != ""
                      ? productDetails.strSource.slice(0, 40) + "...."
                      : "No Source Available"
                    : ""}
                </a>
              </div>
            </div>

            <div className="tags">
              <span>Tags : </span>
              <ul>
                {tags ? (
                  tags
                    .split(",")
                    .map((element, index) => <li key={index}>{element}</li>)
                ) : (
                  <li>No Tags Available</li>
                )}
              </ul>
            </div>
            <div className="ingredients">
              <h2>Ingredients</h2>
              <ul>
                {Ingredients
                  ? Ingredients.map((element, index) => {
                      return productDetails[element] != "" ? (
                        <li key={index}>
                          <span>{index + 1}</span>
                          <p>{productDetails[element]}</p>
                        </li>
                      ) : (
                        ""
                      );
                    })
                  : null}
              </ul>
            </div>
          </div>
        </div>

        <div className="measures">
          <h2>Measure:</h2>
          <div className="items">
            <ul>
              {measures
                ? measures.map((element, index) => {
                    return productDetails[element] != "" &&
                      productDetails[element] != " " ? (
                      <li key={index}>
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="0.9em"
                            width="0.9em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path>
                          </svg>
                        </span>
                        <span className="item">{productDetails[element]}</span>
                      </li>
                    ) : (
                      ""
                    );
                  })
                : null}
            </ul>
          </div>
        </div>

        <div className="instructions">
          <h2>Instructions:</h2>
          <ul>
            {instructions
              ? instructions.map((element, index) =>
                  element != "" ? (
                    <li key={index}>
                      <span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          className="text-orange li-icon"
                          height="25"
                          width="25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                          <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                        </svg>
                      </span>

                      <span className="text">{element}.</span>
                    </li>
                  ) : (
                    ""
                  )
                )
              : ""}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
