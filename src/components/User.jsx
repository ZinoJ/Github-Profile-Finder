import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Repository from "./Repository";
import "./User.css";

function User() {
   const REACT_ID = process.env.REACT_APP_CLIENT_ID

   const REACT_SECRET = process.env.REACT_APP_CLIENT_SECRET

  const [query, setQuery] = useState("");
  const [user, setuser] = useState([]);
  const [error, setError] = useState(null);

  useEffect (() => {
   axios.get(`https://api.github.com/users/${query}?client_id=${REACT_ID}&client_secret=${REACT_SECRET}`)
   .then (response => setuser(response.data), setError(null))
   .catch((error) => setError(error.message));
   
  },[query])

//   const handleSearch = (e) => {
//     e.preventDefault();
//     axios
//       .get(
//         `https://api.github.com/users/${query}?client_id=815f1fa8afa186cf8de3&client_secret=317149e57d0b98a09d085b4847f5cc12c6b05208`
//       )
//       .then((respose) => setuser(respose.data), setError(null))
//       .catch((error) => setError(error.message));
//     setQuery("");
//   };

  return (
    <>
      <div className="search">
        <input
          type="text"
          value={query}
          placeholder="Search Github for users"
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button onClick={handleSearch}>Search</button> */}
      </div>
      {/* {error && <div>{error}</div>} */}
      
        {user && <div className="user">
          <div className="user__photo">
            {user?.avatar_url && <img
              src={user.avatar_url}
              alt=""
              style={{ width: "150px", height: "150px" }}
            />}
          </div>
          <div className="user__details">
            {user?.login && (<h3>Name: {user.login}</h3>) }
            {user?.bio && <h6>{user.bio}</h6>}
            {user?.location && <h5>Location: {user.location}</h5>}
            {user?.twitter_username && <h5>Twitter: {user.twitter_username}</h5>}
            {user?.blog && <h5>Website: {user.blog}</h5>}
            {user?.followers && <h5>Followers: {user.followers}</h5>}
            {user?.following && <h5>Following: {user.following}</h5>}
          </div>
        </div>}
      <Repository query={query} />
      <h4 className="footer">Built Circa 2022</h4>
    </>
  );
}

export default User;
