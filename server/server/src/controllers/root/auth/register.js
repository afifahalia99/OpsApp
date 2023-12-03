import bcrypt from "bcryptjs"
import User from "../../../model/user";
import { parseMessage } from "../../../utils/helper";


const Register = async (req, res) => {
    const {email, username, password, role} =req.body;

    try {
        const salt = bcrypt.genSaltSync(10);
        const hashedValue = bcrypt.hashSync(password, salt);
        const user= await User.create({email, username, password:  hashedValue,  role});
        res.status(201).json(parseMessage("New User Created", user));
    } catch (error){
        res.status(400).send(error);
    }
};

export default Register;