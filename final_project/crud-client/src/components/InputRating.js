import React, {useState, useEffect} from 'react';

const InputRating = ({onRatingAdded}) =>{
    const [user_id, setUser_id] = useState("");
    const [rating, setRating] = useState("");
    

    
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
          const body = {user_id, rating};  
          const response = await fetch("http://localhost:3440/rating", {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify(body)
          });
          let results = await response.json();
          console.log(results);
          onRatingAdded(results);
        } catch (err) {
            console.error(err.message);
        }
    }
    return(
        <>
            <h1 className="text-center my-5">Rate a Volunteer</h1>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <div>
                    <div>
                        <h2>Select Volunteer</h2>
                        <div include="form-input-select()">
                            <select type="text" className="form control" value={user_id} onChange={e => setUser_id(e.target.value)}>
                                <option>--Select--</option>
                                <option value="1">PJ Almeida</option>
                                <option value="2">Peter Almeida</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label class="label">Rating 1-5: </label>
                        <div class="tags has-addons">
                            <select type="text" className="form control" value={rating} onChange={e => setRating(e.target.value)}>
                            <option>--Select--</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-success">Add</button>
                </div>
            </form> 
        </>
     
    )

}
export default InputRating;