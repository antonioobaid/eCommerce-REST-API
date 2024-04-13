import bcrypt from 'bcryptjs';
import User from "../models/userModel.js";
import AsyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";


 export const Register = AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("Missing required fields");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    const salt = await bcrypt.genSalt(15);
    const hashed = await bcrypt.hash(password, salt);

    const user = await User.create({
        email,
        passwordHash: hashed
    });

    const token = generateToken(user);

    res.status(201).json({
        message : "User created successfully",
        token
      })

    console.log(user);
});




 export const login = AsyncHandler(async(req, res) => {
  const { email, password } = req.body

  if(!email || !password) {
    res.status(400)
    throw new Error('You need to enter all the fields')
  }

  const user = await User.findOne({ email })

  if(!user) {
    res.status(401)
    throw new Error('Incorrect credentials')
  }

  const result = await bcrypt.compare(password, user.passwordHash)
  

  if(!result) {
    res.status(401)
    throw new Error('Incorrect credentials')
  }

  res.status(200).json({
    message: "Login successful",
    token: generateToken(user)
  })

  console.log(user);
 })
