import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import Cookies from 'js-cookie';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';



import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = 8080;

mongoose.connect(process.env.MONGO_PROD_URL)
    .then(() => console.log('connected db'));


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'password cannot be blank']
    },
    images: [
        {
            title: String,
            desc: String,
            url: String,
            views: Number
        },
    ]
})

const User = mongoose.model('User', UserSchema);

app.use(bodyParser.json());
app.use(cors());

let sessionId = '';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'Gallery',
      allowedFormats: ['jpeg', 'png', 'jpg']
    },
  });


app.get('/delete', async (req, res) => {
    try {
        await User.deleteMany({});
        res.sendStatus(200);
    } catch (error) {
        // console.error('An error occurred:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.post('/signUp', async (req, res) => {
    // console.log(req.body);


    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        password: hash
    })

    await user.save();
    res.sendStatus(200);
})

app.post('/signIn', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if(user === null) res.sendStatus(400);
    else {
        const validPassword = await bcrypt.compare(req.body.password, user.password);

    if(validPassword) {
        res.sendStatus(200);
    }
    else res.sendStatus(400);
    }
})

app.post('/checkUser', async (req, res) => {
    const checkUser = await User.findOne({ username: req.body.username });
    if(checkUser) res.sendStatus(404);
    else res.sendStatus(200);
})


app.get('/logOut', (req,res) => {
    Cookies.remove('username');
    res.sendStatus(200);
})

app.get('/users', async(req, res) => {
    const allUsers = await User.find({});
    res.send(allUsers);
})


const upload = multer({ storage })

let imageUrl = '';

app.post('/uploadImage', upload.single('imageFile'), async(req, res) => {
    imageUrl = req.file.path;
    console.log(req.file.path);
    res.sendStatus(200)
})

app.post('/uploadImageData', async(req, res) => {
    // console.log(req.body);
    const user = await User.findOne({ username: req.body.username });
    let initialCount = 0;
    user.images.push({
        title: req.body.formData.title,
        desc: req.body.formData.desc,
        url: imageUrl,
        views: initialCount
    })

    await user.save();

    res.sendStatus(200);
})

app.get('/imageData', async(req, res) => {
    const username = req.query.username;
    const user = await User.findOne({ username: username });
    console.log(user.images);
    res.json(user.images);
})

app.post('/updateImageViews', async (req, res) => {
    const username = req.query.username;
    const imageIndex = req.body.idx;
    const views = req.body.count;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (imageIndex < 0 || imageIndex >= user.images.length) {
            return res.status(400).json({ error: 'Invalid image index' });
        }

        user.images[imageIndex].views = views + 1;

        await user.save();

        console.log(`Updated views for image at index ${imageIndex}: ${user.images[imageIndex].views}`);
        res.sendStatus(200);
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





