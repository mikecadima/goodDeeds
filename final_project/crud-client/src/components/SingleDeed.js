import React, { Fragment, useState } from "react";
import Mini_Profile2 from "../components/Mini_Profile2";

const SingleDeed=({deed})=> {
    const [title, setTitle] = useState(deed.title);
    const [description, setDescription] = useState(deed.description);
    const [category, setCategory] = useState(deed.category);
    const [location, setLocation] = useState(deed.location);
    const [status, setStatus] = useState(deed.status);
    const singleDeed = async (id)=>{
        try{
         
                const body = { title, description, category, location,status };
                
                const response = await fetch(`http://localhost:3440/deed/${id}`,{
                    method: "GET",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });
                window.location.reload();
            } catch (err){
                console.error(err.message);
            

        }

    }
	return (
		<section>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id_view${deed.deeds_id}`}>
            Review
            </button>
			<div className="modal" id={`id_view${deed.deeds_id}`}>
				<div class="modal-dialog">
					<div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Reviewing Deed</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
						{/* button : save & continue */}
						<button class="button is-success is-pulled-right">
							<div>Deed Status: {deed.status}</div>
						</button>
						<div>
							<span class="tag is-light">{deed.location}</span>
						</div>
						{/* screen title */}
						<h1 class="title is-size-1">{deed.title}</h1>
					</div>
					<div>
						<section>
							{/* avatar */}
							<div class="container">
								<article class="media is-pulled-right">
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
										<div class="content is-pulled-right">
											<p>
												<strong>John Smith</strong> <br />
												<small>@johnsmith</small>{" "}
												<span class="tag is-success is-normal">Rating</span>{" "}
												<small>100%</small>
												<br />
                                                <div>
												<label class="label mt-2">Location: </label>
                                                </div>
                                                <div>
												<span>Brookhaven, GA</span>{" "}
                                                </div>
                                                <div>
												<label class="label mt-2">Community: </label>
                                                </div>
                                                <div>
												<span class="tag is-warning is-normal">
													{deed.category}
												</span>{" "}
                                                </div>
											</p>
										</div>
									</div>
								</article>
							</div>
						</section>
						{/* goodDeed Date & Time Info  */}
						<section class="mt-6">
							<nav class="level">
								<div class="level-item has-text-centered">
									<div>
										<p class="heading">Date Created</p>
										<p class="title">{deed.date_created}</p>
									</div>
								</div>
								<div class="level-item has-text-centered">
									<div>
										<p class="heading">Date</p>
										<p class="title">Oct 5, 2020</p>
									</div>
								</div>
								<div class="level-item has-text-centered">
									<div>
										<p class="heading">Start Time</p>
										<p class="title">1:30 pm</p>
									</div>
								</div>
								<div class="level-item has-text-centered">
									<div>
										<p class="heading">End Time</p>
										<p class="title">2:30pm</p>
									</div>
								</div>
							</nav>
						</section>
						{/* Deed Summary & Things You Know Section */}
						<section>
							<div class="columns mt-6">
								<div class="column">
									<section>
										<h1 class="title">Summary</h1>
										<h2 class="subtitle">
											{deed.description}
										</h2>
									</section>
								</div>
								<div class="column">
									{/* <section>
										<h1 class="title">Things You Should Know</h1>
										<h2 class="subtitle">
											This portion is a summary of the goodDeed being viewed.
										</h2>
									</section> */}
                                    <div class="modal-footer">
                                    {/* <button type="button" class="btn btn-success" data-dismiss="modal" onClick={()=> singleDeed(deed.deeds_id)}>Edit</button> */}
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>
								</div>
							</div>
                        </section>
                        {/* Assigned & Backup GoodDeed'r */}
						<section class="section">
							<div class="container">
								<div class="columns">
									<div class="column">
										<h1 class="title mt-6">Assigned goodDeed'r</h1>
										<Mini_Profile2 />
									</div>
									<div class="column">
										{/* <h1 class="title mt-6">Backup goodDeed'r</h1> */}
										{/* <Mini_Profile2 /> */}
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SingleDeed;