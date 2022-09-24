import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

import "./Repository.css";

function Repository({query}) {
   const REACT_ID = process.env.REACT_APP_CLIENT_ID
   const REACT_SECRET = process.env.REACT_APP_CLIENT_SECRET

   const [repos, setRepos] = useState([])
   const [repoLoad, setRepoLoad] = useState(10)
   const [repoTotal, setRepoTotal] = useState(0)

   
   useEffect(() => {
    if(!query == "" ){
      axios.get(`https://api.github.com/users/${query}/repos?client_id=${REACT_ID}&client_secret=${REACT_SECRET}`)
      .then(response => 
        (
         setRepos(response.data),setRepoTotal(response.data.length)))
         .catch(error => console.log(error.message))
    }
   },[query])

//   useEffect(() => {
// try {
//   if(!query == ''){
//     axios.get(`https://api.github.com/users/${query}/repos?client_id=${REACT_ID}&client_secret=${REACT_SECRET}`)
//     .then(response => (
//       setRepos(response.data),setRepoTotal(response.data.length)
//     )).catch(error => console.log(error.message))
//   }
// } catch (error) {
//   console.log(error);
// }
//   },[query])

   const handleLoadMore = (e) => {
    e.preventDefault()
    setRepoLoad(prev => prev + 5)
   }

  return (
    <div className="repositories">
      <h3>Repositories</h3>
      <div className="repos">
      {repos.slice(0,repoLoad).map(({name, html_url, description, id, language}) => (
         <a key={id} href={html_url} target='_blank'><div className="repository" >
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
        <button style={{display: repoLoad >= repoTotal && 'none'}} onClick={handleLoadMore}>Load More</button>
        
    </div>
  );
}

export default Repository;
