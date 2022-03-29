import Store from '../models/store-model.js';
import cloudinary from '../utils/cloudinary.js'

const uploadLogo=async (req,res)=>{
    let { logo } = req.body
    const {url} = await cloudinary.uploader.upload(logo);

    const doc = await Store.findOne({ _id: req.storeId });
    doc.logo = url
  
    await doc.save()
    res.status(200).json({ msg: 'store added successfully',id:req.storeId });
}

export{
    uploadLogo
}
