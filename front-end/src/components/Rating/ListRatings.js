import React, { Fragment } from 'react';

const ListRatings = ({ userId }) => {
    const [ratings, setRatings] = useState([]);
    const [ratingsLoaded, setRatingsLoaded] = useState(false);

    async function getUserRatings() {
		const resp = await fetch(`http://localhost:5000/ratings` + new URLSearchParams({
            userId: userId
        }));
		const ratingsData = await resp.json();
        setRatings(ratingsData);
        setRatingsLoaded(true);
    };

    useEffect(() => {
        getUserRatings();
    }, []);

    if (!ratingsLoaded) {
        return <div>Loading ...</div>;
    }

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
                    {ratings.map(rating => (
                        <tr key={rating.id}>
                            <td>{rating.name}</td>
                            <td>{rating.averageRating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}
export default ListRatings;
