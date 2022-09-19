import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

import "./Repository.css";

function Repository({query}) {
   const REACT_ID = process.env.REACT_APP_CLIENT_ID
   const REACT_SECRET = process.env.REACT_APP_CLIENT_SECRET

   const [repos, setRepos] = useState([])
   useEffect(() => {
      axios.get(`https://api.github.com/users/${query}/repos?client_id=${REACT_ID}&client_secret=${REACT_SECRET}`)
      .then(response => 
         setRepos(response.data))
         .catch(error => console.log(error.message))
            
   },[query])
   // console.log(repos);



  return (
    <div className="repositories">
      <h3>Repositories</h3>
      <div className="repos">
      {repos.map(({name, html_url, description, id, language}) => (
         <a href={html_url} target='_blank'><div className="repository" key={id}>
         <h4 style={{color: '#444'}}>Repo Name: {name}</h4>
         <h6>
           {description}
         </h6>
         <div className="repository__bottom">
           <p>Language: {language}</p>
         </div>
       </div></a>
      ))}
      </div>
    </div>
  );
}

export default Repository;
