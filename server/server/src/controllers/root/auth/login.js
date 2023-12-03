import bcyrpt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../../model/user";
import config from "../../../config";
import { parseMessage } from "../../../utils/helper";


const login = async (req, res ) => {
    try {
        const { username, password } = req.body;

        //find user using email        
        const user = await User.findOne({ where: { username }});

        //if no user give unauthorized
        if (user === null){
            res.status(401).json({ message: "Unauthorized"});
            return;
        }

        const isMatch = await bcyrpt.compare(password, user.password);

        const token = jwt.sign({ id: user.id, role: user.role }, config.jwtSecret);

        if (isMatch){
            res
            .status(200)
            .json({ message: "Login successful",  token: token });
            return
        } else {
            res.status(401).json(parseMessage("Wrong password or username"));
            return;
        }
        
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error});
        console.log(error)
        return;
    }
};

export default login;