import { NavLink } from 'react-router-dom';
import './Search.css'
import { useContext, useState } from 'react';
import ApiContext from '../../context/context';

const Search = () => {
  const [value , setValue] = useState("");
  const {setSearchValue} = useContext(ApiContext);
  return (
    <div className="search">
      <div className="blackshade">
        <div className="inputs">
          <input type="text" placeholder='Search recipes here...' onChange={(e) => setValue(e.target.value)}/>
          <NavLink to={"/"}>
            <button onClick={() => setSearchValue(value)}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="btn-icon" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
            </button>
          </NavLink>
        </div>
        <h1>What are your favorite cuisines?</h1>
        <p>PERSONALIZE YOUR EXPERIENCE</p>
      </div>
    </div>
  );
}

export default Search;