const express = require('express')
const app = express();
const bodyparser = require('body-parser')

const {register} = require('../controllers/register');
const {login} = require('../controllers/login');
const {createPost} = require('../controllers/createPost');
const {getPost} = require('../controllers/getPost')
const {deletePost} = require('../controllers/deletePost');
const { editPost } = require('../controllers/editPost');
const{getAll} = require('../controllers/getAll')

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const dotenv = require('dotenv');

dotenv.config();

//const app = express();

cloudinary.config({
    cloud_name: 'djom624z4',
    api_key: '833532154517424',
    api_secret: 'NvwXCL47oFXp63hn3gxEbL5H0fw',
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "DEV",
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  return res.json({ message: "Hello World 🇵🇹 🙌" });
});

app.post("/newUpload", upload.single("image"), async (req, res) => {
  return res.json({ image: req.file.path });
});



app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());



app.post('/register',register)
app.post('/login',login)
app.post('/createPost',createPost)
app.get('/getPost/:id',getPost)
app.post('/deletePost',deletePost)
app.put('/editPost',editPost)
app.get('/getAll',getAll)



module.exports = app