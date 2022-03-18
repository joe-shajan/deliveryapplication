import Store from "../models/store-model.js";



const storeSignup = (req, res, next) => {
    let { firstname, lastname, storename, city, address, email, phoneno, password } = req.body

    let newStore = new Store({ firstname, lastname, storename, city, address, email, phoneno, password })


    newStore.save((err, newStore) => {
        if (err) {
            res.status(409).json(err)
        } else { 
            req.storeId = newStore._id
            console.log(req.storeId)
            next()
        }
    })
}


const getAllStores = async (req, res) => {
    console.log('in get all stor');
    const data = await Store.find();
    res.status(200).json(data)
}

const getStore = async (req, res) => {
    const store = await Store.findOne({_id:req.params.storeid})
    res.status(200).json(store)
}


const storeLogin = async (req, res) => {

    Store.findOne({ $or: [{ email: req.body.EmailOrPhone }, { phoneno: req.body.EmailOrPhone}] }, (err, data) => {
        if (err) {
            res.status(404).json({ message: 'user not found' })
        }
        if (data) {
            if (data.password == req.body.Password) {
                res.status(200).json(data)
            } else {
                res.status(403).json({ message: 'worng username or password' })
            }
        } else {
            console.log('user not found');
            res.status(404).json({ message: 'user not found' })
        }
    })

}

export {
    getAllStores,
    storeSignup,
    storeLogin,
    getStore
}

