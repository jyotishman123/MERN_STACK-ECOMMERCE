import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";




// @desc Auth user & get token
// @route POST /api/users/login
// @acces Public


const authUser = asyncHandler(async (req,res)=>{
    const {email, password} = req.body;
    
    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){

     generateToken(res, user._id)

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
    const { name, email, password } = req.body;
    
    const userExit = await User.findOne({email});

    if(userExit){
        res.status(400);
        throw new Error('User already exits')
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {

        generateToken(res, user._id)

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }

})

// @desc   Logout user / clear cookie
// @route POST /api/users/logout
// @acces Private

const logoutUser = asyncHandler(async (req,res)=>{
    res.cookie('jwt','', {
        httpOnly:true,
        expires: new Date(0),
    })
    res.status(200).json({message: 'Logged out successfully'})
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


