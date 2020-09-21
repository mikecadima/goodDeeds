import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom'
//import FileUpload from './FileUpload';

const InputDeed = ({onDeedAdded}) =>{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
	const [status, setStatus] = useState("");
	const [picture, setPicture] = useState("");
    //const [completed, setCompleted] = useState(false);



    // console.log(title)
    // console.log(description)

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
          const body = {title, description, category, location, status,picture };  
          const response = await fetch("http://localhost:3440/deed", {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify(body)
          });
          let results = await response.json();
          console.log(results);
          onDeedAdded(results);
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <Fragment>
            {/* <h1 className="text-center my-5">Input Deeds</h1>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <div>
                    <div>
                    <label>Choose a Category</label>              
                    <select type="text" className="form control" value={category} onChange={e => setCategory(e.target.value)}>
                        <option>--Select--</option>
                        <option>BLM</option>
                        <option>Seniors</option>
                        <option>LGBTQ</option>
                    </select>
                    </div>
                    <input type="text" className="form-control" value={status} readOnly="readonly"></input>
                    <input type="text" placeholder="add title - 25 chars" className="form-control" value={title} onChange={e=>setTitle(e.target.value)}></input>
                    <input type="text" placeholder="add description" className="form-control" value={description} onChange={e=>setDescription(e.target.value)}></input>
                    <input type="text" placeholder="add location" className="form-control" value={location} onChange={e=>setLocation(e.target.value)}></input>
                    <button className="btn btn-success">Add</button>
                </div>
            </form> */}
            <br></br>
            <hr></hr>
            <h1 className="text-center my-5">Input Deeds</h1>
            <form onSubmit={onSubmitForm}>
            <section>
				<div class="container">
					<section class="section">
						<div class="container">
							{/* button : save & continue */}
							<button class="button is-light is-pulled-right">
								Save & Continue
							</button>
							<h2>Select Picture</h2>
							<div include="form-input-select()">
							<select type="text" className="form control" value={picture} onChange={e => setPicture(e.target.value)}>
                                    <option>--Select--</option>
                                    <option value="https://i.imgur.com/ROvf215.png">BLM</option>
                                    <option value="https://i.imgur.com/TOHpmYW.png">Seniors</option>
                                    <option value="https://i.imgur.com/AAgWHo0.png">LGBTQ</option>
                                    </select>
							</div>
							{/* screen title */}
							<h1 class="title is-size-1">Created goodDeed</h1>
						</div>
						<div>
								{/* avatar */}
							<section>
								<div class="container">
									<article class="media">
										<figure class="media-left">
											<p class="image is-48x48">
												<img
													class="is-rounded"
													src="https://bulma.io/images/placeholders/128x128.png"
												/>
											</p>
									
										</figure>
										
										{/* user info */}
										<div class="media-content">
											<div class="content">
												<p>
													<strong>John Smith</strong> <br />
													<small>@johnsmith</small>{" "}
													<span class="tag is-success is-normal">Rating</span>{" "}
													<small>100%</small>
												</p>
											</div>
										</div>
									</article>
								</div>
							</section>
						</div>
					</section>
				</div>
			</section>
			
		
				<section class="section ml-2">
					<div class="container">
						<div class="columns">
							<div class="column">
								{/* full name */}
								<div class="field">
                                <label class="label">Status</label>
								    <div class="tags has-addons">
                                    <select type="text" className="form control" value={status} onChange={e => setStatus(e.target.value)}>
                                    <option>--Select--</option>
                                    <option>open</option>
                                    <option>accepted</option>
                                    <option>close</option>
                                    </select>
                                    </div>
									<label class="label">GoodDeed Title</label>
									<div class="control">
										<input class="input" type="text" placeholder="enter Title" value={title} onChange={e=>setTitle(e.target.value)}/>
									</div>
								</div>
								{/* username */}
								{/* <div class="field">
									<label class="label">Date & Start Time</label>
									<div class="control">
										<input
											class="input"
											type="email"
											placeholder="enter date & start time"
										/>
									</div>
								</div> */}
								{/* email */}
								{/* <div class="field">
									<label class="label">Date & End time</label>
									<div class="control">
										<input
											class="input"
											type="email"
											placeholder="enter date & end time"
										/>
									</div>
								</div> */}
								{/* Location */}
								<div class="field">
									<label class="label">City & State</label>
									<div class="control">
										<input
											class="input"
											type="text"
											placeholder="enter Location" value={location} onChange={e=>setLocation(e.target.value)}
										/>
									</div>
								</div>
								{/* Interest areas */}
								<label class="label">Categories</label>
								    <div class="tags has-addons">
                                    <select type="text" className="form control" value={category} onChange={e => setCategory(e.target.value)}>
                                    <option>--Select--</option>
                                    <option>BLM</option>
                                    <option>Seniors</option>
                                    <option>LGBTQ</option>
                                    </select>
                                    </div>
							</div>
							<div class="column">
								{/* phone number */}
								{/* <div class="field">
									<label class="label">Email</label>
									<div class="control">
										<input
											class="input"
											type="text"
											placeholder="enter email"
										/>
									</div>
								</div>
								{/* location */}
								{/* <div class="field">
									<label class="label">Phone Number</label>
									<div class="control">
										<input
											class="input"
											type="text"
											placeholder="enter phone #"
										/>
									</div>
								</div> */} 
								{/* short bio */}
								<label class="label">Deed Description</label>
							    <input type="text" placeholder="add description" className="form-control" value={description} onChange={e=>setDescription(e.target.value)}></input>
                             
							</div>
						</div>
					</div>
				</section>
                </form>
        </Fragment>
    )
}

export default InputDeed;