import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'




// @desc Auth user & get token
// @route POST /api/users/login
// @acces Public


const authUser = asyncHandler(async (req,res)=>{
    const {email, password} = req.body;
    
    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET,{
        expiresIn: '30d',
    });

    // Set JwT as HTTP-Only Cookie;

    res.cookie('jwt',token,{
        httpOnly:true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    })

        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        }) 
    } else {
        res.status(401)
        throw new Error("Invalid email or password")
    }

    res.send('auth user')
})


// @desc  Register
// @route POST /api/users
// @acces Public

const registerUser = asyncHandler(async (req,res)=>{
    res.send('register user')
})

// @desc   Logout user / clear cookie
// @route POST /api/users/logout
// @acces Private

const logoutUser = asyncHandler(async (req,res)=>{
    res.send('logout user')
})
  
// @desc  Get User Profile
// @route POST /api/users/profile
// @acces Public

const getUserProfile = asyncHandler(async (req,res)=>{
    res.send('get user profile')
})

// @desc  Update User Profile
// @route PUT /api/users/profile
// @acces Private

const updateUserProfile = asyncHandler(async (req,res)=>{
    res.send('update user profile')
})

// @desc  Get users
// @route GET /api/users/profile
// @acces Private/admin

const getUsers = asyncHandler(async (req,res)=>{
    res.send('get user')
})

// @desc  Get users by ID
// @route GET /api/users/id
// @acces Private/admin

const getUsersById = asyncHandler(async (req,res)=>{
    res.send('get user by id')
})

// @desc  Delete users
// @route Delete /api/users/profile/:id
// @acces Private/admin

const deletsUsers = asyncHandler(async (req,res)=>{
    res.send('delete user')
})

// @desc  Update user
// @route put /api/users/:id
// @acces Private/admin

const  updateUsers = asyncHandler(async (req,res)=>{
    res.send('update user')
})


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deletsUsers,
    getUsersById,
    updateUsers
}


