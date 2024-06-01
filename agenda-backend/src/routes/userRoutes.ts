import { Router } from "express";
import { getAvalibleNumber } from "../controllers/phoneController";
import { createUser, getUserById, updateUser } from "../controllers/userController";
;

const router =Router();

router.route('/').get(getAvalibleNumber).post(createUser)
router.route('/editUser/:userId').get(getUserById).patch(updateUser)

export default router;