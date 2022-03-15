import dotenv from "dotenv"
dotenv.config()
import cloudinary from 'cloudinary'

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });
cloudinary.config({
    cloud_name: 'joescompany',
    api_key: '214596792229467',
    api_secret: 'Asb0WFHXD_d9X7aQjiDVMQRu7Vo',
});

export default cloudinary