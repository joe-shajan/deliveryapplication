import mongoose from 'mongoose'


const storeSchema = new mongoose.Schema({

  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  storename: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneno: { type: String, required: true },
  password: { type: String, required: true },
  logo: { type: String }

})

const Store = mongoose.model('Store', storeSchema);
export default Store;