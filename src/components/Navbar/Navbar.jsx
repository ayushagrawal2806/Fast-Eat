import { useContext, useState } from "react";
import "./Navbar.css";
import { HiMiniBars3 } from "react-icons/hi2";
import ApiContext from "../../context/context";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [sidebar, setSideBar] = useState(false);
  const { category } = useContext(ApiContext);
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to={"/"} id="navlink">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 3L4 9v12h16V9l-8-6zm.5 9.5c0 .83-.67 1.5-1.5 1.5v4h-1v-4c-.83 0-1.5-.67-1.5-1.5v-3h1v3h.5v-3h1v3h.5v-3h1v3zM15 18h-1v-3.5h-1v-3c0-1.1.9-2 2-2V18z"></path>
          </svg>
          <h1>FastEat.</h1>
        </NavLink>
      </div>
      <div className="hamburger">
        <button onClick={() => setSideBar(true)}>
          <HiMiniBars3 className="bars" />
        </button>
      </div>

      <div
        className={`sidebar ${
          sidebar ? "sidebar-width-open" : "sidebar-width-close"
        }`}
      >
        <div className="closebtn" onClick={() => setSideBar(false)}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.1"
            viewBox="0 0 16 16"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"></path>
            <path d="M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"></path>
          </svg>
        </div>

        <ul>
          {category ? (
            category.map((element) => (
              <NavLink
                to={`/product/${element.strCategory}`}
                key={element.idCategory}
                id="NavLink"
              >
                <li>{element.strCategory}</li>
              </NavLink>
            ))
          ) : (
            <li>Loading...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

