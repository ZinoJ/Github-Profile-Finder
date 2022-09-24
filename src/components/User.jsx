import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Repository from "./Repository";
import "./User.css";
import {BsFillArrowUpSquareFill} from 'react-icons/bs'

function User() {
   const REACT_ID = process.env.REACT_APP_CLIENT_ID

   const REACT_SECRET = process.env.REACT_APP_CLIENT_SECRET

  const [query, setQuery] = useState("");
  const [user, setuser] = useState([]);

  useEffect (() => {
   if (!query == "") {
    axios.get(`https://api.github.com/users/${query}?client_id=${REACT_ID}&client_secret=${REACT_SECRET}`)
   .then (response => setuser(response.data))
   .catch((error) => console.log(error.message));
   return
   }
  },[query])

//   useEffect (() => {
//    try {
//     if(!query == "") {
//       axios.get(`https://api.github.com/users/${query}?client_id=${REACT_ID}&client_secret=${REACT_SECRET}`)
//       .then(response => setuser(response.data))
//     }
//    } catch (err) {
//     if (err.response) {
//         console.log('123')
//     } else if (err.request) {
//         console.log('abc');
//         console.log(err.request);
//     } else {
//         console.log(1234)
//     }
// }
//   },[query])



  return (
    <>
      <div className="search">
        <input
          type="text"
          value={query}
          placeholder="Search Github for users"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      
      
        {user && <div className="user">
          <div className="user__photo">
            {user?.avatar_url && <img
              src={user.avatar_url}
              alt=""
              style={{ width: "150px", height: "150px" }}
            />}
          </div>
          <div className="user__details">
            {user?.login && (<h3>Name: {user.name ? user.name : user.login}</h3>)}
            {user?.bio && <h6>{user.bio}</h6>}
            {user?.location && <h5>Location: {user.location}</h5>}
            {user?.repos_url && <h5>Repository_url: <a href={user.html_url} target='_blank'>{user.html_url}</a></h5>}
            {user?.twitter_username && <h5>Twitter: {user.twitter_username}</h5>}
            {user?.blog && <h5>Website: <a href={user.blog} target='_blank'>{user.blog}</a></h5>}
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
