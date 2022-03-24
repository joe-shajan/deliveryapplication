
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


const edituploadProductImage = async (req, res) => {
    
    const { storeid, productid } = req.params;
    let { image1, image2, image3 } = req.body
    console.log(image1, image2, image3);
    const doc = await Products.findOne({ _id:productid });

    if(image1){

        const uploadResponse1 = await cloudinary.uploader.upload(image1);
        doc.image1 = uploadResponse1.url
    }
    if(image2){

        const uploadResponse2 = await cloudinary.uploader.upload(image2);
        doc.image2 = uploadResponse2.url
    }
    if(image3){

        const uploadResponse3 = await cloudinary.uploader.upload(image3);
        doc.image3 = uploadResponse3.url
    }

    await doc.save()
    res.status(200).json({ message: 'product updated successfully' });
}

export {
    uploadProductImage,
    edituploadProductImage
}