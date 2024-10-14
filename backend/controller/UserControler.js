import UserModel from '../models/UserModel.js'
import bcrypt from 'bcrypt'
//get users
export const getUser = async (req, res) => {
    try {
        const user = await UserModel.find({});
        return res.status(200).json({ Users: user.length, success: true, message: "All Users", user })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false, message: `ERROR`, err
        })
    }
}


export const register = async (req, res) => {
    try {
        const { Uname, Uemail, Upass } = req.body;//assign data
        if (!Uname || !Uemail || !Upass) {
            return res.status(400).json({
                success: false, message: `fill all details`
            })
        }//all data check
        const existince = await UserModel.findOne({ Uemail })
        if (existince) {
            return res.status(400).json({
                success: false, message: `User already exist`,
            })
        }//existence data
        const hashedPass = await bcrypt.hash(Upass, 10);//hashpassword
        const user = new UserModel({ Uname, Uemail, Upass: hashedPass });
        await user.save();
        return res.status(201).json({
            success: true, message: "user created", user
        });//ccreated

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false, message: `ERROR`, err
        })
    }
}


export const login = async (req, res) => {
    try {
        const { Uemail, Upass } = req.body;//assign data
        if (!Uemail || !Upass) {
            return res.status(400).json({
                success: false, message: `fill all details`
            })
        }
        const user = await UserModel.findOne({ Uemail })
        if (!user) {
            return res.status(200).json({
                success: false, message: `User not found`
            })
        }

        const issmatch = await bcrypt.compare(Upass, user.Upass);
        if (!issmatch) {
            return res.status(401).json({
                success: false, message: `password not matched`
            })
        }
        return res.status(201).json({
            success: true, message: "login successfully", user
        });

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false, message: `ERROR`, err
        })
    }
}
