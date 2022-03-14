import Usermodel from "../models/user-models.js";


const signup = (req, res) => {
    const { username, email, phoneno, password } = req.body
    const userModel = new Usermodel({ username, email, phoneno, password })
    userModel.save((err, data) => {
        if (err) {
            res.status(409).json({ message: 'user already exists' })
        } else {

            res.status(200).json(data)
        }

    })
}
const signin = (req, res) => {
    const { email, password } = req.body
    Usermodel.findOne({email:email,password:password},(err, data) => {
        if (err) {
            console.log(err);
            res.status(409).json({ message: 'some thing went wrong' })
        } 
        if(data){
            res.status(200).json(data)
        }else{
            res.status(401).json({ message: 'Incorrect Email or Password' })

        }

    })
}

export {
    signup, signin
}