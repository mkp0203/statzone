import React from "react";
// import css here
// import './Search.css';

// upgrade search bar

const SearchBar = () => (
    <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="inputPassword" placeholder="Password"/>
        </div>
    </div>
)

export default SearchBar;