const express = require("express");
const fileUpload = require('express-fileupload');

const app = express();
const cors = require("cors");
const pool = require("./db");


//middware;
app.use(cors());
app.use(express.json()); //allows to access request.body
app.use(fileUpload());

// //image upload endpoint
// app.post('/upload/:event_id', async (req,res)=>{
//   if(req.files === null) {
//       return res.status(400).json({msg:'No file uploaded'})
//   }
//   const now = Date.now()
//   const file = req.files.file
//   console.log(req.body.postText,'234')
//   file.mv(`/home/petey8ea/goodDeeds/final_project/crud-client/public/images/${now}_${file.name}`, async err => {
//       console.log(err)
//       if(err){
//           return res.status(500).send(err)
//       }
//       await Post.addPost(`/images/${now}_${file.name}`,req.body.postText,req.user.username,req.params.event_id)
//       return res.json({ fileName: file.name, filePath: `/images/${file.name}`})
//   })
// })



//Routes

//all deeds
app.get("/deeds", async (req, res) => {
  try {
    const allDeeds = await pool.query("SELECT * FROM deeds");
    res.send(allDeeds.rows);
  } catch (err) {
    console.log(err.message);
  }
});


//all users
app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.send(allUsers.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//all average ratings
app.get("/ratings", async (req, res) => {
  try {
    const allRatings = await pool.query("SELECT u.name, trunc(AVG(r.rating),1) FROM users AS u JOIN ratings AS r on u.user_id=r.user_id group by u.name;");
    res.send(allRatings.rows);
  } catch (err) {
    console.log(err.message);
  }
});
//////////////////
//a deed
app.get("/deed/:id", async(req, res)=>{
  try {
    const {id} = req.params;
    const deed = await pool.query("SELECT * FROM deeds WHERE deeds_id =$1", [id])
    console.log(deed)
  } catch (err) {
    console.error(err.message)
  }
});
//deed with a specific status 
app.get("/deeds/status", async (req, res) => {
  try {
    const openDeeds = await pool.query("SELECT d.category, d.title, d.description, d.location, d.status, u.name, u.username FROM deeds AS d JOIN users AS u ON d.user_id=u.user_id AND d.status='open';");
    res.send(openDeeds.rows);
  } catch (err) {
    console.log(err.message);
  }
});



//a user
app.get("/user/:id", async(req, res)=>{
  try {
    const {id} = req.params;
    const deed = await pool.query("SELECT * FROM users WHERE user_id =$1", [id])
    console.log(user)
  } catch (err) {
    console.error(err.message)
  }
});
//////////////////
//create a deed
app.post("/deed", async (req,res)=>{
    try{
      
      const {title, description, category, location,status,picture } = req.body;
      const newDeed = await pool.query("INSERT INTO deeds (title, description, category, location,status,picture) VALUES ($1,$2,$3,$4,$5,$6) returning *", [title,description,category,location,status,picture]);
      res.json(newDeed.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
  })

//create a user
app.post("/user", async (req,res)=>{
  try{
    
    const {name, username, location, email, phone, short_bio, picture } = req.body;
    const newUser = await pool.query("INSERT INTO users (name, username, location, email, phone, short_bio, picture) VALUES ($1,$2,$3,$4, $5,$6, $7) returning *", [name, username, location, email, phone, short_bio, picture]);
    res.json(newUser.rows[0]);
  } catch (err) {
      console.error(err.message);
  }
})

//create a rating
app.post("/rating", async (req,res)=>{
  try{
    
    const {user_id, rating} = req.body;
    const newRating = await pool.query("INSERT INTO ratings (user_id, rating) VALUES ($1,$2) returning *", [user_id, rating]);
    res.json(newRating.rows[0]);
  } catch (err) {
      console.error(err.message);
  }
})

//////////////////
//edit a deed
app.put("/deed/:id", async (req, res)=>{
  try {
    const {id}= req.params;
    const {title, description, category, location,status } = req.body;
    const editDeed = await pool.query("UPDATE deeds SET (title, description, category, location,status, deeds_id) = ($1,$2,$3,$4,$5,$6) WHERE deeds_id = $6", [title, description, category, location,status, id]);
    res.json("Deed was updated.");
  } catch (err){
      console.error(err.message);
    }
  })

//edit a user
app.put("/user/:id", async (req, res)=>{
  try {
    const {id}= req.params;
    const {name, username, location, email, phone, short_bio, picture } = req.body;
    const editUser = await pool.query("UPDATE users SET (name, username, location, email, phone, short_bio, picture, user_id) = ($1,$2,$3,$4,$5,$6,$7,$8) WHERE user_id = $8", [name, username, location, email, phone, short_bio, picture, id]);
    res.json("User was updated.");
  } catch (err){
      console.error(err.message);
    }
  })

//////////////////
//delete a deed
app.delete("/deed/:id", async (req,res)=>{
  try{
    const {id} = req.params;
    const deleteDeed = await pool.query("DELETE FROM deeds WHERE deeds_id = $1", [id]);
    res.json("Deed was deleted.")
  } catch (err) {
    console.error(err.messsage);
  }
})

//delete a user
app.delete("/user/:id", async (req,res)=>{
  try{
    const {id} = req.params;
    const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1", [id]);
    res.json("User was deleted.")
  } catch (err) {
    console.error(err.messsage);
  }
})


//////////////////
app.listen(3440, () => {
    console.log("Server is listening on port 3440")
})