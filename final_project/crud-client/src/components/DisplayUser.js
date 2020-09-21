import React, {Fragment,useState,useEffect} from 'react'
import SingleDeed from './SingleDeed';

function AvailableDeeds() {
    const [deed, setDeed] = useState([]);
	const [deeds, setDeeds] = useState([]);

  
      async function getDeeds(){
          const response = await fetch("http://localhost:3440/deeds/status");
  
          const deedArray = await response.json();
          console.log(deedArray);
          setDeeds(deedArray);
      }
  
      useEffect(()=>{
          getDeeds();
      }, []);
    return (
        <Fragment>
       <div class="columns">
					<div class="column is-one-quarter">
						{/* card #1 start */}
                        {deeds.map(deed=>(
							
						<div class="card">
							<SingleDeed deed={deed}>Review</SingleDeed>
							<div class="card-image">
								<figure class="image is-4by3">
									<img
										// black lives matter image
										src="https://i.imgur.com/ROvf215.png"
										alt="Placeholder image"
									/>
								</figure>
							</div>
							<div class="card-content">
								<div class="media">
									<div class="media-left">
										{/* image avatar */}
										<figure >
											<img
												class="is-rounded"
												src="https://bulma.io/images/placeholders/96x96.png"
												alt="Placeholder image"
											/>
										</figure>
									</div>
									{/* user info */}
									<div class="media-content">
										<p class="title is-4">John Smith</p>
										<p class="subtitle is-6">@johnsmith</p>
									</div>
								</div>
								{/* interest tags areas */}
								<label class="label">{deed.title}</label>
								<div class="tags has-addons">
									<span class="tag is-black">{deed.category}</span>
								</div>
								{/* location */}
								<div class="content">
									<label class="label mb-0">Location: {deed.location}</label>
									<br />
									{/* summary
									<label class="label mb-0">Deed Summary</label>
									<div>{deed.description}</div>
									<br /> */}
                                    {/* status */}
									<label class="label mb-0">Status: {deed.status}</label>
									<br />
									{/* deed date */}
									{/* <label class="label mb-0">Deed Date</label> */}
									<time datetime="2016-1-1">
									Deed Date: {deed.date_created}
									</time>
									<br />
					
								</div>
							</div>
						</div>
                        ))}
					</div>
                </div>
        </Fragment>
    )
}

export default AvailableDeeds;
