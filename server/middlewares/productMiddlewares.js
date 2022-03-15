
import Products from '../models/product-models.js';
import cloudinary from '../utils/cloudinary.js'



const uploadProductImage = async (req, res) => {
    let { image1, image2, image3 } = req.body
    const uploadResponse1 = await cloudinary.uploader.upload(image1);
    const uploadResponse2 = await cloudinary.uploader.upload(image2);
    const uploadResponse3 = await cloudinary.uploader.upload(image3);


    //updating image in database
    const doc = await Products.findOne({ _id: req.productId });
    doc.image1 = uploadResponse1.url
    doc.image2 = uploadResponse2.url
    doc.image3 = uploadResponse3.url
    await doc.save()
    res.status(200).json({ msg: 'product added successfully' });
}

export {
    uploadProductImage
}