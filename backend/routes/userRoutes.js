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
const router = express.Router();

router.route("/").post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').delete(deletsUsers).get(getUsersById).put(updateUsers);



export default router;
