import React, {Fragment, useState, useEffect} from 'react';

import '../App.css';


const ListRatings = ({ratings, setRatings}) => {
 
    console.log({ratings,setRatings});

    return (
        <Fragment>
              <table className="table mt-5">
                <thead>
                <tr>
                    <th>Name: </th>
                    <th>Average Rating out of 5: </th>
                </tr>
                </thead>
                <tbody>
                {ratings.map(rating =>(
                    <tr key={rating.rating_id}>
                        <td>{rating.name}</td>
                        <td>{rating.trunc}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Fragment>
    )
}
export default ListRatings;