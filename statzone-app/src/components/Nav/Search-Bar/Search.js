import React from "react";
// import css here
// import './Search.css';

const styles = {
    group: {
        padding: 15
    },
    search: {
        border: 0
    },
    submit: {
        marginLeft: 3
    }
}
const SearchBar = () => (
    <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label"></label>
        <div class="input-group" style={styles.group}>
            <input type="text" class="form-control" id="inputPassword" style={styles.search} placeholder="Summoner Search"/>
            <button class="btn btn-outline-danger" type="submit" style={styles.submit}>Search</button>

        </div>
    </div>
)

export default SearchBar;