import { Router } from "express";
import { getUsers, deleteUser } from "../controllers/userController";

const router =Router();

router.route('/:orgId').get(getUsers).delete(deleteUser)

export default router;