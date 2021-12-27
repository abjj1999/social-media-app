import User from '../models/user';
import { hashPassword, comparePassword } from '../helpers/auth';
export const register = async (req, res) => {
    //console.log('registered end point', req.body)
    const { name, email, password, secret } = req.body;
    // validation
    if(!name) return res.status(400).send('Name is required')
    if(!password || password.length < 6) return res.status(400).send('Password is required and should be 6 chars long')
    if(!secret) return res.status(400).send('Answer is required')
    const exist = await User.findOne({ email });
    if(exist) return res.status(400).send('Email is taken ')
    //hash the password

    const hashedPassword = await hashPassword(password);

    const user = new User({name, email, password: hashedPassword, secret});

    try {
        await user.save();
        console.log("user registered => ", user);
        return res.status(200).send('successfully added')
    } catch (error) {
        console.log('register failed',error)
        return res.status(400).send('error, try again')
    }
}