import React from "react";
// import css here
// import './Search.css';

// upgrade search bar

const SearchBar = props => (
    <form>
    <div className="form-group">
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search for Summoner"
        id="search"
      />
      <button
        onClick={props.handleUserSearch}
        className="btn btn-primary mt-3"
      >
        Search
      </button>
    </div>
  </form>
)

export default SearchBar;