import express from "express";
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deletsUsers,
    getUsersById,
    updateUsers
} from "../controllers/userController.js";

import { protect, admin } from "../middleware/authMiddleware.js";



const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/auth', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deletsUsers).get(protect, admin, getUsersById).put(protect, admin, updateUsers);



export default router;
