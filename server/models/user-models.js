import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({

  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneno: { type: Number, required: true },
  password: { type: String, required: true },

})

const Usermodel = mongoose.model('User', userSchema);
export default Usermodel;