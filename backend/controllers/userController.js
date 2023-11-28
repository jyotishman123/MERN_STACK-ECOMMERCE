import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";




// @desc Auth user & get token
// @route POST /api/users/login
// @acces Public


const authUser = asyncHandler(async (req,res)=>{
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


