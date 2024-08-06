const express = require("express");
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("tusul");
    const usersCollection = db.collection("users");
    const zarCollection = db.collection("zar");


    app.post('./unelgee', async (req,res ) => {
      try{
          const { type,typeName, } = req.body;
          const adResult = await zarCollection.insertOne({type,typeName});
          console.log("ad Registered successfully.", adResult.insertedId);
          res.status(200).send("Ad registered successfully!");
        }
      catch{
        console.error("Error registering user:", err);
        res.status(500).send("An error occurred while registering the ad.");
      }
    });

    app.post('/register', async (req, res) => {
      try {
        const { name, email, password } = req.body;
        const result = await usersCollection.insertOne({ name, email, password });
        console.log("User registered:", result.insertedId);
        res.status(200).send("User registered successfully!");
      } catch (err) {
        console.error("Error registering user:", err);
        res.status(500).send("An error occurred while registering the user.");
      }
    });

    app.post('/api/login', async (req, res) => {
      try {
        const { email, password } = req.body;
        const user = await usersCollection.findOne({ email, password });

        if (user) {
          res.status(200).send({ success: true, message: "Login successful" });
        } else {
          res.status(401).send({ success: false, message: "Invalid email or password" });
        }
      } catch (err) {
        console.error("Error during login:", err);
        res.status(500).send({ success: false, message: "An error occurred during login" });
      }
    });

  //   const multer = require('multer');
  //   const upload = multer({ dest: 'uploads/' });


  //   app.post("/upload-image", upload.single("image"), async (req, res) => {
  //     try {
  //         const image = new ImageDetails({
  //             image: req.file.path 
  //         });
  //         await image.save();
  //         res.send("Image uploaded successfully");
  //     } catch (error) {
  //         console.error("Error uploading image:", error);
  //         res.status(500).send("Internal Server Error");
  //     }
  // });

    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });

  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}

startServer();
