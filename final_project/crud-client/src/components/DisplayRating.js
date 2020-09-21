import React, {Fragment, useState, useEffect} from 'react';
import InputRating from "./InputRating";
import ListRatings from './ListRatings';

function DisplayRating() {
  
  const [ratings, setRatings] = useState([]);

    async function getRatings(){
        const response = await fetch("http://localhost:3440/ratings");

        const ratingArray = await response.json();
        console.log(ratingArray);
        setRatings(ratingArray);
    }

    useEffect(()=>{
        getRatings();
    }, []);


    const ratingAdded = (newRating) =>{
      setRatings([...ratings,newRating])
    }

  return (
    <Fragment>
      <div className="container">
        <InputRating onRatingAdded={ratingAdded}/>
        <ListRatings ratings={ratings} />
      </div>
    </Fragment>
  );
}

export default DisplayRating;
